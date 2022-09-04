![Points badge](../../blob/badges/.github/badges/points.svg)

![Logo UCOL](img/ucol-logo.jpg)

![Portada](img/cover.jpg)
> Maryland SoccerPlex, Boyds, United States. Photo by <a href="https://unsplash.com/@jeffreyflin?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Jeffrey F Lin</a> on <a href="https://unsplash.com/t/athletics?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  
# Examen: Uso de clases

El objetivo de este ejercicio evaluar el uso de clases para:

- Reutilización de código
- Creación de _nuevos tipos de datos_.

## Requerimientos funcionales

1. (35 Puntos) Programar la clase `Participant`. Deberá incluir los siguientes:
   - Atributos:
     - `Number id` número de identificación del participante
     - `String name`  es el nombre completo del participante.
     - `Number type` indica el tipo de participante de acuerdo a las siguientes definiciones:
       - 1: Estudiante
       - 2: Asesor
       - 3: Patrocinador
   - Métodos
     - (7 puntos) `constructor()` recibe el valor inicial para `id`, `name` y `type`. Si se introduce un valor para `type` no válido se asignara por defecto el valor 1.
     - (7 puntos) `getId()` regresa el valor de `id`
     - (7 puntos) `getName()` regresa el  de `name` en mayúsculas, es decir todas las letras son mayúsculas..
     - (7 puntos) `getType()` regresa el valor de `type`.
     - (7 puntos) `getTypeName()` regresa el nombre que corresponde de acuerdo al valor de `type`:
       - 1: Estudiante
       - 2: Asesor
       - 3: Patrocinador

2. (35 puntos) Programar la clase `Item`. Deberá incluir los siguientes:
   - Atributos:
     - `String name` nombre del item o material.
     - `Number cost` costo individual de este item
     - `Number quantity` cantidad o número de items que se requieren
   - Métodos
     - (9 puntos) `constructor()` recibe valores iniciales para  `name` y `cost` y `quantity`
     - (9 puntos) `getName()` regresa nombre del item o producto, en mayúsculas por ejemplo: PAQUETE DE 100 HOJAS BLANCAS, COMPUTADORA PERSONAL, SENSOR DE TEMPERATURA.
     - (9 puntos) `getCost()` regresa el valor del costo individual de este item o producto.
     - (8 puntos) `getTotalCost()` regresa el valor del costo total de este item o producto, este se obtiene de multiplicar la cantidad por el costo individual.

3. (30 puntos) Programar la clase `Project`. Deberá incluir los siguientes:
   - Atributos:
     - `String name` nombre del proyecto.
     - `Participant[] team` vector que contiene el listado de participantes del proyecto.
     - `Item[] resources` vector que contiene el listado de recursos o items que se requieren para desarrollar este proyecto.
   - Métodos
     - (5 puntos) `constructor()` recibe el valor inicial para `name` e inicializa `team` y `resources` como vectores.
     - (5 puntos) `getName()` regresa el nombre del proyecto en mayúsculas, todas las letras deben estar en mayúsculas
     - (5 puntos) `addParticipant(participant)` agrega ese integrante a la lista de participantes `team`. Si el participante ya estaba registrado regresa `false` y no lo agrega. Si NO estaba registrado, lo agrega y regresa `true`. Se considera que dos `participant` son el mismo o iguales si tienen el mismo `id`.
     - (5 puntos) `addItem(item)` agrega ese item a la lista de recursos `resources`. En este caso no es necesario hacer ninguna validación, todos los items que se envían se agregan independiente de si ya estaban registrados o no.
     - (5 puntos) `getNumParticipants(type)` regresa el número de participantes que hay en el equipo `team` que son de ese tipo. Por ejemplo si se recibe 1 regresa cuantos son estudiantes, si 2 cuantos son asesores, si 3 cuantos patrocinadores.
     - (5 puntos) `getCost()` regresa el costo total para este proyecto, este se obtiene de la suma de todos los items que están registrados en `resources`.

## Requerimientos no funcionales

- Las clases, métodos y atributos deberán tener el nómbre que se indica y el número y tipo de parámetros que se especifica.
- Se deberán utilizar las convenciones de estilo para clases, métodos, atributos, parámetros y variables
- El programa deberá probar y mostrar el correcto funcionamiento de las funciones.
- El programa deberá funcionar en consola

## Entregable

- Código fuente en este repositorio

## Pruebas

Cada método tiene su propia prueba para el caso de los:
  
### Constructores

Solo es necesario utilizar el nombre de la clase, por ejemplo:

- `npm run test participant.test.js`
- `npm run test item.test.js`
- `npm run test project.test.js`

### Métodos

Además del nombre de la clase deberás incluir el nombre del método, por ejemplo:

- `npm run test participant.getId.test.js`
- `npm run test item.getName.test.js`
- `npm run test project.getName.test.js`
  
## Evaluación

- Para que el examen sea considerado como válido, el repositorio deberá tener por lo menos 1 commit por cada método.
- Los repositorios que no tengan una historia de commits considerable NO serán considerados como válidos y tendrán calificación cero
