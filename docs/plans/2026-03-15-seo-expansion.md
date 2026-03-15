# SEO Expansion Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Add ~150 programmatic static pages `/pila-para/[marca]/[modelo]/`, 6 new brand pages, 3 comparative pages, a configurator widget, HTML sitemap, blog search filter, and font preload.

**Architecture:** All pages are static Astro SSG generated at build time from `src/data/car-batteries.ts`. The programmatic pages use `[...slug].astro` with `getStaticPaths()`. No client-side framework, vanilla JS only where needed.

**Tech Stack:** Astro SSG, TypeScript, vanilla JS, Schema.org (HowTo + FAQPage + BreadcrumbList)

---

### Task 1: Create car-batteries data file

**Files:**
- Create: `src/data/car-batteries.ts`

**Step 1: Create the file with all ~150 models**

```typescript
export type CarBatteryEntry = {
  marca: string;
  marcaSlug: string;
  modelo: string;
  modeloSlug: string;
  pila: string;
  anos?: string;
  notas?: string;
  amazon: string;
};

export const carBatteries: CarBatteryEntry[] = [
  // AUDI
  { marca: 'Audi', marcaSlug: 'audi', modelo: 'A1', modeloSlug: 'a1', pila: 'CR2032', anos: '2010–2022', amazon: 'https://www.amazon.es/s?k=pila+cr2032&tag=enjoys0d-21' },
  { marca: 'Audi', marcaSlug: 'audi', modelo: 'A3', modeloSlug: 'a3', pila: 'CR2032', anos: '2003–2024', amazon: 'https://www.amazon.es/s?k=pila+cr2032&tag=enjoys0d-21' },
  { marca: 'Audi', marcaSlug: 'audi', modelo: 'A4', modeloSlug: 'a4', pila: 'CR2032', anos: '2000–2024', amazon: 'https://www.amazon.es/s?k=pila+cr2032&tag=enjoys0d-21' },
  { marca: 'Audi', marcaSlug: 'audi', modelo: 'A5', modeloSlug: 'a5', pila: 'CR2032', anos: '2007–2024', amazon: 'https://www.amazon.es/s?k=pila+cr2032&tag=enjoys0d-21' },
  { marca: 'Audi', marcaSlug: 'audi', modelo: 'A6', modeloSlug: 'a6', pila: 'CR2032', anos: '1997–2024', amazon: 'https://www.amazon.es/s?k=pila+cr2032&tag=enjoys0d-21' },
  { marca: 'Audi', marcaSlug: 'audi', modelo: 'A7', modeloSlug: 'a7', pila: 'CR2032', anos: '2010–2024', amazon: 'https://www.amazon.es/s?k=pila+cr2032&tag=enjoys0d-21' },
  { marca: 'Audi', marcaSlug: 'audi', modelo: 'A8', modeloSlug: 'a8', pila: 'CR2032', anos: '2002–2024', notas: 'Algunos modelos D5 usan CR1620', amazon: 'https://www.amazon.es/s?k=pila+cr2032&tag=enjoys0d-21' },
  { marca: 'Audi', marcaSlug: 'audi', modelo: 'Q2', modeloSlug: 'q2', pila: 'CR2032', anos: '2016–2024', amazon: 'https://www.amazon.es/s?k=pila+cr2032&tag=enjoys0d-21' },
  { marca: 'Audi', marcaSlug: 'audi', modelo: 'Q3', modeloSlug: 'q3', pila: 'CR2032', anos: '2011–2024', amazon: 'https://www.amazon.es/s?k=pila+cr2032&tag=enjoys0d-21' },
  { marca: 'Audi', marcaSlug: 'audi', modelo: 'Q5', modeloSlug: 'q5', pila: 'CR2032', anos: '2008–2024', amazon: 'https://www.amazon.es/s?k=pila+cr2032&tag=enjoys0d-21' },
  { marca: 'Audi', marcaSlug: 'audi', modelo: 'Q7', modeloSlug: 'q7', pila: 'CR2032', anos: '2005–2024', amazon: 'https://www.amazon.es/s?k=pila+cr2032&tag=enjoys0d-21' },
  { marca: 'Audi', marcaSlug: 'audi', modelo: 'Q8', modeloSlug: 'q8', pila: 'CR2032', anos: '2018–2024', amazon: 'https://www.amazon.es/s?k=pila+cr2032&tag=enjoys0d-21' },
  { marca: 'Audi', marcaSlug: 'audi', modelo: 'TT', modeloSlug: 'tt', pila: 'CR2032', anos: '1998–2023', amazon: 'https://www.amazon.es/s?k=pila+cr2032&tag=enjoys0d-21' },
  { marca: 'Audi', marcaSlug: 'audi', modelo: 'e-tron', modeloSlug: 'e-tron', pila: 'CR2032', notas: 'Llave-tarjeta', amazon: 'https://www.amazon.es/s?k=pila+cr2032&tag=enjoys0d-21' },
  // BMW
  { marca: 'BMW', marcaSlug: 'bmw', modelo: 'Serie 1', modeloSlug: 'serie-1', pila: 'CR2032', anos: '2004–2024', amazon: 'https://www.amazon.es/s?k=pila+cr2032&tag=enjoys0d-21' },
  { marca: 'BMW', marcaSlug: 'bmw', modelo: 'Serie 2', modeloSlug: 'serie-2', pila: 'CR2032', anos: '2014–2024', amazon: 'https://www.amazon.es/s?k=pila+cr2032&tag=enjoys0d-21' },
  { marca: 'BMW', marcaSlug: 'bmw', modelo: 'Serie 3', modeloSlug: 'serie-3', pila: 'CR2032', anos: '1998–2024', amazon: 'https://www.amazon.es/s?k=pila+cr2032&tag=enjoys0d-21' },
  { marca: 'BMW', marcaSlug: 'bmw', modelo: 'Serie 4', modeloSlug: 'serie-4', pila: 'CR2032', anos: '2013–2024', amazon: 'https://www.amazon.es/s?k=pila+cr2032&tag=enjoys0d-21' },
  { marca: 'BMW', marcaSlug: 'bmw', modelo: 'Serie 5', modeloSlug: 'serie-5', pila: 'CR2032', anos: '2003–2024', amazon: 'https://www.amazon.es/s?k=pila+cr2032&tag=enjoys0d-21' },
  { marca: 'BMW', marcaSlug: 'bmw', modelo: 'Serie 7', modeloSlug: 'serie-7', pila: 'CR2450', anos: '2001–2024', notas: 'iDrive/llave avanzada', amazon: 'https://www.amazon.es/s?k=pila+cr2450&tag=enjoys0d-21' },
  { marca: 'BMW', marcaSlug: 'bmw', modelo: 'X1', modeloSlug: 'x1', pila: 'CR2032', anos: '2009–2024', amazon: 'https://www.amazon.es/s?k=pila+cr2032&tag=enjoys0d-21' },
  { marca: 'BMW', marcaSlug: 'bmw', modelo: 'X3', modeloSlug: 'x3', pila: 'CR2032', anos: '2003–2024', amazon: 'https://www.amazon.es/s?k=pila+cr2032&tag=enjoys0d-21' },
  { marca: 'BMW', marcaSlug: 'bmw', modelo: 'X5', modeloSlug: 'x5', pila: 'CR2032', anos: '1999–2024', amazon: 'https://www.amazon.es/s?k=pila+cr2032&tag=enjoys0d-21' },
  { marca: 'BMW', marcaSlug: 'bmw', modelo: 'MINI Cooper', modeloSlug: 'mini-cooper', pila: 'CR2032', anos: '2001–2024', amazon: 'https://www.amazon.es/s?k=pila+cr2032&tag=enjoys0d-21' },
  // CITROËN
  { marca: 'Citroën', marcaSlug: 'citroen', modelo: 'C1', modeloSlug: 'c1', pila: 'CR2032', anos: '2005–2022', amazon: 'https://www.amazon.es/s?k=pila+cr2032&tag=enjoys0d-21' },
  { marca: 'Citroën', marcaSlug: 'citroen', modelo: 'C3', modeloSlug: 'c3', pila: 'CR2032', anos: '2002–2024', amazon: 'https://www.amazon.es/s?k=pila+cr2032&tag=enjoys0d-21' },
  { marca: 'Citroën', marcaSlug: 'citroen', modelo: 'C4', modeloSlug: 'c4', pila: 'CR2032', anos: '2004–2024', amazon: 'https://www.amazon.es/s?k=pila+cr2032&tag=enjoys0d-21' },
  { marca: 'Citroën', marcaSlug: 'citroen', modelo: 'C5', modeloSlug: 'c5', pila: 'CR2032', anos: '2001–2022', amazon: 'https://www.amazon.es/s?k=pila+cr2032&tag=enjoys0d-21' },
  { marca: 'Citroën', marcaSlug: 'citroen', modelo: 'C5 Aircross', modeloSlug: 'c5-aircross', pila: 'CR2032', anos: '2018–2024', amazon: 'https://www.amazon.es/s?k=pila+cr2032&tag=enjoys0d-21' },
  { marca: 'Citroën', marcaSlug: 'citroen', modelo: 'Berlingo', modeloSlug: 'berlingo', pila: 'CR2032', anos: '1996–2024', amazon: 'https://www.amazon.es/s?k=pila+cr2032&tag=enjoys0d-21' },
  // DACIA
  { marca: 'Dacia', marcaSlug: 'dacia', modelo: 'Sandero', modeloSlug: 'sandero', pila: 'CR2032', anos: '2008–2024', amazon: 'https://www.amazon.es/s?k=pila+cr2032&tag=enjoys0d-21' },
  { marca: 'Dacia', marcaSlug: 'dacia', modelo: 'Duster', modeloSlug: 'duster', pila: 'CR2032', anos: '2010–2024', amazon: 'https://www.amazon.es/s?k=pila+cr2032&tag=enjoys0d-21' },
  { marca: 'Dacia', marcaSlug: 'dacia', modelo: 'Logan', modeloSlug: 'logan', pila: 'CR2032', anos: '2004–2024', amazon: 'https://www.amazon.es/s?k=pila+cr2032&tag=enjoys0d-21' },
  { marca: 'Dacia', marcaSlug: 'dacia', modelo: 'Spring', modeloSlug: 'spring', pila: 'CR2032', anos: '2021–2024', notas: 'Eléctrico', amazon: 'https://www.amazon.es/s?k=pila+cr2032&tag=enjoys0d-21' },
  { marca: 'Dacia', marcaSlug: 'dacia', modelo: 'Jogger', modeloSlug: 'jogger', pila: 'CR2032', anos: '2021–2024', amazon: 'https://www.amazon.es/s?k=pila+cr2032&tag=enjoys0d-21' },
  // FORD
  { marca: 'Ford', marcaSlug: 'ford', modelo: 'Fiesta', modeloSlug: 'fiesta', pila: 'CR2032', anos: '2002–2023', amazon: 'https://www.amazon.es/s?k=pila+cr2032&tag=enjoys0d-21' },
  { marca: 'Ford', marcaSlug: 'ford', modelo: 'Focus', modeloSlug: 'focus', pila: 'CR2032', anos: '2004–2024', amazon: 'https://www.amazon.es/s?k=pila+cr2032&tag=enjoys0d-21' },
  { marca: 'Ford', marcaSlug: 'ford', modelo: 'Mondeo', modeloSlug: 'mondeo', pila: 'CR2032', anos: '2000–2022', amazon: 'https://www.amazon.es/s?k=pila+cr2032&tag=enjoys0d-21' },
  { marca: 'Ford', marcaSlug: 'ford', modelo: 'Kuga', modeloSlug: 'kuga', pila: 'CR2032', anos: '2008–2024', amazon: 'https://www.amazon.es/s?k=pila+cr2032&tag=enjoys0d-21' },
  { marca: 'Ford', marcaSlug: 'ford', modelo: 'EcoSport', modeloSlug: 'ecosport', pila: 'CR2032', anos: '2013–2022', amazon: 'https://www.amazon.es/s?k=pila+cr2032&tag=enjoys0d-21' },
  { marca: 'Ford', marcaSlug: 'ford', modelo: 'Puma', modeloSlug: 'puma', pila: 'CR2032', anos: '2019–2024', amazon: 'https://www.amazon.es/s?k=pila+cr2032&tag=enjoys0d-21' },
  { marca: 'Ford', marcaSlug: 'ford', modelo: 'Transit', modeloSlug: 'transit', pila: 'CR2032', anos: '2006–2024', amazon: 'https://www.amazon.es/s?k=pila+cr2032&tag=enjoys0d-21' },
  { marca: 'Ford', marcaSlug: 'ford', modelo: 'Galaxy', modeloSlug: 'galaxy', pila: 'CR2032', anos: '2006–2024', amazon: 'https://www.amazon.es/s?k=pila+cr2032&tag=enjoys0d-21' },
  // HONDA
  { marca: 'Honda', marcaSlug: 'honda', modelo: 'Civic', modeloSlug: 'civic', pila: 'CR2032', anos: '2005–2024', amazon: 'https://www.amazon.es/s?k=pila+cr2032&tag=enjoys0d-21' },
  { marca: 'Honda', marcaSlug: 'honda', modelo: 'CR-V', modeloSlug: 'cr-v', pila: 'CR2032', anos: '2006–2024', amazon: 'https://www.amazon.es/s?k=pila+cr2032&tag=enjoys0d-21' },
  { marca: 'Honda', marcaSlug: 'honda', modelo: 'Jazz', modeloSlug: 'jazz', pila: 'CR2032', anos: '2001–2024', amazon: 'https://www.amazon.es/s?k=pila+cr2032&tag=enjoys0d-21' },
  { marca: 'Honda', marcaSlug: 'honda', modelo: 'HR-V', modeloSlug: 'hr-v', pila: 'CR2032', anos: '2015–2024', amazon: 'https://www.amazon.es/s?k=pila+cr2032&tag=enjoys0d-21' },
  { marca: 'Honda', marcaSlug: 'honda', modelo: 'Accord', modeloSlug: 'accord', pila: 'CR2016', anos: '2002–2022', amazon: 'https://www.amazon.es/s?k=pila+cr2016&tag=enjoys0d-21' },
  // HYUNDAI
  { marca: 'Hyundai', marcaSlug: 'hyundai', modelo: 'i20', modeloSlug: 'i20', pila: 'CR2032', anos: '2008–2024', amazon: 'https://www.amazon.es/s?k=pila+cr2032&tag=enjoys0d-21' },
  { marca: 'Hyundai', marcaSlug: 'hyundai', modelo: 'i30', modeloSlug: 'i30', pila: 'CR2032', anos: '2007–2024', amazon: 'https://www.amazon.es/s?k=pila+cr2032&tag=enjoys0d-21' },
  { marca: 'Hyundai', marcaSlug: 'hyundai', modelo: 'Tucson', modeloSlug: 'tucson', pila: 'CR1632', anos: '2004–2024', amazon: 'https://www.amazon.es/s?k=pila+cr1632&tag=enjoys0d-21' },
  { marca: 'Hyundai', marcaSlug: 'hyundai', modelo: 'Santa Fe', modeloSlug: 'santa-fe', pila: 'CR2032', anos: '2006–2024', amazon: 'https://www.amazon.es/s?k=pila+cr2032&tag=enjoys0d-21' },
  { marca: 'Hyundai', marcaSlug: 'hyundai', modelo: 'Ioniq', modeloSlug: 'ioniq', pila: 'CR2032', anos: '2016–2024', amazon: 'https://www.amazon.es/s?k=pila+cr2032&tag=enjoys0d-21' },
  { marca: 'Hyundai', marcaSlug: 'hyundai', modelo: 'Kona', modeloSlug: 'kona', pila: 'CR2032', anos: '2017–2024', amazon: 'https://www.amazon.es/s?k=pila+cr2032&tag=enjoys0d-21' },
  // KIA
  { marca: 'Kia', marcaSlug: 'kia', modelo: 'Ceed', modeloSlug: 'ceed', pila: 'CR2032', anos: '2006–2024', amazon: 'https://www.amazon.es/s?k=pila+cr2032&tag=enjoys0d-21' },
  { marca: 'Kia', marcaSlug: 'kia', modelo: 'Sportage', modeloSlug: 'sportage', pila: 'CR2032', anos: '2004–2024', amazon: 'https://www.amazon.es/s?k=pila+cr2032&tag=enjoys0d-21' },
  { marca: 'Kia', marcaSlug: 'kia', modelo: 'Sorento', modeloSlug: 'sorento', pila: 'CR1632', anos: '2002–2024', amazon: 'https://www.amazon.es/s?k=pila+cr1632&tag=enjoys0d-21' },
  { marca: 'Kia', marcaSlug: 'kia', modelo: 'Stonic', modeloSlug: 'stonic', pila: 'CR2032', anos: '2017–2024', amazon: 'https://www.amazon.es/s?k=pila+cr2032&tag=enjoys0d-21' },
  { marca: 'Kia', marcaSlug: 'kia', modelo: 'Niro', modeloSlug: 'niro', pila: 'CR2032', anos: '2016–2024', amazon: 'https://www.amazon.es/s?k=pila+cr2032&tag=enjoys0d-21' },
  { marca: 'Kia', marcaSlug: 'kia', modelo: 'Picanto', modeloSlug: 'picanto', pila: 'CR2032', anos: '2004–2024', amazon: 'https://www.amazon.es/s?k=pila+cr2032&tag=enjoys0d-21' },
  // MAZDA
  { marca: 'Mazda', marcaSlug: 'mazda', modelo: 'Mazda 2', modeloSlug: 'mazda-2', pila: 'CR2016', anos: '2007–2024', amazon: 'https://www.amazon.es/s?k=pila+cr2016&tag=enjoys0d-21' },
  { marca: 'Mazda', marcaSlug: 'mazda', modelo: 'Mazda 3', modeloSlug: 'mazda-3', pila: 'CR2032', anos: '2003–2024', amazon: 'https://www.amazon.es/s?k=pila+cr2032&tag=enjoys0d-21' },
  { marca: 'Mazda', marcaSlug: 'mazda', modelo: 'Mazda 6', modeloSlug: 'mazda-6', pila: 'CR2032', anos: '2002–2023', amazon: 'https://www.amazon.es/s?k=pila+cr2032&tag=enjoys0d-21' },
  { marca: 'Mazda', marcaSlug: 'mazda', modelo: 'CX-3', modeloSlug: 'cx-3', pila: 'CR2032', anos: '2015–2023', amazon: 'https://www.amazon.es/s?k=pila+cr2032&tag=enjoys0d-21' },
  { marca: 'Mazda', marcaSlug: 'mazda', modelo: 'CX-5', modeloSlug: 'cx-5', pila: 'CR2032', anos: '2012–2024', amazon: 'https://www.amazon.es/s?k=pila+cr2032&tag=enjoys0d-21' },
  // MERCEDES-BENZ
  { marca: 'Mercedes-Benz', marcaSlug: 'mercedes', modelo: 'Clase A', modeloSlug: 'clase-a', pila: 'CR2025', anos: '1997–2024', amazon: 'https://www.amazon.es/s?k=pila+cr2025&tag=enjoys0d-21' },
  { marca: 'Mercedes-Benz', marcaSlug: 'mercedes', modelo: 'Clase B', modeloSlug: 'clase-b', pila: 'CR2025', anos: '2005–2024', amazon: 'https://www.amazon.es/s?k=pila+cr2025&tag=enjoys0d-21' },
  { marca: 'Mercedes-Benz', marcaSlug: 'mercedes', modelo: 'Clase C', modeloSlug: 'clase-c', pila: 'CR2025', anos: '2000–2024', amazon: 'https://www.amazon.es/s?k=pila+cr2025&tag=enjoys0d-21' },
  { marca: 'Mercedes-Benz', marcaSlug: 'mercedes', modelo: 'Clase E', modeloSlug: 'clase-e', pila: 'CR2025', anos: '1995–2024', amazon: 'https://www.amazon.es/s?k=pila+cr2025&tag=enjoys0d-21' },
  { marca: 'Mercedes-Benz', marcaSlug: 'mercedes', modelo: 'Clase S', modeloSlug: 'clase-s', pila: 'CR2032', anos: '1998–2024', amazon: 'https://www.amazon.es/s?k=pila+cr2032&tag=enjoys0d-21' },
  { marca: 'Mercedes-Benz', marcaSlug: 'mercedes', modelo: 'GLA', modeloSlug: 'gla', pila: 'CR2025', anos: '2013–2024', amazon: 'https://www.amazon.es/s?k=pila+cr2025&tag=enjoys0d-21' },
  { marca: 'Mercedes-Benz', marcaSlug: 'mercedes', modelo: 'GLC', modeloSlug: 'glc', pila: 'CR2025', anos: '2015–2024', amazon: 'https://www.amazon.es/s?k=pila+cr2025&tag=enjoys0d-21' },
  { marca: 'Mercedes-Benz', marcaSlug: 'mercedes', modelo: 'GLE', modeloSlug: 'gle', pila: 'CR2025', anos: '2011–2024', amazon: 'https://www.amazon.es/s?k=pila+cr2025&tag=enjoys0d-21' },
  { marca: 'Mercedes-Benz', marcaSlug: 'mercedes', modelo: 'CLA', modeloSlug: 'cla', pila: 'CR2025', anos: '2013–2024', amazon: 'https://www.amazon.es/s?k=pila+cr2025&tag=enjoys0d-21' },
  { marca: 'Mercedes-Benz', marcaSlug: 'mercedes', modelo: 'Sprinter', modeloSlug: 'sprinter', pila: 'CR2032', anos: '2000–2024', amazon: 'https://www.amazon.es/s?k=pila+cr2032&tag=enjoys0d-21' },
  // NISSAN
  { marca: 'Nissan', marcaSlug: 'nissan', modelo: 'Micra', modeloSlug: 'micra', pila: 'CR2032', anos: '2002–2024', amazon: 'https://www.amazon.es/s?k=pila+cr2032&tag=enjoys0d-21' },
  { marca: 'Nissan', marcaSlug: 'nissan', modelo: 'Qashqai', modeloSlug: 'qashqai', pila: 'CR2032', anos: '2006–2024', amazon: 'https://www.amazon.es/s?k=pila+cr2032&tag=enjoys0d-21' },
  { marca: 'Nissan', marcaSlug: 'nissan', modelo: 'Juke', modeloSlug: 'juke', pila: 'CR2032', anos: '2010–2024', amazon: 'https://www.amazon.es/s?k=pila+cr2032&tag=enjoys0d-21' },
  { marca: 'Nissan', marcaSlug: 'nissan', modelo: 'Note', modeloSlug: 'note', pila: 'CR2032', anos: '2005–2024', amazon: 'https://www.amazon.es/s?k=pila+cr2032&tag=enjoys0d-21' },
  { marca: 'Nissan', marcaSlug: 'nissan', modelo: 'Leaf', modeloSlug: 'leaf', pila: 'CR2032', anos: '2010–2024', notas: 'Eléctrico', amazon: 'https://www.amazon.es/s?k=pila+cr2032&tag=enjoys0d-21' },
  { marca: 'Nissan', marcaSlug: 'nissan', modelo: 'X-Trail', modeloSlug: 'x-trail', pila: 'CR2032', anos: '2001–2024', amazon: 'https://www.amazon.es/s?k=pila+cr2032&tag=enjoys0d-21' },
  { marca: 'Nissan', marcaSlug: 'nissan', modelo: 'Navara', modeloSlug: 'navara', pila: 'CR2032', anos: '2005–2024', amazon: 'https://www.amazon.es/s?k=pila+cr2032&tag=enjoys0d-21' },
  // OPEL
  { marca: 'Opel', marcaSlug: 'opel', modelo: 'Corsa', modeloSlug: 'corsa', pila: 'CR2032', anos: '2000–2024', amazon: 'https://www.amazon.es/s?k=pila+cr2032&tag=enjoys0d-21' },
  { marca: 'Opel', marcaSlug: 'opel', modelo: 'Astra', modeloSlug: 'astra', pila: 'CR2032', anos: '1998–2024', amazon: 'https://www.amazon.es/s?k=pila+cr2032&tag=enjoys0d-21' },
  { marca: 'Opel', marcaSlug: 'opel', modelo: 'Mokka', modeloSlug: 'mokka', pila: 'CR2032', anos: '2012–2024', amazon: 'https://www.amazon.es/s?k=pila+cr2032&tag=enjoys0d-21' },
  { marca: 'Opel', marcaSlug: 'opel', modelo: 'Insignia', modeloSlug: 'insignia', pila: 'CR2032', anos: '2008–2024', amazon: 'https://www.amazon.es/s?k=pila+cr2032&tag=enjoys0d-21' },
  { marca: 'Opel', marcaSlug: 'opel', modelo: 'Crossland', modeloSlug: 'crossland', pila: 'CR2032', anos: '2017–2024', amazon: 'https://www.amazon.es/s?k=pila+cr2032&tag=enjoys0d-21' },
  { marca: 'Opel', marcaSlug: 'opel', modelo: 'Grandland', modeloSlug: 'grandland', pila: 'CR2032', anos: '2017–2024', amazon: 'https://www.amazon.es/s?k=pila+cr2032&tag=enjoys0d-21' },
  // PEUGEOT
  { marca: 'Peugeot', marcaSlug: 'peugeot', modelo: '107/108', modeloSlug: '107-108', pila: 'CR2032', anos: '2005–2022', amazon: 'https://www.amazon.es/s?k=pila+cr2032&tag=enjoys0d-21' },
  { marca: 'Peugeot', marcaSlug: 'peugeot', modelo: '207/208', modeloSlug: '207-208', pila: 'CR2032', anos: '2006–2024', amazon: 'https://www.amazon.es/s?k=pila+cr2032&tag=enjoys0d-21' },
  { marca: 'Peugeot', marcaSlug: 'peugeot', modelo: '307/308', modeloSlug: '307-308', pila: 'CR2032', anos: '2001–2024', amazon: 'https://www.amazon.es/s?k=pila+cr2032&tag=enjoys0d-21' },
  { marca: 'Peugeot', marcaSlug: 'peugeot', modelo: '3008', modeloSlug: '3008', pila: 'CR2032', anos: '2009–2024', amazon: 'https://www.amazon.es/s?k=pila+cr2032&tag=enjoys0d-21' },
  { marca: 'Peugeot', marcaSlug: 'peugeot', modelo: '5008', modeloSlug: '5008', pila: 'CR2032', anos: '2009–2024', amazon: 'https://www.amazon.es/s?k=pila+cr2032&tag=enjoys0d-21' },
  { marca: 'Peugeot', marcaSlug: 'peugeot', modelo: '2008', modeloSlug: '2008', pila: 'CR2032', anos: '2013–2024', amazon: 'https://www.amazon.es/s?k=pila+cr2032&tag=enjoys0d-21' },
  { marca: 'Peugeot', marcaSlug: 'peugeot', modelo: '508', modeloSlug: '508', pila: 'CR2025', anos: '2011–2024', amazon: 'https://www.amazon.es/s?k=pila+cr2025&tag=enjoys0d-21' },
  { marca: 'Peugeot', marcaSlug: 'peugeot', modelo: 'Partner', modeloSlug: 'partner', pila: 'CR2032', anos: '2008–2024', amazon: 'https://www.amazon.es/s?k=pila+cr2032&tag=enjoys0d-21' },
  // RENAULT
  { marca: 'Renault', marcaSlug: 'renault', modelo: 'Clio', modeloSlug: 'clio', pila: 'CR2025', anos: '1998–2024', notas: 'Clio II usa CR2032', amazon: 'https://www.amazon.es/s?k=pila+cr2025&tag=enjoys0d-21' },
  { marca: 'Renault', marcaSlug: 'renault', modelo: 'Megane', modeloSlug: 'megane', pila: 'CR2025', anos: '2002–2024', notas: 'Tarjeta-llave en Megane II', amazon: 'https://www.amazon.es/s?k=pila+cr2025&tag=enjoys0d-21' },
  { marca: 'Renault', marcaSlug: 'renault', modelo: 'Captur', modeloSlug: 'captur', pila: 'CR2032', anos: '2013–2024', amazon: 'https://www.amazon.es/s?k=pila+cr2032&tag=enjoys0d-21' },
  { marca: 'Renault', marcaSlug: 'renault', modelo: 'Kadjar', modeloSlug: 'kadjar', pila: 'CR2032', anos: '2015–2022', amazon: 'https://www.amazon.es/s?k=pila+cr2032&tag=enjoys0d-21' },
  { marca: 'Renault', marcaSlug: 'renault', modelo: 'Kangoo', modeloSlug: 'kangoo', pila: 'CR2032', anos: '1997–2024', amazon: 'https://www.amazon.es/s?k=pila+cr2032&tag=enjoys0d-21' },
  { marca: 'Renault', marcaSlug: 'renault', modelo: 'Laguna', modeloSlug: 'laguna', pila: 'CR2025', anos: '2001–2015', notas: 'Tarjeta inteligente', amazon: 'https://www.amazon.es/s?k=pila+cr2025&tag=enjoys0d-21' },
  { marca: 'Renault', marcaSlug: 'renault', modelo: 'Scenic', modeloSlug: 'scenic', pila: 'CR2032', anos: '1999–2024', amazon: 'https://www.amazon.es/s?k=pila+cr2032&tag=enjoys0d-21' },
  { marca: 'Renault', marcaSlug: 'renault', modelo: 'Zoe', modeloSlug: 'zoe', pila: 'CR2032', anos: '2012–2024', notas: 'Eléctrico', amazon: 'https://www.amazon.es/s?k=pila+cr2032&tag=enjoys0d-21' },
  { marca: 'Renault', marcaSlug: 'renault', modelo: 'Arkana', modeloSlug: 'arkana', pila: 'CR2032', anos: '2021–2024', amazon: 'https://www.amazon.es/s?k=pila+cr2032&tag=enjoys0d-21' },
  // SEAT
  { marca: 'SEAT', marcaSlug: 'seat', modelo: 'Ibiza', modeloSlug: 'ibiza', pila: 'CR2032', anos: '2002–2024', amazon: 'https://www.amazon.es/s?k=pila+cr2032&tag=enjoys0d-21' },
  { marca: 'SEAT', marcaSlug: 'seat', modelo: 'León', modeloSlug: 'leon', pila: 'CR2032', anos: '2005–2024', amazon: 'https://www.amazon.es/s?k=pila+cr2032&tag=enjoys0d-21' },
  { marca: 'SEAT', marcaSlug: 'seat', modelo: 'Arona', modeloSlug: 'arona', pila: 'CR2032', anos: '2017–2024', amazon: 'https://www.amazon.es/s?k=pila+cr2032&tag=enjoys0d-21' },
  { marca: 'SEAT', marcaSlug: 'seat', modelo: 'Ateca', modeloSlug: 'ateca', pila: 'CR2032', anos: '2016–2024', amazon: 'https://www.amazon.es/s?k=pila+cr2032&tag=enjoys0d-21' },
  { marca: 'SEAT', marcaSlug: 'seat', modelo: 'Tarraco', modeloSlug: 'tarraco', pila: 'CR2032', anos: '2018–2024', amazon: 'https://www.amazon.es/s?k=pila+cr2032&tag=enjoys0d-21' },
  { marca: 'SEAT', marcaSlug: 'seat', modelo: 'Mii', modeloSlug: 'mii', pila: 'CR2032', anos: '2011–2022', amazon: 'https://www.amazon.es/s?k=pila+cr2032&tag=enjoys0d-21' },
  // SKODA
  { marca: 'Skoda', marcaSlug: 'skoda', modelo: 'Octavia', modeloSlug: 'octavia', pila: 'CR2032', anos: '2004–2024', amazon: 'https://www.amazon.es/s?k=pila+cr2032&tag=enjoys0d-21' },
  { marca: 'Skoda', marcaSlug: 'skoda', modelo: 'Fabia', modeloSlug: 'fabia', pila: 'CR2032', anos: '2000–2024', amazon: 'https://www.amazon.es/s?k=pila+cr2032&tag=enjoys0d-21' },
  { marca: 'Skoda', marcaSlug: 'skoda', modelo: 'Superb', modeloSlug: 'superb', pila: 'CR2032', anos: '2001–2024', amazon: 'https://www.amazon.es/s?k=pila+cr2032&tag=enjoys0d-21' },
  { marca: 'Skoda', marcaSlug: 'skoda', modelo: 'Karoq', modeloSlug: 'karoq', pila: 'CR2032', anos: '2017–2024', amazon: 'https://www.amazon.es/s?k=pila+cr2032&tag=enjoys0d-21' },
  { marca: 'Skoda', marcaSlug: 'skoda', modelo: 'Kodiaq', modeloSlug: 'kodiaq', pila: 'CR2032', anos: '2016–2024', amazon: 'https://www.amazon.es/s?k=pila+cr2032&tag=enjoys0d-21' },
  // TOYOTA
  { marca: 'Toyota', marcaSlug: 'toyota', modelo: 'Yaris', modeloSlug: 'yaris', pila: 'CR2032', anos: '2005–2024', amazon: 'https://www.amazon.es/s?k=pila+cr2032&tag=enjoys0d-21' },
  { marca: 'Toyota', marcaSlug: 'toyota', modelo: 'Corolla', modeloSlug: 'corolla', pila: 'CR2032', anos: '2006–2024', amazon: 'https://www.amazon.es/s?k=pila+cr2032&tag=enjoys0d-21' },
  { marca: 'Toyota', marcaSlug: 'toyota', modelo: 'Auris', modeloSlug: 'auris', pila: 'CR2032', anos: '2006–2019', amazon: 'https://www.amazon.es/s?k=pila+cr2032&tag=enjoys0d-21' },
  { marca: 'Toyota', marcaSlug: 'toyota', modelo: 'C-HR', modeloSlug: 'c-hr', pila: 'CR2032', anos: '2016–2024', amazon: 'https://www.amazon.es/s?k=pila+cr2032&tag=enjoys0d-21' },
  { marca: 'Toyota', marcaSlug: 'toyota', modelo: 'RAV4', modeloSlug: 'rav4', pila: 'CR2032', anos: '2005–2024', amazon: 'https://www.amazon.es/s?k=pila+cr2032&tag=enjoys0d-21' },
  { marca: 'Toyota', marcaSlug: 'toyota', modelo: 'Prius', modeloSlug: 'prius', pila: 'CR1616', anos: '2003–2024', notas: 'Llave inteligente', amazon: 'https://www.amazon.es/s?k=pila+cr1616&tag=enjoys0d-21' },
  { marca: 'Toyota', marcaSlug: 'toyota', modelo: 'Land Cruiser', modeloSlug: 'land-cruiser', pila: 'CR2032', anos: '2003–2024', amazon: 'https://www.amazon.es/s?k=pila+cr2032&tag=enjoys0d-21' },
  { marca: 'Toyota', marcaSlug: 'toyota', modelo: 'Hilux', modeloSlug: 'hilux', pila: 'CR2032', anos: '2005–2024', amazon: 'https://www.amazon.es/s?k=pila+cr2032&tag=enjoys0d-21' },
  { marca: 'Toyota', marcaSlug: 'toyota', modelo: 'Avensis', modeloSlug: 'avensis', pila: 'CR2032', anos: '2003–2018', amazon: 'https://www.amazon.es/s?k=pila+cr2032&tag=enjoys0d-21' },
  // VOLKSWAGEN
  { marca: 'Volkswagen', marcaSlug: 'volkswagen', modelo: 'Golf', modeloSlug: 'golf', pila: 'CR2032', anos: '1997–2024', notas: 'Golf VIII usa CR2025', amazon: 'https://www.amazon.es/s?k=pila+cr2032&tag=enjoys0d-21' },
  { marca: 'Volkswagen', marcaSlug: 'volkswagen', modelo: 'Polo', modeloSlug: 'polo', pila: 'CR2032', anos: '2001–2024', amazon: 'https://www.amazon.es/s?k=pila+cr2032&tag=enjoys0d-21' },
  { marca: 'Volkswagen', marcaSlug: 'volkswagen', modelo: 'Passat', modeloSlug: 'passat', pila: 'CR2032', anos: '2000–2024', amazon: 'https://www.amazon.es/s?k=pila+cr2032&tag=enjoys0d-21' },
  { marca: 'Volkswagen', marcaSlug: 'volkswagen', modelo: 'Tiguan', modeloSlug: 'tiguan', pila: 'CR2032', anos: '2007–2024', amazon: 'https://www.amazon.es/s?k=pila+cr2032&tag=enjoys0d-21' },
  { marca: 'Volkswagen', marcaSlug: 'volkswagen', modelo: 'T-Roc', modeloSlug: 't-roc', pila: 'CR2032', anos: '2017–2024', amazon: 'https://www.amazon.es/s?k=pila+cr2032&tag=enjoys0d-21' },
  { marca: 'Volkswagen', marcaSlug: 'volkswagen', modelo: 'Touareg', modeloSlug: 'touareg', pila: 'CR2032', anos: '2002–2024', amazon: 'https://www.amazon.es/s?k=pila+cr2032&tag=enjoys0d-21' },
  { marca: 'Volkswagen', marcaSlug: 'volkswagen', modelo: 'Caddy', modeloSlug: 'caddy', pila: 'CR2032', anos: '2003–2024', amazon: 'https://www.amazon.es/s?k=pila+cr2032&tag=enjoys0d-21' },
  { marca: 'Volkswagen', marcaSlug: 'volkswagen', modelo: 'Transporter T5/T6', modeloSlug: 'transporter', pila: 'CR2032', anos: '2003–2024', amazon: 'https://www.amazon.es/s?k=pila+cr2032&tag=enjoys0d-21' },
  { marca: 'Volkswagen', marcaSlug: 'volkswagen', modelo: 'ID.3', modeloSlug: 'id3', pila: 'CR2032', anos: '2019–2024', notas: 'Eléctrico', amazon: 'https://www.amazon.es/s?k=pila+cr2032&tag=enjoys0d-21' },
  { marca: 'Volkswagen', marcaSlug: 'volkswagen', modelo: 'ID.4', modeloSlug: 'id4', pila: 'CR2032', anos: '2020–2024', notas: 'Eléctrico', amazon: 'https://www.amazon.es/s?k=pila+cr2032&tag=enjoys0d-21' },
  // VOLVO
  { marca: 'Volvo', marcaSlug: 'volvo', modelo: 'V40', modeloSlug: 'v40', pila: 'CR2032', anos: '2012–2019', amazon: 'https://www.amazon.es/s?k=pila+cr2032&tag=enjoys0d-21' },
  { marca: 'Volvo', marcaSlug: 'volvo', modelo: 'S60/V60', modeloSlug: 's60-v60', pila: 'CR2032', anos: '2010–2024', amazon: 'https://www.amazon.es/s?k=pila+cr2032&tag=enjoys0d-21' },
  { marca: 'Volvo', marcaSlug: 'volvo', modelo: 'XC40', modeloSlug: 'xc40', pila: 'CR2450', anos: '2017–2024', notas: 'Llave avanzada', amazon: 'https://www.amazon.es/s?k=pila+cr2450&tag=enjoys0d-21' },
  { marca: 'Volvo', marcaSlug: 'volvo', modelo: 'XC60', modeloSlug: 'xc60', pila: 'CR2450', anos: '2008–2024', notas: 'Llave avanzada', amazon: 'https://www.amazon.es/s?k=pila+cr2450&tag=enjoys0d-21' },
  { marca: 'Volvo', marcaSlug: 'volvo', modelo: 'XC90', modeloSlug: 'xc90', pila: 'CR2450', anos: '2002–2024', notas: 'Llave avanzada', amazon: 'https://www.amazon.es/s?k=pila+cr2450&tag=enjoys0d-21' },
  { marca: 'Volvo', marcaSlug: 'volvo', modelo: 'V90', modeloSlug: 'v90', pila: 'CR2032', anos: '2016–2024', amazon: 'https://www.amazon.es/s?k=pila+cr2032&tag=enjoys0d-21' },
];

// Helper: get unique brands
export const brands = [...new Set(carBatteries.map(e => e.marcaSlug))];

// Helper: get models for a brand
export function getModelsForBrand(marcaSlug: string): CarBatteryEntry[] {
  return carBatteries.filter(e => e.marcaSlug === marcaSlug);
}
```

