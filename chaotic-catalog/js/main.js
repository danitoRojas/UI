// --- CONTROLADOR PRINCIPAL Y NAVEGACIÓN ---

// Inyectar contenido HTML de diapositivas en los marcadores de posición
document.getElementById('cover-slide').innerHTML = slide0Content;
document.getElementById('dilemma-slide').innerHTML = slide1Content;
document.getElementById('type-slide-1').innerHTML = slide2Content;
document.getElementById('type-slide-2').innerHTML = slide3Content;
document.getElementById('type-slide-3').innerHTML = slide4Content;
document.getElementById('type-slide-4').innerHTML = slide5Content;

// Selección rápida de Slide 7
function selectLibrary(libName) {
    selectedLibraryName = libName;
    
    if (currentSlide !== 7) {
        setSlide(7);
    }

    const data = libraryDetails[libName];
    if (!data) return;

    document.getElementById('inspector-placeholder').classList.add('hidden');
    const inspectorContent = document.getElementById('inspector-content');
    inspectorContent.classList.remove('hidden');
    inspectorContent.classList.add('fade-in');

    document.getElementById('inspector-name').innerText = data.name;
    document.getElementById('inspector-link').href = data.url || '#';
    document.getElementById('inspector-btn-url').href = data.url || '#';
    
    const badgeType = document.getElementById('inspector-type');
    badgeType.innerText = data.type;
    badgeType.style.borderColor = data.color + '40';
    badgeType.style.color = data.color === '#0f172a' ? '#334155' : data.color;

    document.getElementById('inspector-desc').innerText = data.bestFor;

    // Pros
    const prosList = document.getElementById('inspector-pros');
    prosList.innerHTML = '';
    data.pros.forEach(pro => {
        const li = document.createElement('li');
        li.innerText = pro;
        prosList.appendChild(li);
    });

    // Contras
    const consList = document.getElementById('inspector-cons');
    consList.innerHTML = '';
    data.cons.forEach(con => {
        const li = document.createElement('li');
        li.innerText = con;
        consList.appendChild(li);
    });

    // Logotipo en miniatura del inspector
    const logCanvas = document.getElementById('inspector-logo-canvas');
    const lctx = logCanvas.getContext('2d');
    lctx.clearRect(0, 0, 24, 24);
    
    const img = logoImages[libName];
    if (img && img.complete && img.naturalWidth > 0) {
        lctx.drawImage(img, 3, 3, 18, 18);
    } else if (logoDrawers[libName]) {
        logoDrawers[libName](lctx, 12, 12, 18);
    }
}

// Crear accesos rápidos del inspector
function createQuickLinks() {
    const container = document.getElementById('quick-links');
    container.innerHTML = '';
    libraryList.forEach(libName => {
        const btn = document.createElement('button');
        btn.className = 'quick-btn px-2 py-1 text-[11px] font-medium border border-slate-200 text-slate-500 rounded hover:text-slate-800 hover:border-slate-400 transition-colors active:scale-95';
        btn.innerText = libName;
        btn.addEventListener('click', () => selectLibrary(libName));
        container.appendChild(btn);
    });
}
createQuickLinks();

