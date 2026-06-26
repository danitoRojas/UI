// --- CONFIGURACIÓN DE FÍSICAS DE MATTER.JS ---
const Engine = Matter.Engine,
      Render = Matter.Render,
      Runner = Matter.Runner,
      Bodies = Matter.Bodies,
      Composite = Matter.Composite,
      Mouse = Matter.Mouse,
      MouseConstraint = Matter.MouseConstraint,
      Events = Matter.Events,
      Vector = Matter.Vector;

const engine = Engine.create();
const world = engine.world;
engine.gravity.y = 1;

let width = window.innerWidth;
let height = window.innerHeight;

// Configurar el renderizador en el world-canvas
const render = Render.create({
    element: document.getElementById('world-canvas'),
    engine: engine,
    options: {
        width: width,
        height: height,
        background: 'transparent',
        wireframes: false,
        pixelRatio: window.devicePixelRatio
    }
});

Render.run(render);
const runner = Runner.create();
Runner.run(runner, engine);

// Paredes físicas invisibles
let ground, leftWall, rightWall, ceiling;
const wallThickness = 60;

// --- AJUSTE DINÁMICO DEL SUELO PARA COMBATIR COLISIONES CON INTERFAZ (RESPONSIVE) ---
function getFloorOffset() {
    const isMobileTablet = width < 1024;
    if (isMobileTablet) {
        if (currentSlide === 7) {
            // Inspector de detalles ocupa ~38% de la pantalla abajo
            return height * 0.38 + 50;
        } else if (currentSlide === 1 || currentSlide === 6) {
            // Botones de acción física inferiores
            return 65;
        }
    } else {
        if (currentSlide === 1 || currentSlide === 6 || currentSlide === 7) {
            // Despejar botones de acción en desktop
            return 50;
        }
    }
    return 10;
}

function adjustBadgesToFloor() {
    const floorOffset = getFloorOffset();
    const allBodies = Composite.allBodies(world);
    allBodies.forEach(body => {
        if (body.customData && !body.isStatic) {
            const maxY = height - floorOffset - body.customData.height / 2;
            if (body.position.y > maxY) {
                Matter.Body.setPosition(body, { x: body.position.x, y: maxY - 10 });
                Matter.Body.setVelocity(body, { x: body.velocity.x, y: -1.5 }); // Suave impulso
            }
        }
    });
}

function createWalls() {
    if (ground) Composite.remove(world, [ground, leftWall, rightWall, ceiling]);

    const wallOptions = { 
        isStatic: true, 
        render: { fillStyle: 'transparent' }
    };

    const floorOffset = getFloorOffset();

    ground = Bodies.rectangle(width / 2, height + wallThickness / 2 - floorOffset, width + 200, wallThickness, wallOptions);
    ceiling = Bodies.rectangle(width / 2, -wallThickness * 5, width * 3, wallThickness, wallOptions);
    leftWall = Bodies.rectangle(-wallThickness / 2, height / 2, wallThickness, height * 3, wallOptions);
    rightWall = Bodies.rectangle(width + wallThickness / 2, height / 2, wallThickness, height * 3, wallOptions);

    Composite.add(world, [ground, leftWall, rightWall, ceiling]);
}
createWalls();

// --- CREACIÓN DE BADGES FÍSICOS (PÍLDORAS) ---
function getBadgeDimensions() {
    const isMobile = window.innerWidth < 768;
    return {
        w: isMobile ? 114 : 152,
        h: isMobile ? 28 : 38
    };
}

function createLibraryBadge(x, y, libName) {
    const lib = libraryDetails[libName];
    const { w, h } = getBadgeDimensions();
    
    const body = Bodies.rectangle(x, y, w, h, {
        chamfer: { radius: h / 2 },
        restitution: 0.45,
        friction: 0.1,
        density: 0.005,
        render: {
            visible: false // Renders dynamically below in render hook
        }
    });
    
    body.customData = {
        name: lib.name,
        group: (libName === 'shadcn/ui' || libName === 'DaisyUI' || libName === 'HeroUI' || libName === 'Tailwind UI' || libName === 'Flowbite') ? 'tailwind' :
               (libName === 'Radix UI' || libName === 'Ark / Park UI') ? 'headless' : 'styled',
        color: lib.color,
        width: w,
        height: h
    };

    return body;
}

let activeDropTimeouts = [];

