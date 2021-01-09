import { agriculturalCenterAcademics_es } from './agricultural-center/agricultural-center-academics';
import { agriculturalCenterContact_es } from './agricultural-center/agricultural-center-contact';
import { agriculturalCenterDean_es } from './agricultural-center/agricultural-center-dean';
import { agriculturalCenterAgronomy_es } from './agricultural-center/agricultural-center-agronomy';
import { agriculturalCenterFood_es } from './agricultural-center/agricultural-center-food';
import { agriculturalCenterVeterinary_es } from './agricultural-center/agricultural-center-veterinary';
import { agriculturalCenterAreas_es } from './agricultural-center/agricultural-center-areas';
import { agriculturalCenterPresentation_es } from './agricultural-center/agricultural-center-presentation';
import { agriculturalCenterStructure_es } from './agricultural-center/agricultural-center-structure';

export const centerAgricultural_es = {
  notExternal: true,
  title: 'Ciencias Agropecuarias',
  subtitle: 'Centro Académico',
  path: 'universidad/centros/agropecuarias',
  text:
    'Conoce mas acerca de los  Centros Académicos de la Universidad en los siguientes apartados de esta sección.',
  image: {
    path: 'https://www.uaa.mx/portal/wp-content/uploads/2018/11/Y6A4208.jpg',
    alt: 'Centro de Ciencias Agropecuarias de la UAA',
    caption: 'Centro de Ciencias Agropecuarias de la UAA',
  },
  pages: [
    agriculturalCenterPresentation_es,
    agriculturalCenterAcademics_es,
    agriculturalCenterDean_es,
    agriculturalCenterAgronomy_es,
    agriculturalCenterFood_es,
    agriculturalCenterVeterinary_es,
    agriculturalCenterAreas_es,
    agriculturalCenterStructure_es,
    agriculturalCenterContact_es,
  ],
};
