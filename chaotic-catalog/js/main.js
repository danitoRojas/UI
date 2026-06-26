// --- CONTROLADOR PRINCIPAL Y NAVEGACIÓN ---

// Inyectar contenido HTML de diapositivas en los marcadores de posición
document.getElementById('cover-slide').innerHTML = slide0Content;
document.getElementById('dilemma-slide').innerHTML = slide1Content;
document.getElementById('type-slide-1').innerHTML = slide2Content;
document.getElementById('type-slide-2').innerHTML = slide3Content;
document.getElementById('type-slide-3').innerHTML = slide4Content;
document.getElementById('type-slide-4').innerHTML = slide5Content;
document.getElementById('type-slide-5').innerHTML = slide6Content;
document.getElementById('type-slide-6').innerHTML = slide7Content;

function showPathPreview(option, output) {
    if (!output) return;
    if (option === 'A') {
        output.innerHTML = `
            <div class="h-full flex flex-col gap-3 p-5">

                <!-- Header limpio -->
                <div class="flex items-center gap-2 flex-shrink-0">
                    <i class="fa-solid fa-star text-amber-400 text-[11px]"></i>
                    <span class="text-xs font-bold text-slate-700 tracking-tight">Stack tecnológico — El Artesano</span>
                    <span class="h-px flex-1 bg-slate-200"></span>
                    <span class="text-[10px] font-medium text-slate-400 bg-white border border-slate-200 px-2 py-0.5 rounded-full">Ruta A</span>
                </div>

                <!-- 3 tarjetas del stack -->
                <div class="grid grid-cols-3 gap-2.5 flex-1 min-h-0">

                    <!-- Radix UI -->
                    <div class="rounded-2xl border border-[#6e56cf]/15 bg-white p-3 text-center flex flex-col items-center justify-center gap-2 shadow-sm">
                        <div class="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#6e56cf]/8 border border-[#6e56cf]/10">
                            <svg viewBox="0 0 24 24" class="w-6 h-6 text-[#6e56cf]" fill="currentColor">
                                <path d="M11.52 24a7.68 7.68 0 0 1-7.68-7.68 7.68 7.68 0 0 1 7.68-7.68V24Zm0-24v7.68H3.84V0h7.68Zm4.8 7.68a3.84 3.84 0 1 1 0-7.68 3.84 3.84 0 0 1 0 7.68Z"/>
                            </svg>
                        </div>
                        <div>
                            <p class="text-[9px] uppercase tracking-[0.25em] text-[#6e56cf] font-bold">Radix UI</p>
                            <p class="mt-1 text-slate-500 text-[10px] leading-snug">Headless + WAI-ARIA</p>
                        </div>
                    </div>

                    <!-- Tailwind CSS -->
                    <div class="rounded-2xl border border-sky-100 bg-white p-3 text-center flex flex-col items-center justify-center gap-2 shadow-sm">
                        <div class="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-50 border border-sky-100">
                            <svg viewBox="0 0 24 24" class="w-6 h-6 text-sky-500" fill="currentColor">
                                <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"/>
                            </svg>
                        </div>
                        <div>
                            <p class="text-[9px] uppercase tracking-[0.25em] text-sky-600 font-bold">Tailwind CSS</p>
                            <p class="mt-1 text-slate-500 text-[10px] leading-snug">Estilos utilitarios</p>
                        </div>
                    </div>

                    <!-- Storybook -->
                    <div class="rounded-2xl border border-[#FF4785]/15 bg-white p-3 text-center flex flex-col items-center justify-center gap-2 shadow-sm">
                        <div class="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FF4785]/5 border border-[#FF4785]/10">
                            <svg viewBox="0 0 24 24" class="w-6 h-6 text-[#FF4785]" fill="currentColor">
                                <path d="M16.71.243l-.12 2.71a.18.18 0 0 0 .29.15l1.06-.8.9.7a.18.18 0 0 0 .28-.14l-.1-2.76 1.33-.1a1.2 1.2 0 0 1 1.279 1.2v21.596a1.2 1.2 0 0 1-1.26 1.2l-16.096-.72a1.2 1.2 0 0 1-1.14-1.2V2.123a1.2 1.2 0 0 1 1.2-1.2l12.42-.56.1.08zM13.8 9.09c0 .48 3.23.25 3.67-.09 0-3.27-1.75-5-4.93-5-3.18 0-4.96 1.73-4.96 4.3 0 4.48 6.04 4.57 6.04 7.03 0 .71-.32 1.13-1.06 1.13-.96 0-1.35-.49-1.3-2.16 0-.36-3.76-.47-3.88 0-.26 4.17 2.3 5.38 5.21 5.38 2.83 0 5.01-1.51 5.01-4.24 0-4.8-6.16-4.89-6.16-7.07 0-.87.65-1 1.09-1 .48 0 1.29.1 1.27 1.72z"/>
                            </svg>
                        </div>
                        <div>
                            <p class="text-[9px] uppercase tracking-[0.25em] text-[#FF4785] font-bold">Storybook</p>
                            <p class="mt-1 text-slate-500 text-[10px] leading-snug">Docs de componentes</p>
                        </div>
                    </div>

                </div>

                <!-- Ventajas limpias -->
                <div class="rounded-2xl border border-emerald-100 bg-emerald-50 px-4 py-2.5 flex-shrink-0 flex items-center gap-3">
                    <div class="flex flex-wrap gap-x-5 gap-y-1">
                        <span class="text-xs text-emerald-700 flex items-center gap-1.5"><i class="fa-solid fa-check text-emerald-400 text-[9px]"></i>Identidad visual única</span>
                        <span class="text-xs text-emerald-700 flex items-center gap-1.5"><i class="fa-solid fa-check text-emerald-400 text-[9px]"></i>Accesibilidad WAI-ARIA nativa</span>
                        <span class="text-xs text-emerald-700 flex items-center gap-1.5"><i class="fa-solid fa-check text-emerald-400 text-[9px]"></i>Componentes documentados en Storybook</span>
                    </div>
                </div>

            </div>
        `;
    } else {
        output.innerHTML = `
            <div class="h-full flex flex-col gap-3 p-5">

                <!-- Header soso -->
                <div class="flex items-center gap-2 flex-shrink-0">
                    <span class="text-[10px] uppercase tracking-[0.3em] text-slate-400 font-medium">Opción B</span>
                    <span class="h-px flex-1 bg-slate-200/60"></span>
                    <span class="text-[10px] font-medium text-slate-500 bg-slate-100 border border-slate-200 px-2 py-0.5 rounded-full">El Híbrido</span>
                </div>

                <!-- Contenido principal: plano y funcional -->
                <div class="flex-1 min-h-0 rounded-2xl border border-slate-200 bg-slate-50/80 p-5 flex flex-col gap-4">
                    <div class="flex items-center gap-3">
                        <div class="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl bg-slate-200 text-slate-400">
                            <i class="fa-solid fa-layer-group text-sm"></i>
                        </div>
                        <div>
                            <h4 class="text-sm font-bold text-slate-600">shadcn/ui + Tailwind CSS</h4>
                            <p class="text-[11px] text-slate-400 mt-0.5">Una opción funcional para empezar con menos fricción inicial.</p>
                        </div>
                    </div>

                    <!-- Nota de limitaciones -->
                    <div class="rounded-xl border border-orange-200/60 bg-orange-50/60 p-3">
                        <p class="text-[10px] font-bold text-orange-600 uppercase tracking-wide mb-1.5 flex items-center gap-1.5">
                            <i class="fa-solid fa-triangle-exclamation text-[9px]"></i> Considera que...
                        </p>
                        <ul class="space-y-1">
                            <li class="text-[11px] text-slate-500 flex items-start gap-1.5"><span class="text-orange-400 mt-0.5">·</span>Los componentes son de terceros: actualizarlos es responsabilidad tuya.</li>
                            <li class="text-[11px] text-slate-500 flex items-start gap-1.5"><span class="text-orange-400 mt-0.5">·</span>El diseño base es de shadcn: diferenciarte requiere sobrescribir mucho.</li>
                            <li class="text-[11px] text-slate-500 flex items-start gap-1.5"><span class="text-orange-400 mt-0.5">·</span>Menor control sobre la accesibilidad a nivel primitivo.</li>
                        </ul>
                    </div>

                    <p class="text-[11px] text-slate-400 italic text-center">Válido para MVPs rápidos, menos ideal para productos diferenciados.</p>
                </div>

                <!-- Barra neutra -->
                <div class="rounded-2xl border border-slate-200 bg-slate-100 px-4 py-2.5 text-center flex-shrink-0">
                    <p class="text-xs text-slate-500">Funcional, pero sin la identidad que buscamos.</p>
                </div>

            </div>
        `;
    }
}