**Step 2: Verify TypeScript compiles**

```bash
cd /Users/yoelcastano/dev/Migraciones/cambiandopilas && source ~/.nvm/nvm.sh && nvm use 22 && npx tsc --noEmit
```
Expected: no errors (or only pre-existing errors unrelated to this file)

**Step 3: Commit**

```bash
git add src/data/car-batteries.ts
git commit -m "feat: add car-batteries data with 150+ models across 19 brands"
```

---

### Task 2: Create programmatic pages `/pila-para/[...slug].astro`

**Files:**
- Create: `src/pages/pila-para/[...slug].astro`

**Step 1: Create the page**

```astro
---
import Base from '../../layouts/Base.astro';
import Breadcrumbs from '../../components/Breadcrumbs.astro';
import { carBatteries } from '../../data/car-batteries';
import { generateBreadcrumbSchema, generateFAQSchema, generateHowToSchema } from '../../utils/seo';

export function getStaticPaths() {
  return carBatteries.map((entry) => ({
    params: { slug: `${entry.marcaSlug}/${entry.modeloSlug}` },
    props: { entry },
  }));
}

const { entry } = Astro.props;
const siteUrl = 'https://cambiandopilas.com';
const pageUrl = `${siteUrl}/pila-para/${entry.marcaSlug}/${entry.modeloSlug}/`;

const pilaNombre = entry.pila;
const pilaAmazon = entry.amazon;

const breadcrumb = generateBreadcrumbSchema([
  { name: 'Inicio', url: siteUrl },
  { name: 'Pila para...', url: `${siteUrl}/que-pila-usa-mi-coche/` },
  { name: entry.marca, url: `${siteUrl}/marca/${entry.marcaSlug}/` },
  { name: entry.modelo, url: pageUrl },
]);

const howto = generateHowToSchema({
  title: `Cómo cambiar la pila de la llave ${entry.marca} ${entry.modelo}`,
  description: `Instrucciones paso a paso para cambiar la pila ${pilaNombre} de la llave del ${entry.marca} ${entry.modelo}.`,
  url: pageUrl,
  steps: [
    `Consigue una pila ${pilaNombre} de litio 3V (disponible en Amazon, ferreterías o supermercados).`,
    `Localiza la ranura o botón de apertura en la carcasa del mando de tu ${entry.marca} ${entry.modelo}.`,
    `Usa una moneda o destornillador plano para abrir suavemente la carcasa por la ranura lateral.`,
    `Retira la pila ${pilaNombre} usada. Anota la orientación (el lado + suele quedar hacia arriba).`,
    `Inserta la pila nueva ${pilaNombre} respetando la polaridad indicada en el compartimento.`,
    `Cierra la carcasa presionando hasta escuchar un clic y prueba el mando desde 5 metros.`,
  ],
});

const faqs = [
  {
    question: `¿Qué pila necesita la llave del ${entry.marca} ${entry.modelo}?`,
    answer: `La llave del ${entry.marca} ${entry.modelo}${entry.anos ? ` (${entry.anos})` : ''} usa la pila ${pilaNombre} de litio, 3 voltios. ${entry.notas ? entry.notas + '.' : ''} Puedes comprarla en cualquier ferretería, supermercado o en Amazon.`,
  },
  {
    question: `¿Puedo cambiar yo mismo la pila de la llave ${entry.marca} ${entry.modelo}?`,
    answer: `Sí. El cambio de pila de la llave ${entry.marca} ${entry.modelo} es sencillo y no requiere visitar el concesionario. Solo necesitas una pila ${pilaNombre} nueva y un destornillador plano o moneda. El proceso lleva menos de 5 minutos.`,
  },
  {
    question: `¿Cuánto dura la pila ${pilaNombre} de la llave del ${entry.marca} ${entry.modelo}?`,
    answer: `La pila ${pilaNombre} de la llave del ${entry.marca} ${entry.modelo} dura entre 2 y 4 años con uso normal. Señales de batería baja: el alcance del mando se reduce, necesitas presionar el botón varias veces, o aparece el aviso "batería baja" en el cuadro de instrumentos.`,
  },
];

const faqSchema = generateFAQSchema(faqs);

const title = `Pila llave ${entry.marca} ${entry.modelo}: ${pilaNombre}${entry.anos ? ` (${entry.anos})` : ''} | Guía completa`;
const description = `La llave del ${entry.marca} ${entry.modelo} usa la pila ${pilaNombre} (3V). Guía paso a paso para cambiarla tú mismo en menos de 5 minutos. Sin ir al concesionario.`;
---

<Base
  title={title}
  description={description}
  schema={[breadcrumb, howto, faqSchema]}
  ogType="article"
>
  <div class="container">
    <Breadcrumbs items={[
      { name: 'Marcas', url: `/marca/${entry.marcaSlug}/` },
      { name: entry.marca, url: `/marca/${entry.marcaSlug}/` },
      { name: entry.modelo, url: `/pila-para/${entry.marcaSlug}/${entry.modeloSlug}/` },
    ]} />

    <header class="article-header">
      <h1>Pila llave {entry.marca} {entry.modelo}: <span style="color:#f49600">{pilaNombre}</span></h1>
      {entry.anos && <p style="color:#666;margin:.25rem 0">Años: {entry.anos}</p>}
    </header>

    <!-- Battery highlight box -->
    <div class="pila-highlight">
      <div class="pila-badge-large">{pilaNombre}</div>
      <div class="pila-highlight-info">
        <p><strong>Tipo:</strong> Pila de botón de litio · 3V</p>
        {entry.notas && <p><strong>Nota:</strong> {entry.notas}</p>}
        <a href={pilaAmazon} target="_blank" rel="noopener noreferrer sponsored" class="cta-button" style="display:inline-block;margin-top:.75rem">
          Comprar pila {pilaNombre} en Amazon →
        </a>
      </div>
    </div>

    <!-- How to steps -->
    <section style="margin:2.5rem 0">
      <h2>Cómo cambiar la pila de la llave {entry.marca} {entry.modelo}</h2>
      <ol class="howto-steps">
        <li><strong>Consigue la pila {pilaNombre}</strong> — De litio 3V. Disponible en ferreterías, supermercados o <a href={pilaAmazon} target="_blank" rel="noopener noreferrer sponsored">Amazon</a>.</li>
        <li><strong>Abre la carcasa del mando</strong> — Busca la ranura lateral o el botón de apertura de la llave {entry.marca} {entry.modelo}.</li>
        <li><strong>Usa una moneda o destornillador plano</strong> — Inserta en la ranura y gira suavemente para separar las dos mitades.</li>
        <li><strong>Retira la pila vieja</strong> — Anota la orientación antes de sacarla. El lado positivo (+) suele quedar hacia arriba.</li>
        <li><strong>Inserta la pila nueva {pilaNombre}</strong> — Respeta la polaridad indicada en el compartimento.</li>
        <li><strong>Cierra y prueba</strong> — Presiona hasta escuchar un clic. Prueba el mando desde al menos 5 metros.</li>
      </ol>
    </section>

    <!-- Internal links -->
    <div class="info-note" style="margin:2rem 0">
      <strong>¿Buscas guías específicas?</strong> Consulta la <a href={`/marca/${entry.marcaSlug}/`}>página de pilas {entry.marca}</a> para ver todos los modelos, o la <a href="/tipos-de-pilas/">guía completa de tipos de pilas</a> para comparar {pilaNombre} con otras opciones.
    </div>

    <!-- FAQ -->
    <section class="faq-section" aria-label="Preguntas frecuentes">
      <h2 class="faq-heading">Preguntas frecuentes</h2>
      {faqs.map((faq, i) => (
        <details class="faq-item" open={i === 0}>
          <summary class="faq-question">{faq.question}</summary>
          <div class="faq-answer"><p>{faq.answer}</p></div>
        </details>
      ))}
    </section>

    <div class="text-center mt-2 mb-2">
      <a href={`/marca/${entry.marcaSlug}/`} class="cta-button">Ver todos los modelos {entry.marca} →</a>
    </div>
  </div>
</Base>

<style>
.pila-highlight {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  background: #f8faff;
  border: 2px solid #f49600;
  border-radius: 12px;
  padding: 1.5rem;
  margin: 1.5rem 0 2rem;
  flex-wrap: wrap;
}
.pila-badge-large {
  font-family: monospace;
  font-size: 2rem;
  font-weight: 900;
  color: #fff;
  background: #0066cc;
  padding: .5rem 1.25rem;
  border-radius: 8px;
  letter-spacing: .05em;
  flex-shrink: 0;
}
.pila-highlight-info p { margin: .25rem 0; color: #333; }
.howto-steps { padding-left: 1.5rem; }
.howto-steps li { margin-bottom: .85rem; line-height: 1.7; color: #333; }
</style>
```

