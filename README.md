# Gabriel Henao — Portafolio Profesional

Portafolio profesional desarrollado desde cero utilizando únicamente **HTML5, CSS3 y JavaScript (ES6+)**.

El proyecto no fue planteado únicamente como una página para presentar proyectos y experiencia profesional, sino también como una demostración de una metodología de desarrollo estructurada, aplicando principios de organización, modularidad, separación de responsabilidades, documentación y mantenibilidad.

## Descripción

El portafolio está desarrollado como una **Landing Page (Single Page)**, donde toda la información profesional se presenta mediante un desplazamiento vertical continuo.

La estructura general del sitio es:

```text
Landing Page
│
├── Navbar
├── Hero
├── About
├── Projects
├── Skills
├── Contact
└── Footer
```

Cada sección tiene una responsabilidad específica dentro de la experiencia del usuario, evitando duplicar información o incorporar elementos que no aporten a la finalidad del sitio.

## Secciones

### Hero

El Hero constituye la primera presentación del perfil profesional.

Incluye:

* Nombre profesional.
* Especialidades.
* Descripción breve.
* Visualización interactiva inspirada en electrónica.

El elemento visual representa una placa de circuito impreso con un microcontrolador ubicado en el centro y diferentes pistas conectadas a él.

La interacción del usuario con las pistas genera una animación que representa el desplazamiento de una señal eléctrica hasta el microcontrolador.

Esta visualización no tiene únicamente una función decorativa. Su propósito es reforzar visualmente la identidad profesional relacionada con la electrónica y los sistemas embebidos.

### About

La sección About presenta una visión más completa del perfil profesional.

Su objetivo no es reemplazar un CV, sino proporcionar contexto sobre la experiencia, la forma de abordar proyectos y las áreas de trabajo.

La información se estructura alrededor de tres conceptos:

```text
Contexto
↓
Método
↓
Impacto
```

### Projects

Projects constituye el núcleo del portafolio.

Los proyectos se presentan mediante tarjetas individuales que incluyen:

* Imagen representativa.
* Nombre del proyecto.
* Descripción.
* Año de desarrollo.
* Tecnologías y herramientas utilizadas.

La sección incorpora un carrusel responsive para organizar los proyectos según el tamaño de la pantalla.

La información ampliada de cada proyecto se presenta mediante un modal.

### Skills

La sección Skills presenta las competencias técnicas organizadas en dos categorías:

```text
Tecnologías
Herramientas
```

La información se presenta mediante elementos visuales compactos que permiten identificar rápidamente las competencias sin depender exclusivamente de iconos o logotipos de terceros.

### Contact

La sección Contact está orientada exclusivamente a facilitar el contacto profesional.

Su diseño prioriza la claridad, accesibilidad y reducción de fricción para reclutadores, colaboradores y posibles clientes.

### Footer

El Footer cierra la experiencia del sitio proporcionando información complementaria y manteniendo la misma línea visual del resto del portafolio.

---

# Arquitectura

El proyecto está organizado de acuerdo con la responsabilidad de cada archivo y componente.

```text
.
├── README.md
├── index.html
│
├── assets/
│   ├── icons/
│   │   ├── c.svg
│   │   ├── cpp.svg
│   │   ├── css3.svg
│   │   ├── gmail.svg
│   │   ├── html5.svg
│   │   ├── kicad.svg
│   │   ├── linkedin.svg
│   │   ├── python.svg
│   │   ├── git-hub.svg
│   │   └── whatsapp.svg
│   │
│   └── images/
│       ├── profile/
│       │   └── profile.svg
│       │
│       └── projects/
│           ├── cielo-magico.jpg
│           ├── huracanes.jpg
│           ├── lo-que-cuentan-las-piedras.jpg
│           ├── oir-al-rio.jpg
│           ├── pcb-aer.jpg
│           ├── pcb-sec.jpg
│           ├── telefono-interactivo.jpg
│           ├── todas-las-vidas-del-agua.jpg
│           └── vive-chec.jpg
│
└── src/
    ├── css/
    │   ├── base/
    │   │   ├── animations.css
    │   │   ├── reset.css
    │   │   └── variables.css
    │   │
    │   ├── components/
    │   │   ├── button.css
    │   │   ├── contact-item.css
    │   │   ├── icons.css
    │   │   ├── pcb.css
    │   │   ├── project-card.css
    │   │   ├── project-modal.css
    │   │   ├── section-header.css
    │   │   └── skill-card.css
    │   │
    │   ├── layout/
    │   │   ├── container.css
    │   │   ├── footer.css
    │   │   └── navbar.css
    │   │
    │   ├── sections/
    │   │   ├── about.css
    │   │   ├── contact.css
    │   │   ├── hero.css
    │   │   ├── projects.css
    │   │   └── skills.css
    │   │
    │   └── style.css
    │
    ├── html/
    │   └── hero-visual.html
    │
    └── js/
        ├── animations.js
        ├── main.js
        ├── navigation.js
        ├── project-data.js
        ├── project-modal.js
        └── projects.js
```