function dropLibraryBadges(count = 28, staggered = true) {
    if (!staggered) {
        const newBodies = [];
        for (let i = 0; i < count; i++) {
            const libName = libraryList[i % libraryList.length];
            const x = Math.random() * (width - 180) + 90;
            const y = -100 - (Math.random() * 800);
            
            const body = createLibraryBadge(x, y, libName);
            Matter.Body.setAngularVelocity(body, (Math.random() - 0.5) * 0.12);
            newBodies.push(body);
        }
        Composite.add(world, newBodies);
        return;
    }

    // Lluvia staggered (escalonada y progresiva) para un efecto visual suave y premium
    let dropped = 0;
    const delayMs = 60;
    
    function dropNext() {
        if (dropped >= count) return;
        
        const batchSize = Math.min(2, count - dropped);
        const newBodies = [];
        
        for (let i = 0; i < batchSize; i++) {
            const libName = libraryList[(dropped + i) % libraryList.length];
            const x = Math.random() * (width - 180) + 90;
            const y = -50 - (Math.random() * 40);
            
            const body = createLibraryBadge(x, y, libName);
            Matter.Body.setVelocity(body, {
                x: (Math.random() - 0.5) * 1.5,
                y: Math.random() * 2 + 1
            });
            Matter.Body.setAngularVelocity(body, (Math.random() - 0.5) * 0.08);
            newBodies.push(body);
        }
        
        Composite.add(world, newBodies);
        dropped += batchSize;
        
        const tId = setTimeout(dropNext, delayMs);
        activeDropTimeouts.push(tId);
    }
    
    dropNext();
}

function clearLibraryBadges() {
    // Cancelar cualquier lluvia en progreso
    activeDropTimeouts.forEach(t => clearTimeout(t));
    activeDropTimeouts = [];

    const allBodies = Composite.allBodies(world);
    allBodies.forEach(body => {
        if (body.customData && !body.isStatic) {
            Composite.remove(world, body);
        }
    });
}

// --- OBSTÁCULOS PARA LA DIAPOSITIVA 6 (CRITERIOS) ---
let criteriaBodies = [];
function updateCriteriaObstacles(show) {
    if (show) {
        if (criteriaBodies.length === 0) {
            const isMobile = width < 768;
            const rad = isMobile ? 38 : 55;
            const options = {
                isStatic: true,
                render: { visible: false }
            };
            
            // Ajustar posiciones verticales en móvil para no colisionar con el header y los controles
            const y1 = isMobile ? height * 0.35 : height * 0.42;
            const y2 = isMobile ? height * 0.35 : height * 0.38;
            const y3 = isMobile ? height * 0.60 : height * 0.65;
            
            const o1 = Bodies.circle(width * 0.28, y1, rad, options);
            o1.customObstacle = { label: isMobile ? '♿ a11y' : '♿ ARIA a11y', color: '#6e56cf' };
            const o2 = Bodies.circle(width * 0.72, y2, rad, options);
            o2.customObstacle = { label: isMobile ? '📦 Size' : '📦 Bundle Size', color: '#FFB600' };
            const o3 = Bodies.circle(width * 0.5, y3, rad, options);
            o3.customObstacle = { label: isMobile ? '🛠️ DX' : '🛠️ Developer DX', color: '#FF4ECD' };
            
            criteriaBodies = [o1, o2, o3];
            Composite.add(world, criteriaBodies);
        }
    } else {
        if (criteriaBodies.length > 0) {
            Composite.remove(world, criteriaBodies);
            criteriaBodies = [];
        }
    }
}



