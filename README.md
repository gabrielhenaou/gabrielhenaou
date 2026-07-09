# GHenaoLab

Este proyecto consiste en el desarrollo de un portafolio profesional, construido desde cero utilizando únicamente HTML, CSS y JavaScript. El objetivo no es simplemente crear una página para mostrar proyectos, sino construir un producto bien estructurado que refleje mi forma de trabajar como ingeniero, aplicando principios de organización, documentación, modularidad y buenas prácticas de desarrollo.

El portafolio estará desarrollado como una Landing Page (Single Page), donde el usuario recorrerá toda la información mediante un desplazamiento vertical fluido. La navegación será sencilla e intuitiva, permitiendo acceder rápidamente a las diferentes secciones mediante una barra de navegación ubicada en la parte superior.

## Estructura general del proyecto
```
Landing Page 
↓ 
Navbar 
↓ 
Hero 
↓ 
About 
↓ 
Projects 
↓ 
Skills 
↓ 
Contact
↓ 
Footer
```

Cada sección tendrá una única responsabilidad y un objetivo claro dentro de la experiencia del usuario, evitando duplicar información o sobrecargar el contenido.

La primera impresión del visitante será el Hero, ya que es la sección más importante del proyecto. En el lado izquierdo se presentará mi identidad profesional mediante mi nombre, especialidades y una pequeña descripción. El objetivo es que, en pocos segundos, cualquier visitante pueda comprender quién soy, cuál es mi área de trabajo y qué tipo de proyectos desarrollo.

En el lado derecho del Hero se ubicará el elemento visual más representativo del portafolio: una animación inspirada en la electrónica. Esta animación representará un circuito impreso donde diferentes pistas o rutas entran y salen de un microcontrolador ubicado en el centro. Cuando el usuario interactúe con estas pistas mediante el cursor, se generará una animación que simulará el recorrido de una señal eléctrica desplazándose por las rutas hasta llegar al microcontrolador. Esta animación no tendrá un propósito decorativo, sino que reforzará la identidad del proyecto y representará visualmente el área profesional en la que me desempeño.

La barra de navegación (Navbar) permanecerá siempre limpia y sencilla. Contendrá únicamente los accesos a las diferentes secciones del portafolio (Hero, About, Projects, Skills, Contact) y la identidad de mi marca personal (GHenaoLab). La navegación debe sentirse natural, sin elementos innecesarios ni efectos excesivos.

La sección About tendrá como objetivo presentar una visión más completa de mi perfil profesional. No será una biografía extensa, sino una explicación clara sobre mi experiencia, mi forma de abordar los proyectos y las áreas de ingeniería en las que he trabajado. Esta sección debe ayudar a contextualizar los proyectos que el visitante verá posteriormente.

La sección Projects será el núcleo del portafolio. Aquí se mostrarán los proyectos más representativos mediante tarjetas individuales. Cada tarjeta incluirá una imagen representativa, el nombre del proyecto, una breve descripción, el año de desarrollo y los iconos de las tecnologías, herramientas o software utilizados. El área de descripción no mostrará permanentemente la barra de desplazamiento en caso que el texto sea largo. Esta solo aparecerá cuando el usuario interactúe directamente con el texto, proporcionando una apariencia más limpia sin afectar la funcionalidad. El año y los iconos tecnológicos forman parte de cada tarjeta porque aportan información relevante de forma rápida y visual.

La sección Skills tendrá como propósito presentar mis competencias técnicas organizadas de forma clara y estructurada, permitiendo al visitante comprender rápidamente mis fortalezas técnicas.

La sección Contact estará enfocada exclusivamente en facilitar el contacto profesional. Su diseño será sencillo y directo, priorizando la accesibilidad y evitando elementos innecesarios. El objetivo es reducir cualquier fricción para que un reclutador, colaborador o posible cliente pueda comunicarse conmigo fácilmente.

Finalmente, el Footer cerrará la experiencia del sitio proporcionando información complementaria y manteniendo la misma línea visual del resto del portafolio.