// --- CONTROLADOR DE SLIDES ---
function setSlide(index) {
    currentSlide = index;
    const slide = slides[index];

    // Control de textos del Header
    const titleSection = document.getElementById('title-section');
    if (slide.title === "") {
        titleSection.style.opacity = "0";
    } else {
        titleSection.style.opacity = "1";
        document.getElementById('main-title').innerText = slide.title;
        document.getElementById('subtitle').innerText = slide.subtitle;
    }
    
    // Indicador de color
    const indicator = document.getElementById('slide-indicator');
    indicator.className = `w-2 h-7 rounded-full transition-colors duration-300 ${slide.indicatorColor}`;

    // Portada (Slide 0)
    const cover = document.getElementById('cover-slide');
    if (index === 0) {
        cover.classList.remove('hidden');
        cover.classList.add('fade-in');
    } else {
        cover.classList.add('hidden');
    }

    // Dilema Front-end (Slide 1)
    const dilemma = document.getElementById('dilemma-slide');
    if (index === 1) {
        dilemma.classList.remove('hidden');
        dilemma.classList.add('fade-in');
    } else {
        dilemma.classList.add('hidden');
    }

    // Baraja de Tipos (Slides 2, 3, 4, 5)
    const typesDeck = document.getElementById('widescreen-types-deck');
    document.getElementById('type-slide-1').classList.add('hidden');
    document.getElementById('type-slide-2').classList.add('hidden');
    document.getElementById('type-slide-3').classList.add('hidden');
    document.getElementById('type-slide-4').classList.add('hidden');

    const isTypeSlide = (index >= 2 && index <= 5);
    if (isTypeSlide) {
        typesDeck.classList.remove('hidden');
        typesDeck.classList.add('fade-in');
        if (index === 2) {
            document.getElementById('type-slide-1').classList.remove('hidden');
        } else if (index === 3) {
            document.getElementById('type-slide-2').classList.remove('hidden');
        } else if (index === 4) {
            document.getElementById('type-slide-3').classList.remove('hidden');
        } else if (index === 5) {
            document.getElementById('type-slide-4').classList.remove('hidden');
        }
    } else {
        typesDeck.classList.add('hidden');
    }

    // Físicas y controles
    const uiControls = document.getElementById('ui-controls');
    const isPhysicsSlide = (index === 0 || index === 1 || index === 6 || index === 7);
    const showControls = (index === 1 || index === 6 || index === 7);

    if (showControls) {
        uiControls.style.opacity = "1";
        uiControls.style.pointerEvents = "auto";
    } else {
        uiControls.style.opacity = "0";
        uiControls.style.pointerEvents = "none";
    }

    if (!isPhysicsSlide) {
        clearLibraryBadges();
        updateCriteriaObstacles(false);
    } else {
        // Cargar badges de forma inteligente según la diapositiva
        const activeBadges = Composite.allBodies(world).filter(b => b.customData && !b.isStatic);
        
        if (index === 0) {
            // Portada: Pocas píldoras para mantener la elegancia
            clearLibraryBadges();
            dropLibraryBadges(8);
        } else if (index === 1) {
            // Caos total:
            // Si venimos de la portada y ya hay badges, tiramos más para el efecto de acumulación
            if (activeBadges.length > 0 && activeBadges.length <= 10) {
                dropLibraryBadges(25);
            } else if (activeBadges.length === 0) {
                // Si venimos de slides sin física, tiramos todo el paquete
                dropLibraryBadges(33);
            }
        } else if (index === 6 || index === 7) {
            if (activeBadges.length === 0) {
                dropLibraryBadges(28);
            }
        }
    }

    // Inspector (Slide 7)
    const inspector = document.getElementById('inspector-card');
    if (index === 7) {
        inspector.classList.remove('hidden');
        inspector.classList.add('fade-in');
    } else {
        inspector.classList.add('hidden');
        selectedLibraryName = null;
    }

    // Configurar comportamiento físico de la gravedad y obstáculos
    if (!isPhysicsSlide) {
        engine.gravity.y = 1;
    } else if (index === 0 || index === 1 || index === 7) {
        engine.gravity.y = 1;
        updateCriteriaObstacles(false);
    } else if (index === 6) {
        engine.gravity.y = 0;
        updateCriteriaObstacles(true);
        
        // Impulso flotante
        const allBodies = Composite.allBodies(world);
        allBodies.forEach(body => {
            if (!body.isStatic && !body.isSensor) {
                Matter.Body.setVelocity(body, {
                    x: (Math.random() - 0.5) * 4.5,
                    y: (Math.random() - 0.5) * 4.5
                });
            }
        });
    }

    // Deshabilitar botones de navegación en los extremos
    const btnPrev = document.getElementById('btn-prev');
    const btnNext = document.getElementById('btn-next');
    if (index === 0) {
        btnPrev.classList.add('opacity-40', 'pointer-events-none');
    } else {
        btnPrev.classList.remove('opacity-40', 'pointer-events-none');
    }
    if (index === 7) {
        btnNext.classList.add('opacity-40', 'pointer-events-none');
    } else {
        btnNext.classList.remove('opacity-40', 'pointer-events-none');
    }

    document.getElementById('slide-num').innerText = `${index + 1} / 8`;

    // Actualizar el suelo físico y ajustar la posición de las insignias según la diapositiva activa
    createWalls();
    adjustBadgesToFloor();
}

// Inicializar diapositiva 0 al cargar
setSlide(0);

// --- LISTENERS DE INTERACCIÓN ---

// Hover interactivo cursor en canvas
Events.on(engine, 'afterUpdate', function() {
    const allBodies = Composite.allBodies(world);
    const hovered = Matter.Query.point(allBodies, mouse.position);
    const hasLib = hovered.some(b => b.customData && !b.isStatic);
    document.getElementById('world-canvas').style.cursor = hasLib ? 'pointer' : 'default';
});

// Click/Drag/Press en píldora -> Mostrar detalles en inspector y abrir documentación
let mouseDownPos = { x: 0, y: 0 };
let mouseDownTime = 0;

Events.on(mouseConstraint, 'mousedown', function(event) {
    mouseDownPos = { x: event.mouse.position.x, y: event.mouse.position.y };
    mouseDownTime = Date.now();

    if (currentSlide !== 7) return;
    const clicked = Matter.Query.point(Composite.allBodies(world), event.mouse.position);
    const libBody = clicked.find(b => b.customData && !b.isStatic);
    if (libBody) {
        selectLibrary(libBody.customData.name);
        
        // Impulso físico
        Matter.Body.applyForce(libBody, libBody.position, {
            x: (Math.random() - 0.5) * 0.05,
            y: -0.15 * libBody.mass * 0.005
        });
    }
});