function setupPathButtons() {
    const btnA = document.getElementById('option-a-btn');
    const btnB = document.getElementById('option-b-btn');
    const output = document.getElementById('choice-output');
    if (!btnA || !btnB || !output) return;

    btnA.addEventListener('click', () => {
        btnA.classList.add('bg-slate-900', 'text-white', 'shadow-lg');
        btnB.classList.remove('bg-slate-950', 'text-white', 'shadow-lg');
        showPathPreview('A', output);
    });

    btnB.addEventListener('click', () => {
        btnB.classList.add('bg-slate-900', 'text-white', 'shadow-lg');
        btnA.classList.remove('bg-slate-950', 'text-white', 'shadow-lg');
        showPathPreview('B', output);
    });
}

document.addEventListener('DOMContentLoaded', setupPathButtons);

// Selección rápida de Slide 8 (inspector)
function selectLibrary(libName) {
    selectedLibraryName = libName;

    if (currentSlide !== 8) {
        setSlide(8);
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

    // Baraja de Tipos (Slides 2–7)
    const typesDeck = document.getElementById('widescreen-types-deck');
    document.getElementById('type-slide-1').classList.add('hidden');
    document.getElementById('type-slide-2').classList.add('hidden');
    document.getElementById('type-slide-3').classList.add('hidden');
    document.getElementById('type-slide-4').classList.add('hidden');
    document.getElementById('type-slide-5').classList.add('hidden');
    document.getElementById('type-slide-6').classList.add('hidden');

    const isTypeSlide = (index >= 2 && index <= 7);
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
        } else if (index === 6) {
            document.getElementById('type-slide-5').classList.remove('hidden');
        } else if (index === 7) {
            document.getElementById('type-slide-6').classList.remove('hidden');
        }
    } else {
        typesDeck.classList.add('hidden');
    }

    // Físicas y controles
    const uiControls = document.getElementById('ui-controls');
    const isPhysicsSlide = (index === 0 || index === 1 || index === 8);
    const showControls = (index === 1 || index === 8);

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
        } else if (index === 8) {
            if (activeBadges.length === 0) {
                dropLibraryBadges(28);
            }
        }
    }

    // Inspector (Slide 8)
    const inspector = document.getElementById('inspector-card');
    if (index === 8) {
        inspector.classList.remove('hidden');
        inspector.classList.add('fade-in');
    } else {
        inspector.classList.add('hidden');
        selectedLibraryName = null;
    }

    // Configurar comportamiento físico de la gravedad y obstáculos
    if (!isPhysicsSlide) {
        engine.gravity.y = 1;
    } else if (index === 0 || index === 1 || index === 8) {
        engine.gravity.y = 1;
        updateCriteriaObstacles(false);
    }

    // Deshabilitar botones de navegación en los extremos
    const btnPrev = document.getElementById('btn-prev');
    const btnNext = document.getElementById('btn-next');
    if (index === 0) {
        btnPrev.classList.add('opacity-40', 'pointer-events-none');
    } else {
        btnPrev.classList.remove('opacity-40', 'pointer-events-none');
    }
    if (index === 8) {
        btnNext.classList.add('opacity-40', 'pointer-events-none');
    } else {
        btnNext.classList.remove('opacity-40', 'pointer-events-none');
    }

    document.getElementById('slide-num').innerText = `${index + 1} / 9`;

    // Actualizar el suelo físico y ajustar la posición de las insignias según la diapositiva activa
    createWalls();
    adjustBadgesToFloor();
}

