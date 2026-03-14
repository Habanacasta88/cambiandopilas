# cambiandopilas.com — Documentación del Proyecto

## Resumen
- **Dominio**: cambiandopilas.com
- **Nombre**: Cambiando de Pilas
- **Nicho**: Tutoriales de cambio de pilas/baterías (llaves de coche, auriculares, relojes, dispositivos electrónicos)
- **Stack**: Astro SSG + nginx (Docker) + Coolify + Traefik + Let's Encrypt
- **GitHub**: Habanacasta88/cambiandopilas (público)
- **VPS**: 168.119.125.218 | Coolify
- **Fecha migración**: 2026-03-14

## Contenido migrado desde WordPress
- **Posts**: 761
- **Páginas**: 1 (Política de Privacidad)
- **Imágenes originales**: 140 (20.8 MB)
- **Posts con featured image**: 104/761
- **Plugin SEO original**: Ninguno → meta descriptions auto-generadas desde contenido
- **Idioma**: Español

## Categorías
| Categoría | Posts | Slug URL |
|-----------|-------|----------|
| Blog (Llaves de coche) | 474 | /categoria/blog |
| Audi | 75 | /categoria/audi |
| Renault | 67 | /categoria/renault |
| Digital | 60 | /categoria/digital |
| Volkswagen | 41 | /categoria/volkswagen |
| Reloj | 34 | /categoria/reloj |
| Mercedes Benz | 10 | /categoria/mercedes-benz |

## Estructura del proyecto
```
cambiandopilas/
├── src/
│   ├── pages/
│   │   ├── index.astro          # Homepage: hero + categorías + últimos 12 posts
│   │   ├── [slug].astro         # Artículos y páginas individuales
│   │   ├── 404.astro
│   │   ├── blog/
│   │   │   └── [...page].astro  # Blog paginado (24 posts/pág, 32 páginas)
│   │   └── categoria/
│   │       └── [slug].astro     # 7 páginas de categoría
│   ├── layouts/
│   │   └── Base.astro           # Layout principal con header/nav/footer
│   ├── components/
│   │   ├── ArticleCard.astro
│   │   ├── Breadcrumbs.astro
│   │   └── TableOfContents.astro
│   ├── data/
│   │   ├── posts.json           # 761 posts (title, slug, date, body, categories, seoDescription, featuredImage)
│   │   └── pages.json           # 1 página (Política de Privacidad)
│   ├── styles/
│   │   └── global.css
│   └── utils/
│       ├── content.ts           # cleanWpContent, extractHeadings, addHeadingIds, generateExcerpt
│       └── seo.ts               # generateArticleSchema, generateWebSiteSchema, etc.
├── public/
│   ├── images/                  # 140 imágenes
│   ├── robots.txt
│   ├── llms.txt
│   ├── favicon.svg
│   └── favicon.ico
├── astro.config.mjs             # site: 'https://cambiandopilas.com'
├── nginx.conf                   # server_name cambiandopilas.com
├── Dockerfile                   # Multi-stage: node build → nginx serve
├── package.json
└── tsconfig.json
```

## Build
- **803 páginas estáticas** generadas en ~1.1 segundos
- Desglose: 762 contenido (761 posts + 1 page) + 7 categorías + 32 blog paginado + index + 404

## Deploy en Coolify
- **Tipo**: Public Repository → Dockerfile
- **Build Pack**: Dockerfile
- **Dominio**: https://cambiandopilas.com
- **Direction**: Redirect to non-www
- **Ports Exposes**: 80
- **App ID Coolify**: lc4w08wsg400oockck4gg0c4
- **SSL**: Let's Encrypt via Traefik (HTTP-01 challenge)

## DNS Cloudflare (PENDIENTE)
| Tipo | Nombre | Contenido | Proxy |
|------|--------|-----------|-------|
| A | cambiandopilas.com | 168.119.125.218 | Solo DNS (nube gris) |
| A | www | 168.119.125.218 | Solo DNS (nube gris) |

## Diferencias vs otros proyectos migrados
- **Mayor volumen**: 761 posts (vs 21 en ctarut, 3 en reformassantcugat)
- **Paginación**: Blog con rutas estáticas /blog/, /blog/2, ... /blog/32
- **Categorías**: 7 categorías con páginas dedicadas
- **Sin plugin SEO**: Meta descriptions auto-generadas (primeros 155 chars del contenido limpio)
- **Sin formulario de contacto**: Es un blog informativo puro
- **Deploy Coolify UI**: Creado directamente desde el panel (no Docker manual como reformassantcugat)

## Backup original
- Archivo: `cambiandopilas-com-20260314-053728-udh2iex3y7xi.wpress` (135 MB)
- Extraído en: `/dev/Migraciones/cambiandopilas-extract/`
  - `database.sql` (10.1 MB)
  - `posts.json`, `pages.json`
  - `images/` (140 imágenes)

## Notas importantes
- El contenido WordPress no tenía SEO plugin → no hay meta titles/descriptions originales
- Muchos posts no tienen featured image (solo 104 de 761)
- La categoría "Blog" agrupa posts genéricos de llaves de coche (la más grande)
- nginx.conf usa `listen 80 default_server` + `server_name cambiandopilas.com _` para evitar bucle 301
- WordPress redirect: `/wp-content/uploads/` → `/images/` (en nginx.conf)