**Step 2: Verify build**

```bash
cd /Users/yoelcastano/dev/Migraciones/cambiandopilas && source ~/.nvm/nvm.sh && nvm use 22 && npm run build 2>&1 | tail -20
```
Expected: build completes, ~990+ pages generated, no TypeScript errors.

**Step 3: Commit**

```bash
git add src/pages/pila-para/
git commit -m "feat: add 150+ programmatic /pila-para/[marca]/[modelo]/ pages"
```

---

### Task 3: Add 6 new brand pages

**Files:**
- Modify: `src/pages/marca/[brand].astro`

**Step 1: Add Toyota, Ford, BMW, SEAT, Peugeot, Nissan to brandDefs**

In `src/pages/marca/[brand].astro`, after the closing `},` of the `mercedes` entry (around line 125), add:

```typescript
  toyota: {
    name: 'Toyota',
    dbName: 'Toyota',
    catSlug: 'blog',
    pila: 'CR2032',
    intro: 'La mayoría de llaves Toyota usan la pila <strong>CR2032</strong> (3V). Los modelos Prius y Lexus con llave inteligente pueden usar <strong>CR1616</strong>. El cambio es sencillo y no requiere visitar el concesionario.',
    modelos: [
      { modelo: 'Toyota Yaris (II/III/IV)', pila: 'CR2032' },
      { modelo: 'Toyota Corolla (X/XI/XII)', pila: 'CR2032' },
      { modelo: 'Toyota Auris', pila: 'CR2032' },
      { modelo: 'Toyota C-HR', pila: 'CR2032' },
      { modelo: 'Toyota RAV4 (III/IV/V)', pila: 'CR2032' },
      { modelo: 'Toyota Prius (III/IV)', pila: 'CR1616', nota: 'Llave inteligente' },
      { modelo: 'Toyota Land Cruiser', pila: 'CR2032' },
      { modelo: 'Toyota Hilux', pila: 'CR2032' },
      { modelo: 'Toyota Avensis', pila: 'CR2032' },
      { modelo: 'Toyota Camry', pila: 'CR2032' },
    ],
    faqs: [
      { question: '¿Qué pila usa la llave de un Toyota?', answer: 'La mayoría de modelos Toyota usan la pila CR2032 de 3V. El Toyota Prius y modelos con llave inteligente Lexus usan la CR1616. Puedes verificarlo abriendo el mando: la pila tiene impreso el modelo en su superficie.' },
      { question: '¿Hay que reprogramar la llave Toyota al cambiar la pila?', answer: 'No. Cambiar la pila del mando Toyota no requiere reprogramación. El sistema mantiene su código de emparejamiento aunque la pila se agote completamente.' },
      { question: '¿Dónde comprar la pila CR2032 para la llave Toyota?', answer: 'La CR2032 se vende en ferreterías, supermercados, tiendas de electrónica y en Amazon. Marcas recomendadas: Panasonic, Energizer o Duracell.' },
    ],
  },
  ford: {
    name: 'Ford',
    dbName: 'Ford',
    catSlug: 'blog',
    pila: 'CR2032',
    intro: 'Las llaves y mandos Ford usan principalmente la pila <strong>CR2032</strong> (3V) en todos sus modelos actuales, desde el Fiesta hasta el Kuga. El proceso de cambio es sencillo y no requiere codificación.',
    modelos: [
      { modelo: 'Ford Fiesta (VI/VII)', pila: 'CR2032' },
      { modelo: 'Ford Focus (II/III/IV)', pila: 'CR2032' },
      { modelo: 'Ford Mondeo (IV/V)', pila: 'CR2032' },
      { modelo: 'Ford Kuga (I/II/III)', pila: 'CR2032' },
      { modelo: 'Ford EcoSport', pila: 'CR2032' },
      { modelo: 'Ford Puma', pila: 'CR2032' },
      { modelo: 'Ford Galaxy / S-Max', pila: 'CR2032' },
      { modelo: 'Ford Transit / Connect', pila: 'CR2032' },
    ],
    faqs: [
      { question: '¿Qué pila usa la llave de un Ford?', answer: 'La mayoría de mandos Ford usan la pila CR2032 de 3V. Es una de las pilas de botón más fáciles de encontrar en cualquier ferretería o supermercado.' },
      { question: '¿Cómo abrir el mando de un Ford para cambiar la pila?', answer: 'Los mandos Ford tienen una ranura lateral. Inserta una moneda o destornillador plano y gira suavemente para separar las dos mitades. Retira la pila CR2032 vieja, coloca la nueva con el + hacia arriba y cierra el mando.' },
      { question: '¿Cuánto cuesta cambiar la pila de la llave Ford?', answer: 'Una pila CR2032 cuesta entre 1€ y 3€. Haciéndolo tú mismo evitas los 10-25€ que puede cobrar el concesionario por este servicio.' },
    ],
  },
  bmw: {
    name: 'BMW',
    dbName: 'BMW',
    catSlug: 'blog',
    pila: 'CR2032',
    intro: 'Las llaves BMW usan principalmente la pila <strong>CR2032</strong> (3V). Los modelos de Serie 7 y algunos con "Display Key" pueden usar la <strong>CR2450</strong> de mayor capacidad. Las llaves con llave-navaja abatible usan CR2032 en casi todos los casos.',
    modelos: [
      { modelo: 'BMW Serie 1 (E87/F20/F40)', pila: 'CR2032' },
      { modelo: 'BMW Serie 2', pila: 'CR2032' },
      { modelo: 'BMW Serie 3 (E46/E90/F30/G20)', pila: 'CR2032' },
      { modelo: 'BMW Serie 4', pila: 'CR2032' },
      { modelo: 'BMW Serie 5 (E60/F10/G30)', pila: 'CR2032' },
      { modelo: 'BMW Serie 7 (E65/F01/G11)', pila: 'CR2450', nota: 'Display Key' },
      { modelo: 'BMW X1 / X2', pila: 'CR2032' },
      { modelo: 'BMW X3 / X4', pila: 'CR2032' },
      { modelo: 'BMW X5 / X6 / X7', pila: 'CR2032' },
      { modelo: 'BMW MINI Cooper / Countryman', pila: 'CR2032' },
    ],
    faqs: [
      { question: '¿Qué pila usa la llave de un BMW?', answer: 'La mayoría de mandos BMW usan la pila CR2032 de 3V. Los modelos con "Display Key" (Serie 7, algunos X5/X7) usan la CR2450 de mayor tamaño. Verifica el modelo en el interior del mando.' },
      { question: '¿Cómo cambiar la pila de la llave BMW?', answer: 'Las llaves BMW tipo "navaja" tienen un pequeño tornillo Phillips en la parte inferior. Retíralo, abre la carcasa, sustituye la CR2032 respetando la polaridad y vuelve a atornillar.' },
      { question: '¿Hay que programar la llave BMW tras cambiar la pila?', answer: 'No. Cambiar la pila del mando BMW no requiere programación. El código de emparejamiento se mantiene incluso cuando la pila se agota completamente.' },
    ],
  },
  seat: {
    name: 'SEAT',
    dbName: 'SEAT',
    catSlug: 'blog',
    pila: 'CR2032',
    intro: 'Las llaves SEAT usan la pila <strong>CR2032</strong> (3V) en todos sus modelos actuales. Al compartir plataforma MQB con Volkswagen y Skoda, el procedimiento de cambio es prácticamente idéntico al de un VW Golf o Skoda Octavia.',
    modelos: [
      { modelo: 'SEAT Ibiza (IV/V)', pila: 'CR2032' },
      { modelo: 'SEAT León (II/III/IV)', pila: 'CR2032' },
      { modelo: 'SEAT Arona', pila: 'CR2032' },
      { modelo: 'SEAT Ateca', pila: 'CR2032' },
      { modelo: 'SEAT Tarraco', pila: 'CR2032' },
      { modelo: 'SEAT Mii', pila: 'CR2032' },
      { modelo: 'SEAT Alhambra', pila: 'CR2032' },
    ],
    faqs: [
      { question: '¿Qué pila usa la llave de un SEAT?', answer: 'Todos los modelos SEAT modernos usan la pila CR2032 de 3V. Al compartir plataforma con Volkswagen y Skoda, el tipo de pila y el método de apertura son muy similares en toda la gama.' },
      { question: '¿Cómo cambiar la pila de la llave SEAT?', answer: 'Los mandos SEAT tienen una ranura lateral. Inserta una moneda o destornillador plano, gira para abrir la carcasa, cambia la CR2032 (+ hacia arriba) y cierra presionando hasta escuchar un clic.' },
      { question: '¿La llave SEAT necesita recodificarse al cambiar la pila?', answer: 'No. El cambio de pila de la llave SEAT no requiere recodificación ni visita al concesionario. El sistema mantiene el emparejamiento aunque la pila se agote por completo.' },
    ],
  },
  peugeot: {
    name: 'Peugeot',
    dbName: 'Peugeot',
    catSlug: 'blog',
    pila: 'CR2032',
    intro: 'Los mandos Peugeot usan mayoritariamente la pila <strong>CR2032</strong> (3V). El Peugeot 508 y algunos modelos de gama alta pueden usar la <strong>CR2025</strong>. El cambio no requiere herramientas especiales ni visita al taller.',
    modelos: [
      { modelo: 'Peugeot 107/108', pila: 'CR2032' },
      { modelo: 'Peugeot 207/208', pila: 'CR2032' },
      { modelo: 'Peugeot 307/308', pila: 'CR2032' },
      { modelo: 'Peugeot 3008', pila: 'CR2032' },
      { modelo: 'Peugeot 5008', pila: 'CR2032' },
      { modelo: 'Peugeot 2008', pila: 'CR2032' },
      { modelo: 'Peugeot 508', pila: 'CR2025' },
      { modelo: 'Peugeot Partner / Rifter', pila: 'CR2032' },
    ],
    faqs: [
      { question: '¿Qué pila usa la llave de un Peugeot?', answer: 'La mayoría de mandos Peugeot usan la CR2032 de 3V. El Peugeot 508 usa CR2025. Puedes verificar el tipo abriendo el mando y leyendo el número impreso en la pila vieja.' },
      { question: '¿Cómo abrir la llave Peugeot para cambiar la pila?', answer: 'Los mandos Peugeot tienen una ranura en el lateral. Usa una moneda para girar y separar las dos mitades, retira la pila usada, coloca la nueva respetando la polaridad y cierra presionando hasta escuchar un clic.' },
      { question: '¿Necesito ir al concesionario Peugeot para cambiar la pila de la llave?', answer: 'No. El cambio de pila de la llave Peugeot no requiere codificación ni visita al concesionario. Es un proceso de 3 minutos que puedes hacer tú mismo.' },
    ],
  },
  nissan: {
    name: 'Nissan',
    dbName: 'Nissan',
    catSlug: 'blog',
    pila: 'CR2032',
    intro: 'Los mandos y llaves Nissan usan la pila <strong>CR2032</strong> (3V) en toda su gama actual, desde el Micra hasta el X-Trail y Navara. El Nissan Leaf eléctrico también usa CR2032 en su mando.',
    modelos: [
      { modelo: 'Nissan Micra (K12/K13/K14)', pila: 'CR2032' },
      { modelo: 'Nissan Qashqai (I/II/III)', pila: 'CR2032' },
      { modelo: 'Nissan Juke (I/II)', pila: 'CR2032' },
      { modelo: 'Nissan Note', pila: 'CR2032' },
      { modelo: 'Nissan Leaf', pila: 'CR2032', nota: 'Eléctrico' },
      { modelo: 'Nissan X-Trail', pila: 'CR2032' },
      { modelo: 'Nissan Navara', pila: 'CR2032' },
      { modelo: 'Nissan Pulsar', pila: 'CR2032' },
    ],
    faqs: [
      { question: '¿Qué pila usa la llave de un Nissan?', answer: 'Todos los modelos Nissan actuales usan la pila CR2032 de 3V. Es una de las pilas de botón más comunes y fáciles de encontrar.' },
      { question: '¿Cómo cambiar la pila de la llave Nissan?', answer: 'Los mandos Nissan tienen una ranura lateral. Inserta una moneda o destornillador plano, abre la carcasa, cambia la CR2032 respetando la polaridad (+ hacia arriba) y cierra presionando hasta escuchar un clic.' },
      { question: '¿El Nissan Leaf eléctrico usa la misma pila que los modelos de gasolina?', answer: 'Sí. El mando del Nissan Leaf usa la misma pila CR2032 de 3V que el resto de la gama Nissan.' },
    ],
  },
```

