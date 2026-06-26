const slide5Content = `
<!-- DIAPOSITIVA 5: NUESTRAS OPCIONES (COMPARATIVA) -->
<div class="h-full flex flex-col justify-between space-y-4 md:space-y-0 text-slate-800">
    <!-- Header: Nuestras Opciones -->
    <div class="hidden lg:flex flex-col md:flex-row md:items-center md:justify-between gap-3 border-b border-purple-100 pb-1">
        <div class="flex items-center gap-3">
         
        </div>
    </div>

    <!-- Tabla Comparativa de 3 Columnas -->
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-4 items-stretch flex-grow py-2 lg:overflow-hidden overflow-y-auto">
        <!-- COLUMNA 1: Radix UI -->
        <div class="bg-white/60 border border-purple-150 rounded-2xl p-4 flex flex-col justify-between space-y-2 md:space-y-1.5 hover:shadow-md transition-all">
            <!-- Header Nivel 1 con Logo Real (Clickable -> Radix UI Docs) -->
            <a href="https://www.radix-ui.com/" target="_blank" class="flex items-center gap-3 border-b border-slate-100 pb-2 hover:opacity-80 transition-opacity cursor-pointer">
                <div class="w-10 h-10 rounded-xl bg-purple-50/50 border border-purple-100 flex items-center justify-center p-2 shrink-0 shadow-sm">
                    <svg viewBox="0 0 24 24" class="w-full h-full text-[#6e56cf]" fill="currentColor">
                        <path d="M11.52 24a7.68 7.68 0 0 1-7.68-7.68 7.68 7.68 0 0 1 7.68-7.68V24Zm0-24v7.68H3.84V0h7.68Zm4.8 7.68a3.84 3.84 0 1 1 0-7.68 3.84 3.84 0 0 1 0 7.68Z"/>
                    </svg>
                </div>
                <div>
                    <div class="flex items-center gap-1.5">
                        <span class="text-[9px] font-bold text-purple-655 bg-purple-50 px-1.5 py-0.5 rounded border border-purple-100 uppercase tracking-wider">Nivel 1</span>
                        <span class="text-[9px] font-mono text-slate-450">Control Total</span>
                    </div>
                    <h3 class="font-extrabold text-sm text-slate-900 mt-0.5 leading-none flex items-center gap-1">
                        Radix UI <i class="fa-solid fa-arrow-up-right-from-square text-[8px] text-slate-400"></i>
                    </h3>
                    <p class="text-[10px] text-slate-400 font-medium">Primitivos accesibles sin estilos</p>
                </div>
            </a>

            <!-- Enfoque -->
            <div class="space-y-0.5 text-xs">
                <h4 class="font-bold text-slate-400 text-[9px] uppercase tracking-wider">Enfoque</h4>
                <p class="text-slate-655 font-medium leading-relaxed">
                    Proporciona la lógica, accesibilidad (WAI-ARIA) y estados de los componentes, pero sin estilos predefinidos. Tú construyes todo desde cero.
                </p>
            </div>

            <!-- ¿Dónde usar? -->
            <div class="space-y-0.5 text-xs">
                <h4 class="font-bold text-slate-400 text-[9px] uppercase tracking-wider">¿Dónde usar?</h4>
                <p class="text-slate-655 font-medium leading-relaxed">
                    Cualquier proyecto que necesite máxima flexibilidad y personalización de diseño. Design systems y productos únicos.
                </p>
            </div>

            <!-- Licencia y Costo -->
            <div class="space-y-0.5 text-xs">
                <h4 class="font-bold text-slate-400 text-[9px] uppercase tracking-wider">Costo y Licencia</h4>
                <div class="flex justify-between font-medium">
                    <span class="text-purple-700 font-bold">Gratis y Open Source</span>
                    <span class="text-slate-400 font-mono text-[10px]">MIT License</span>
                </div>
                <p class="text-[10px] text-slate-400 font-medium leading-tight">Radix UI es 100% gratuito y de código abierto sin versión Pro.</p>
            </div>

            <!-- Frameworks y Empresas -->
            <div class="space-y-2 text-xs">
                <div>
                    <h4 class="font-bold text-slate-400 text-[9px] uppercase tracking-wider mb-0.5">Compatibilidad</h4>
                    <div class="flex gap-1.5 items-center flex-wrap text-[10px] font-semibold text-slate-655">
                        <span class="px-1.5 py-0.5 bg-slate-100 rounded border border-slate-200/40">React</span>
                        <span class="px-1.5 py-0.5 bg-slate-100 rounded border border-slate-200/40">Solid</span>
                        <span class="px-1.5 py-0.5 bg-slate-100 rounded border border-slate-200/40">Vue</span>
                    </div>
                </div>
                
                <!-- Empresas Reales del Screenshot -->
                <div class="border-t border-slate-100 pt-2">
                    <div class="flex items-center justify-center gap-3.5 flex-wrap text-slate-500 mb-1">
                        <!-- Zoom -->
                        <svg viewBox="0 0 24 24" class="h-3 text-[#2D8CFF] fill-current" style="max-width: 45px;">
                            <path d="M5.033 14.649H.743a.74.74 0 0 1-.686-.458.74.74 0 0 1 .16-.808L3.19 10.41H1.06A1.06 1.06 0 0 1 0 9.35h3.957c.301 0 .57.18.686.458a.74.74 0 0 1-.161.808L1.51 13.59h2.464c.585 0 1.06.475 1.06 1.06zM24 11.338c0-1.14-.927-2.066-2.066-2.066-.61 0-1.158.265-1.537.686a2.061 2.061 0 0 0-1.536-.686c-1.14 0-2.066.926-2.066 2.066v3.311a1.06 1.06 0 0 0 1.06-1.06v-2.251a1.004 1.004 0 0 1 2.013 0v2.251c0 .586.474 1.06 1.06 1.06v-3.311a1.004 1.004 0 0 1 2.012 0v2.251c0 .586.475 1.06 1.06 1.06zM16.265 12a2.728 2.728 0 1 1-5.457 0 2.728 2.728 0 0 1 5.457 0zm-1.06 0a1.669 1.669 0 1 0-3.338 0 1.669 1.669 0 0 0 3.338 0zm-4.82 0a2.728 2.728 0 1 1-5.458 0 2.728 2.728 0 0 1 5.457 0zm-1.06 0a1.669 1.669 0 1 0-3.338 0 1.669 1.669 0 0 0 3.338 0z"/>
                        </svg>
                        <!-- LinkedIn -->
                        <svg viewBox="0 0 24 24" class="h-3 text-[#0A66C2] fill-current" style="max-width: 45px;">
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                        </svg>
                        <!-- GroupM -->
                        <div class="flex items-center text-slate-800 text-[11px] font-sans font-extrabold tracking-tighter select-none">
                            group<span class="text-blue-600 font-black italic">m</span>
                        </div>
                        <!-- Pentair -->
                        <div class="flex items-center gap-0.5 select-none">
                            <svg viewBox="0 0 24 24" class="w-3 h-3 text-[#0A4B87] fill-current"><path d="M12 2L2 12l10 10 10-10L12 2zm0 3.5L18.5 12 12 18.5 5.5 12 12 5.5z"/></svg>
                            <span class="font-black text-[#0A4B87] text-[8px] tracking-wider font-sans leading-none">PENTAIR</span>
                        </div>
                    </div>
                    <p class="text-[9px] text-slate-400 font-medium leading-tight text-center">y muchas más que construyen sus propios diseños.</p>
                </div>
            </div>

            <!-- Ideal si... -->
            <div class="bg-purple-50/50 border border-purple-100/60 rounded-xl p-2 text-xs flex gap-2">
                <i class="fa-solid fa-circle-check text-purple-650 mt-0.5 shrink-0"></i>
                <p class="text-purple-900 font-semibold leading-snug">
                    <span class="font-bold text-purple-950">Ideal si:</span> Quieres control total sobre cada detalle y tienes un equipo de diseño y desarrollo dedicado.
                </p>
            </div>
        </div>

        <!-- COLUMNA 2: shadcn/ui -->
        <div class="bg-white/60 border border-blue-150 rounded-2xl p-4 flex flex-col justify-between space-y-2 md:space-y-1.5 hover:shadow-md transition-all">
            <!-- Header Nivel 2 con Logo Real (Clickable -> shadcn/ui Docs) -->
            <a href="https://ui.shadcn.com/" target="_blank" class="flex items-center gap-3 border-b border-slate-100 pb-2 hover:opacity-80 transition-opacity cursor-pointer">
                <div class="w-10 h-10 rounded-xl bg-slate-950 border border-slate-900 flex items-center justify-center p-2 shrink-0 shadow-sm">
                    <svg viewBox="0 0 24 24" class="w-full h-full text-white" fill="currentColor">
                        <path d="M22.219 11.784 11.784 22.219c-.407.407-.407 1.068 0 1.476.407.407 1.068.407 1.476 0L23.695 13.26c.407-.408.407-1.069 0-1.476-.408-.407-1.069-.407-1.476 0ZM20.132.305.305 20.132c-.407.407-.407 1.068 0 1.476.408.407 1.069.407 1.476 0L21.608 1.781c.407-.407.407-1.068 0-1.476-.408-.407-1.069-.407-1.476 0Z"/>
                    </svg>
                </div>
                <div>
                    <div class="flex items-center gap-1.5">
                        <span class="text-[9px] font-bold text-blue-650 bg-blue-50 px-1.5 py-0.5 rounded border border-blue-100 uppercase tracking-wider">Nivel 2</span>
                        <span class="text-[9px] font-mono text-slate-450">Híbrido</span>
                    </div>
                    <h3 class="font-extrabold text-sm text-slate-900 mt-0.5 leading-none flex items-center gap-1">
                        shadcn/ui <i class="fa-solid fa-arrow-up-right-from-square text-[8px] text-slate-400"></i>
                    </h3>
                    <p class="text-[10px] text-slate-400 font-medium">Componentes Tailwind editables</p>
                </div>
            </a>

            <!-- Enfoque -->
            <div class="space-y-0.5 text-xs">
                <h4 class="font-bold text-slate-400 text-[9px] uppercase tracking-wider">Enfoque</h4>
                <p class="text-slate-655 font-medium leading-relaxed">
                    Construido sobre Radix UI + Tailwind CSS. Puedes personalizar todo el diseño, pero no necesitas construir la lógica de cero.
                </p>
            </div>

            <!-- ¿Dónde usar? -->
            <div class="space-y-0.5 text-xs">
                <h4 class="font-bold text-slate-400 text-[9px] uppercase tracking-wider">¿Dónde usar?</h4>
                <p class="text-slate-655 font-medium leading-relaxed">
                    Aplicaciones web modernas, startups, SaaS, dashboards, paneles de administración y MVPs. Rápido sin perder control.
                </p>
            </div>

            <!-- Licencia y Costo -->
            <div class="space-y-0.5 text-xs">
                <h4 class="font-bold text-slate-400 text-[9px] uppercase tracking-wider">Costo y Licencia</h4>
                <div class="flex justify-between font-medium">
                    <span class="text-blue-700 font-bold">Gratis / Versión Pro de pago</span>
                    <span class="text-slate-400 font-mono text-[10px]">MIT License</span>
                </div>
                <p class="text-[10px] text-slate-400 font-medium leading-tight">Shadcn Pro incluye componentes premium, plantillas y soporte prioritario.</p>
            </div>

            <!-- Frameworks y Empresas -->
            <div class="space-y-2 text-xs">
                <div>
                    <h4 class="font-bold text-slate-400 text-[9px] uppercase tracking-wider mb-0.5">Compatibilidad</h4>
                    <div class="flex gap-1.5 items-center flex-wrap text-[10px] font-semibold text-slate-655">
                        <span class="px-1.5 py-0.5 bg-slate-100 rounded border border-slate-200/40">Next.js</span>
                        <span class="px-1.5 py-0.5 bg-slate-100 rounded border border-slate-200/40">React</span>
                        <span class="px-1.5 py-0.5 bg-slate-100 rounded border border-slate-200/40">Vite</span>
                    </div>
                </div>
                
                <!-- Empresas Reales del Screenshot -->
                <div class="border-t border-slate-100 pt-2">
                    <div class="flex items-center justify-center gap-3.5 flex-wrap text-slate-500 mb-1">
                        <!-- Vercel -->
                        <svg viewBox="0 0 24 24" class="h-3 text-black fill-current" style="max-width: 45px;">
                            <path d="m12 1.608 12 20.784H0Z"/>
                        </svg>
                        <!-- Cal.com -->
                        <svg viewBox="0 0 24 24" class="h-2.5 text-black fill-current" style="max-width: 45px;">
                            <path d="M2.408 14.488C1.035 14.488 0 13.4 0 12.058c0-1.346.982-2.443 2.408-2.443.758 0 1.282.233 1.691.765l-.66.55a1.343 1.343 0 0 0-1.03-.442c-.93 0-1.44.711-1.44 1.57 0 .86.559 1.557 1.44 1.557.413 0 .765-.147 1.043-.443l.651.573c-.391.51-.929.743-1.695.743zM6.948 10.913h.89v3.49h-.89v-.51c-.185.362-.493.604-1.083.604-.943 0-1.695-.82-1.695-1.826 0-1.007.752-1.825 1.695-1.825.585 0 .898.241 1.083.604zm.026 1.758c0-.546-.374-.998-.964-.998-.568 0-.938.457-.938.998 0 .528.37.998.938.998.586 0 .964-.456.964-.998zM8.467 9.503h.89v4.895h-.89zM9.752 13.937a.53.53 0 0 1 .542-.528c.313 0 .533.242.533.528a.527.527 0 0 1-.533.537.534.534 0 0 1-.542-.537zM14.23 13.839c-.33.403-.832.658-1.426.658a1.806 1.806 0 0 1-1.84-1.826c0-1.007.778-1.825 1.84-1.825.572 0 1.07.241 1.4.622l-.687.577c-.172-.215-.396-.376-.713-.376-.568 0-.938.456-.938.998 0 .541.37.997.938.997.343 0 .58-.179.757-.42zM14.305 12.671c0-1.007.78-1.825 1.84-1.825 1.061 0 1.84.818 1.84 1.825 0 1.007-.779 1.826-1.84 1.826-1.06-.005-1.84-.82-1.84-1.826zm2.778 0c0-.546-.37-.998-.938-.998-.568-.004-.937.452-.937.998 0 .542.37.998.937.998.568 0 .938-.456.938-.998zM24 12.269v2.13h-.89v-1.911c0-.604-.281-.864-.704-.864-.396 0-.678.197-.678.864v1.91h-.89v-1.91c0-.604-.285-.864-.704-.864-.396 0-.744.197-.744.864v1.91h-.89v-3.49h.89v.484c.185-.376.52-.564 1.035-.564.489 0 .898.241 1.123.649.224-.417.554-.65 1.153-.65.731.005 1.299.56 1.299 1.442z"/>
                        </svg>
                        <!-- Dub -->
                        <div class="flex items-center gap-0.5 select-none">
                            <svg viewBox="0 0 24 24" class="w-3.5 h-3.5 text-black fill-current">
                                <path d="M10.59 13.41c.41.39.41 1.03 0 1.42-.39.39-1.03.39-1.42 0a5.003 5.003 0 0 1 0-7.07l3.54-3.54a5.003 5.003 0 0 1 7.07 0 5.003 5.003 0 0 1 0 7.07l-1.49 1.49c.01-.82-.12-1.64-.4-2.42l.47-.48a3.002 3.002 0 0 0 0-4.24 3.002 3.002 0 0 0-4.24 0l-3.53 3.53a3.002 3.002 0 0 0 0 4.24zm-1.41-1.41c-.01.82.12 1.64.4 2.42l-.47.48a3.002 3.002 0 0 0 0 4.24 3.002 3.002 0 0 0 4.24 0l3.53-3.53a3.002 3.002 0 0 0 0-4.24 3.002 3.002 0 0 0-4.24 0a1 1 0 0 1-1.42 1.42c.41-.39.41-1.03 0-1.42-.39-.39-1.03-.39-1.42 0a5.003 5.003 0 0 1 0 7.07l-3.54 3.54a5.003 5.003 0 0 1-7.07 0 5.003 5.003 0 0 1 0-7.07l1.49-1.49z"/>
                            </svg>
                            <span class="font-extrabold text-black text-[11px] tracking-tight">dub</span>
                        </div>
                        <!-- Aceternity UI -->
                        <div class="font-sans text-[11px] text-slate-900 tracking-tight font-medium select-none">
                            Aceternity <span class="font-bold">UI</span>
                        </div>
                    </div>
                    <p class="text-[9px] text-slate-400 font-medium leading-tight text-center">y miles de proyectos y startups.</p>
                </div>
            </div>

            <!-- Ideal si... -->
            <div class="bg-blue-50/50 border border-blue-100/60 rounded-xl p-2 text-xs flex gap-2">
                <i class="fa-solid fa-circle-check text-blue-600 mt-0.5 shrink-0"></i>
                <p class="text-blue-900 font-semibold leading-snug">
                    <span class="font-bold text-blue-950">Ideal si:</span> Quieres construir más rápido sin sacrificar la personalización del diseño ni la calidad de accesibilidad.
                </p>
            </div>
        </div>

        <!-- COLUMNA 3: HeroUI / MUI -->
        <div class="bg-white/60 border border-pink-150 rounded-2xl p-4 flex flex-col justify-between space-y-2 md:space-y-1.5 hover:shadow-md transition-all">
            <!-- Header Nivel 3 con Logo Real (Clickable -> HeroUI Docs) -->
            <a href="https://heroui.com/" target="_blank" class="flex items-center gap-3 border-b border-slate-100 pb-2 hover:opacity-80 transition-opacity cursor-pointer">
                <div class="w-10 h-10 rounded-xl bg-pink-50/50 border border-pink-100 flex items-center justify-center p-2 shrink-0 shadow-sm">
                    <svg viewBox="0 0 24 24" class="w-full h-full text-[#FF4ECD]" fill="currentColor">
                        <path d="M6.353 0h11.294A6.353 6.353 0 0 1 24 6.353v11.294A6.353 6.353 0 0 1 17.647 24H6.353A6.353 6.353 0 0 1 0 17.647V6.353A6.353 6.353 0 0 1 6.353 0Zm7.755 6.913h-.933v6.702a2.88 2.88 0 0 1-.362 1.45c-.24.424-.596.77-1.025 1-.443.244-.96.365-1.553.365-.592 0-1.108-.121-1.55-.364a2.603 2.603 0 0 1-1.024-1 2.865 2.865 0 0 1-.365-1.45V6.912h-.933v6.767a3.558 3.558 0 0 0 .489 1.862c.327.547.798.994 1.362 1.292.582.316 1.256.474 2.021.474.769 0 1.444-.157 2.024-.471a3.473 3.473 0 0 0 1.36-1.293c.33-.565.5-1.21.49-1.864V6.913Zm3.648 10.22V6.914h-.933v10.22h.933Z"/>
                    </svg>
                </div>
                <div>
                    <div class="flex items-center gap-1.5">
                        <span class="text-[9px] font-bold text-pink-655 bg-pink-50 px-1.5 py-0.5 rounded border border-pink-100 uppercase tracking-wider">Nivel 3</span>
                        <span class="text-[9px] font-mono text-slate-450">Velocidad Extrema</span>
                    </div>
                    <h3 class="font-extrabold text-sm text-slate-900 mt-0.5 leading-none flex items-center gap-1">
                        HeroUI / MUI <i class="fa-solid fa-arrow-up-right-from-square text-[8px] text-slate-400"></i>
                    </h3>
                    <p class="text-[10px] text-slate-400 font-medium">Sistemas completos y pre-estilizados</p>
                </div>
            </a>

            <!-- Enfoque -->
            <div class="space-y-0.5 text-xs">
                <h4 class="font-bold text-slate-400 text-[9px] uppercase tracking-wider">Enfoque</h4>
                <p class="text-slate-655 font-medium leading-relaxed">
                    Sistema de diseño completo con componentes, tema, tokens, accesibilidad y documentación. Solo personalizas detalles.
                </p>
            </div>

            <!-- ¿Dónde usar? -->
            <div class="space-y-0.5 text-xs">
                <h4 class="font-bold text-slate-400 text-[9px] uppercase tracking-wider">¿Dónde usar?</h4>
                <p class="text-slate-655 font-medium leading-relaxed">
                    Proyectos corporativos, grandes equipos de desarrollo, productos en producción rápida y aplicaciones de administración.
                </p>
            </div>

            <!-- Licencia y Costo -->
            <div class="space-y-0.5 text-xs">
                <h4 class="font-bold text-slate-400 text-[9px] uppercase tracking-wider">Costo y Licencia</h4>
                <div class="flex justify-between font-medium">
                    <span class="text-pink-700 font-bold">Gratis / Planes de pago</span>
                    <span class="text-slate-400 font-mono text-[10px]">MIT License</span>
                </div>
                <p class="text-[10px] text-slate-400 font-medium leading-tight">Gratuito para open source, planes de pago Pro para componentes premium y soporte.</p>
            </div>

            <!-- Frameworks y Empresas -->
            <div class="space-y-2 text-xs">
                <div>
                    <h4 class="font-bold text-slate-400 text-[9px] uppercase tracking-wider mb-0.5">Compatibilidad</h4>
                    <div class="flex gap-1.5 items-center flex-wrap text-[10px] font-semibold text-slate-655">
                        <span class="px-1.5 py-0.5 bg-slate-100 rounded border border-slate-200/40">Next.js</span>
                        <span class="px-1.5 py-0.5 bg-slate-100 rounded border border-slate-200/40">React</span>
                        <span class="px-1.5 py-0.5 bg-slate-100 rounded border border-slate-200/40">Vue</span>
                    </div>
                </div>
                
                <!-- Empresas Reales del Screenshot -->
                <div class="border-t border-slate-100 pt-2">
                    <div class="flex items-center justify-center gap-3.5 flex-wrap text-slate-500 mb-1">
                        <!-- Intel -->
                        <svg viewBox="0 0 24 24" class="h-3 text-[#0068B5] fill-current" style="max-width: 45px;">
                            <path d="M20.42 7.345v9.18h1.651v-9.18zM0 7.475v1.737h1.737V7.474zm9.78.352v6.053c0 .513.044.945.13 1.292.087.34.235.618.44.828.203.21.475.359.803.451.334.093.754.136 1.255.136h.216v-1.533c-.24 0-.445-.012-.593-.037a.672.672 0 0 1-.39-.173.693.693 0 0 1-.173-.377 4.002 4.002 0 0 1-.037-.606v-2.182h1.193v-1.416h-1.193V7.827zm-3.505 2.312c-.396 0-.76.08-1.082.241-.327.161-.6.384-.822.668l-.087.117v-.902H2.658v6.256h1.639v-3.214c.018-.588.16-1.02.433-1.299.29-.297.642-.445 1.044-.445.476 0 .841.149 1.082.433.235.284.359.686.359 1.2v3.324h1.663V12.97c.006-.89-.229-1.595-.686-2.09-.458-.495-1.1-.742-1.917-.742zm10.065.006a3.252 3.252 0 0 0-2.306.946c-.29.29-.525.637-.692 1.033a3.145 3.145 0 0 0-.254 1.273c0 .452.08.878.241 1.274.161.395.39.742.674 1.032.284.29.637.526 1.045.693.408.173.86.26 1.342.26 1.397 0 2.262-.637 2.782-1.23l-1.187-.904c-.248.297-.841.699-1.583.699-.464 0-.847-.105-1.138-.321a1.588 1.588 0 0 1-.593-.872l-.019-.056h4.915v-.587c0-.451-.08-.872-.235-1.267a3.393 3.393 0 0 0-.661-1.033 3.013 3.013 0 0 0-1.02-.692 3.345 3.345 0 0 0-1.311-.248zm-16.297.118v6.256h1.651v-6.256zm16.278 1.286c1.132 0 1.664.797 1.664 1.255l-3.32.006c0-.458.525-1.255 1.656-1.261zm7.073 3.814a.606.606 0 0 0-.606.606.606.606 0 0 0 .606.606.606.606 0 0 0 .606-.606.606.606 0 0 0-.606-.606zm-.008.105a.5.5 0 0 1 .002 0 .5.5 0 0 1 .5.501.5.5 0 0 1-.5.5.5.5 0 0 1-.5-.5.5.5 0 0 1 .498-.5zm-.233.155v.699h.13v-.285h.093l.173.285h.136l-.18-.297a.191.191 0 0 0 .118-.056c.03-.03.05-.074.05-.136 0-.068-.02-.117-.063-.154-.037-.038-.105-.056-.185-.056zm.13.099h.154c.019 0 .037.006.056.012a.064.064 0 0 1 .037.031c.013.013.012.031.012.056a.124.124 0 0 1-.012.055.164.164 0 0 1-.037.031c-.019.006-.037.013-.056.013h-.154Z"/>
                        </svg>
                        <!-- BYJU'S -->
                        <svg viewBox="0 0 24 24" class="h-3.5 text-[#802B89] fill-current" style="max-width: 45px;">
                            <path d="M2.327.016A2.325 2.325 0 0 0 0 2.34v19.32a2.325 2.325 0 0 0 2.327 2.323h19.346A2.325 2.325 0 0 0 24 21.66V2.34A2.325 2.325 0 0 0 21.673.016zm10.054 3.496a3.443 3.443 0 0 1 .07 0 4.317 4.317 0 0 1 3.267 1.462 4.447 4.447 0 0 1 .961 2.365 4.157 4.157 0 0 1-.456 2.27 5.024 5.024 0 0 1 2.424 2.008 5.237 5.237 0 0 1 .73 3.374 4.68 4.68 0 0 1-1.15 2.466 4.84 4.84 0 0 1-2.26 1.535l-4.987 1.439a1.494 1.494 0 0 1-.41.058 1.497 1.497 0 0 1-1.432-1.075L5.524 6.909a1.487 1.487 0 0 1 1.018-1.841l4.956-1.429a3.443 3.443 0 0 1 .883-.127zm.248.861a3.091 3.091 0 0 0-.855.122L6.94 5.888a.744.744 0 0 0-.51.922l3.53 12.206a.745.745 0 0 0 .921.509l4.664-1.345a4.085 4.085 0 0 0-.896-8.003 3.297 3.297 0 0 0 1.138-2.272 3.479 3.479 0 0 0-.928-2.549 2.989 2.989 0 0 0-2.23-.983Z"/>
                        </svg>
                        <!-- P&G -->
                        <span class="font-serif text-[#003CA5] text-[12px] font-black italic tracking-wide select-none">P&G</span>
                        <!-- US Census Bureau -->
                        <div class="flex items-center gap-1 font-sans text-slate-800 text-[10px] font-bold tracking-tight select-none">
                            <svg viewBox="0 0 24 24" class="w-3 h-3 text-slate-900 fill-current"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>
                            <div class="flex flex-col leading-none text-left">
                                <span class="text-[5px] text-slate-400 font-medium">United States</span>
                                <span class="text-[8px] text-slate-900 font-black">Census</span>
                                <span class="text-[5px] text-slate-400 font-medium">Bureau</span>
                            </div>
                        </div>
                    </div>
                    <p class="text-[9px] text-slate-400 font-medium leading-tight text-center">y muchas organizaciones y empresas.</p>
                </div>
            </div>

            <!-- Ideal si... -->
            <div class="bg-pink-50/50 border border-pink-100/60 rounded-xl p-2 text-xs flex gap-2">
                <i class="fa-solid fa-circle-check text-pink-655 mt-0.5 shrink-0"></i>
                <p class="text-pink-900 font-semibold leading-snug">
                    <span class="font-bold text-pink-950">Ideal si:</span> Necesitas lanzar muy rápido con un diseño profesional, consistente y no requieres cambios estéticos profundos.
                </p>
            </div>
        </div>
    </div>
</div>
`;
