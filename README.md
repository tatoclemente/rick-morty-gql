# Rick and Morty SPA con GraphQL

Esta es una Single Page Application (SPA) que utiliza la API de Rick and Morty con GraphQL. La aplicación está escrita en TypeScript para aprovechar el autocompletado y proporcionar un mayor control de errores.

## Características principales

- Utiliza TypeScript para mejorar la experiencia de desarrollo y reducir errores.
- Implementa el enrutador Wouter para manejar la navegación en la aplicación. Wouter es una alternativa liviana y fácil de implementar a React Router Dom.
- Usa Tailwind CSS para agilizar el proceso de estilizado. Considero que es una herramienta práctica que permite escribir estilos de manera rápida y eficiente.
  - Tailwind CSS también ofrece una amplia gama de utilidades predefinidas que ayudan a mantener un código más limpio y modular.
- Se han creado transiciones de vista utilizando la nueva API de JavaScript `startViewTransition` para agregar efectos sutiles y mejorar la experiencia de usuario durante las transiciones entre páginas.
- El código se ha modularizado para mejorar la mantenibilidad y legibilidad del mismo. Cada componente y funcionalidad se ha dividido en módulos separados para facilitar su gestión y reutilización.

## Instalación

1. Clona este repositorio: `git clone https://github.com/tatoclemente/rick-morty-gql.git`
2. Instala las dependencias: `yarn install`
3. Inicia la aplicación en modo de desarrollo: `yarn dev`

## Deployment

### En AWS S3 [http://rick-and-morty-gql.s3-website.us-east-2.amazonaws.com](http://rick-and-morty-gql.s3-website.us-east-2.amazonaws.com)


En primera instancia, decidí desplegar en AWS a través de un bucket S3. Cabe destacar que esta fue mi primera experiencia desplegando de esta manera. Por lo que me encontré con algunos inconvenientes que no logré resolver. Cuando intento acceder con la URL a una pantalla, o sea, sin usar la navegación, me lleva a una página de 404 de aws, eso significa que pierde la referencia del archivo index.html. intenté crear una función lambda que redireccione las rutas pero no logré hacer que funcione. 
Otro problema es que no logré incorporar un certificado SSL, lo cual habría sido deseable.
En general, al principio encontré el proceso bastante sencillo y parece ser una buena alternativa, pero se me complicó, por eso necesito capacitarme para sacarle mayor provecho.

### En Vercel [https://rick-and-morty-gql-five.vercel.app](https://rick-and-morty-gql-five.vercel.app)

Finalmente, decidí desplegar en Vercel, una alternativa muy sencilla y rápida, de hecho tengo casi todos mis proyectos desplegados ahí, ya que esta empresa proporciona un dominio con certificado SSL gratuito y de manera automática.
Otra ventaja de este servicio es que está sincronizado con el respositorio remoto, por lo tanto los cambios que se suben a la rama `main`, en este caso, impactan automáticamente en producción.
En Vercel también me encontré con el problema de la referencia al index.html pero lo solucioné creando un archivo vercel.json dónde hice la reescritura de las rutas. 

`{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}`

No estoy seguro pero creo que como estoy usando `Wouter` para el enrutado, quizás eso genere este inconveniente. 
Con `react-router-dom` esto no sucede.

## Autor

Gustavo Clemente

🌐 [tatoclemente.dev](https://tatoclemente.dev)

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?logo=LinkedIn&logoColor=white&labelColor=101010)](https://linkedin.com/in/tatoclemente/)
[![Gmail](https://img.shields.io/badge/Gmail-EA4335?logo=Gmail&logoColor=white&labelColor=101010)](mailto:soytatoclemente@gmail.com?Subject=Contacto%20por%20colaboración)