**Step 2: Update `getStaticPaths`**

Replace the current `getStaticPaths` return with:

```typescript
export function getStaticPaths() {
  return ['audi', 'renault', 'volkswagen', 'mercedes', 'toyota', 'ford', 'bmw', 'seat', 'peugeot', 'nissan'].map((brand) => ({
    params: { brand },
    props: { brand },
  }));
}
```

**Step 3: Verify build**

```bash
cd /Users/yoelcastano/dev/Migraciones/cambiandopilas && source ~/.nvm/nvm.sh && nvm use 22 && npm run build 2>&1 | tail -10
```
Expected: build completes with 10 `/marca/` pages.

**Step 4: Commit**

```bash
git add src/pages/marca/
git commit -m "feat: add 6 new brand pages (toyota, ford, bmw, seat, peugeot, nissan)"
```

---

### Task 4: Create comparative pages `/comparar/[slug].astro`

**Files:**
- Create: `src/pages/comparar/[slug].astro`

**Step 1: Create the page**

```astro
---
import Base from '../../layouts/Base.astro';
import Breadcrumbs from '../../components/Breadcrumbs.astro';
import { generateBreadcrumbSchema, generateFAQSchema } from '../../utils/seo';

type BatterySpec = {
  type: string;
  voltage: string;
  diameter: string;
  height: string;
  capacity: string;
  coches: string[];
  amazon: string;
};

type CompareEntry = {
  title: string;
  description: string;
  a: BatterySpec;
  b: BatterySpec;
  faqs: { question: string; answer: string }[];
};

const comparisons: Record<string, CompareEntry> = {
  'cr2032-vs-cr2025': {
    title: 'CR2032 vs CR2025: diferencias, compatibilidad y cuál elegir',
    description: 'Comparativa completa entre la pila CR2032 y CR2025: diferencias de tamaño, capacidad, coches compatibles y cuándo usar cada una.',
    a: {
      type: 'CR2032',
      voltage: '3V',
      diameter: '20mm',
      height: '3.2mm',
      capacity: '220 mAh',
      coches: ['Volkswagen', 'Audi', 'Toyota', 'Ford', 'SEAT', 'Nissan', 'BMW', 'Opel', 'Hyundai'],
      amazon: 'https://www.amazon.es/s?k=pila+cr2032&tag=enjoys0d-21',
    },
    b: {
      type: 'CR2025',
      voltage: '3V',
      diameter: '20mm',
      height: '2.5mm',
      capacity: '160 mAh',
      coches: ['Renault', 'Mercedes-Benz', 'Citroën', 'Peugeot 508', 'Dacia'],
      amazon: 'https://www.amazon.es/s?k=pila+cr2025&tag=enjoys0d-21',
    },
    faqs: [
      { question: '¿Son intercambiables la CR2032 y CR2025?', answer: 'No son intercambiables aunque tengan el mismo diámetro (20mm) y voltaje (3V). La CR2032 mide 3.2mm de grosor y la CR2025 solo 2.5mm. Si fuerzas una CR2032 donde va una CR2025, el compartimento no cerrará bien y puede dañarse.' },
      { question: '¿Qué pila dura más, CR2032 o CR2025?', answer: 'La CR2032 dura más: tiene 220 mAh frente a los 160 mAh de la CR2025, aproximadamente un 37% más de capacidad. En uso normal en llaves de coche, la CR2032 dura entre 3 y 5 años; la CR2025, entre 2 y 4 años.' },
      { question: '¿Qué coches usan CR2032 y cuáles CR2025?', answer: 'CR2032: Volkswagen, Audi, Toyota, Ford, SEAT, Nissan, BMW, Opel, Hyundai. CR2025: Renault (modelos modernos), Mercedes-Benz (Clase A/C/E), Peugeot 508, Citroën. Siempre verifica en el interior de tu mando.' },
    ],
  },
  'cr2016-vs-cr2032': {
    title: 'CR2016 vs CR2032: diferencias y cuál usa tu coche',
    description: 'Comparativa entre la pila CR2016 y CR2032: grosor, capacidad, coches compatibles y si son intercambiables.',
    a: {
      type: 'CR2016',
      voltage: '3V',
      diameter: '20mm',
      height: '1.6mm',
      capacity: '90 mAh',
      coches: ['Honda Accord', 'Mazda 2 (algunos)', 'Toyota (modelos antiguos)'],
      amazon: 'https://www.amazon.es/s?k=pila+cr2016&tag=enjoys0d-21',
    },
    b: {
      type: 'CR2032',
      voltage: '3V',
      diameter: '20mm',
      height: '3.2mm',
      capacity: '220 mAh',
      coches: ['Volkswagen', 'Audi', 'Toyota', 'Ford', 'BMW', 'Nissan', 'SEAT'],
      amazon: 'https://www.amazon.es/s?k=pila+cr2032&tag=enjoys0d-21',
    },
    faqs: [
      { question: '¿Son intercambiables CR2016 y CR2032?', answer: 'No. Aunque tienen el mismo diámetro de 20mm y voltaje de 3V, la CR2016 mide solo 1.6mm de grosor frente a los 3.2mm de la CR2032. Son incompatibles entre sí.' },
      { question: '¿Qué coches usan pila CR2016?', answer: 'La CR2016 es menos común que la CR2032. Se usa en algunos modelos de Honda Accord, Mazda 2 antiguo, y ciertos Toyota de generaciones anteriores. Verifica el número impreso en tu pila actual.' },
      { question: '¿La CR2016 dura menos que la CR2032?', answer: 'Sí. La CR2016 tiene solo 90 mAh frente a los 220 mAh de la CR2032, por lo que dura aproximadamente la mitad. En llaves de coche, la CR2016 suele durar entre 1 y 2 años.' },
    ],
  },
  'cr2025-vs-cr2016': {
    title: 'CR2025 vs CR2016: qué diferencia hay y cuál necesitas',
    description: 'Comparativa entre CR2025 y CR2016: mismos 20mm de diámetro pero diferente grosor. Coches compatibles y diferencias de capacidad.',
    a: {
      type: 'CR2025',
      voltage: '3V',
      diameter: '20mm',
      height: '2.5mm',
      capacity: '160 mAh',
      coches: ['Renault Clio III/IV', 'Mercedes Clase A/C/E', 'Citroën C3/C4', 'Peugeot 508'],
      amazon: 'https://www.amazon.es/s?k=pila+cr2025&tag=enjoys0d-21',
    },
    b: {
      type: 'CR2016',
      voltage: '3V',
      diameter: '20mm',
      height: '1.6mm',
      capacity: '90 mAh',
      coches: ['Honda Accord', 'Mazda 2', 'Toyota antiguos'],
      amazon: 'https://www.amazon.es/s?k=pila+cr2016&tag=enjoys0d-21',
    },
    faqs: [
      { question: '¿Son intercambiables CR2025 y CR2016?', answer: 'No. Tienen el mismo diámetro (20mm) y voltaje (3V), pero diferente grosor: CR2025 mide 2.5mm y CR2016 mide 1.6mm. No son compatibles entre sí.' },
      { question: '¿Qué pila tiene más capacidad, CR2025 o CR2016?', answer: 'La CR2025 tiene 160 mAh frente a los 90 mAh de la CR2016, casi el doble de capacidad. La CR2025 dura entre 2 y 4 años en una llave de coche; la CR2016, entre 1 y 2 años.' },
    ],
  },
};

export function getStaticPaths() {
  return Object.keys(comparisons).map((slug) => ({
    params: { slug },
    props: { slug },
  }));
}

const { slug } = Astro.props;
const comp = comparisons[slug];
const siteUrl = 'https://cambiandopilas.com';

const breadcrumb = generateBreadcrumbSchema([
  { name: 'Inicio', url: siteUrl },
  { name: 'Comparar pilas', url: `${siteUrl}/comparar/${slug}/` },
  { name: `${comp.a.type} vs ${comp.b.type}`, url: `${siteUrl}/comparar/${slug}/` },
]);
const faqSchema = generateFAQSchema(comp.faqs);
---

<Base
  title={comp.title}
  description={comp.description}
  schema={[breadcrumb, faqSchema]}
>
  <div class="container">
    <Breadcrumbs items={[
      { name: 'Guía de Pilas', url: '/tipos-de-pilas/' },
      { name: `${comp.a.type} vs ${comp.b.type}`, url: `/comparar/${slug}/` },
    ]} />

    <header class="article-header">
      <h1>{comp.a.type} vs {comp.b.type}</h1>
      <p style="color:#666">{comp.description}</p>
    </header>

    <!-- Comparison table -->
    <div class="compare-grid">
      {[comp.a, comp.b].map((bat) => (
        <div class="compare-card">
          <div class="compare-badge">{bat.type}</div>
          <table class="compare-specs">
            <tr><th>Voltaje</th><td>{bat.voltage}</td></tr>
            <tr><th>Diámetro</th><td>{bat.diameter}</td></tr>
            <tr><th>Grosor</th><td>{bat.height}</td></tr>
            <tr><th>Capacidad</th><td>{bat.capacity}</td></tr>
          </table>
          <p style="margin:.75rem 0 .4rem;font-size:.85rem;color:#666;font-weight:600">Coches compatibles:</p>
          <ul style="margin:0 0 1rem 1.25rem;font-size:.85rem;color:#444;line-height:1.9">
            {bat.coches.map(c => <li>{c}</li>)}
          </ul>
          <a href={bat.amazon} target="_blank" rel="noopener noreferrer sponsored" class="cta-button" style="display:block;text-align:center">
            Comprar {bat.type} en Amazon →
          </a>
        </div>
      ))}
    </div>

    <!-- FAQ -->
    <section class="faq-section" style="margin-top:2.5rem" aria-label="Preguntas frecuentes">
      <h2 class="faq-heading">Preguntas frecuentes</h2>
      {comp.faqs.map((faq, i) => (
        <details class="faq-item" open={i === 0}>
          <summary class="faq-question">{faq.question}</summary>
          <div class="faq-answer"><p>{faq.answer}</p></div>
        </details>
      ))}
    </section>

    <div class="text-center mt-2 mb-2">
      <a href="/tipos-de-pilas/" class="cta-button">Ver guía completa de tipos de pilas →</a>
    </div>
  </div>
</Base>

<style>
.compare-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin: 2rem 0; }
@media (max-width: 640px) { .compare-grid { grid-template-columns: 1fr; } }
.compare-card { border: 2px solid #e0e8f0; border-radius: 12px; padding: 1.5rem; }
.compare-badge { font-family: monospace; font-size: 1.75rem; font-weight: 900; color: #fff; background: #0066cc; padding: .35rem 1rem; border-radius: 6px; display: inline-block; margin-bottom: 1rem; }
.compare-specs { width: 100%; border-collapse: collapse; margin-bottom: 1rem; font-size: .9rem; }
.compare-specs th { text-align: left; color: #666; font-weight: 600; padding: .3rem 0; width: 45%; }
.compare-specs td { color: #1a1a2e; font-weight: 700; }
</style>
```