## Organización del CSS

La arquitectura CSS se divide en cuatro niveles principales.

### Base

Contiene configuraciones globales:

* `variables.css`: variables y tokens de diseño.
* `reset.css`: normalización de estilos.
* `animations.css`: animaciones reutilizables.

### Layout

Contiene elementos estructurales compartidos:

* `container.css`
* `navbar.css`
* `footer.css`

### Components

Contiene componentes reutilizables:

* `button.css`
* `contact-item.css`
* `icons.css`
* `pcb.css`
* `project-card.css`
* `project-modal.css`
* `section-header.css`
* `skill-card.css`

### Sections

Contiene los estilos específicos de cada sección:

* `hero.css`
* `about.css`
* `projects.css`
* `skills.css`
* `contact.css`

### Punto de entrada

`style.css` funciona como punto de entrada de los estilos e importa las diferentes capas en un orden definido:

```text
Base
↓
Layout
↓
Components
↓
Sections
```

Esta organización permite mantener cada archivo enfocado en una responsabilidad concreta.

## Organización del JavaScript

La lógica JavaScript también se encuentra separada por responsabilidades.

### `main.js`

Punto de entrada de la aplicación.

Inicializa los comportamientos principales del portafolio.

### `navigation.js`

Gestiona el comportamiento de la navegación y la interacción con la Navbar.

### `animations.js`

Contiene la lógica relacionada con las animaciones visuales, incluyendo la visualización interactiva de la PCB.

### `project-data.js`

Contiene la información estructurada de los proyectos, separando los datos de la presentación y el comportamiento.

### `projects.js`

Gestiona el comportamiento relacionado con la sección Projects y su carrusel.

### `project-modal.js`

Gestiona la apertura, actualización y cierre del modal de información de proyectos.

La arquitectura JavaScript sigue el mismo principio general del proyecto:

```text
Estructura
↓
Presentación
↓
Comportamiento
```

## Sistema de diseño

Las variables visuales globales están centralizadas en:

```text
src/css/base/variables.css
```

Estas variables controlan elementos como:

* Colores.
* Tipografía.
* Espaciado.
* Dimensiones.
* Bordes.
* Radios.
* Tamaños de iconos.
* Opacidad.
* Transiciones.
* Sombras.
* Navbar.
* Proyectos.
* Modal.
* Capas de visualización.

Esto permite modificar características globales del diseño desde un único punto.

## Estilo visual

El portafolio utiliza una identidad visual:

* Moderna.
* Minimalista.
* Técnica.
* Elegante.
* Profesional.

El diseño evita sobrecargar la interfaz con animaciones, elementos decorativos o componentes innecesarios.

Cada elemento visual debe responder a una necesidad concreta relacionada con la experiencia del usuario, la jerarquía de información o la identidad técnica del proyecto.

## Perfil técnico

El portafolio representa experiencia e interés en áreas como:

### Tecnologías

* C
* C++
* Python
* VHDL
* ATmel AVR
* ESP32
* Raspberry Pi
* FPGA
* PLC

### Herramientas

* KiCad
* Proteus
* MPLAB X
* PlatformIO
* Docker
* MySQL
* Git
* GitHub

### Áreas profesionales

