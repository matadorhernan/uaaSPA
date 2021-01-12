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
      title: 'Menu Rapido',
      pages: [
        {
          title: 'EVENTOS Y CONVOCATORIAS',
          path: 'https://www.uaa.mx/portal/eventos/',
        },
        {
          title: 'RADIO Y TV',
          path: 'https://www.uaa.mx/direcciones/dgdv/rytv/',
        },
        {
          title: 'MUSEO',
          path: 'https://museonacionaldelamuerte.uaa.mx/',
        },
        {
          title: 'BIBLIOTECA DIGITAL',
          path: 'http://biblioteca.uaa.mx/index.php/biblioteca-digital',
        },
        {
          title: 'CALENDARIOS',
          path: 'https://www.uaa.mx/portal/calendarios/',
        },
        {
          title: 'DIRECTORIO',
          path: 'https://www.uaa.mx/portal/directorio/',
        },
        {
          title: 'CORREO INSTITUCIONAL',
          path: 'https://correoweb.uaa.mx/',
        },
        {
          title: 'AULA VIRTUAL',
          path: 'https://aulavirtual.uaa.mx/login/index.php',
        },
        {
          title: 'ESIIMA ',
          path: 'https://aulavirtual.uaa.mx/login/index.php',
        },
      ],
    },
    pages: [
      university_es,
      admisions_es,
      {
        collapsed: true,
        title: 'Oferta Educativa',
        image: {
          path:
            'https://www.uaa.mx/portal/wp-content/uploads/2018/10/Oferta-Educativa-01.png',
          alt: 'estudiantes',
          caption:
            'Complementa tu formación con nuestras opciones de pregrado y posgrado, cursos de extensión académica, diplomados y cursos de idiomas que tenemos disponibles para ti.',
        },
        pages: [
          {
            title: 'Licenciaturas',
            path: 'https://www.uaa.mx/portal/oferta-educativa/licenciaturas/',
          },
          {
            title: 'Bachillerato',
            path:
              'https://www.uaa.mx/portal/nuestra-universidad/centros-academicos-2/centro-de-educacion-media/',
          },
          {
            title: 'Posgrados',
            path: 'https://www.uaa.mx/portal/oferta-educativa/posgrados/',
          },
          {
            title: 'Diplomados',
            path: 'http://cursos.uaa.mx/index.php?m=d',
          },
          {
            title: 'Cursos de Extensión Académica',
            path: 'http://cursos.uaa.mx/index.php?m=l',
          },
          {
            title: 'Cursos en Línea',
            path: 'https://www.uaa.mx/direcciones/dgdv/rytv/',
          },
          {
            title: 'Cursos de Idiomas',
            path: 'https://www.uaa.mx/direcciones/dgdv/rytv/',
          },
          {
            title: 'Extensión, Educación Continua y a Distancia',
            path:
              'https://www.uaa.mx/portal/oferta-educativa/extension-educacion-continua-y-a-distancia/',
          },
          {
            title: 'Descubre tu carrera',
            path: 'http://modeloeducativo.uaa.mx/uaa-14/',
          },
        ],
      },
      {
        collapsed: true,
        title: 'Internacional',
        image: {
          path:
            'https://www.uaa.mx/portal/wp-content/uploads/2018/10/Servicios-y-Vinculacion-01.png',
          alt: 'estudiantes',
          caption:
            'Infórmate acerca de todos los beneficios que te ofrece la UAA, como las instalaciones y servicios, oferta educativa, deportes y alternativas de apoyo.',
        },
        pages: [
          {
            title: 'Convocatoria',
            path: 'https://www.uaa.mx/portal/aspirantes/proceso-de-admision/',
          },
          {
            title: 'Nuevo ingreso',
            path: 'https://www.uaa.mx/portal/aspirantes/inscripcion/',
          },
          {
            title: 'Revalidación',
            path: 'https://www.uaa.mx/portal/aspirantes/revalidacion/',
          },
          {
            title: 'Resultados de admisión',
            path:
              'https://www.uaa.mx/portal/aspirantes/resultados-de-admision/',
          },
          {
            title: 'Apoyos y Becas',
            path: 'https://www.uaa.mx/portal/aspirantes/apoyos-y-becas/',
          },
          {
            title: 'Licenciaturas',
            path: 'https://www.uaa.mx/portal/oferta-educativa/licenciaturas/',
          },
          {
            title: 'Orientación Educativa',
            path:
              'https://www.uaa.mx/portal/aspirantes/departamento-de-orientacion-educativa/',
          },
        ],
      },
      {
        collapsed: true,
        title: 'Investigación',
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
            title: 'Sistemas de Proyectos de Investigacion',
          },
          {
            path:
              'https://www.uaa.mx/portal/docentes/investigacion/normatividad/',
            title: 'Normatividad',
          },
          {
            path:
              'https://www.uaa.mx/portal/docentes/investigacion/eventos-cientificos/',
            title: 'Eventos científicos',
          },
          {
            path:
              'https://www.uaa.mx/portal/docentes/investigacion/contacto-2/',
            title: 'Investigación Científica',
          },
          {
            path:
              'https://www.uaa.mx/portal/docentes/investigacion/investigacion-cientifica/desarrollo-de-la-investigacion/',
            title: 'Contacto',
          },
        ],
      },
      {
        collapsed: true,
        title: 'Egresados',
        image: {
          path:
            'https://www.uaa.mx/portal/wp-content/uploads/2018/10/Movilidad-01.png',
          alt: 'estudiantes',
          caption:
            'Da clic aquí y encuentra información sobre los servicios que ofrecemos como la Bolsa de Trabajo Universitaria o la Unidad de Negocios, así como eventos y convocatorias.',
        },
        pages: [
          {
            title: 'Egreso',
            path: 'https://www.uaa.mx/portal/alumnos/egreso-y-titulacion/',
          },
          {
            title: 'Bolsa de trabajo',
            path: 'https://www.uaa.mx/portal/alumnos/bolsa-de-trabajo/',
          },
          {
            title: 'Programa para emprendedores',
            path:
              'https://www.uaa.mx/portal/alumnos/programa-para-emprendedores/',
          },
          {
            title: 'Trámites a Distancia',
            path:
              'https://www.uaa.mx/portal/wp-content/uploads/2019/04/TR%C3%81MITES-A-DISTANCIA-2019.pdf',
          },
          {
            title: 'Duplicado Título Profesional',
            path:
              'https://www.uaa.mx/portal/wp-content/uploads/2019/04/DUPLICADO-DE-T%C3%8DTULO-PROFESIONAL.pdf',
          },
        ],
      },
      {
        collapsed: true,
        title: 'Comunicación',
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
            title: 'Convocatoria',
          },
          {
            path: 'https://www.uaa.mx/portal/aspirantes/inscripcion/',
            title: 'Nuevo ingreso',
          },
          {
            path: 'https://www.uaa.mx/portal/aspirantes/revalidacion/',
            title: 'Revalidación',
          },
          {
            path:
              'https://www.uaa.mx/portal/aspirantes/resultados-de-admision/',
            title: 'Resultados de admisión',
          },
          {
            path: 'https://www.uaa.mx/portal/aspirantes/apoyos-y-becas/',
            title: 'Apoyos y Becas',
          },
          {
            path: 'https://www.uaa.mx/portal/oferta-educativa/licenciaturas/',
            title: 'Licenciaturas',
          },
          {
            path:
              'https://www.uaa.mx/portal/aspirantes/departamento-de-orientacion-educativa/',
            title: 'Orientación Educativa',
          },
        ],
      },
    ],
  },
};