**Step 2: Build and commit**

```bash
cd /Users/yoelcastano/dev/Migraciones/cambiandopilas && source ~/.nvm/nvm.sh && nvm use 22 && npm run build 2>&1 | tail -5
git add src/pages/comparar/
git commit -m "feat: add 3 battery comparison pages (/comparar/cr2032-vs-cr2025/ etc)"
```

---

### Task 5: Create configurator `/que-pila-usa-mi-coche.astro`

**Files:**
- Create: `src/pages/que-pila-usa-mi-coche.astro`

**Step 1: Create the page**

```astro
---
import Base from '../layouts/Base.astro';
import Breadcrumbs from '../components/Breadcrumbs.astro';
import { carBatteries, brands } from '../data/car-batteries';
import { generateFAQSchema } from '../utils/seo';

// Build brand → models map for JS (serialize to JSON)
const brandModels: Record<string, { modelo: string; slug: string; pila: string }[]> = {};
for (const entry of carBatteries) {
  if (!brandModels[entry.marcaSlug]) brandModels[entry.marcaSlug] = [];
  brandModels[entry.marcaSlug].push({
    modelo: entry.modelo,
    slug: entry.modeloSlug,
    pila: entry.pila,
  });
}

const brandNames: Record<string, string> = {};
for (const entry of carBatteries) {
  brandNames[entry.marcaSlug] = entry.marca;
}

const faqSchema = generateFAQSchema([
  { question: '¿Cómo sé qué pila necesita la llave de mi coche?', answer: 'Usa el configurador de esta página: selecciona tu marca y modelo y te diremos exactamente qué pila necesitas. Alternativamente, abre la carcasa de tu llave y verás el número impreso en la pila actual (normalmente CR2032, CR2025 o CR2016).' },
  { question: '¿Todas las llaves de coche usan la misma pila?', answer: 'No. Aunque la CR2032 es la más común, muchas llaves usan CR2025 (Renault, Mercedes) o CR2016 (Honda, Mazda). Usa este configurador o consulta el manual del vehículo para saber cuál necesita la tuya.' },
]);
---

<Base
  title="¿Qué pila usa mi coche? Buscador por marca y modelo | Cambiando de Pilas"
  description="Encuentra qué pila necesita la llave de tu coche. Selecciona marca y modelo y te decimos el tipo exacto: CR2032, CR2025, CR2016 y más."
  schema={[faqSchema]}
>
  <div class="container" style="max-width:700px">
    <Breadcrumbs items={[{ name: '¿Qué pila usa mi coche?', url: '/que-pila-usa-mi-coche/' }]} />

    <header class="article-header">
      <h1>¿Qué pila usa mi coche?</h1>
      <p style="color:#666">Selecciona tu marca y modelo para saber qué pila necesita la llave.</p>
    </header>

    <div class="configurator-box">
      <div class="config-step">
        <label for="selectMarca"><strong>1. Selecciona la marca</strong></label>
        <select id="selectMarca" class="config-select">
          <option value="">— Elige marca —</option>
          {brands.sort().map(slug => (
            <option value={slug}>{brandNames[slug]}</option>
          ))}
        </select>
      </div>

      <div class="config-step" id="stepModelo" style="display:none">
        <label for="selectModelo"><strong>2. Selecciona el modelo</strong></label>
        <select id="selectModelo" class="config-select">
          <option value="">— Elige modelo —</option>
        </select>
      </div>

      <div id="resultBox" style="display:none" class="result-box">
        <p id="resultText"></p>
        <a id="resultLink" href="#" class="cta-button" style="display:inline-block;margin-top:.75rem">Ver guía completa →</a>
      </div>
    </div>

    <section class="faq-section" style="margin-top:3rem" aria-label="Preguntas frecuentes">
      <h2 class="faq-heading">Preguntas frecuentes</h2>
      {faqSchema.mainEntity.map((faq: any, i: number) => (
        <details class="faq-item" open={i === 0}>
          <summary class="faq-question">{faq.name}</summary>
          <div class="faq-answer"><p>{faq.acceptedAnswer.text}</p></div>
        </details>
      ))}
    </section>
  </div>
</Base>

<script define:vars={{ brandModels }}>
  const selectMarca = document.getElementById('selectMarca');
  const selectModelo = document.getElementById('selectModelo');
  const stepModelo = document.getElementById('stepModelo');
  const resultBox = document.getElementById('resultBox');
  const resultText = document.getElementById('resultText');
  const resultLink = document.getElementById('resultLink');

  selectMarca.addEventListener('change', () => {
    const marca = selectMarca.value;
    stepModelo.style.display = 'none';
    resultBox.style.display = 'none';
    selectModelo.innerHTML = '<option value="">— Elige modelo —</option>';
    if (!marca) return;
    const modelos = brandModels[marca] || [];
    modelos.forEach(m => {
      const opt = document.createElement('option');
      opt.value = m.slug;
      opt.dataset.pila = m.pila;
      opt.textContent = m.modelo;
      selectModelo.appendChild(opt);
    });
    stepModelo.style.display = 'block';
  });

  selectModelo.addEventListener('change', () => {
    const modeloSlug = selectModelo.value;
    resultBox.style.display = 'none';
    if (!modeloSlug) return;
    const opt = selectModelo.options[selectModelo.selectedIndex];
    const pila = opt.dataset.pila;
    const modeloNombre = opt.textContent;
    const marcaSlug = selectMarca.value;
    resultText.innerHTML = `La llave del <strong>${modeloNombre}</strong> usa la pila <strong style="font-family:monospace;font-size:1.1em;color:#0066cc">${pila}</strong> (litio 3V).`;
    resultLink.href = `/pila-para/${marcaSlug}/${modeloSlug}/`;
    resultLink.textContent = `Ver guía completa para ${modeloNombre} →`;
    resultBox.style.display = 'block';
  });
</script>

<style>
.configurator-box { background:#f8faff; border:2px solid #e0e8f0; border-radius:12px; padding:2rem; margin:1.5rem 0; }
.config-step { margin-bottom:1.25rem; }
.config-step label { display:block; margin-bottom:.5rem; color:#1a1a2e; }
.config-select { width:100%; padding:.65rem .85rem; border:1.5px solid #d0d8e8; border-radius:8px; font-size:1rem; background:#fff; color:#1a1a2e; }
.result-box { background:#fff; border:2px solid #f49600; border-radius:10px; padding:1.25rem 1.5rem; margin-top:1rem; }
#resultText { font-size:1.1rem; color:#333; margin:0; line-height:1.7; }
</style>
```