// --- RENDERIZADO VISUAL EN CANVAS (afterRender) ---
Events.on(render, 'afterRender', function() {
    const context = render.context;
    const allBodies = Composite.allBodies(world);

    // 1. Dibujar obstáculos de Criterios (Slide 6)
    if (currentSlide === 6 && criteriaBodies.length > 0) {
        context.save();
        criteriaBodies.forEach(body => {
            if (!body.customObstacle) return;
            const { label, color } = body.customObstacle;
            const rad = body.circleRadius;
            const { x, y } = body.position;

            // Anillo exterior discontinuo
            context.strokeStyle = color;
            context.lineWidth = 1.2;
            context.setLineDash([4, 4]);
            context.beginPath();
            context.arc(x, y, rad + 4, 0, Math.PI * 2);
            context.stroke();
            context.setLineDash([]);

            // Relleno vidrio
            context.fillStyle = 'rgba(255, 255, 255, 0.9)';
            context.beginPath();
            context.arc(x, y, rad, 0, Math.PI * 2);
            context.fill();

            // Borde fino
            context.strokeStyle = 'rgba(148, 163, 184, 0.18)';
            context.lineWidth = 1;
            context.beginPath();
            context.arc(x, y, rad, 0, Math.PI * 2);
            context.stroke();

            // Texto centrado
            context.fillStyle = '#0f172a';
            const isMobile = width < 768;
            context.font = isMobile ? '700 9px "Inter", sans-serif' : '700 11px "Inter", sans-serif';
            context.textAlign = 'center';
            context.textBaseline = 'middle';
            context.fillText(label, x, y);
        });
        context.restore();
    }

    // 2. Dibujar píldoras de las librerías
    for (let i = 0; i < allBodies.length; i++) {
        const body = allBodies[i];

        if (body.customData && !body.isStatic) {
            const { name, color, width: w, height: h } = body.customData;
            
            context.save();
            context.translate(body.position.x, body.position.y);
            context.rotate(body.angle);

            const isSelected = (name === selectedLibraryName);

            // Fondo de la píldora (vidrio claro brillante) - Implementación compatible con todos los navegadores
            context.fillStyle = 'rgba(255, 255, 255, 0.95)';
            context.beginPath();
            const rx = -w/2;
            const ry = -h/2;
            const radius = h/2;
            context.moveTo(rx + radius, ry);
            context.lineTo(rx + w - radius, ry);
            context.arcTo(rx + w, ry, rx + w, ry + h, radius);
            context.lineTo(rx + w, ry + h - radius);
            context.arcTo(rx + w, ry + h, rx, ry + h, radius);
            context.lineTo(rx + radius, ry + h);
            context.arcTo(rx, ry + h, rx, ry, radius);
            context.lineTo(rx, ry + radius);
            context.arcTo(rx, ry, rx + w, ry, radius);
            context.closePath();
            context.fill();

            // Borde
            context.strokeStyle = isSelected ? '#0f172a' : color + 'bb';
            context.lineWidth = isSelected ? 2.5 : 1.2;
            
            if (isSelected) {
                context.shadowColor = 'rgba(15, 23, 42, 0.15)';
                context.shadowBlur = 10;
            }
            context.stroke();
            context.shadowBlur = 0;

            // Dibujar Logotipo (Simple Icons o fallback)
            const logoSize = h * 0.55;
            const logoX = -w/2 + h/2;
            const logoY = 0;

            const img = logoImages[name];
            if (img && img.complete && img.naturalWidth > 0) {
                context.drawImage(img, logoX - logoSize/2, logoY - logoSize/2, logoSize, logoSize);
            } else if (logoDrawers[name]) {
                logoDrawers[name](context, logoX, logoY, logoSize);
            }

            // Escribir Texto
            context.fillStyle = isSelected ? '#0f172a' : '#1e293b';
            const fSize = Math.max(9, Math.round(h * 0.29));
            context.font = isSelected ? `700 ${fSize}px "Inter", sans-serif` : `600 ${fSize}px "Inter", sans-serif`;
            context.textAlign = 'left';
            context.textBaseline = 'middle';
            context.fillText(name, -w/2 + h * 0.94, 0);

            context.restore();
        }
    }
});

// Control de ratón
const mouse = Mouse.create(render.canvas);
const mouseConstraint = MouseConstraint.create(engine, {
    mouse: mouse,
    constraint: {
        stiffness: 0.2,
        render: { visible: false }
    }
});

Composite.add(world, mouseConstraint);
render.mouse = mouse;

// Actualizar paredes cuando se redimensiona la ventana (Debounced y con Mouse re-mapeado)
let wasMobile = window.innerWidth < 768;
let resizeTimeout;

window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
        width = window.innerWidth;
        height = window.innerHeight;
        
        render.canvas.width = width;
        render.canvas.height = height;
        render.options.width = width;
        render.options.height = height;
        
        createWalls();
        
        // Re-mapear el elemento del ratón para corregir desalineamiento de clics
        if (mouse) {
            Mouse.setElement(mouse, render.canvas);
        }
        
        const isMobile = width < 768;
        if (isMobile !== wasMobile) {
            wasMobile = isMobile;
            const isPhysicsSlide = (currentSlide === 0 || currentSlide === 1 || currentSlide === 6 || currentSlide === 7);
            if (isPhysicsSlide) {
                clearLibraryBadges();
                if (currentSlide === 0) dropLibraryBadges(8);
                else if (currentSlide === 1) dropLibraryBadges(33);
                else if (currentSlide === 6 || currentSlide === 7) dropLibraryBadges(28);
            }
        } else {
            // Ajustar posiciones de píldoras existentes al nuevo piso dinámico
            const floorOffset = getFloorOffset();
            const allBodies = Composite.allBodies(world);
            allBodies.forEach(body => {
                if (body.customData && !body.isStatic) {
                    let newX = body.position.x;
                    if (newX < 60) newX = 60;
                    if (newX > width - 60) newX = width - 60;
                    
                    let newY = body.position.y;
                    const maxY = height - floorOffset - body.customData.height / 2;
                    if (newY > maxY) newY = maxY;
                    if (newY < 40) newY = 40;
                    
                    if (newX !== body.position.x || newY !== body.position.y) {
                        Matter.Body.setPosition(body, { x: newX, y: newY });
                        Matter.Body.setVelocity(body, { x: 0, y: 0 });
                    }
                }
            });
        }

        if (currentSlide === 6 && criteriaBodies.length > 0) {
            updateCriteriaObstacles(false);
            updateCriteriaObstacles(true);
        }
    }, 150); // Esperar 150ms después de que termine de redimensionar
});
