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

### En AWS S3 

En primera instancia, decidí desplegar en AWS a través de un bucket S3. Cabe destacar que esta fue mi primera experiencia desplegando de esta manera. En general, encontré el proceso bastante sencillo y parece ser una buena alternativa. 
Sin embargo, no logré incorporar un certificado SSL, lo cual habría sido deseable.

### En Vercel

Finalmente, decidí también desplegar en Vercel, ya que esta empresa proporciona un certificado SSL gratuito y de manera automática.

## Autor

Gustavo Clemente


