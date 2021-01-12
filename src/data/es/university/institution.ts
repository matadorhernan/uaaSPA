import { institutionHistory_es } from './institution/institution-history';
import { institutionMotto_es } from './institution/institution-motto';
import { institutionHytm_es } from './institution/institution-hytm';
import { institutionLogo_es } from './institution/institution-logo';
import { institutionIdeals_es } from './institution/institution-ideals';
import { institutionMascot_es } from './institution/institution-mascot';
import { institutionGov_es } from './institution/institution-gov';

export const institution_es = {
  notExternal: true,
  titleHead: {
    title: 'Nuestra Institución',
    label: 'Institución',
  },
  path: 'universidad/institucion',
  text:
    'Conoce mas acerca de la Universidad en los siguientes apartados de esta seccion.',
  pages: [
    institutionHistory_es,
    institutionMotto_es,
    institutionHytm_es,
    institutionLogo_es,
    institutionIdeals_es,
    institutionMascot_es,
    institutionGov_es,
  ],
};
