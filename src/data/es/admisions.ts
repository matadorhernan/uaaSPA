import { process_es } from './admisions/process';
import { aplicant_es } from './admisions/aplicant';
import { accrediting_es } from './admisions/accrediting';
import { results_es } from './admisions/results';
import { schoolarships_es } from './admisions/schoolarships';

export const admisions_es = {
  collapsed: true,
  title: 'Admisiones',
  image: {
    path:
      'https://www.uaa.mx/portal/wp-content/uploads/2018/10/Aspirantes-01.png',
    alt: 'estudiantes',
    caption:
      'Anímate a convertirte en uno de nuestros estudiantes. Encuentra información sobre nuestros servicios, oferta educativa y procesos de admisión.',
  },
  pages: [
    process_es,
    aplicant_es,
    accrediting_es,
    results_es,
    schoolarships_es,
    {
      title: 'Licenciaturas',
      path: 'https://www.uaa.mx/portal/oferta-educativa/licenciaturas/',
    },
    {
      title: 'Orientación Educativa ',
      path:
        'https://www.uaa.mx/portal/aspirantes/departamento-de-orientacion-educativa/',
    },
  ],
};