**Step 2: Build and commit**

```bash
cd /Users/yoelcastano/dev/Migraciones/cambiandopilas && source ~/.nvm/nvm.sh && nvm use 22 && npm run build 2>&1 | tail -5
git add src/pages/que-pila-usa-mi-coche.astro
git commit -m "feat: add interactive car key battery configurator page"
```

---

### Task 6: Create HTML sitemap `/mapa-del-sitio.astro`

**Files:**
- Create: `src/pages/mapa-del-sitio.astro`

**Step 1: Create the page**

```astro
---
import Base from '../layouts/Base.astro';
import postsData from '../data/posts.json';

const siteUrl = 'https://cambiandopilas.com';

const mainPages = [
  { name: 'Inicio', url: '/' },
  { name: '¿Qué pila usa mi coche?', url: '/que-pila-usa-mi-coche/' },
  { name: 'Tipos de pilas', url: '/tipos-de-pilas/' },
  { name: 'Blog — todos los artículos', url: '/blog/' },
  { name: 'Sobre nosotros', url: '/sobre-nosotros/' },
];

const brandPages = [
  { name: 'Pilas llave Audi', url: '/marca/audi/' },
  { name: 'Pilas llave Renault', url: '/marca/renault/' },
  { name: 'Pilas llave Volkswagen', url: '/marca/volkswagen/' },
  { name: 'Pilas llave Mercedes-Benz', url: '/marca/mercedes/' },
  { name: 'Pilas llave Toyota', url: '/marca/toyota/' },
  { name: 'Pilas llave Ford', url: '/marca/ford/' },
  { name: 'Pilas llave BMW', url: '/marca/bmw/' },
  { name: 'Pilas llave SEAT', url: '/marca/seat/' },
  { name: 'Pilas llave Peugeot', url: '/marca/peugeot/' },
  { name: 'Pilas llave Nissan', url: '/marca/nissan/' },
];

const comparePages = [
  { name: 'CR2032 vs CR2025', url: '/comparar/cr2032-vs-cr2025/' },
  { name: 'CR2016 vs CR2032', url: '/comparar/cr2016-vs-cr2032/' },
  { name: 'CR2025 vs CR2016', url: '/comparar/cr2025-vs-cr2016/' },
];

const categoryPages = [
  { name: 'Llaves de coche', url: '/categoria/blog/' },
  { name: 'Audi', url: '/categoria/audi/' },
  { name: 'Renault', url: '/categoria/renault/' },
  { name: 'Volkswagen', url: '/categoria/volkswagen/' },
  { name: 'Mercedes Benz', url: '/categoria/mercedes-benz/' },
  { name: 'Digital', url: '/categoria/digital/' },
  { name: 'Reloj', url: '/categoria/reloj/' },
];

const legalPages = [
  { name: 'Aviso Legal', url: '/aviso-legal/' },
  { name: 'Política de Cookies', url: '/politica-de-cookies/' },
  { name: 'Política de Privacidad', url: '/politica-de-privacidad/' },
];
---

<Base
  title="Mapa del sitio - Cambiando de Pilas"
  description="Mapa completo del sitio cambiandopilas.com con acceso a todas las guías, categorías, marcas y páginas."
>
  <div class="container" style="max-width:900px;padding:3rem 1.25rem">
    <h1 style="font-size:2rem;font-weight:800;margin-bottom:2rem">Mapa del sitio</h1>

    <section style="margin-bottom:2rem">
      <h2 class="sitemap-h2">Páginas principales</h2>
      <ul class="sitemap-list">
        {mainPages.map(p => <li><a href={p.url}>{p.name}</a></li>)}
      </ul>
    </section>

    <section style="margin-bottom:2rem">
      <h2 class="sitemap-h2">Guías por marca de coche</h2>
      <ul class="sitemap-list">
        {brandPages.map(p => <li><a href={p.url}>{p.name}</a></li>)}
      </ul>
    </section>

    <section style="margin-bottom:2rem">
      <h2 class="sitemap-h2">Comparativas de pilas</h2>
      <ul class="sitemap-list">
        {comparePages.map(p => <li><a href={p.url}>{p.name}</a></li>)}
      </ul>
    </section>

    <section style="margin-bottom:2rem">
      <h2 class="sitemap-h2">Categorías</h2>
      <ul class="sitemap-list">
        {categoryPages.map(p => <li><a href={p.url}>{p.name}</a></li>)}
      </ul>
    </section>

    <section style="margin-bottom:2rem">
      <h2 class="sitemap-h2">Todos los artículos ({(postsData as any[]).length})</h2>
      <ul class="sitemap-list sitemap-posts">
        {(postsData as any[]).map((p: any) => (
          <li><a href={`/${p.slug}/`}>{p.title}</a></li>
        ))}
      </ul>
    </section>

    <section>
      <h2 class="sitemap-h2">Legal</h2>
      <ul class="sitemap-list">
        {legalPages.map(p => <li><a href={p.url}>{p.name}</a></li>)}
      </ul>
    </section>
  </div>
</Base>

<style>
.sitemap-h2 { font-size:1.2rem; font-weight:700; color:#1a1a2e; border-bottom:2px solid #f49600; padding-bottom:.4rem; margin-bottom:.85rem; }
.sitemap-list { list-style:none; padding:0; column-count:2; column-gap:2rem; }
@media(max-width:600px){ .sitemap-list { column-count:1; } }
.sitemap-list li { padding:.2rem 0; font-size:.9rem; }
.sitemap-list a { color:#0066cc; text-decoration:none; }
.sitemap-list a:hover { text-decoration:underline; }
.sitemap-posts { column-count:3; }
@media(max-width:900px){ .sitemap-posts { column-count:2; } }
@media(max-width:600px){ .sitemap-posts { column-count:1; } }
</style>
```

