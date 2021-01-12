import { process_es } from './admisions/process';
import { aplicant_es } from './admisions/aplicant';
import { accrediting_es } from './admisions/accrediting';
import { results_es } from './admisions/results';
import { schoolarships_es } from './admisions/schoolarships';

export const admisions_es = {
  collapsed: true,
  titleHead: {
    title: 'Admisiones',
    label: 'Admisiones',
  },
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
      notExternal: true,
      titleHead: {
        title: 'Licenciaturas',
        label: 'Admisiones',
      },
      path: 'oferta/licenciaturas',
    },
  ],
};
