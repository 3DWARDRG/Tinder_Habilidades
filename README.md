
# API Tinder de habilidades

La API REST de “Tinder de Habilidades” es una plataforma innovadora diseñada para conectar empresas con candidatos basándose en sus habilidades. Esta API permite a las empresas buscar y filtrar candidatos según sus habilidades específicas, facilitando la identificación de los candidatos más adecuados para sus necesidades.

Las características clave de esta API incluyen:

Búsqueda de habilidades: Las empresas pueden buscar candidatos basándose en habilidades específicas. Por ejemplo, si una empresa necesita un desarrollador con experiencia en JavaScript, puede buscar candidatos con esa habilidad.

Perfil del candidato: Cada candidato tiene un perfil que incluye información detallada sobre sus habilidades, experiencia laboral, educación y más. Las empresas pueden ver estos perfiles para obtener una comprensión completa de las capacidades del candidato.

Contacto con candidatos: Una vez que una empresa ha identificado a un candidato que le interesa, puede utilizar la API para iniciar el contacto. Esto podría ser a través de un mensaje directo, una solicitud de entrevista o cualquier otro método que la empresa prefiera.

Actualizaciones en tiempo real: La API proporciona actualizaciones en tiempo real, lo que significa que las empresas siempre tienen acceso a la información más reciente sobre los candidatos y sus habilidades.

Seguridad y privacidad: La API ha sido diseñada con un fuerte enfoque en la seguridad y la privacidad. Todas las comunicaciones están encriptadas y se toman medidas para garantizar que los datos personales de los candidatos estén seguros.

En resumen, la API REST de “Tinder de Habilidades” es una herramienta poderosa para las empresas que buscan contratar talento basándose en habilidades específicas. Facilita el proceso de búsqueda y contratación al proporcionar un acceso fácil y eficiente a los candidatos adecuados…




## Instalacion

Install Tinder_Habilidades with Git Clone

Añade esto en tu consola.

```bash
  https://github.com/3DWARDRG/Tinder_Habilidades.git
```
## Correr localmente

Ir al directorio del proyecto

```bash
  cd Tinder_Habilidades
```

Instalar dependencias

```bash
  npm install
```

Iniciar el servidor

```bash
  npm run start
```


## Tecnologias Usadas

**Cliente:** Insomnia, postman //  Frontend

**Base de datos:** PostgreSQL

**Servidor:** Node, Express


## Variables de Entorno

Para ejecutar este proyecto, deberá agregar las siguientes variables de entorno a su archivo .env

`PORT`

`PORT_DATABASE`

`PASS_DATABASE`


## Screenshots

Estructura del Proyecto

![Estructura del Proyecto](./Screenshots/Estructura del Proyecto.jpg)

Estructura rutas

![Estructura Manejo de rutas](./Screenshots/Estructura rutas.jpg)

Estructura del CRUD

![Estructura del CRUD](./Screenshots/Estructura de las rutas.jpg)

Estructura Archivos rutas

![Estructura de las rutas](./Screenshots/Estructura del CRUD.jpg)

## Comentarios

Si tiene algún comentario, comuníquese conmigo a Edwardr185@gmail.com

|| Tener en cuenta el desarollo se hizo con consultas escritas en templates literals las hace suceptibles a errores, no se opto por la implementacion de Sequalizer debido a el poco conocimiento sobre esta herramienta y la dedicacion por aplicar conocimiento del lenguaje de PostgreSQL.


## Ejemplos

Consultas en Template Literals

```javascript
`SELECT * FROM "Esquema"."Tablas"  WHERE "Columna1"=${req.params.id}`
```

```javascript
await client.query(`INSERT INTO "Esquema"."Tablas" ("Columna1", "Columna2", "Columna3") 
        VALUES (${var}, '${var}', ${var});`);
```

