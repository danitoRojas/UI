// --- ESTADO GLOBAL DE LA PRESENTACIÓN ---
let currentSlide = 0;
let selectedLibraryName = null;

const slides = [
    {
        title: "", 
        subtitle: "",
        indicatorColor: "bg-slate-900"
    },
    {
        title: "El Dilema del Front-end:",
        subtitle: "Catálogo Visual y Caótico - LEGIE LIBRE UI",
        indicatorColor: "bg-blue-500"
    },
    {
        title: "Nivel 1: Los Primitivos (Control Total)",
        subtitle: "Lógica y accesibilidad pura sin estilos condicionados - Headless UI",
        indicatorColor: "bg-emerald-500"
    },
    {
        title: "Nivel 2: Las Colecciones (El Hibrido)",
        subtitle: "Componentes base (composable) listos para usar y personalizar a tu gusto - Shadcn/ui",
        indicatorColor: "bg-blue-500"
    },
    {
        title: "Nivel 3: Ready-to-Use (Velocidad Extrema)",
        subtitle: "Componentes listos de fábrica con lógica y estilos integrados - Material UI & enterprise kits",
        indicatorColor: "bg-orange-500"
    },
    {
        title: "Nivel 4: Los Estilos (Pura Apariencia)",
        subtitle: "Clases semánticas CSS utilitarias con mínima interactividad lógica - DaisyUI & Flowbite",
        indicatorColor: "bg-purple-500"
    },
    {
        title: "CRITERIOS DE SELECCIÓN",
        subtitle: "Accesibilidad (a11y), Bundle Size y DX en equilibrio flotante",
        indicatorColor: "bg-amber-500"
    },
    {
        title: "EXPLORACIÓN Y DETALLES",
        subtitle: "Haz clic en cualquier badge físico de la pantalla para inspeccionar sus características",
        indicatorColor: "bg-teal-500"
    }
];

// --- DATOS DEL ECOSISTEMA DE LIBRERÍAS DE UI ---
const libraryDetails = {
    'shadcn/ui': {
        name: 'shadcn/ui',
        type: 'Tailwind CSS (Copy-Paste)',
        color: '#0f172a',
        url: 'https://ui.shadcn.com/',
        bestFor: 'Proyectos modernos que requieren control total del código y un diseño impecable sin dependencias de API rígidas.',
        pros: ['Código 100% tuyo', 'Cero dependencias npm', 'Gran estética por defecto'],
        cons: ['Debes actualizar el código tú mismo', 'Requiere Tailwind']
    },
    'Material UI (MUI)': {
        name: 'Material UI (MUI)',
        type: 'Styled Components (React)',
        color: '#007FFF',
        url: 'https://mui.com/',
        bestFor: 'Aplicaciones densas de datos que requieran implementar estrictamente Material Design o tablas y gráficos complejos.',
        pros: ['Ecosistema maduro', 'Componentes de datos avanzados', 'Gran documentación'],
        cons: ['Bundle size pesado', 'Diseño rígido de Google']
    },
    'DaisyUI': {
        name: 'DaisyUI',
        type: 'Tailwind CSS (Basado en Clases)',
        color: '#FFB600',
        url: 'https://daisyui.com/',
        bestFor: 'Prototipado rápido y webs corporativas sumamente ligeras.',
        pros: ['Ultra-ligero y rápido', 'Usa clases tradicionales', 'Muchos temas listos'],
        cons: ['Menos interactividad lógica', 'Dependencia de Tailwind']
    },
    'HeroUI': {
        name: 'HeroUI',
        type: 'Tailwind CSS (React UI)',
        color: '#FF4ECD',
        url: 'https://heroui.com/',
        bestFor: 'SaaS modernas que buscan animaciones sumamente fluidas y diseño premium por defecto.',
        pros: ['Look premium impactante', 'Animaciones fluidas nativas', 'Listo para RSC'],
        cons: ['Depende de Framer Motion', 'Menos componentes de datos']
    },
    'Mantine': {
        name: 'Mantine',
        type: 'React Component Library',
        color: '#228be6',
        url: 'https://mantine.dev/',
        bestFor: 'Dashboards de administración complejos y SaaS con formularios interactivos de alta complejidad.',
        pros: ['100+ componentes e hooks', 'Excelente TypeScript', 'Editor de temas potente'],
        cons: ['Requiere su motor CSS']
    },
    'Ant Design': {
        name: 'Ant Design',
        type: 'Enterprise UI System',
        color: '#1677ff',
        url: 'https://ant.design/',
        bestFor: 'Herramientas de gestión interna y dashboards densos en datos.',
        pros: ['Perfecto para dashboards', 'Tablas hiperpotentes', 'Diseño consistente'],
        cons: ['Estética corporativa rígida', 'Pesado en bundle']
    },
    'Radix UI': {
        name: 'Radix UI',
        type: 'Headless (Sin Estilo)',
        color: '#6e56cf',
        url: 'https://www.radix-ui.com/',
        bestFor: 'Sistemas de diseño customizados y librerías internas que exigen accesibilidad óptima y libertad visual total.',
        pros: ['Accesibilidad WAI-ARIA', 'Cero estilos obligatorios', 'Excelente control de foco'],
        cons: ['Debes estilar todo tú mismo']
    },
    'Tailwind UI': {
        name: 'Tailwind UI',
        type: 'Tailwind Templates',
        color: '#38bdf8',
        url: 'https://tailwindui.com/',
        bestFor: 'Landing pages de alta calidad y layouts rápidos copiando patrones de los creadores oficiales.',
        pros: ['Oficial de Tailwind', 'Código semántico y limpio', 'Diseños muy estéticos'],
        cons: ['Licencia de pago', 'Copiar-pegar, no es npm']
    },
    'Flowbite': {
        name: 'Flowbite',
        type: 'Tailwind CSS Suite',
        color: '#1A56DB',
        url: 'https://flowbite.com/',
        bestFor: 'Proyectos backend (Laravel, Django) que necesitan componentes listos interactivos.',
        pros: ['Catálogo de bloques gigante', 'Multi-framework', 'Uso rápido'],
        cons: ['JS nativo puede colisionar']
    },
    'Ark / Park UI': {
        name: 'Ark / Park UI',
        type: 'Headless Multi-Framework',
        color: '#10b981',
        url: 'https://park-ui.com/',
        bestFor: 'Proyectos multi-framework (React, Vue, Solid) que quieren compartir la lógica del componente accesible.',
        pros: ['Multi-framework', 'Basado en Zag.js', 'Headless y accesible'],
        cons: ['Comunidad pequeña aún']
    }
};

