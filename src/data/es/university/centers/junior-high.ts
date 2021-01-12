import { juniorHighPresentation_es } from './junior-high/junior-high-presentation';
import { juniorHighAcademics_es } from './junior-high/junior-high-academics';
import { juniorHighDean_es } from './junior-high/junior-high-dean';
import { juniorHighStructure_es } from './junior-high/junior-high-structure';
import { juniorHighContact_es } from './junior-high/junior-high-contact';

export const juniorHigh_es = {
  notExternal: true,
  titleHead: {
    title: 'Educación Media',
    label: 'Centro Académico',
  },
  path: 'universidad/centros/media',
  text:
    'Conoce mas acerca de este centro académico de la Universidad en los siguientes apartados de esta sección.',
  image: {
    path:
      'https://www.uaa.mx/portal/wp-content/uploads/2020/03/prepas-1-1024x293.jpg',
    alt: 'Centro de Educación Media de la UAA',
    caption: 'Centro de Educación Media de la UAA',
  },
  pages: [
    juniorHighPresentation_es,
    juniorHighAcademics_es,
    juniorHighDean_es,
    juniorHighStructure_es,
    juniorHighContact_es,
  ],
};