Desde el punto de vista técnico, el proyecto estará organizado siguiendo una estructura modular. Los estilos estarán separados en archivos independientes para variables, reinicio de estilos, animaciones y estilos generales. De igual forma, la lógica JavaScript estará dividida según responsabilidades, separando la navegación, las animaciones, la lógica principal y el comportamiento específico de la sección de proyectos. Todos los recursos gráficos, iconos y tipografías estarán centralizados dentro de la carpeta assets, facilitando el mantenimiento y la escalabilidad del proyecto.

Aunque el proyecto utilizará únicamente HTML, CSS y JavaScript, se desarrollará siguiendo una metodología de ingeniería. Antes de implementar cualquier funcionalidad se definirá su propósito, su responsabilidad y su impacto dentro de la arquitectura del proyecto. Cada componente deberá cumplir una única función, cada decisión de diseño deberá responder a una necesidad concreta y cualquier nueva característica deberá alinearse con la misión del proyecto.

El resultado esperado es un portafolio profesional que no solo presente mis proyectos y experiencia, sino que también refleje una forma organizada y estructurada de desarrollar software. La intención es que cualquier persona que visite el proyecto pueda apreciar tanto el contenido como la calidad con la que fue construido, entendiendo que detrás del portafolio existe un proceso de planificación, documentación y desarrollo coherente con una mentalidad de ingeniería.

## Architectura

GHenaoLab
│
├── index.html
│
├── src/
│   ├── css/
│   │   ├── style.css
│   │   ├── variables.css
│   │   ├── reset.css
│   │   ├── animations.css
│   │   └── sections/
│   │       └── hero.css
│   │
│   ├── js/
│   │   ├── main.js
│   │   ├── animations.js
│   │   ├── navigation.js
│   │   └── projects.js
│   │
│   └── assets/
│       ├── images/
│       ├── icons/
│       └── fonts/
│
└── README.md

## Estilo visual

- Dark Theme.

## Convención de Commits

- `feat(alcance):` descripción...
- `fix(alcance):` ...
- `docs(alcance):` ...
- `style(alcance):` ...
- `refactor(alcance):` ...
- `chore(alcance):` ...

ada componente tiene una única responsabilidad y cada sección organiza componentes, no los redefine.

# css:
1. Estructura externa
2. Layout
3. Imagen
4. Contenido
5. Footer
6. Estados (hover)
7. Responsive

Embedded Systems

Firmware development, RTOS integration and microcontroller programming.

Electronics

PCB design, schematic capture and electronic prototyping.

Software Development

Tools and technologies for building maintainable software.

Fíjate que seguimos exactamente el mismo patrón de:

section
└── container
    ├── section-header
    └── content


1. reset.css
2. fonts.css
3. layout.css
4. navbar.css
5. button.css
6. section-header.css
7. icons.css
8. project-card.css
9. skill-card.css
10. hero.css
11. pcb.css
12. about.css
13. projects.css
14. skills.css
15. contact.css
16. footer.css
17. style.css


about [Concepto]

1. Contexto
¿Por qué es importante este concepto?

↓

2. Método
¿Cómo lo aplico en mis proyectos?

↓

3. Impacto
¿Qué aporta al resultado final?

✔ HTML
✔ CSS
✔ main.js
✔ navigation.js
⬜ projects.js
⬜ animations.js (PCB interactivo)
⬜ Optimización responsive
⬜ Accesibilidad
⬜ README
⬜ Despliegue en GitHub Pages

Ese orden mantiene exactamente la metodología que hemos seguido durante todo el desarrollo del portafolio: estructura → estilos → comportamiento.


Primero el bloque del micro.
Luego las pistas izquierdas.
Luego las derechas.
Luego las superiores.
Luego las inferiores.
Finalmente validamos el conjunto y pasamos a la animación.


Línea 1 (vertical): ≈ 55 px
Línea 2 (45°): ≈ 18–20 px
Línea 3 (vertical): ≈ 120 px