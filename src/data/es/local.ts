import { landing_es } from './landing';
import { university_es } from './university';
import { admisions_es } from './admisions';

export const local_es = {
  lang: 'es',
  university: {
    title: 'Universidad Autónoma de Aguascalientes',
    subtitle: 'Campus Sur',
    markup: 'Universidad <br />Autónoma de <br />Aguascalientes',
    address:
      'Av. Universidad # 940, Ciudad Universitaria, C. P. 20131, Aguascalientes, Ags. MÉXICO',
    phone: '(449) 910 74 00',
    email: 'cvargas@correo.uaa.mx',
    socialMedia: [
      {
        name: 'facebook',
        path: '',
      },
      {
        name: 'twitter',
        path: '',
      },
      {
        name: 'instagram',
        path: '',
      },
      {
        name: 'linkedin',
        path: '',
      },
      {
        name: 'youtube',
        path: '',
      },
    ],
    addressMarkup: '',
    logo: {
      path: 'assets/brand.svg',
      alt: 'uaa logo',
    },
  },
  root: {
    landing: landing_es,
    quickLinks: {
      collapsed: true,
      titleHead: {
        title: 'Menu Rapido',
        label: 'Menu',
      },
      pages: [
        {
          titleHead: {
            title: 'Eventos y Convocatorias',
            label: 'Menu Rapido',
          },
          path: 'https://www.uaa.mx/portal/eventos/',
        },
        {
          titleHead: {
            title: 'Radio y Tv',
            label: 'Menu Rapido',
          },
          path: 'https://www.uaa.mx/direcciones/dgdv/rytv/',
        },
        {
          titleHead: {
            title: 'Museo',
            label: 'Menu Rapido',
          },
          path: 'https://museonacionaldelamuerte.uaa.mx/',
        },
        {
          titleHead: {
            title: 'Biblioteca Digital',
            label: 'Menu Rapido',
          },
          path: 'http://biblioteca.uaa.mx/index.php/biblioteca-digital',
        },
        {
          titleHead: {
            title: 'Calendarios',
            label: 'Menu Rapido',
          },
          path: 'https://www.uaa.mx/portal/calendarios/',
        },
        {
          titleHead: {
            title: 'Directorio',
            label: 'Menu Rapido',
          },
          path: 'https://www.uaa.mx/portal/directorio/',
        },
        {
          titleHead: {
            title: 'Correo Institucional',
            label: 'Menu Rapido',
          },
          path: 'https://correoweb.uaa.mx/',
        },
        {
          titleHead: {
            title: 'CAADI',
            label: 'Menu Rapido',
          },
          path: 'https://caadi.uaa.mx/',
        },
        {
          titleHead: {
            title: 'Aula Virtual',
            label: 'Menu Rapido',
          },
          path: 'https://aulavirtual.uaa.mx/login/index.php',
        },
        {
          titleHead: {
            title: 'ESIIMA ',
            label: 'Menu Rapido',
          },
          path: 'https://aulavirtual.uaa.mx/login/index.php',
        },
      ],
    },
    pages: [
      university_es,
      admisions_es,
      {
        collapsed: true,
        titleHead: {
          title: 'Intercambio',
          label: 'Menu',
        },
        image: {
          path:
            'https://www.uaa.mx/portal/wp-content/uploads/2018/10/Servicios-y-Vinculacion-01.png',
          alt: 'estudiantes',
          caption:
            'Infórmate acerca de todos los beneficios que te ofrece la UAA, como las instalaciones y servicios, oferta educativa, deportes y alternativas de apoyo.',
        },
        pages: [
          {
            titleHead: {
              title: 'Intercambios para Pregrado',
              label: 'Internacional',
            },
            path: 'https://www.uaa.mx/portal/aspirantes/proceso-de-admision/',
          },
          {
            titleHead: {
              title: 'Intercambios para Posgrado',
              label: 'Internacional',
            },
            path: 'https://www.uaa.mx/portal/aspirantes/inscripcion/',
          },
          {
            titleHead: {
              title: 'Intercambios para Profesores',
              label: 'Internacional',
            },
            path: 'https://www.uaa.mx/portal/aspirantes/revalidacion/',
          },
          {
            titleHead: {
              title: 'Convenios y Asociaciones de Movilidad',
              label: 'Internacional',
            },
            path:
              'https://www.uaa.mx/portal/aspirantes/resultados-de-admision/',
          },
        ],
      },
      {
        collapsed: true,
        titleHead: {
          title: 'Becas y Apoyo',
          label: 'Menu',
        },
        image: {
          path:
            'https://www.uaa.mx/portal/wp-content/uploads/2020/02/KM2A7944-Movilidad.jpg',
          alt: 'estudiantes',
          caption:
            'Infórmate acerca de todos los beneficios que te ofrece la UAA, como las instalaciones y servicios, oferta educativa, deportes y alternativas de apoyo.',
        },
        pages: [
          {
            titleHead: {
              title: 'Programa para emprendedores',
              label: 'Becas y Apoyo',
            },
            path:
              'https://www.uaa.mx/portal/alumnos/programa-para-emprendedores/',
          },
          {
            path: 'https://investigacion.uaa.mx/proyecto',
            titleHead: {
              title: 'Becas de la Universidad',
              label: 'Becas y Apoyo',
            },
          },
          {
            path: 'https://investigacion.uaa.mx/proyecto',
            titleHead: {
              title: 'Becas de Investigación',
              label: 'Becas y Apoyo',
            },
          },
          {
            titleHead: {
              title: 'Becas de Movilidad',
              label: 'Becas y Apoyo',
            },
            path:
              'https://www.uaa.mx/portal/alumnos/programa-para-emprendedores/',
          },
          {
            titleHead: {
              title: 'Bolsa de trabajo',
              label: 'Becas y Apoyo',
            },
            path: 'https://www.uaa.mx/portal/alumnos/bolsa-de-trabajo/',
          },
          {
            titleHead: {
              title: 'Servicio Social',
              label: 'Becas y Apoyo',
            },
            path: 'https://www.uaa.mx/portal/aspirantes/proceso-de-admision/',
          },
          {
            titleHead: {
              title: 'Prácticas Profesionales',
              label: 'Becas y Apoyo',
            },
            path: 'https://www.uaa.mx/portal/aspirantes/proceso-de-admision/',
          },
          {
            titleHead: {
              title: 'Formación Humanista',
              label: 'Becas y Apoyo',
            },
            path: 'https://www.uaa.mx/portal/aspirantes/proceso-de-admision/',
          },
          {
            titleHead: {
              title: 'Tutorías',
              label: 'Becas y Apoyo',
            },
            path: 'https://www.uaa.mx/portal/aspirantes/proceso-de-admision/',
          },
          {
            titleHead: {
              title: 'Servicios de Apoyo para Estudiantes',
              label: 'Becas y Apoyo',
            },
            path: 'https://www.uaa.mx/portal/aspirantes/proceso-de-admision/',
          },
          {
            titleHead: {
              title: 'Seguridad Social para Alumnos',
              label: 'Becas y Apoyo',
            },
            path: 'https://www.uaa.mx/portal/aspirantes/proceso-de-admision/',
          },
        ],
      },
      {
        collapsed: true,
        titleHead: {
          title: 'Alumnado',
          label: 'Menu',
        },
        image: {
          path:
            'https://www.uaa.mx/portal/wp-content/uploads/2020/02/IMG_1203-Alumnos.jpg',
          alt: 'estudiantes',
          caption:
            'Infórmate acerca de todos los beneficios que te ofrece la UAA, como las instalaciones y servicios, oferta educativa, deportes y alternativas de apoyo.',
        },
        pages: [
          {
            titleHead: {
              title: 'Sistema de Calificaciones',
              label: 'Alumnado',
            },
            path: 'https://www.uaa.mx/portal/aspirantes/proceso-de-admision/',
          },
          {
            titleHead: {
              title: 'Oferta de Materias Comunes',
              label: 'Alumnado',
            },
            path: 'https://www.uaa.mx/portal/aspirantes/proceso-de-admision/',
          },
          {
            titleHead: {
              title: 'Orientación Asuntos Escolares',
              label: 'Alumnado',
            },
            path: 'https://www.uaa.mx/portal/aspirantes/proceso-de-admision/',
          },
          {
            titleHead: {
              title: 'Constancias y Credenciales',
              label: 'Alumnado',
            },
            path: 'https://www.uaa.mx/portal/aspirantes/proceso-de-admision/',
          },
          {
            titleHead: {
              title: 'Trámites a Distancia',
              label: 'Alumnado',
            },
            path: 'https://www.uaa.mx/portal/aspirantes/proceso-de-admision/',
          },
          {
            titleHead: {
              title: 'Exámenes Extraordinarios y Título de Suficiencia',
              label: 'Alumnado',
            },
            path: 'https://www.uaa.mx/portal/aspirantes/proceso-de-admision/',
          },
          {
            titleHead: {
              title: 'Duplicado Título Profesional',
              label: 'Alumnado',
            },
            path: 'https://www.uaa.mx/portal/aspirantes/proceso-de-admision/',
          },
          {
            titleHead: {
              title: 'Egreso',
              label: 'Alumnado',
            },
            path: 'https://www.uaa.mx/portal/aspirantes/proceso-de-admision/',
          },
          {
            titleHead: {
              title: 'Reglamentación académica',
              label: 'Alumnado',
            },
            path: 'https://www.uaa.mx/portal/aspirantes/proceso-de-admision/',
          },
          {
            titleHead: {
              title: 'Reinscripción',
              label: 'Alumnado',
            },
            path: 'https://www.uaa.mx/portal/aspirantes/proceso-de-admision/',
          },
        ],
      },
      {
        collapsed: true,
        titleHead: {
          title: 'Investigación',
          label: 'Menu',
        },
        image: {
          path:
            'https://www.uaa.mx/portal/wp-content/uploads/2018/10/Docentes-01.png',
          alt: 'docentes',
          caption:
            'Porque el proceso de aprendizaje nunca termina, infórmate acerca de los servicios y opciones que la UAA tiene para ti. Conoce más acerca del apoyo y las convocatorias disponibles.',
        },
        pages: [
          {
            path: 'https://investigacion.uaa.mx/proyecto',
            titleHead: {
              title: 'Sistemas de Proyectos de Investigacion',
              label: 'Investigación',
            },
          },
          {
            titleHead: {
              title: 'Divulgación de la Ciencia',
              label: 'Alumnado',
            },
            path: 'https://www.uaa.mx/portal/aspirantes/proceso-de-admision/',
          },
          {
            path:
              'https://www.uaa.mx/portal/docentes/investigacion/normatividad/',
            titleHead: {
              title: 'Normatividad',
              label: 'Investigación',
            },
          },
          {
            path:
              'https://www.uaa.mx/portal/docentes/investigacion/eventos-cientificos/',
            titleHead: {
              title: 'Eventos científicos',
              label: 'Investigación',
            },
          },
          {
            path:
              'https://www.uaa.mx/portal/docentes/investigacion/contacto-2/',
            titleHead: {
              title: 'Investigación Científica',
              label: 'Investigación',
            },
          },
          {
            path:
              'https://www.uaa.mx/portal/docentes/investigacion/investigacion-cientifica/desarrollo-de-la-investigacion/',
            titleHead: {
              title: 'Contacto',
              label: 'Investigación',
            },
          },
        ],
      },
      {
        collapsed: true,
        titleHead: {
          title: 'Egresados',
          label: 'Menu',
        },
        image: {
          path:
            'https://www.uaa.mx/portal/wp-content/uploads/2018/10/Movilidad-01.png',
          alt: 'estudiantes',
          caption:
            'Da clic aquí y encuentra información sobre los servicios que ofrecemos como la Bolsa de Trabajo Universitaria o la Unidad de Negocios, así como eventos y convocatorias.',
        },
        pages: [
          {
            titleHead: {
              title: 'Egreso',
              label: 'Egresados',
            },
            path: 'https://www.uaa.mx/portal/alumnos/egreso-y-titulacion/',
          },
          {
            titleHead: {
              title: 'Trámites a Distancia',
              label: 'Egresados',
            },
            path:
              'https://www.uaa.mx/portal/wp-content/uploads/2019/04/TR%C3%81MITES-A-DISTANCIA-2019.pdf',
          },
          {
            titleHead: {
              title: 'Duplicado Título Profesional',
              label: 'Egresados',
            },
            path:
              'https://www.uaa.mx/portal/wp-content/uploads/2019/04/DUPLICADO-DE-T%C3%8DTULO-PROFESIONAL.pdf',
          },
        ],
      },
    ],
  },
};
