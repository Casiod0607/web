let username = ''; // Variable para almacenar el nombre de usuario

// Definir el horario de clases según los días y las materias
const horario = {
    lunes: [
        { clase: "Módulo TIC's", profesor: "Rogelio Bernal García", inicio: "07:00", fin: "08:40" },
        { clase: "Cálculo Diferencial", profesor: "Eduardo Miranda Ruiz", inicio: "08:41", fin: "10:20" },
        { clase: "Economía", profesora: "Juana Becerril Colín", inicio: "11:11", fin: "12:50" },
        { clase: "Estructura Socioeconómica de México", profesora: "Ana Paola Arellano González", inicio: "12:51", fin: "13:40" }
    ],
    martes: [
        { clase: "Módulo TIC's", profesor: "Rogelio Bernal García", inicio: "07:00", fin: "08:40" },
        { clase: "Geografía", profesor: "Jesús Rashid Troche Martínez", inicio: "08:41", fin: "09:30" },
        { clase: "Orientación Educativa V", profesora: "Carolina de la Cruz Zúñiga", inicio: "09:31", fin: "10:20" },
        { clase: "Actividad Deportivo-Recreativa V", profesor: "Simón Gildardo Juárez Cárdenas", inicio: "11:11", fin: "12:50" }
    ],
    miercoles: [
        { clase: "Temas Selectos de Física", profesor: "Andrés Felipe Eguía Rodríguez", inicio: "07:00", fin: "08:40" },
        { clase: "Ciencias de la Salud", profesora: "Irma Velázquez Miranda", inicio: "08:41", fin: "09:30" },
        { clase: "Orientación Educativa V", profesora: "Carolina de la Cruz Zúñiga", inicio: "09:31", fin: "10:20" },
        { clase: "Economía", profesora: "Juana Becerril Colín", inicio: "11:11", fin: "12:00" },
        { clase: "Estructura Socioeconómica de México", profesora: "Ana Paola Arellano González", inicio: "12:01", fin: "12:50" }
    ],
    jueves: [
        { clase: "Temas Selectos de Física", profesor: "Andrés Felipe Eguía Rodríguez", inicio: "07:00", fin: "08:40" },
        { clase: "Cálculo Diferencial", profesor: "Eduardo Miranda Ruiz", inicio: "08:41", fin: "09:30" },
        { clase: "Actividad Artístico-Cultural V", profesor: "Giovanni Tapia López", inicio: "09:31", fin: "10:20" },
        { clase: "Geografía", profesor: "Jesús Rashid Troche Martínez", inicio: "11:11", fin: "12:50" }
    ],
    viernes: [
        { clase: "Módulo TIC's", profesor: "Rogelio Bernal García", inicio: "07:00", fin: "08:40" },
        { clase: "Ciencias de la Salud", profesora: "Irma Velázquez Miranda", inicio: "08:41", fin: "10:20" },
        { clase: "Estructura Socioeconómica de México", profesora: "Ana Paola Arellano González", inicio: "11:11", fin: "12:00" }
    ]
};

// Registro de usuario
document.getElementById('registerButton').addEventListener('click', () => {
    const input = document.getElementById('usernameInput').value.trim();

    if (input) {
        username = input;
        toggleChatbox(true);
        greetUser(username);
    } else {
        alert('Por favor, ingrese un nombre de usuario.');
    }
});

// Función para obtener el saludo según la hora del día
function obtenerSaludoSegunHora() {
    const horaActual = new Date().getHours();

    if (horaActual >= 5 && horaActual < 12) {
        return 'días';
    } else if (horaActual >= 12 && horaActual < 18) {
        return 'tardes';
    } else {
        return 'noches';
    }
}

// Mostrar saludo personalizado
function greetUser(name) {
    const messageDiv = document.getElementById('messages');
    const greetingMessage = document.createElement('div');
    const timeOfDay = obtenerSaludoSegunHora();
    greetingMessage.textContent = `¡Hola, buenos ${timeOfDay}, ${name}! ¿En qué puedo ayudarte hoy?`;
    messageDiv.appendChild(greetingMessage);
}

// Mostrar u ocultar el chatbox
function toggleChatbox(show) {
    document.getElementById('registrationContainer').style.display = show ? 'none' : 'block';
    document.getElementById('chatbox').style.display = show ? 'block' : 'none';
}