**Step 2: Build and commit**

```bash
cd /Users/yoelcastano/dev/Migraciones/cambiandopilas && source ~/.nvm/nvm.sh && nvm use 22 && npm run build 2>&1 | tail -5
git add src/pages/mapa-del-sitio.astro
git commit -m "feat: add HTML sitemap at /mapa-del-sitio/"
```

---

### Task 7: Update homepage and footer with new links

**Files:**
- Modify: `src/pages/index.astro`
- Modify: `src/layouts/Base.astro`

**Step 1: Update brand grid in index.astro**

In `src/pages/index.astro`, replace the brand cards array (lines ~63–74) with:

```astro
{[
  { slug: 'audi',       name: 'Audi',       pila: 'CR2032', emoji: '🚗' },
  { slug: 'volkswagen', name: 'Volkswagen', pila: 'CR2032', emoji: '🚙' },
  { slug: 'toyota',     name: 'Toyota',     pila: 'CR2032', emoji: '🚘' },
  { slug: 'ford',       name: 'Ford',       pila: 'CR2032', emoji: '🚐' },
  { slug: 'renault',    name: 'Renault',    pila: 'CR2025', emoji: '🚕' },
  { slug: 'mercedes',   name: 'Mercedes',   pila: 'CR2025', emoji: '🏎️' },
  { slug: 'bmw',        name: 'BMW',        pila: 'CR2032', emoji: '🚗' },
  { slug: 'seat',       name: 'SEAT',       pila: 'CR2032', emoji: '🚙' },
  { slug: 'peugeot',    name: 'Peugeot',    pila: 'CR2032', emoji: '🚘' },
  { slug: 'nissan',     name: 'Nissan',     pila: 'CR2032', emoji: '🚕' },
].map((b) => (
  <a href={`/marca/${b.slug}`} class="brand-card">
    <span class="brand-emoji">{b.emoji}</span>
    <strong>{b.name}</strong>
    <span class="brand-pila">Pila {b.pila}</span>
  </a>
))}
```

