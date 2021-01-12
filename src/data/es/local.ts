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
        label: 'Menu Rapido',
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
          title: 'Oferta Educativa',
          label: 'Oferta Educativa',
        },
        image: {
          path:
            'https://www.uaa.mx/portal/wp-content/uploads/2018/10/Oferta-Educativa-01.png',
          alt: 'estudiantes',
          caption:
            'Complementa tu formación con nuestras opciones de pregrado y posgrado, cursos de extensión académica, diplomados y cursos de idiomas que tenemos disponibles para ti.',
        },
        pages: [
          {
            titleHead: {
              title: 'Licenciaturas',
              label: 'Oferta Educativa',
            },
            path: 'https://www.uaa.mx/portal/oferta-educativa/licenciaturas/',
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
      },
      {
        collapsed: true,
        titleHead: {
          title: 'Internacional',
          label: 'Internacional',
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
              title: 'Convocatoria',
              label: 'Internacional',
            },
            path: 'https://www.uaa.mx/portal/aspirantes/proceso-de-admision/',
          },
          {
            titleHead: {
              title: 'Nuevo ingreso',
              label: 'Internacional',
            },
            path: 'https://www.uaa.mx/portal/aspirantes/inscripcion/',
          },
          {
            titleHead: {
              title: 'Revalidación',
              label: 'Internacional',
            },
            path: 'https://www.uaa.mx/portal/aspirantes/revalidacion/',
          },
          {
            titleHead: {
              title: 'Resultados de admisión',
              label: 'Internacional',
            },
            path:
              'https://www.uaa.mx/portal/aspirantes/resultados-de-admision/',
          },
          {
            titleHead: {
              title: 'Apoyos y Becas',
              label: 'Internacional',
            },
            path: 'https://www.uaa.mx/portal/aspirantes/apoyos-y-becas/',
          },
          {
            titleHead: {
              title: 'Licenciaturas',
              label: 'Internacional',
            },
            path: 'https://www.uaa.mx/portal/oferta-educativa/licenciaturas/',
          },
          {
            titleHead: {
              title: 'Orientación Educativa',
              label: 'Internacional',
            },
            path:
              'https://www.uaa.mx/portal/aspirantes/departamento-de-orientacion-educativa/',
          },
        ],
      },
      {
        collapsed: true,
        titleHead: {
          title: 'Investigación',
          label: 'Investigación',
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
          label: 'Egresados',
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
              title: 'Bolsa de trabajo',
              label: 'Egresados',
            },
            path: 'https://www.uaa.mx/portal/alumnos/bolsa-de-trabajo/',
          },
          {
            titleHead: {
              title: 'Programa para emprendedores',
              label: 'Egresados',
            },
            path:
              'https://www.uaa.mx/portal/alumnos/programa-para-emprendedores/',
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
      {
        collapsed: true,
        titleHead: {
          title: 'Comunicación',
          label: 'Comunicación',
        },
        image: {
          path:
            'https://www.uaa.mx/portal/wp-content/uploads/2018/10/Comunicacion-01.png',
          alt: 'camara',
          caption:
            'Entérate de las noticias más recientes e importantes de nuestra universidad.',
        },
        pages: [
          {
            path: 'https://www.uaa.mx/portal/aspirantes/proceso-de-admision/',
            titleHead: {
              title: 'Convocatoria',
              label: 'Comunicación',
            },
          },
          {
            path: 'https://www.uaa.mx/portal/aspirantes/inscripcion/',
            titleHead: {
              title: 'Nuevo ingreso',
              label: 'Comunicación',
            },
          },
          {
            path: 'https://www.uaa.mx/portal/aspirantes/revalidacion/',
            titleHead: {
              title: 'Revalidación',
              label: 'Comunicación',
            },
          },
          {
            path:
              'https://www.uaa.mx/portal/aspirantes/resultados-de-admision/',
            titleHead: {
              title: 'Resultados de admisión',
              label: 'Comunicación',
            },
          },
          {
            path: 'https://www.uaa.mx/portal/aspirantes/apoyos-y-becas/',
            titleHead: {
              title: 'Apoyos y Becas',
              label: 'Comunicación',
            },
          },
          {
            path: 'https://www.uaa.mx/portal/oferta-educativa/licenciaturas/',
            titleHead: {
              title: 'Licenciaturas',
              label: 'Comunicación',
            },
          },
          {
            path:
              'https://www.uaa.mx/portal/aspirantes/departamento-de-orientacion-educativa/',
            titleHead: {
              title: 'Orientación Educativa',
              label: 'Comunicación',
            },
          },
        ],
      },
    ],
  },
};