// Saludos aleatorios
const saludos = [
    "¡Hola! Espero que tengas un excelente día.",
    "¡Qué gusto verte de nuevo! ¡Ánimo con tus clases!",
    "¡Hey! ¿Cómo va todo? ¡Éxito en tu clase!",
    "¡Hola! ¡Sigue con esa buena energía en tus estudios!",
    "¡Saludos! ¡A darlo todo en esta clase!",
    "¡Como va tu día!",
    "¡Que tal amigo! ¡Como te va con los profesores!"
];

function obtenerSaludoAleatorio() {
    return saludos[Math.floor(Math.random() * saludos.length)];
}

// Respuesta si no se reconoce el comando
function respuestaNoReconocida(usuario) {
    return `Lo siento, ${usuario}, no puedo contestar esa pregunta. Aún no estoy entrenado para eso.`;
}

// Función auxiliar para convertir la hora en minutos
function convertirHoraAMinutos(hora) {
    const [h, m] = hora.split(':').map(Number);
    return h * 60 + m;
}

// Manejar el envío de mensajes
document.getElementById('sendButton').addEventListener('click', () => {
    const userMessage = document.getElementById('userInput').value.trim().toLowerCase();

    if (userMessage.includes('clase')) {
        const claseActual = obtenerClaseActual();
        const claseSiguiente = obtenerClaseSiguiente();
        if (claseActual) {
            responder(`Estás en la clase de ${claseActual.clase} con el profesor ${claseActual.profesor}.`);
        } else if (claseSiguiente) {
            responder(`La próxima clase es ${claseSiguiente.clase} con ${claseSiguiente.profesor} de ${claseSiguiente.inicio} a ${claseSiguiente.fin}.`);
        } else {
            responder('Ya no tienes clases por hoy.');
            }
        

    } else if (userMessage.includes('recordatorio')) {
        responder('Recuerda revisar tus tareas y pendientes. ¡No te olvides de ellos!');
    } else if (userMessage.includes('motivación')) {
        responder('¡Recuerda que cada pequeño paso cuenta! ¡Sigue adelante, tú puedes lograrlo!');
    } else if (userMessage.includes('ayuda académica')) {
        responder('¿En qué tema necesitas ayuda? Estoy aquí para ayudarte con tus dudas.');
    } else if (userMessage.includes('asistencia')) {
        responder('Estoy registrando tu asistencia. ¡Gracias por participar!');
    } else if (userMessage.includes('agenda')) {
        responder('Puedes organizar tus tareas de la siguiente manera: \n1. Identifica las tareas pendientes. \n2. Establece fechas límite. \n3. Prioriza según importancia y urgencia.');
    } else if (userMessage.includes('técnica de estudio')) {
        responder('Una buena técnica es la "Pomodoro": estudia durante 25 minutos y descansa 5 minutos. ¡Prueba y verás resultados!');
    } else {
        responder(`${username}: ${userMessage}`);
    }

    document.getElementById('userInput').value = ''; // Limpiar el campo de entrada
});

// Obtener clase actual
function obtenerClaseActual() {
    const hoy = new Date();
    const diaSemana = hoy.toLocaleString('es-ES', { weekday: 'long' }).toLowerCase();
    const horaActual = hoy.getHours() + ":" + String(hoy.getMinutes()).padStart(2, '0');

    if (horario[diaSemana]) {
        return horario[diaSemana].find(clase => horaActual >= clase.inicio && horaActual <= clase.fin) || null;
    }
    return null;
}

// Obtener próxima clase
function obtenerClaseSiguiente() {
    const hoy = new Date();
    const diaSemana = hoy.toLocaleString('es-ES', { weekday: 'long' }).toLowerCase();
    const horaActual = hoy.getHours() + ":" + String(hoy.getMinutes()).padStart(2, '0');

    if (horario[diaSemana]) {
        const clases = horario[diaSemana].filter(clase => horaActual < clase.inicio);
        return clases.length > 0 ? clases[0] : null;
    }
    return null;
}

// Responder en el chat
function responder(texto) {
    const messageDiv = document.getElementById('messages');
    const responseMessage = document.createElement('div');
    responseMessage.textContent = texto;
    messageDiv.appendChild(responseMessage);
}

// Mensaje del chatbot
const botMessage = document.createElement('div');
botMessage.className = 'botMessage';
botMessage.innerText = '¡Hola! Este es un mensaje del chatbot.';
messagesContainer.appendChild(botMessage);

// Mensaje del usuario
const userMessage = document.createElement('div');
userMessage.className = 'userMessage';
userMessage.innerText = '¡Hola, chatbot!';
messagesContainer.appendChild(userMessage);