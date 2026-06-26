const slide3Content = `
<!-- DIAPOSITIVA 3: 2. COMPOSABLE (HIBRIDO) -->
<div class="h-full flex flex-col justify-between space-y-4 md:space-y-0 text-slate-800">
    <!-- Header: Nivel 2 & Título -->
    <div class="hidden lg:flex flex-col md:flex-row md:items-center md:justify-between gap-3 border-b border-blue-100 pb-3">
        <div class="flex items-center gap-3">
            <span class="px-3 py-1 bg-blue-600 text-white font-mono font-bold text-xs uppercase tracking-wider rounded-full shadow-sm">
                Nivel 2
            </span>
            <h2 class="font-display text-lg md:text-xl font-black text-blue-900 uppercase tracking-tight">
                Componentes Base (Composable)
            </h2>
        </div>
        <div class="flex items-center gap-1.5 text-xs font-semibold text-blue-600 bg-blue-50 border border-blue-100 px-3 py-1 rounded-full">
            <span class="w-1.5 h-1.5 bg-blue-600 rounded-full animate-ping"></span>
            El Híbrido
        </div>
    </div>

    <!-- Contenido Principal: Analogía (Casa construida, lista para personalizar) -->
    <div class="grid grid-cols-1 md:grid-cols-12 gap-5 items-center flex-grow py-3 overflow-y-auto md:overflow-hidden">
        <!-- Panel Izquierdo: Analogía e Ilustración (6 cols) -->
        <div class="md:col-span-6 flex flex-col items-center text-center space-y-3">
            <div class="flex flex-col items-center space-y-1">
                <span class="px-2.5 py-0.5 bg-blue-100 border border-blue-200 text-blue-700 font-bold text-[9px] uppercase tracking-widest rounded">
                    Analogía
                </span>
                <h3 class="font-display font-extrabold text-slate-900 text-sm md:text-base">
                    La casa construida, lista para personalizar
                </h3>
            </div>
            
            <!-- Imagen de la casa de hormigón -->
            <div class="relative w-full max-w-[340px] aspect-[4/3] rounded-xl overflow-hidden border border-slate-100 shadow-lg bg-white flex items-center justify-center p-1">
                <img src="images/house_structure.png" alt="Estructura de Casa Composable" class="w-full h-full object-contain rounded-lg">
            </div>
            
            <p class="text-slate-600 text-xs leading-relaxed max-w-[380px] font-medium">
                La estructura ya está construida: habitaciones, puertas, ventanas. Tú decides los acabados, colores y decoración.
            </p>
        </div>

        <!-- Panel Derecho: Qué obtienes & Ideal Si (6 cols) -->
        <div class="md:col-span-6 flex flex-col justify-center space-y-4 h-full">
            <!-- Qué obtienes -->
            <div class="bg-blue-50/50 border border-blue-100/80 rounded-2xl p-4 space-y-2.5 shadow-sm">
                <h4 class="font-bold text-blue-900 text-xs uppercase tracking-wider flex items-center gap-1.5">
                    <i class="fa-solid fa-gift"></i> Qué Obtienes
                </h4>
                <ul class="space-y-1.5 text-xs text-slate-700 leading-normal font-medium">
                    <li class="flex items-start gap-2">
                        <i class="fa-regular fa-circle-check text-blue-600 mt-0.5"></i>
                        <span>Componentes listos para usar (caja de arena editable)</span>
                    </li>
                    <li class="flex items-start gap-2">
                        <i class="fa-regular fa-circle-check text-blue-600 mt-0.5"></i>
                        <span>Estructura semántica y lógica de comportamiento incluidas</span>
                    </li>
                    <li class="flex items-start gap-2">
                        <i class="fa-regular fa-circle-check text-blue-600 mt-0.5"></i>
                        <span>Estilos base pre-diseñados (fácilmente personalizables mediante clases)</span>
                    </li>
                    <li class="flex items-start gap-2">
                        <i class="fa-regular fa-circle-check text-blue-600 mt-0.5"></i>
                        <span>Gran flexibilidad estética con mucho menos trabajo inicial</span>
                    </li>
                </ul>
            </div>

            <!-- Ideal si... -->
            <div class="bg-indigo-50/40 border border-indigo-100/80 rounded-2xl p-4 flex gap-3.5 shadow-sm">
                <div class="w-10 h-10 rounded-full bg-indigo-100 border border-indigo-200 flex items-center justify-center text-indigo-650 text-base shrink-0 shadow-inner">
                    <i class="fa-solid fa-user-check"></i>
                </div>
                <div class="space-y-1">
                    <h4 class="font-bold text-indigo-900 text-xs uppercase tracking-wider">Ideal si...</h4>
                    <p class="text-slate-600 text-xs leading-normal font-medium">
                        Quieres acelerar el desarrollo del proyecto sin perder el control absoluto del diseño y necesitas una consistencia estética moderada a lo largo del ecosistema.
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
                <i class="fa-solid fa-bolt"></i>
            </div>
            <div>
                <h5 class="font-bold text-emerald-800 text-xs uppercase tracking-wider mb-0.5">Ventajas</h5>
                <p class="text-slate-600 text-[11px] font-medium leading-snug">
                    Ahorra tiempo valioso, sumamente personalizable, excelente balance entre velocidad de entrega y control estético.
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
                    Requiere aprender la API interna del CLI y comprender la estructura del sistema de componentes copiado.
                </p>
            </div>
        </div>
    </div>
</div>
`;
