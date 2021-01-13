import { process_es } from './admisions/process';
import { accrediting_es } from './admisions/accrediting';
import { results_es } from './admisions/results';

export const admisions_es = {
  collapsed: true,
  titleHead: {
    title: 'Admisiones',
    label: 'Menu',
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
    accrediting_es,
    results_es,
    {
      notExternal: true,
      titleHead: {
        title: 'Licenciaturas',
        label: 'Admisiones',
      },
      path: 'oferta/licenciaturas',
    },
    {
      titleHead: {
        title: 'Bachillerato',
        label: 'Oferta Educativa',
      },
      path:
        'https://www.uaa.mx/portal/nuestra-universidad/centros-academicos-2/centro-de-educacion-media/',
    },
    {
      titleHead: {
        title: 'Posgrados',
        label: 'Oferta Educativa',
      },
      path: 'https://www.uaa.mx/portal/oferta-educativa/posgrados/',
    },
    {
      titleHead: {
        title: 'Diplomados',
        label: 'Oferta Educativa',
      },
      path: 'http://cursos.uaa.mx/index.php?m=d',
    },
    {
      titleHead: {
        title: 'Cursos de Extensión Académica',
        label: 'Oferta Educativa',
      },
      path: 'http://cursos.uaa.mx/index.php?m=l',
    },
    {
      titleHead: {
        title: 'Cursos en Línea',
        label: 'Oferta Educativa',
      },
      path: 'https://www.uaa.mx/direcciones/dgdv/rytv/',
    },
    {
      titleHead: {
        title: 'Cursos de Idiomas',
        label: 'Oferta Educativa',
      },
      path: 'https://www.uaa.mx/direcciones/dgdv/rytv/',
    },
    {
      titleHead: {
        title: 'Extensión, Educación Continua y a Distancia',
        label: 'Oferta Educativa',
      },
      path:
        'https://www.uaa.mx/portal/oferta-educativa/extension-educacion-continua-y-a-distancia/',
    },
    {
      titleHead: {
        title: 'Descubre tu carrera',
        label: 'Oferta Educativa',
      },
      path: 'http://modeloeducativo.uaa.mx/uaa-14/',
    },
  ],
};
