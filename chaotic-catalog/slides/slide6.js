const slide6Content = `
<!-- DIAPOSITIVA 6: ¿Cuál es nuestro Camino? -->
<div class="h-full flex flex-col gap-4 text-slate-900">

    <p class="text-sm text-slate-400 flex-shrink-0 tracking-wide">Evaluamos dos rutas. Una destacó con claridad.</p>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 flex-shrink-0">

        <!-- ── OPCIÓN A — EL ARTESANO ── -->
        <button id="option-a-btn" class="group relative rounded-3xl border border-amber-200 bg-white px-6 py-5 text-left text-slate-900 overflow-hidden shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-amber-300 hover:shadow-md hover:shadow-amber-100/60 focus:outline-none">
            <!-- Línea de acento superior -->
            <div class="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>

            <div class="flex items-start justify-between gap-3">
                <div class="flex-1">
                    <p class="text-[10px] uppercase tracking-[0.4em] text-amber-500 font-medium">Opción A</p>
                    <h4 class="mt-1 text-xl font-extrabold tracking-tight text-slate-900">El Artesano</h4>
                    <p class="mt-2 text-xs text-slate-500 leading-relaxed">
                        Libertad total. Identidad única. Control absoluto sobre cada píxel y cada interacción.
                    </p>
                </div>
                <div class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-2xl bg-amber-50 text-amber-500 transition-all duration-200 group-hover:bg-amber-100 group-hover:scale-110">
                    <i class="fa-solid fa-hammer text-sm"></i>
                </div>
            </div>

            <div class="mt-3.5 flex flex-wrap gap-1.5">
                <span class="inline-flex items-center gap-1.5 rounded-full border border-[#6e56cf]/20 bg-[#6e56cf]/8 px-2.5 py-0.5 text-[10px] font-semibold text-[#6e56cf]">
                    <span class="h-1.5 w-1.5 rounded-full bg-[#6e56cf]"></span>Radix UI
                </span>
                <span class="inline-flex items-center gap-1.5 rounded-full border border-sky-200 bg-sky-50 px-2.5 py-0.5 text-[10px] font-semibold text-sky-600">
                    <span class="h-1.5 w-1.5 rounded-full bg-sky-400"></span>Tailwind CSS
                </span>
                <span class="inline-flex items-center gap-1.5 rounded-full border border-[#FF4785]/20 bg-[#FF4785]/5 px-2.5 py-0.5 text-[10px] font-semibold text-[#FF4785]">
                    <span class="h-1.5 w-1.5 rounded-full bg-[#FF4785]"></span>Storybook
                </span>
            </div>
        </button>

        <!-- ── OPCIÓN B — EL HÍBRIDO ── -->
        <button id="option-b-btn" class="group relative rounded-3xl border border-slate-200/60 bg-slate-50/50 px-6 py-5 text-left shadow-none transition-all duration-200 hover:bg-slate-50/80 focus:outline-none">

            <div class="flex items-start justify-between gap-3">
                <div class="flex-1">
                    <p class="text-[10px] uppercase tracking-[0.4em] text-slate-400 font-medium">Opción B</p>
                    <h4 class="mt-1 text-xl font-extrabold tracking-tight text-slate-300">El Híbrido</h4>
                    <p class="mt-2 text-xs text-slate-400 leading-relaxed">
                        shadcn/ui + Tailwind: válido para arrancar rápido, pero con componentes que no controlas del todo.
                    </p>
                </div>
                <div class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-2xl bg-slate-100 text-slate-400">
                    <i class="fa-solid fa-layer-group text-sm"></i>
                </div>
            </div>

            <div class="mt-3.5 flex flex-wrap gap-1.5">
                <span class="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-100 px-2.5 py-0.5 text-[10px] font-medium text-slate-400">
                    <span class="h-1.5 w-1.5 rounded-full bg-slate-300"></span>shadcn/ui
                </span>
                <span class="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-100 px-2.5 py-0.5 text-[10px] font-medium text-slate-400">
                    <span class="h-1.5 w-1.5 rounded-full bg-slate-300"></span>Tailwind CSS
                </span>
                <span class="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-50 px-2.5 py-0.5 text-[10px] font-medium text-slate-400">
                    <i class="fa-solid fa-triangle-exclamation text-[8px]"></i> dependencia externa
                </span>
            </div>
        </button>

    </div>

    <!-- Área de resultado interactivo -->
    <div id="choice-output" class="flex-1 min-h-0 overflow-auto rounded-[28px] border border-slate-100 bg-white shadow-sm text-slate-700 transition-all duration-300">
        <div class="flex h-full items-center justify-center p-6">
            <div class="text-center space-y-2.5">
                <div class="mx-auto flex h-10 w-10 items-center justify-center rounded-xl border border-amber-100 bg-amber-50 shadow-sm">
                    <i class="fa-solid fa-hammer text-amber-400"></i>
                </div>
                <p class="text-xs text-slate-400 font-medium">Selecciona una opción para ver el stack completo</p>
            </div>
        </div>
    </div>

</div>
`;
