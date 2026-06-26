const slide4Content = `
<!-- DIAPOSITIVA 4: 3. READY-TO-USE (COMPLETA) -->
<div class="h-full flex flex-col justify-between space-y-4 md:space-y-0 text-slate-800">
    <!-- Header: Nivel 3 & Título -->
    

    <!-- Contenido Principal: Analogía (La casa completamente terminada y amueblada) -->
    <div class="grid grid-cols-1 md:grid-cols-12 gap-5 items-center flex-grow py-3 overflow-y-auto md:overflow-hidden">
        <!-- Panel Izquierdo: Analogía e Ilustración (6 cols) -->
        <div class="md:col-span-6 flex flex-col items-center text-center space-y-3">
            <div class="flex flex-col items-center space-y-1">
                <span class="px-2.5 py-0.5 bg-emerald-100 border border-emerald-200 text-emerald-700 font-bold text-[9px] uppercase tracking-widest rounded">
                    Analogía
                </span>
                <h3 class="font-display font-extrabold text-slate-900 text-sm md:text-base">
                    La casa completamente terminada y amueblada
                </h3>
            </div>
            
            <!-- Imagen de la casa terminada -->
            <div class="relative w-full max-w-[340px] aspect-[4/3] rounded-xl overflow-hidden border border-slate-100 shadow-lg bg-white flex items-center justify-center p-1">
                <img src="images/finished_house.png" alt="Casa Completamente Terminada" class="w-full h-full object-contain rounded-lg">
            </div>
            
            <p class="text-slate-600 text-xs leading-relaxed max-w-[380px] font-medium">
                Todo está listo: diseño, colores, componentes, espaciados, tipografía y tema consistente. Solo personalizas algunos detalles.
            </p>
        </div>

        <!-- Panel Derecho: Qué obtienes & Ideal Si (6 cols) -->
        <div class="md:col-span-6 flex flex-col justify-center space-y-4 h-full">
            <!-- Qué obtienes -->
            <div class="bg-emerald-50/40 border border-emerald-100/80 rounded-2xl p-4 space-y-2.5 shadow-sm">
                <h4 class="font-bold text-emerald-900 text-xs uppercase tracking-wider flex items-center gap-1.5">
                    <i class="fa-solid fa-gift"></i> Qué Obtienes
                </h4>
                <ul class="space-y-1.5 text-xs text-slate-700 leading-normal font-medium">
                    <li class="flex items-start gap-2">
                        <i class="fa-regular fa-circle-check text-emerald-600 mt-0.5"></i>
                        <span>Componentes completos e interactivos listos de fábrica</span>
                    </li>
                    <li class="flex items-start gap-2">
                        <i class="fa-regular fa-circle-check text-emerald-600 mt-0.5"></i>
                        <span>Sistema de tematización (Themes) integrado y robusto</span>
                    </li>
                    <li class="flex items-start gap-2">
                        <i class="fa-regular fa-circle-check text-emerald-600 mt-0.5"></i>
                        <span>Diseño visualmente consistente y pulido out-of-the-box</span>
                    </li>
                    <li class="flex items-start gap-2">
                        <i class="fa-regular fa-circle-check text-emerald-600 mt-0.5"></i>
                        <span>Productividad y velocidad de entrega máximas</span>
                    </li>
                </ul>
            </div>

            <!-- Ideal si... -->
            <div class="bg-indigo-50/40 border border-indigo-100/80 rounded-2xl p-4 flex gap-3.5 shadow-sm">
                <div class="w-10 h-10 rounded-full bg-indigo-100 border border-indigo-200 flex items-center justify-center text-indigo-650 text-base shrink-0 shadow-inner">
                    <i class="fa-solid fa-gauge-high"></i>
                </div>
                <div class="space-y-1">
                    <h4 class="font-bold text-indigo-900 text-xs uppercase tracking-wider">Ideal si...</h4>
                    <p class="text-slate-600 text-xs leading-normal font-medium">
                        Necesitas construir rápido, garantizando una consistencia visual perfecta a lo largo del sistema y no requieres cambios estéticos extremadamente profundos o personalizados a nivel de píxel.
                    </p>
                </div>
            </div>
        </div>
    </div>

    <!-- Footer: Ventajas & Consideraciones -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 border-t border-slate-100 pt-3">
        <!-- Ventajas -->
        <div class="border border-slate-200/80 bg-white/70 rounded-xl p-3 flex gap-3 shadow-sm items-center">
            <div class="w-8 h-8 rounded-lg bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 shrink-0 shadow-sm">
                <i class="fa-regular fa-circle-check"></i>
            </div>
            <div>
                <h5 class="font-bold text-emerald-800 text-xs uppercase tracking-wider mb-0.5">Ventajas</h5>
                <p class="text-slate-600 text-[11px] font-medium leading-snug">
                    Desarrollo sumamente veloz, consistencia estética garantizada, e ideal para coordinar grandes equipos de programadores.
                </p>
            </div>
        </div>

        <!-- Consideraciones -->
        <div class="border border-slate-200/80 bg-white/70 rounded-xl p-3 flex gap-3 shadow-sm items-center">
            <div class="w-8 h-8 rounded-lg bg-amber-50 border border-amber-100 flex items-center justify-center text-amber-600 shrink-0 shadow-sm">
                <i class="fa-solid fa-minus"></i>
            </div>
            <div>
                <h5 class="font-bold text-amber-800 text-xs uppercase tracking-wider mb-0.5">Consideraciones</h5>
                <p class="text-slate-600 text-[11px] font-medium leading-snug">
                    Ofrece menos flexibilidad visual para implementar identidades de marca o diseños altamente específicos.
                </p>
            </div>
        </div>
    </div>
</div>
`;