// Inicializar diapositiva 0 al cargar
setSlide(0);

// --- LISTENERS DE INTERACCIÓN ---

// Hover interactivo cursor en canvas
Events.on(engine, 'afterUpdate', function () {
    const allBodies = Composite.allBodies(world);
    const hovered = Matter.Query.point(allBodies, mouse.position);
    const hasLib = hovered.some(b => b.customData && !b.isStatic);
    document.getElementById('world-canvas').style.cursor = hasLib ? 'pointer' : 'default';
});

// Click/Drag/Press en píldora -> Mostrar detalles en inspector y abrir documentación
let mouseDownPos = { x: 0, y: 0 };
let mouseDownTime = 0;

Events.on(mouseConstraint, 'mousedown', function (event) {
    mouseDownPos = { x: event.mouse.position.x, y: event.mouse.position.y };
    mouseDownTime = Date.now();

    if (currentSlide !== 8) return;
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

Events.on(mouseConstraint, 'mouseup', function (event) {
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
        engine.gravity.y = 1;
        btn.innerHTML = '<i class="fa-solid fa-bomb"></i> Gravedad Cero';
    }

    gravityInverted = !gravityInverted;
});

// Botones de navegación de diapositivas
document.getElementById('btn-prev').addEventListener('click', () => {
    if (currentSlide > 0) setSlide(currentSlide - 1);
});

document.getElementById('btn-next').addEventListener('click', () => {
    if (currentSlide < 8) setSlide(currentSlide + 1);
});

// Teclado para navegar slides
window.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') {
        if (currentSlide < 8) setSlide(currentSlide + 1);
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
});

// Evitar que el scroll interfiera en móviles si se toca el canvas directamente
document.getElementById('world-canvas').addEventListener('touchmove', function (e) {
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
