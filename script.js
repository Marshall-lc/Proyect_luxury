document.addEventListener('DOMContentLoaded', () => {
    
    // Función para manejar el scroll suave en los enlaces de navegación
    const smoothScroll = (event) => {
        event.preventDefault();
        const targetId = event.currentTarget.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
            // Ajuste para el header fijo
            const headerHeight = document.querySelector('.luxury-header').offsetHeight; 
            window.scrollTo({
                top: targetElement.offsetTop - headerHeight, 
                behavior: 'smooth'
            });
        }
    };

    // Aplicar el scroll suave a todos los enlaces internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', smoothScroll);
    });

    // Manejo del formulario de Contacto
    const contactForm = document.getElementById('contact-form');
    const formMessage = document.getElementById('form-message');

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Evita el envío real del formulario

        // Simula un proceso de envío profesional
        const nombre = document.getElementById('nombre').value;
        const email = document.getElementById('email').value;
        const mensaje = document.getElementById('mensaje').value;

        // Validación simple
        if (!nombre || !email || !mensaje) {
            alert('Por favor, complete todos los campos.');
            return;
        }

        // Simulación de envío exitoso
        formMessage.textContent = `Gracias, ${nombre}. Su solicitud ha sido recibida. Un asesor privado le contactará en breve al correo ${email}.`;
        formMessage.classList.remove('hidden');
        formMessage.style.opacity = '1';

        // Ocultar el mensaje y limpiar el formulario después de 5 segundos
        setTimeout(() => {
            formMessage.style.opacity = '0';
            setTimeout(() => {
                formMessage.classList.add('hidden');
                contactForm.reset();
            }, 500); // 500ms para que la transición de opacidad termine
        }, 5000);
        
        // En un entorno real, aquí se enviaría la data a un servidor (fetch API).
    });

    // Función para el efecto de "mirada al detalle" en los modelos
    document.querySelectorAll('.secondary-cta').forEach(button => {
        button.addEventListener('click', (event) => {
            event.preventDefault();
            const modelName = event.currentTarget.getAttribute('data-model');
            alert(`Accediendo a la ficha técnica privada de: ${modelName}. Por su seguridad, esta acción será registrada.`);
        });
    });

});