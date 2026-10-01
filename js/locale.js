let locale = navigator.language.split('-')[0];
locale = "es";//no checkin: Remove for production

const translations = {
    "es": {
        "home": "Inicio",
        "about": "Información",
        "services": "Servicios",
        "contact": "Contacto",
        "websites": "Sitios",
        "built": "construidos",
        "differently": "diferente",
        "moto-1": "<span>Diseño</span><span style='color: var(--main-white);'>con</span><span>destreza<span style='color: var(--main-white);'>.</span></span>",

        "moto-2": "<span>Calidad</span><span style='color: var(--main-white); text-align: right;'>cuidadosamente</span><span><span style='color: var(--main-white);'>.</span>elaborada</span>",

        "moto-3": "<span>Servicio</span><span style='color: var(--main-white);'>amable</span><span>bien</span><span style='color: var(--main-white);'>hecho<span style='color: var(--main-black);'>.</span></span>",

        "presentation": "Hola, mi nombre es Lucas González",

        "about-1": "Llevo más de 10 años programando y diseñando. He trabajado en diversos campos, creando diferentes tipos de productos digitales como sitios web, juegos, aplicaciones y herramientas.",

        "about-2": "Trabajé con particulares, pequeñas empresas y grandes corporaciones para lanzar y mantener productos y soluciones.",

        "my-stack": "Mi stack:",

        "my-stack-1": "La mayoría de los desarrolladores usan bibliotecas como React o Angular; yo, en cambio, opto por un enfoque más directo, utilizando Datastar, una biblioteca ligera y ultrarrápida para mi trabajo de front-end. Esto me permite reducir los tiempos de desarrollo y simplificar la arquitectura para lograr un código más fácil de mantener.",

        "my-stack-2": "Para el backend uso PHP o Go. De nuevo, prefiero un enfoque más simple que me permita escribir código más sencillo y evitar problemas de mantenimiento más adelante<span style='color: var(--red);'>.</span>",

        "web-dev": "Desarrollo web",

        "web-dev-1": "Páginas de aterrizaje, sitios de contenido, blogs, tiendas, portafolios, sitios educativos, redes sociales.",

        "product-dev": "Desarrollo de productos y aplicaciones",

        "product-dev-1": "Desarrollo de funcionalidades, productos mínimos viables (MVP), herramientas internas, implementación full-stack, aplicaciones web.",

        "integrations": "Integraciones y servicios de back-end",

        "integrations-1": "API, integraciones con terceros, automatización.",

        "modernization": "Modernización y mantenimiento",

        "modernization-1": "Refactorización, migraciones, reconstrucciones, mantenimiento continuo y mejoras de calidad y confiabilidad<span style='color: var(--blue);'>.</span>",

        "location": "Ubicación",
        "email": "Correo",
        "phone": "Teléfono",
    },
};


// When the page content is ready...
document.addEventListener("DOMContentLoaded", () => {
    if (locale in translations == false)
        return;
  document
    // Find all elements that have the key attribute
    .querySelectorAll("[data-i18n-key]")
    .forEach(translateElement);
});

function translateElement(element) {
  const key = element.getAttribute("data-i18n-key");
  if (key in translations[locale] == false)
    return;
  const translation = translations[locale][key];
  element.innerHTML = translation;
}