const libraryList = Object.keys(libraryDetails);

// --- PRE-CARGA DE LOGOTIPOS OFICIALES (SIMPLE ICONS) ---
const logoUrls = {
    'shadcn/ui': 'https://cdn.simpleicons.org/shadcnui/000000',
    'Material UI (MUI)': 'https://cdn.simpleicons.org/mui/007FFF',
    'DaisyUI': 'https://cdn.simpleicons.org/daisyui/FFB600',
    'HeroUI': 'https://cdn.simpleicons.org/nextdotjs/000000',
    'Mantine': 'https://cdn.simpleicons.org/mantine/339af0',
    'Ant Design': 'https://cdn.simpleicons.org/antdesign/1677ff',
    'Radix UI': 'https://cdn.simpleicons.org/radixui/6e56cf',
    'Tailwind UI': 'https://cdn.simpleicons.org/tailwindcss/38bdf8',
    'Flowbite': 'https://cdn.simpleicons.org/flowbite/1A56DB'
};

const logoImages = {};
Object.entries(logoUrls).forEach(([name, url]) => {
    const img = new Image();
    img.src = url;
    logoImages[name] = img;
});

// Dibujos vectoriales fallback (si falla la carga de Simple Icons)
const logoDrawers = {
    'shadcn/ui': (ctx, x, y, size) => {
        ctx.fillStyle = '#0f172a';
        ctx.beginPath();
        ctx.arc(x, y, size/2, 0, Math.PI * 2);
        ctx.fill();
        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = size * 0.15;
        ctx.beginPath();
        ctx.moveTo(x - size*0.23, y + size*0.23);
        ctx.lineTo(x + size*0.23, y - size*0.23);
        ctx.stroke();
    },
    'Material UI (MUI)': (ctx, x, y, size) => {
        ctx.fillStyle = '#007FFF';
        ctx.beginPath();
        for (let i = 0; i < 6; i++) {
            const angle = (i * Math.PI) / 3;
            const px = x + Math.cos(angle) * (size/2);
            const py = y + Math.sin(angle) * (size/2);
            if (i === 0) ctx.moveTo(px, py);
            else ctx.lineTo(px, py);
        }
        ctx.closePath();
        ctx.fill();
        ctx.fillStyle = '#ffffff';
        ctx.font = `900 ${size * 0.42}px "Inter", sans-serif`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText('M', x, y);
    },
    'DaisyUI': (ctx, x, y, size) => {
        ctx.fillStyle = '#FFB600';
        ctx.beginPath();
        ctx.arc(x, y, size/4, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = '#ffffff';
        for (let i = 0; i < 8; i++) {
            const angle = (i * Math.PI) / 4;
            const px = x + Math.cos(angle) * (size/3.4);
            const py = y + Math.sin(angle) * (size/3.4);
            ctx.beginPath();
            ctx.arc(px, py, size/8, 0, Math.PI*2);
            ctx.fill();
        }
        ctx.fillStyle = '#1e293b';
        ctx.beginPath();
        ctx.arc(x, y, size/5, 0, Math.PI * 2);
        ctx.fill();
    },
    'HeroUI': (ctx, x, y, size) => {
        const grad = ctx.createLinearGradient(x - size/2, y - size/2, x + size/2, y + size/2);
        grad.addColorStop(0, '#FF4ECD');
        grad.addColorStop(1, '#0070F3');
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(x, y, size/2, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = '#ffffff';
        ctx.font = `900 ${size * 0.45}px "Inter", sans-serif`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText('H', x, y);
    },
    'Mantine': (ctx, x, y, size) => {
        ctx.fillStyle = '#228be6';
        ctx.beginPath();
        ctx.moveTo(x - size*0.4, y - size*0.4);
        ctx.lineTo(x + size*0.4, y - size*0.4);
        ctx.lineTo(x + size*0.4, y);
        ctx.quadraticCurveTo(x + size*0.4, y + size*0.4, x, y + size*0.5);
        ctx.quadraticCurveTo(x - size*0.4, y + size*0.4, x - size*0.4, y);
        ctx.closePath();
        ctx.fill();
        ctx.fillStyle = '#ffffff';
        ctx.font = `italic 900 ${size * 0.45}px "Inter", sans-serif`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText('M', x, y - size*0.05);
    },
    'Ant Design': (ctx, x, y, size) => {
        ctx.fillStyle = '#1677ff';
        ctx.beginPath();
        ctx.moveTo(x, y - size/2);
        ctx.lineTo(x + size/2, y);
        ctx.lineTo(x, y + size/2);
        ctx.lineTo(x - size/2, y);
        ctx.closePath();
        ctx.fill();
        ctx.fillStyle = '#ffffff';
        ctx.beginPath();
        ctx.arc(x, y, size/4, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = '#1677ff';
        ctx.beginPath();
        ctx.arc(x, y, size/6, 0, Math.PI * 2);
        ctx.fill();
    },
    'Radix UI': (ctx, x, y, size) => {
        ctx.fillStyle = '#6e56cf';
        ctx.beginPath();
        ctx.arc(x, y, size/2, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = '#ffffff';
        ctx.beginPath();
        ctx.arc(x - size*0.16, y, size*0.12, 0, Math.PI*2);
        ctx.fill();
        ctx.fillRect(x + size*0.04, y - size*0.16, size*0.18, size*0.18);
        ctx.beginPath();
        ctx.arc(x + size*0.13, y + size*0.13, size*0.12, 0, Math.PI/2);
        ctx.lineTo(x + size*0.13, y + size*0.13);
        ctx.closePath();
        ctx.fill();
    },
    'Tailwind UI': (ctx, x, y, size) => {
        ctx.fillStyle = '#38bdf8';
        ctx.beginPath();
        ctx.arc(x, y, size/2, 0, Math.PI * 2);
        ctx.fill();
        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = size * 0.1;
        ctx.lineCap = 'round';
        ctx.beginPath();
        ctx.moveTo(x - size*0.28, y - size*0.1);
        ctx.quadraticCurveTo(x - size*0.1, y - size*0.28, x, y - size*0.1);
        ctx.quadraticCurveTo(x + size*0.1, y + size*0.08, x + size*0.28, y - size*0.1);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(x - size*0.28, y + size*0.1);
        ctx.quadraticCurveTo(x - size*0.1, y - size*0.08, x, y + size*0.1);
        ctx.quadraticCurveTo(x + size*0.1, y + size*0.28, x + size*0.28, y + size*0.1);
        ctx.stroke();
    },
    'Flowbite': (ctx, x, y, size) => {
        ctx.fillStyle = '#1A56DB';
        ctx.beginPath();
        ctx.arc(x, y, size/2, 0, Math.PI*2);
        ctx.fill();
        ctx.fillStyle = '#ffffff';
        ctx.font = `italic 900 ${size * 0.55}px "Inter", sans-serif`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText('F', x - size*0.05, y);
    },
    'Ark / Park UI': (ctx, x, y, size) => {
        ctx.fillStyle = '#10b981';
        ctx.beginPath();
        ctx.arc(x, y, size/2, 0, Math.PI*2);
        ctx.fill();
        ctx.fillStyle = '#090d16';
        ctx.beginPath();
        ctx.moveTo(x, y - size*0.3);
        ctx.quadraticCurveTo(x + size*0.3, y, x, y + size*0.3);
        ctx.quadraticCurveTo(x - size*0.3, y, x, y - size*0.3);
        ctx.fill();
        ctx.fillStyle = '#ffffff';
        ctx.beginPath();
        ctx.arc(x, y, size*0.08, 0, Math.PI*2);
        ctx.fill();
    }
};
