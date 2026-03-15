# SEO Expansion Design — cambiandopilas.com
Date: 2026-03-15

## Objetivo
Maximizar tráfico orgánico y visibilidad en AI Search (GEO) mediante páginas programáticas, nuevas páginas de marca, comparativas y mejoras de UX.

## Prioridades por impacto SEO

### 1. Páginas programáticas `/pila-para/[marca]/[modelo]/` (★★★★★)
~150 páginas estáticas Astro generadas desde un archivo de datos `src/data/car-batteries.ts`.

**Estructura de datos:**
```ts
type CarBatteryEntry = {
  marca: string;       // "Ford"
  modelo: string;      // "Focus"
  slug: string;        // "ford/focus"
  pila: string;        // "CR2032"
  anos?: string;       // "2011-2023"
  notas?: string;      // "Para modelos con llave plegable"
  amazon: string;      // URL afiliado Amazon
};
```

**Marcas cubiertas (~15):** Audi, BMW, Citroën, Dacia, Ford, Honda, Hyundai, Kia, Mazda, Mercedes-Benz, Nissan, Opel, Peugeot, Renault, SEAT, Skoda, Toyota, Volkswagen, Volvo

**Por cada página:**
- H1: "Pila llave {Marca} {Modelo}: qué pila necesitas y cómo cambiarla"
- Specs de la pila (tipo, voltaje, diámetro)
- Instrucciones de cambio en 4 pasos (schema HowTo)
- CTA afiliado Amazon
- FAQ específica del modelo (schema FAQPage)
- BreadcrumbList: Inicio → Marca → Modelo
- Internal links a la página de marca y a /tipos-de-pilas/

**Ruta Astro:** `src/pages/pila-para/[...slug].astro` con `getStaticPaths()` desde `car-batteries.ts`

### 2. Nuevas páginas de marca `/marca/[brand]` (★★★★)
Añadir 6 marcas a `src/pages/marca/[brand].astro`:
- Toyota, Ford, BMW, SEAT, Peugeot, Nissan
- Actualizar homepage brand grid y footer

### 3. Páginas comparativas `/comparar/[slug].astro` (★★★★)
3 comparativas iniciales:
- `/comparar/cr2032-vs-cr2025/`
- `/comparar/cr2016-vs-cr2032/`
- `/comparar/cr2025-vs-cr2016/`

Contenido: tabla side-by-side specs, coches compatibles con cada pila, cuándo usar cada una, FAQ, schema FAQPage.

### 4. Configurador widget → redirect (★★★)
Página `/que-pila-usa-mi-coche/` con 2 selects (Marca → Modelo) que redirigen a `/pila-para/[marca]/[modelo]/`. No genera contenido nuevo, aprovecha las páginas programáticas.

### 5. Sitemap HTML `/mapa-del-sitio/` (★★)
Página estática listando todas las páginas agrupadas por sección.

### 6. Blog filter client-side + Font preload (★)
- Input visible en `/blog` que filtra via JS desde `search-index.json`
- `<link rel="preload">` para Inter Variable WOFF2 en Base.astro

## Archivos a crear/modificar
- **Crear:** `src/data/car-batteries.ts`
- **Crear:** `src/pages/pila-para/[...slug].astro`
- **Crear:** `src/pages/comparar/[slug].astro`
- **Crear:** `src/pages/que-pila-usa-mi-coche.astro`
- **Crear:** `src/pages/mapa-del-sitio.astro`
- **Modificar:** `src/pages/marca/[brand].astro` (+ 6 marcas)
- **Modificar:** `src/pages/index.astro` (+ brand grid ampliado)
- **Modificar:** `src/layouts/Base.astro` (+ footer links, + font preload)
- **Modificar:** `src/pages/blog/[...page].astro` (+ search filter)

## Output esperado
Build actual: ~839 páginas → Build objetivo: ~1000+ páginas
