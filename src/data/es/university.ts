import { institution_es } from './university/institution';
import { leadership_es } from './university/leadership';
import { administration_es } from './university/administration';
import { centers_es } from './university/centers';
import { development_es } from './university/develoment';
import { academicModel_es } from './university/academic-model';
import { asociations_es } from './university/asociations';

export const university_es = {
  collapsed: true,
  notExternal: true,
  titleHead: {
    title: 'Universidad',
    label: 'Menu',
  },
  image: {
    path:
      'https://www.uaa.mx/portal/wp-content/uploads/2018/10/Universidad-01.jpg',
    alt: 'gallo uaa',
    caption:
      '¿Te interesa conocer más sobre la UAA? Encuentra información sobre nosotros y nuestra historia. ¿Tienes alguna duda o algo que quieras decirnos? ¡Háznoslo saber!',
  },
  pages: [
    institution_es,
    leadership_es,
    {
      notExternal: false,
      titleHead: {
        title: 'Secretaría General',
        label: 'Secretaría General de la Universidad',
      },
      path: 'https://www.uaa.mx/sg/',
    },
    administration_es,
    centers_es,
    development_es,
    {
      notExternal: false,
      titleHead: {
        title: 'Consejo Universitario',
        label: 'Consejo Universitario',
      },
      path: 'https://www.uaa.mx/consejo/',
    },
    {
      notExternal: false,
      titleHead: {
        title: 'Correo Universitario',
        label: 'Correo Universitario',
      },
      path: 'https://www.uaa.mx/consejo/?page_id=638',
    },
    {
      notExternal: false,
      titleHead: {
        title: 'Legislación Universitaria',
        label: 'Legislación Universitaria',
      },
      path: 'https://www.uaa.mx/institucion/LEGISLACION%20UNIVERSITARIA.pdf',
    },
    academicModel_es,
    asociations_es,
  ],
};
