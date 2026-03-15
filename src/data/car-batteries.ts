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
  { marca: 'BMW', marcaSlug: 'bmw', modelo: 'Serie 7', modeloSlug: 'serie-7', pila: 'CR2450', anos: '2001–2024', notas: 'Display Key', amazon: 'https://www.amazon.es/s?k=pila+cr2450&tag=enjoys0d-21' },
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

// Helper: get unique brand slugs
export const brands = [...new Set(carBatteries.map(e => e.marcaSlug))];

// Helper: get models for a brand
export function getModelsForBrand(marcaSlug: string): CarBatteryEntry[] {
  return carBatteries.filter(e => e.marcaSlug === marcaSlug);
}
