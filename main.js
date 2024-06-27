document.addEventListener('DOMContentLoaded', function () {
    const chatBox = document.getElementById('chat-box');
    const userInput = document.getElementById('user-input');
    const sendBtn = document.getElementById('send-btn');

    const responses = {
        'hola': '¡Hola! ¿Cómo estás?',
        'adiós': '¡Adiós! Que tengas un buen día.',
        'cómo estás': 'Estoy bien, gracias por preguntar.',
        'qué puedes hacer': 'Puedo responder a tus preguntas básicas.',
        'cómo te llamas': 'Mi nombre es Cesar',
        'porque te llamas así': 'Es el nombre de mi creador'
    };

    sendBtn.addEventListener('click', function () {
        sendMessage();
    });

    userInput.addEventListener('keyup', function (event) {
        if (event.keyCode === 13) {
            sendMessage();
        }
    });

    function sendMessage() {
        const message = userInput.value.trim();
        if (message !== '') {
            appendMessage(message, 'user-message');
            userInput.value = '';
            generateResponse(message.toLowerCase());
        }
    }

    function generateResponse(message) {
        let response = responses[message];
        if (!response) {
            response = "Lo siento, no entendí eso. ¿Puedes preguntar de otra manera?";
        }
        appendMessage(response, 'bot-message');
    }

    function appendMessage(message, type) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('chat-message', type);
        messageElement.innerText = message;
        chatBox.appendChild(messageElement);
        chatBox.scrollTop = chatBox.scrollHeight;
    }
});