Events.on(mouseConstraint, 'mouseup', function(event) {
    const mouseUpPos = event.mouse.position;
    const dx = mouseUpPos.x - mouseDownPos.x;
    const dy = mouseUpPos.y - mouseDownPos.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    const timeElapsed = Date.now() - mouseDownTime;
    
    // Si se movió muy poco y fue rápido, es un click/tap intencional
    if (distance < 6 && timeElapsed < 300) {
        const clicked = Matter.Query.point(Composite.allBodies(world), mouseUpPos);
        const libBody = clicked.find(b => b.customData && !b.isStatic);
        if (libBody) {
            const data = libraryDetails[libBody.customData.name];
            if (data && data.url) {
                window.open(data.url, '_blank');
            }
        }
    }
});

// Botones de acción física inferiores
document.getElementById('btn-add').addEventListener('click', () => {
    dropLibraryBadges(15);
});

let gravityInverted = false;
document.getElementById('btn-explode').addEventListener('click', () => {
    const allBodies = Composite.allBodies(world);
    const btn = document.getElementById('btn-explode');
    
    if (!gravityInverted) {
        engine.gravity.y = -0.5;
        btn.innerHTML = '<i class="fa-solid fa-arrow-down"></i> Restaurar Gravedad';
        
        allBodies.forEach(body => {
            if (!body.isStatic) {
                Matter.Body.applyForce(body, body.position, {
                    x: (Math.random() - 0.5) * 0.05,
                    y: -0.05 - (Math.random() * 0.05)
                });
            }
        });
    } else {
        engine.gravity.y = (currentSlide === 6) ? 0 : 1;
        btn.innerHTML = '<i class="fa-solid fa-bomb"></i> Gravedad Cero';
    }
    
    gravityInverted = !gravityInverted;
});

// Botones de navegación de diapositivas
document.getElementById('btn-prev').addEventListener('click', () => {
    if (currentSlide > 0) setSlide(currentSlide - 1);
});

document.getElementById('btn-next').addEventListener('click', () => {
    if (currentSlide < 7) setSlide(currentSlide + 1);
});

// Teclado para navegar slides
window.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') {
        if (currentSlide < 7) setSlide(currentSlide + 1);
    } else if (e.key === 'ArrowLeft') {
        if (currentSlide > 0) setSlide(currentSlide - 1);
    }
});

// Actualizar paredes cuando se redimensiona la ventana
window.addEventListener('resize', () => {
    width = window.innerWidth;
    height = window.innerHeight;
    render.canvas.width = width;
    render.canvas.height = height;
    render.options.width = width;
    render.options.height = height;
    createWalls();
    
    if (currentSlide === 6 && criteriaBodies.length > 0) {
        updateCriteriaObstacles(false);
        updateCriteriaObstacles(true);
    }
});

// Evitar que el scroll interfiera en móviles si se toca el canvas directamente
document.getElementById('world-canvas').addEventListener('touchmove', function(e) {
    e.preventDefault();
}, { passive: false });

// --- LÓGICA DE INTERACCIÓN EN DIAPOSITIVAS (MOCKUPS) ---
// Slide 2: Headless dialog
const unstyledBtn = document.getElementById('unstyled-btn');
if (unstyledBtn) {
    unstyledBtn.addEventListener('click', () => {
        const modal = document.getElementById('unstyled-modal');
        if (modal) modal.classList.remove('hidden');
    });
}
const unstyledCloseBtn = document.getElementById('unstyled-close-btn');
if (unstyledCloseBtn) {
    unstyledCloseBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const modal = document.getElementById('unstyled-modal');
        if (modal) modal.classList.add('hidden');
    });
}

// Slide 3: MUI table save
const muiSaveBtn = document.getElementById('mui-save-btn');
if (muiSaveBtn) {
    muiSaveBtn.addEventListener('click', () => {
        const toast = document.getElementById('mui-toast');
        if (toast) {
            toast.style.opacity = '1';
            setTimeout(() => { toast.style.opacity = '0'; }, 2000);
        }
    });
}

// Slide 4: Shadcn customizable button
const shadcnBtn = document.getElementById('shadcn-btn');
if (shadcnBtn) {
    shadcnBtn.addEventListener('click', () => {
        const msg = document.getElementById('shadcn-msg');
        if (msg) {
            msg.style.opacity = '1';
            setTimeout(() => { msg.style.opacity = '0'; }, 2000);
        }
    });
}

// Slide 5: DaisyUI button
const daisyBtn = document.getElementById('daisy-btn');
if (daisyBtn) {
    daisyBtn.addEventListener('click', () => {
        const msg = document.getElementById('daisy-msg');
        if (msg) {
            msg.style.opacity = '1';
            setTimeout(() => { msg.style.opacity = '0'; }, 2000);
        }
    });
}