Also add a "¿Qué pila usa mi coche?" CTA button before the brand grid:

```astro
<div style="text-align:center;margin:1rem 0 1.5rem">
  <a href="/que-pila-usa-mi-coche/" class="cta-button">🔍 ¿Qué pila usa mi coche?</a>
</div>
```

**Step 2: Update footer in Base.astro**

In the "Guías por marca" footer column, add the 6 new brands:

```astro
<a href="/marca/toyota/">Pilas llave Toyota</a>
<a href="/marca/ford/">Pilas llave Ford</a>
<a href="/marca/bmw/">Pilas llave BMW</a>
<a href="/marca/seat/">Pilas llave SEAT</a>
<a href="/marca/peugeot/">Pilas llave Peugeot</a>
<a href="/marca/nissan/">Pilas llave Nissan</a>
<a href="/que-pila-usa-mi-coche/">Configurador de pilas</a>
<a href="/mapa-del-sitio/">Mapa del sitio</a>
```

**Step 3: Add font preload for Inter Variable**

In `src/layouts/Base.astro`, find the Inter variable woff2 path and add preload. Run:

```bash
find /Users/yoelcastano/dev/Migraciones/cambiandopilas/node_modules/@fontsource-variable/inter -name "*.woff2" | head -3
```

Then add in `<head>` of Base.astro before the closing `</head>`:

```html
<link rel="preload" as="font" type="font/woff2" crossorigin href="/fonts/inter-variable.woff2" />
```

Note: @fontsource-variable/inter loads fonts via CSS from node_modules, not a public path. The preload should reference the actual generated path in the build output. Alternatively, add the font-display: swap to the CSS import. In `src/styles/global.css`, add after the import:

Actually, the simplest fix: in `src/layouts/Base.astro`, the `@fontsource-variable/inter` import already handles loading. Add `font-display: swap` by overriding in global.css:

```css
/* After existing font import */
@font-face {
  font-family: 'Inter Variable';
  font-display: swap;
}
```

**Step 4: Build and commit**

```bash
cd /Users/yoelcastano/dev/Migraciones/cambiandopilas && source ~/.nvm/nvm.sh && nvm use 22 && npm run build 2>&1 | tail -5
git add src/pages/index.astro src/layouts/Base.astro src/styles/global.css
git commit -m "feat: update homepage brand grid, footer links, and font-display swap"
```

---

### Task 8: Add search filter to /blog

**Files:**
- Modify: `src/pages/blog/[...page].astro`

**Step 1: Add search input and JS filter**

In `src/pages/blog/[...page].astro`, add after the `<header>` block and before the card grid:

```astro
<!-- Search filter (only shown on page 1) -->
{currentPage === 1 && (
  <div style="margin:1rem 0 1.5rem">
    <input
      type="search"
      id="blogSearch"
      placeholder="Buscar artículos… (ej: CR2032, Audi A3, reloj)"
      style="width:100%;padding:.65rem 1rem;border:1.5px solid #d0d8e8;border-radius:8px;font-size:1rem"
      autocomplete="off"
    />
    <div id="blogSearchResults" style="display:none;margin-top:1rem"></div>
  </div>
)}
```

And add the script at the bottom of the file (before `</Base>`):

```astro
{currentPage === 1 && (
  <script>
    const input = document.getElementById('blogSearch') as HTMLInputElement;
    const resultsEl = document.getElementById('blogSearchResults');
    const grid = document.querySelector('.card-grid') as HTMLElement;
    const pagination = document.querySelector('.pagination') as HTMLElement;
    let posts: { title: string; slug: string; excerpt: string }[] = [];

    // Pre-populate from URL ?q= param
    const urlQ = new URLSearchParams(location.search).get('q') || '';
    if (urlQ) {
      input.value = urlQ;
      loadAndFilter(urlQ);
    }

    input?.addEventListener('input', () => loadAndFilter(input.value));

    async function loadAndFilter(q: string) {
      if (posts.length === 0) {
        try { posts = await (await fetch('/search-index.json')).json(); } catch {}
      }
      const term = q.toLowerCase().trim();
      if (term.length < 2) {
        if (resultsEl) resultsEl.style.display = 'none';
        if (grid) grid.style.display = '';
        if (pagination) pagination.style.display = '';
        return;
      }
      const matches = posts.filter(p =>
        p.title.toLowerCase().includes(term) || p.excerpt.toLowerCase().includes(term)
      );
      if (grid) grid.style.display = 'none';
      if (pagination) pagination.style.display = 'none';
      if (resultsEl) {
        resultsEl.style.display = 'block';
        if (matches.length === 0) {
          resultsEl.innerHTML = '<p style="color:#666">Sin resultados para "' + q + '"</p>';
        } else {
          resultsEl.innerHTML = '<p style="color:#666;margin-bottom:1rem">' + matches.length + ' resultados para "' + q + '"</p><div class="card-grid">' +
            matches.slice(0, 24).map(p =>
              `<a href="/${p.slug}/" class="article-card"><h3>${p.title}</h3><p>${p.excerpt}</p></a>`
            ).join('') + '</div>';
        }
      }
    }
  </script>
)}
```

**Step 2: Build and commit**

```bash
cd /Users/yoelcastano/dev/Migraciones/cambiandopilas && source ~/.nvm/nvm.sh && nvm use 22 && npm run build 2>&1 | tail -5
git add src/pages/blog/
git commit -m "feat: add client-side search filter to /blog with ?q= URL param support"
```

---

### Task 9: Final build, verify page count, push

**Step 1: Final clean build**

```bash
cd /Users/yoelcastano/dev/Migraciones/cambiandopilas && source ~/.nvm/nvm.sh && nvm use 22 && npm run build
```
Expected: ~1050+ pages generated (839 base + ~150 pila-para + 10 marca + 3 comparar + 3 static pages)

**Step 2: Push to GitHub**

```bash
git push origin main
```

**Step 3: Trigger Coolify deploy**

Coolify app ID: `lc4w08wsg400oockck4gg0c4`. Push to GitHub triggers auto-deploy if configured. If not, trigger manually from the Coolify UI.
