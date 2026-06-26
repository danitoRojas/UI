const slide2Content = `
<!-- DIAPOSITIVA 2: 1. HEADLESS -->
<div class="h-full flex flex-col justify-between space-y-4 md:space-y-0 text-slate-800">
    <!-- Header: Nivel 1 & Título -->
   

    <!-- Contenido Principal: Analogía (Planos y Cimientos) -->
    <div class="grid grid-cols-1 md:grid-cols-12 gap-5 items-center flex-grow py-3 overflow-y-auto md:overflow-hidden">
        <!-- Panel Izquierdo: Analogía e Ilustración (6 cols) -->
        <div class="md:col-span-6 flex flex-col items-center text-center space-y-3">
            <div class="flex flex-col items-center space-y-1">
                <span class="px-2.5 py-0.5 bg-purple-100 border border-purple-200 text-purple-700 font-bold text-[9px] uppercase tracking-widest rounded">
                    Analogía
                </span>
                <h3 class="font-display font-extrabold text-slate-900 text-sm md:text-base">
                    Los planos y los cimientos
                </h3>
            </div>
            
            <!-- Imagen generada localmente -->
            <div class="relative w-full max-w-[340px] aspect-[4/3] rounded-xl overflow-hidden border border-slate-100 shadow-lg bg-white flex items-center justify-center p-1">
                <img src="images/blueprint_foundations.png" alt="Planos y Cimientos" class="w-full h-full object-contain rounded-lg">
            </div>
            
            <p class="text-slate-600 text-xs leading-relaxed max-w-[380px] font-medium">
                Tienes los planos (estructura), los cimientos (comportamiento) y todo lo necesario para construir. Tú decides cómo se verá todo.
            </p>
        </div>

        <!-- Panel Derecho: Qué obtienes & Ideal Si (6 cols) -->
        <div class="md:col-span-6 flex flex-col justify-center space-y-4 h-full">
            <!-- Qué obtienes -->
            <div class="bg-purple-50/50 border border-purple-100/80 rounded-2xl p-4 space-y-2.5 shadow-sm">
                <h4 class="font-bold text-purple-900 text-xs uppercase tracking-wider flex items-center gap-1.5">
                    <i class="fa-solid fa-gift"></i> Qué Obtienes
                </h4>
                <ul class="space-y-1.5 text-xs text-slate-700 leading-normal font-medium">
                    <li class="flex items-start gap-2">
                        <i class="fa-regular fa-circle-check text-purple-650 mt-0.5"></i>
                        <span>Solo comportamiento y lógica funcional de componentes</span>
                    </li>
                    <li class="flex items-start gap-2">
                        <i class="fa-regular fa-circle-check text-purple-650 mt-0.5"></i>
                        <span>Accesibilidad garantizada y gestión de estados (foco, teclado, WAI-ARIA)</span>
                    </li>
                    <li class="flex items-start gap-2">
                        <i class="fa-regular fa-circle-check text-purple-650 mt-0.5"></i>
                        <span>Sin estilos impuestos, lo que te da cero dependencias visuales</span>
                    </li>
                    <li class="flex items-start gap-2">
                        <i class="fa-regular fa-circle-check text-purple-650 mt-0.5"></i>
                        <span>Máximo control total del diseño final</span>
                    </li>
                </ul>
            </div>

            <!-- Ideal si... -->
            <div class="bg-indigo-50/40 border border-indigo-100/80 rounded-2xl p-4 flex gap-3.5 shadow-sm">
                <div class="w-10 h-10 rounded-full bg-indigo-100 border border-indigo-200 flex items-center justify-center text-indigo-650 text-base shrink-0 shadow-inner">
                    <i class="fa-solid fa-user-astronaut"></i>
                </div>
                <div class="space-y-1">
                    <h4 class="font-bold text-indigo-900 text-xs uppercase tracking-wider">Ideal si...</h4>
                    <p class="text-slate-600 text-xs leading-normal font-medium">
                        Quieres construir algo totalmente único desde cero, manteniendo una identidad visual muy particular y con requisitos de diseño muy específicos.
                    </p>
                </div>
            </div>
        </div>
    </div>

    <!-- Footer: Ventajas & Consideraciones (Dos tarjetas horizontales) -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 border-t border-slate-100 pt-3">
        <!-- Ventajas -->
        <div class="border border-slate-200/80 bg-white/70 rounded-xl p-3 flex gap-3 shadow-sm items-center">
            <div class="w-8 h-8 rounded-lg bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 shrink-0 shadow-sm">
                <i class="fa-solid fa-toolbox"></i>
            </div>
            <div>
                <h5 class="font-bold text-emerald-800 text-xs uppercase tracking-wider mb-0.5">Ventajas</h5>
                <p class="text-slate-600 text-[11px] font-medium leading-snug">
                    Máxima flexibilidad, extremadamente ligero, sin imponer estilos que tengas que sobreescribir.
                </p>
            </div>
        </div>

        <!-- Consideraciones -->
        <div class="border border-slate-200/80 bg-white/70 rounded-xl p-3 flex gap-3 shadow-sm items-center">
            <div class="w-8 h-8 rounded-lg bg-amber-50 border border-amber-100 flex items-center justify-center text-amber-600 shrink-0 shadow-sm">
                <i class="fa-solid fa-triangle-exclamation"></i>
            </div>
            <div>
                <h5 class="font-bold text-amber-800 text-xs uppercase tracking-wider mb-0.5">Consideraciones</h5>
                <p class="text-slate-600 text-[11px] font-medium leading-snug">
                    Requiere más tiempo de implementación inicial y mayor esfuerzo de diseño y desarrollo propio.
                </p>
            </div>
        </div>
    </div>
</div>
`;
