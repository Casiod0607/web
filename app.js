// Configuración inicial para la app del chatbot
document.addEventListener('DOMContentLoaded', () => {
    const userInput = document.getElementById('userInput');
    const sendButton = document.getElementById('sendButton');

    // Presionar "Enter" para enviar el mensaje
    userInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            enviarMensaje();
        }
    });

    // Clic en el botón de enviar
    sendButton.addEventListener('click', enviarMensaje);

    // Función para enviar el mensaje
    function enviarMensaje() {
        const mensaje = userInput.value.trim();
        if (mensaje) {
            mostrarMensajeUsuario(mensaje);
            procesarMensaje(mensaje);
            userInput.value = ''; // Limpiar la entrada del usuario
        }
    }

    // Mostrar el mensaje del usuario en el chat
    function mostrarMensajeUsuario(mensaje) {
        const messagesContainer = document.getElementById('messages');
        const userMessageElement = document.createElement('div');
        userMessageElement.classList.add('userMessage');
        userMessageElement.innerText = mensaje;
        messagesContainer.appendChild(userMessageElement);
        messagesContainer.scrollTop = messagesContainer.scrollHeight; // Desplazar hacia abajo el contenedor de mensajes
    }

    // Procesar el mensaje para generar una respuesta del chatbot
    function procesarMensaje(mensaje) {
        let respuesta;
        mensaje = mensaje.toLowerCase();

        if (mensaje.includes('hola')) {
            respuesta = '¡Hola! ¿En qué te puedo ayudar hoy?';
        } else if (mensaje.includes('clase')) {
            respuesta = obtenerHorario(); // Llama a la función para obtener el horario actual
        } else {
            respuesta = 'Lo siento, no entiendo tu pregunta. ¿Puedes intentar de nuevo?';
        }

        mostrarMensajeBot(respuesta);
    }

    // Mostrar el mensaje del bot en el chat
    function mostrarMensajeBot(mensaje) {
        const messagesContainer = document.getElementById('messages');
        const botMessageElement = document.createElement('div');
        botMessageElement.classList.add('botMessage');
        botMessageElement.innerText = mensaje;
        messagesContainer.appendChild(botMessageElement);
        messagesContainer.scrollTop = messagesContainer.scrollHeight; // Desplazar hacia abajo el contenedor de mensajes
    }
});