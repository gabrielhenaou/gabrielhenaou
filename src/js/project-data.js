/* ==========================================================================
   Projects Data
========================================================================== */

export const projects = [

    {
        id: "vive-chec",

        title: "Vive Chec",

        description: 
            `Como parte de mi trabajo en Parque Explora, participé en el desarrollo del Micro Museo para el Centro de Experiencias VIVE CHEC, un proyecto realizado para Grupo EPM orientado a la divulgación científica mediante experiencias interactivas.
            
            Mi participación estuvo enfocada en el desarrollo e integración de los sistemas electrónicos que conforman la experiencia del visitante. El proyecto se estructuró en tres subsistemas independientes, diseñados para operar de forma confiable y coordinada:
            
            - Sistema de visualización retroiluminada, encargado de iluminar un módulo con imágenes observables a través de mirillas, resaltando el contenido expositivo.

            - Sistema de reproducción de audio, basado en un microcontrolador, un reproductor de sonido y una botonera de cinco pulsadores. La lógica de control garantiza la reproducción exclusiva de un único audio a la vez; si un visitante selecciona una nueva narración mientras otra se encuentra en ejecución, el sistema interrumpe la reproducción activa e inicia inmediatamente la correspondiente al nuevo pulsador. Cada canal de audio se encuentra asociado a su respectivo altavoz.

            - Sistema de iluminación dinámica, implementado mediante un microcontrolador con múltiples salidas PWM para generar efectos luminosos que simulan descargas eléctricas sobre el diorama de la nube, enriqueciendo la experiencia visual del montaje.`


    },

    {
        id: "pcb-sec",

        title: "PCB SEC",

        description: 
            `Como parte de mi trabajo en Parque Explora, diseñé una tarjeta electrónica destinada al sistema de iluminación de una experiencia interactiva. La solución fue desarrollada para controlar diferentes elementos de iluminación, generar efectos lumínicos programables e integrar sensores de proximidad encargados de activar las distintas secuencias del montaje.

            El diseño incorpora dos salidas de potencia para el accionamiento de relés destinados al control de iluminación de 110 VAC, implementando etapas de conmutación mediante transistores para proteger las salidas del microcontrolador. Adicionalmente, integra seis canales para el control de LED y tiras NeoPixel, permitiendo generar secuencias y efectos luminosos programables en distintos segmentos de la experiencia.

            La tarjeta también dispone de seis entradas dedicadas para sensores de proximidad, proporcionando una interfaz sencilla para detectar la interacción de los visitantes y activar respuestas automatizadas del sistema. Fue diseñada para operar con la plataforma ESP8266 NodeMCU y alimentación externa de 5 VDC y 12 VDC, ofreciendo una solución modular, reutilizable y adaptable a diferentes montajes museográficos.`

    },

    {
        id: "oir-al-rio",

        title: "Oír al río",

        description: 
            
            `Desarrollé una experiencia interactiva para la Coalición Internacional de Sitios de Conciencia y el Museo Casa de la Memoria, concebida para guiar a los visitantes a través de un recorrido automatizado basado en los hallazgos del Informe Final de la Comisión de la Verdad sobre el conflicto armado en Colombia.

            El sistema fue desarrollado sobre una plataforma Arduino e integra seis sensores de proximidad, seis salidas de iluminación de 110 VAC controladas mediante módulos de relé, un reproductor de audio y cinco altavoces distribuidos estratégicamente a lo largo del recorrido. Cada estación asocia un sensor de presencia, una salida de iluminación y un contenido sonoro específico.

            La lógica de control implementa una secuencia automática de navegación. Inicialmente, una única lámpara permanece encendida indicando la primera estación. Cuando el sensor detecta la presencia de los visitantes, el sistema reproduce el audio correspondiente y, al finalizar, activa la iluminación de la siguiente estación mientras deshabilita la anterior. Este comportamiento se repite hasta completar el recorrido, permitiendo dirigir el flujo de los visitantes de forma intuitiva, sincronizada y completamente automatizada.`

    },

    {
        id: "temporada-de-huracanes",

        title: "Temporada de huracanes",

        description: 
            `Desarrollé una instalación audiovisual interactiva para la exposición "Anticipaciones. Entre l_s mism_s no será", de la maestra de artes visuales María Fernanda Calderón. El sistema fue diseñado para sincronizar la reproducción de contenidos audiovisuales en respuesta a la interacción del público, formando parte de una obra que explora la relación entre el uso, la veracidad y los vacíos presentes en la información.

            El sistema está compuesto por una botonera de diez pulsadores, donde cada interacción es procesada por una Raspberry Pi 4 encargada de la lógica principal del sistema. A través del protocolo de comunicación I²C, este dispositivo sincroniza una segunda Raspberry Pi 4, permitiendo la reproducción simultánea de dos contenidos audiovisuales complementarios ejecutados mediante scripts desarrollados en Python.

            En estado de espera, ambas pantallas reproducen contenido en bucle. Al seleccionar cualquiera de los pulsadores, el sistema interrumpe la reproducción de espera e inicia de forma sincronizada el par de videos asociado a la interacción. Una vez finaliza la secuencia, ambas Raspberry Pi restauran automáticamente el contenido en bucle, dejando la instalación preparada para una nueva interacción.`
            
    },

    {
        id: "pcb-aer",

        title: "PCB AER",

        description: 
            `Como parte de mi trabajo en Parque Explora, diseñé una tarjeta electrónica para la experiencia interactiva "Aeróbicos para el cerebro", destinada a controlar la lógica del juego, la adquisición de señales y la visualización de los tiempos obtenidos por los participantes.

            El diseño integra dos entradas para sensores inductivos de 12 VDC, acondicionadas mediante optoacopladores para aislar y proteger las entradas del microcontrolador. Además, incorpora una entrada táctil implementada utilizando la funcionalidad Touch nativa del ESP32. La visualización se realiza mediante cuatro displays de siete segmentos alimentados a 12 VDC, organizados en dos contadores independientes. Los displays son controlados mediante una técnica de multiplexación, donde el común de alimentación de cada dígito es conmutado a través de optoacopladores, permitiendo reducir el número de líneas de control y mantener el aislamiento eléctrico entre las etapas de potencia y el microcontrolador.

            El firmware implementa la lógica del juego de pulso, donde el participante debe desplazar una pieza metálica a lo largo de un recorrido sin establecer contacto con el conductor central. Los sensores inductivos detectan el inicio, los cambios de sentido y el reinicio de la experiencia, mientras que la entrada táctil supervisa continuamente las colisiones. El sistema controla dos temporizadores independientes para registrar el tiempo de ida y de regreso, reiniciando automáticamente la secuencia cuando se detecta una pérdida.`
            
    },

    {
        id: "lo-que-cuentan-las-piedras",

        title: "Lo que cuentan las piedras",

        description: 
            `Como parte de mi trabajo en Parque Explora, desarrollé una experiencia audiovisual para una exposición sobre paleontología, diseñada para complementar el recorrido de los visitantes mediante contenido audiovisual y testimonios de paleontólogos colombianos.

            La instalación está compuesta por dos subsistemas independientes. El primero integra cuatro reproductores de audio desarrollados sobre Arduino, cada uno equipado con un decodificador VS1053B y dos pulsadores que permiten navegar de forma secuencial entre diferentes listas de reproducción. Cada módulo opera de manera independiente, permitiendo que varios visitantes interactúen simultáneamente sin interferencias entre los distintos reproductores.

            El segundo subsistema está dedicado a la reproducción continua de contenido audiovisual mediante un reproductor multimedia configurado para ejecutar un video en bucle. Además de la configuración del equipo, se realizó la integración con el sistema de proyección para garantizar el funcionamiento continuo de la instalación y el correcto encuadre del contenido sobre la superficie de proyección.`
            
    },

    {
        id: "todas-las-vidas-del-agua",

        title: "Todas las vidas del agua",

        description: 
            `Como parte de mi trabajo en Parque Explora, desarrollé una experiencia interactiva para PepsiCo destinada a explicar el funcionamiento de una Planta de Tratamiento de Aguas Residuales (PTAR) mediante una instalación basada en video mapping e interacción en tiempo real. La experiencia proyecta contenido audiovisual sobre ilustraciones representativas de los diferentes procesos de la planta, permitiendo al visitante explorar su funcionamiento de manera intuitiva.

            El sistema fue desarrollado utilizando TouchDesigner como plataforma principal para la gestión de la reproducción audiovisual. La instalación permite ejecutar de forma independiente las animaciones correspondientes a cada proceso de la PTAR, manteniendo la posibilidad de reproducir simultáneamente múltiples secuencias sobre diferentes zonas del montaje, sincronizadas con un sistema de sonido envolvente 5.1.

            La interacción del usuario se realiza mediante diez sensores capacitivos ocultos detrás del muro, creando la sensación de que la proyección responde directamente al contacto sobre los puntos interactivos. Los sensores operan a 12 VDC y fueron acondicionados mediante optoacopladores para aislar las entradas del sistema de control basado en un Arduino Leonardo. Aprovechando la interfaz USB HID del microcontrolador, cada activación es enviada al computador como un evento de teclado, permitiendo que TouchDesigner gestione el disparo de las animaciones y su sincronización con el contenido sonoro.`
            
    },

    {
        id: "telefono-interactivo",

        title: "Teléfono interactivo",

        description: 
            `Desarrollé una experiencia interactiva para el Centro de Memoria del Holocausto del Palacio de Justicia y del Derecho a la Vida, utilizando un teléfono de disco antiguo como interfaz principal para la reproducción de testimonios relacionados con la toma y retoma del Palacio de Justicia.

            El desarrollo consistió en reemplazar completamente la electrónica original del teléfono, conservando su apariencia y mecanismos de interacción. El sistema incorpora un microcontrolador Atmega 328P, un reproductor de audio basado en VS1053B, un sensor de presencia PIR y un sistema de accionamiento PWM encargado de activar el mecanismo electromecánico de la campana. Cuando se detecta la presencia de un visitante, el teléfono comienza a sonar, invitando a responder la llamada.

            Una vez el auricular es descolgado, el sistema reproduce una locución que solicita marcar uno de los diez números disponibles en el disco telefónico. La marcación es interpretada mediante la lectura de los pulsos generados por el disco, permitiendo conservar la experiencia de uso característica de este tipo de dispositivos. Cada número activa un testimonio diferente y, al finalizar su reproducción, el sistema retorna automáticamente al locución principal. Si durante la reproducción el visitante marca un nuevo número, el audio en curso se interrumpe para dar paso inmediatamente al nuevo testimonio.`
            
    },

    {
        id: "cielo-magico",

        title: "Cielo mágico",

        description: 
            `Desarrollé una experiencia inmersiva para Enigma Escape Room, recreando el cielo del universo de Harry Potter mediante la sincronización de efectos de iluminación y sonido. La instalación alterna entre un ambiente de atardecer y una tormenta nocturna.

            El sistema fue desarrollado con una placa de desarrollo ESP32-WROOM-32 e integra diez canales PWM destinados al control independiente de los diferentes circuitos de iluminación. Mediante el firmware se implementaron secuencias dinámicas que generan transiciones suaves de color durante el atardecer y patrones variables de destellos para simular relámpagos durante la tormenta.

            La reproducción de audio se realiza mediante un módulo reproductor de audio DY-SV5W, sincronizado con los efectos de iluminación. Adicionalmente, el sistema emplea relés para conmutar la distribución de la señal estéreo entre diferentes altavoces, generando una percepción espacial del sonido que simula el desplazamiento de los truenos alrededor de los participantes. La coordinación entre iluminación, audio y conmutación de salidas permitió construir una escena completamente inmersiva.`
            
    }

];