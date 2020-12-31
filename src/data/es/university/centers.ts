import { centerAgricultural_es } from './centers/agricultural-center';
import { centerArt_es } from './centers/art-center';
import { centerBasic_es } from './centers/basic-center';
import { centerBusiness_es } from './centers/business-center';
import { centerConstruction_es } from './centers/construction-center';
import { centerEconomy_es } from './centers/economy-center';
import { centerEngineering_es } from './centers/engineering-center';
import { centerHealth_es } from './centers/health-center';
import { juniorHigh_es } from './centers/junior-high';
import { socialCenter_es } from './centers/social-center';

export const centers_es = {
  notExternal: true,
  title: 'Nuestros Centros Académicos',
  subtitle: 'Centros Académicos',
  path: 'universidad/centros',
  text:
    'Conoce mas acerca de los  Centros Académicos de la Universidad en los siguientes apartados de esta sección.',
  image: {
    path:
      'https://www.uaa.mx/portal/wp-content/uploads/2018/10/Universidad-01.jpg',
    alt: 'Gallo  de la UAA en formato de Banner',
    caption: 'Gallo  de la UAA en formato de Banner',
  },
  pages: [
    centerAgricultural_es,
    centerArt_es,
    centerBasic_es,
    centerBusiness_es,
    centerConstruction_es,
    centerEconomy_es,
    centerEngineering_es,
    centerHealth_es,
    juniorHigh_es,
    socialCenter_es,
  ],
};