* Sistemas embebidos.
* Firmware.
* Diseño de PCB.
* IoT.
* Diseño electrónico.
* Prototipado electrónico.

## Diseño responsive

El sitio está diseñado para adaptarse a:

```text
PC
Tablet
Móvil
```

El comportamiento responsive se implementa mediante CSS y media queries, sin utilizar frameworks de frontend.

Se consideran principalmente:

* Hero.
* About.
* Projects.
* Skills.
* Navbar.
* Tipografía.
* Espaciado.
* Elementos interactivos.

## Tecnologías del proyecto

| Categoría            | Tecnología       |
| -------------------- | ---------------- |
| Marcado              | HTML5            |
| Estilos              | CSS3             |
| Programación         | JavaScript ES6+  |
| Framework            | Ninguno          |
| Runtime              | Vanilla Web      |
| Base de datos        | Ninguna          |
| Backend              | Ninguno          |
| Package Manager      | Ninguno          |
| Build Tool           | Ninguno          |
| Testing              | Pruebas manuales |
| Control de versiones | Git + GitHub     |
| Deployment           | GitHub Pages     |

## Convenciones de nomenclatura

El proyecto utiliza las siguientes convenciones:

| Elemento                        | Convención         |
| ------------------------------- | ------------------ |
| Archivos HTML, CSS y JavaScript | `kebab-case`       |
| Carpetas                        | `kebab-case`       |
| Variables JavaScript            | `camelCase`        |
| Funciones JavaScript            | `camelCase`        |
| Clases constructoras            | `PascalCase`       |
| Constantes                      | `UPPER_SNAKE_CASE` |

## Convenciones de desarrollo

* El código fuente utiliza identificadores en inglés.
* Se utiliza codificación UTF-8.
* La indentación utiliza cuatro espacios.
* No se utilizan tabulaciones.
* Cada archivo tiene una responsabilidad definida.
* Los estilos reutilizables se centralizan cuando corresponde.
* Los valores globales de diseño se definen mediante variables CSS.
* La lógica funcional se separa de la presentación.
* Los datos de los proyectos se mantienen separados de su comportamiento.
* La estructura del proyecto prioriza la mantenibilidad y escalabilidad.

## Convención de commits

Los commits siguen una estructura basada en el alcance del cambio:

```text
feat(alcance): descripción
fix(alcance): descripción
docs(alcance): descripción
style(alcance): descripción
refactor(alcance): descripción
chore(alcance): descripción
```

## Filosofía del proyecto

El portafolio fue desarrollado deliberadamente sin frameworks de frontend, sistemas de construcción, gestores de paquetes ni dependencias externas.

La intención no es demostrar el uso de una tecnología específica, sino aplicar tecnologías web fundamentales para construir un producto organizado y mantenible.

El proyecto busca demostrar:

* Planificación.
* Organización.
* Separación de responsabilidades.
* Modularidad.
* Reutilización de componentes.
* Arquitectura CSS.
* Arquitectura JavaScript.
* Convenciones de nomenclatura.
* Documentación.
* Control de versiones.
* Diseño responsive.
* Buenas prácticas de desarrollo.

El propio portafolio forma parte de la demostración: su arquitectura y construcción buscan reflejar la misma mentalidad organizada utilizada en el desarrollo de proyectos de ingeniería.

## Despliegue

El portafolio está destinado a ser desplegado mediante **GitHub Pages**.

El repositorio se encuentra asociado a la cuenta profesional:

```text
github.com/gabrielhenaou
```

Al tratarse de un sitio estático, no requiere backend, base de datos ni ejecución del lado del servidor.

## Estado del proyecto

El portafolio se encuentra en etapa de producción.

```text
[x] Landing Page
[x] Navbar
[x] Hero
[x] Visualización interactiva de PCB
[x] About
[x] Projects
[x] Carrusel de proyectos
[x] Modal de proyectos
[x] Skills
[x] Contact
[x] Footer
[x] Diseño responsive
[x] Arquitectura CSS modular
[x] Arquitectura JavaScript modular
[x] Organización de assets
[x] Documentación
[x] Repositorio Git
```
