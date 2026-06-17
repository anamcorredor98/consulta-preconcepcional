// ==========================================
// CHATBOT SIN API - BASE DE CONOCIMIENTO MEJORADA
// ==========================================

const knowledgeBase = {
    // Preguntas sobre QUÉ ES
    "que es la consulta|qué es la consulta|definicion consulta|definición consulta|que significa consulta": {
        response: "La **consulta preconcepcional** es una atención médica que se realiza ANTES del embarazo. Ayuda a identificar y reducir riesgos para mejorar las condiciones de salud de la madre y el futuro bebé. 🩺",
        followUp: [
            "¿Para qué sirve?",
            "¿Cómo la solicito?"
        ]
    },
    
    // Preguntas sobre PARA QUÉ SIRVE
    "para que sirve|para qué sirve|beneficios|ventajas|importancia|objetivo|utilidad": {
        response: "La consulta preconcepcional sirve para:\n\n✅ Identificar factores de riesgo\n✅ Optimizar condiciones de salud\n✅ Prevenir complicaciones en el embarazo\n✅ Reducir defectos congénitos\n✅ Planificar un embarazo saludable\n\nSegún estudios, reduce hasta un 70% de complicaciones prevenibles. 📊",
        followUp: [
            "¿Qué incluye la consulta?",
            "¿Cuándo debo hacerla?"
        ]
    },
    
    // Preguntas sobre CÓMO SOLICITAR
    "como solicitar|como la solicito|cómo solicitar|donde pedir|dónde pedir|como pedir|cómo pedir|donde ir|dónde ir|como acceder|solicitar cita|donde solicitar|dónde solicitar": {
        response: "Para solicitar tu consulta preconcepcional:\n\n1️⃣ Acude a tu EPS o IPS\n2️⃣ Solicita cita de 'Consulta Preconcepcional'\n3️⃣ Es un derecho en el POS (Plan Obligatorio de Salud)\n4️⃣ NO necesitas autorización especial\n\nEs completamente GRATIS. 🎉",
        followUp: [
            "Buscar profesionales cerca",
            "¿Es realmente gratis?"
        ]
    },
    
    // Preguntas sobre COMPONENTES
    "que incluye|qué incluye|componentes|que hacen|qué hacen|examenes|exámenes|que revisan|servicios": {
        response: "La consulta preconcepcional incluye:\n\n🩺 Historia clínica completa\n🔬 Exámenes de laboratorio básicos\n💉 Esquema de vacunación\n💊 Suplementación (ácido fólico)\n📋 Evaluación de riesgos\n👥 Consejería en pareja",
        followUp: [
            "¿Qué es el ácido fólico?",
            "¿Qué vacunas necesito?"
        ]
    },
    
    // Preguntas sobre ÁCIDO FÓLICO
    "acido folico|ácido fólico|folico|fólico": {
        response: "El **ácido fólico** (vitamina B9) es un suplemento vitamínico fundamental antes del embarazo:\n\n💊 Dosis: 400 mcg diarios\n📅 Iniciar 3 meses ANTES del embarazo\n🧬 Previene defectos del tubo neural hasta en 70%\n✅ Ayuda al desarrollo del sistema nervioso del bebé\n💊 Se encuentra en: verduras de hoja verde, cítricos, legumbres\n\n⚠️ Debe iniciarse ANTES de la concepción para ser efectivo.",
        followUp: [
            "¿Qué más debo evitar?",
            "¿Cuándo iniciar la consulta?"
        ]
    },
    
    // Preguntas sobre VACUNAS
    "vacunas|vacunacion|vacunación|inmunizaciones|cuales vacunas": {
        response: "Vacunas importantes antes del embarazo:\n\n💉 Triple viral (sarampión, rubéola, paperas)\n💉 Varicela (si no la has tenido)\n💉 Hepatitis B\n💉 Influenza\n💉 Tdap (tétanos, difteria, tos ferina)\n\n⏰ Algunas vacunas requieren esperar 1 mes antes de buscar embarazo.",
        followUp: [
            "¿Qué debo evitar?",
            "¿Qué incluye la consulta?"
        ]
    },
    
    // Preguntas sobre TERATÓGENOS
    "teratogenos|teratógenos|riesgos|medicamentos|alcohol|tabaco|evitar|peligros|que no debo": {
        response: "⚠️ **Evita antes y durante el embarazo:**\n\n🚫 Alcohol y tabaco\n🚫 Drogas recreativas\n🚫 Algunos medicamentos (consulta a tu médico)\n🚫 Exposición a químicos tóxicos\n🚫 Rayos X innecesarios\n\n✅ SIEMPRE consulta con tu médico antes de tomar cualquier medicamento si estás planificando embarazo.",
        followUp: [
            "¿Qué vitaminas necesito?",
            "¿Para qué sirve la consulta?"
        ]
    },
    
    // Preguntas sobre COSTO
    "costo|precio|gratis|pagar|cuanto cuesta|cuánto cuesta|valor|cobran": {
        response: "¡Es GRATUITA! 🎉\n\nLa consulta preconcepcional está incluida en el **Plan Obligatorio de Salud (POS)** según la Resolución 3280 de 2018.\n\n✅ No necesitas pagar\n✅ No necesitas autorización especial\n✅ Es tu derecho\n\nSolicítala en tu EPS o IPS.",
        followUp: [
            "¿Cómo la solicito?",
            "¿Qué ley la respalda?"
        ]
    },
    
    // Preguntas sobre RESOLUCIÓN
    "resolucion|resolución|normativa|ley|legal|3280|derecho": {
        response: "📋 **Resolución 3280 de 2018**\n\nEstablece que la consulta preconcepcional es:\n\n✅ Obligatoria en el sistema de salud\n✅ Parte del POS (Plan Obligatorio de Salud)\n✅ Debe ofrecerse a todas las mujeres en edad reproductiva\n✅ Incluye atención por médico y enfermera\n\nEs tu derecho, ¡ejércelo!",
        followUp: [
            "¿Es gratis?",
            "¿Cómo la solicito?"
        ]
    },
    
    // Preguntas sobre TIMING
    "cuando|cuándo|momento|tiempo|anticipacion|anticipación|antes|meses": {
        response: "⏰ **Momento ideal:**\n\n✅ 3-6 meses ANTES de buscar embarazo\n✅ Permite tiempo para:\n   • Iniciar ácido fólico\n   • Aplicar vacunas necesarias\n   • Controlar condiciones de salud\n   • Modificar hábitos\n\n¡Entre más anticipación, mejor! 🌟",
        followUp: [
            "¿Qué incluye?",
            "¿Qué vitaminas necesito?"
        ]
    },
    
    // Preguntas sobre BUSCAR PROFESIONALES
    "buscar|profesional|medico|médico|doctor|donde|dónde|encontrar|cerca": {
        response: "Para buscar profesionales habilitados:\n\n🔍 Puedes consultar el **Registro Especial de Prestadores de Servicios de Salud (REPS)** en SISPRO.\n\n¿Quieres que te dirija al portal de consulta?",
        followUp: [
            "Sí, llévame a SISPRO",
            "¿Cómo solicitar la consulta?"
        ]
    },
    
    // Redirect a SISPRO
    "sispro|reps|llevarme|llevame|si lleva|portal": {
        response: "¡Perfecto! Te voy a redirigir al portal de SISPRO para que busques profesionales habilitados cerca de ti. 🔍",
        action: "redirect",
        url: "https://www.sispro.gov.co/Pages/Home.aspx",
        followUp: [
            "¿Qué es la consulta?",
            "¿Qué incluye?"
        ]
    },
    
    // SALUDOS
    "hola|buenos dias|buenas tardes|buenas noches|hey|ola|saludos|hi": {
        response: "¡Hola! 👋 Soy tu asistente virtual sobre consulta preconcepcional.\n\n¿En qué puedo ayudarte hoy?",
        followUp: [
            "¿Qué es la consulta?",
            "¿Cómo la solicito?",
            "¿Es gratis?"
        ]
    },
    
    // EMBARAZO / PLANIFICAR
    "embarazo|embarazada|planificar|planear|bebe|bebé|hijo|quiero tener": {
        response: "¡Qué emocionante que estés planificando un embarazo! 🤰\n\nLa consulta preconcepcional es el primer paso para asegurar un embarazo saludable. Te ayuda a preparar tu cuerpo ANTES de concebir.",
        followUp: [
            "¿Para qué sirve?",
            "¿Cómo la solicito?",
            "¿Cuándo debo hacerla?"
        ]
    },
    
    // PAREJA / HOMBRE
    "pareja|esposo|hombre|mi pareja|compañero": {
        response: "¡Excelente pregunta! 👥\n\nLa consulta preconcepcional NO es solo para mujeres. La pareja también debe participar porque:\n\n✅ Evaluación de salud del padre\n✅ Consejería conjunta\n✅ Planificación familiar\n✅ Apoyo en cambios de hábitos",
        followUp: [
            "¿Qué incluye la consulta?",
            "¿Dónde la solicito?"
        ]
    },
    
    // EDAD
    "edad|años|mayor|joven|cuantos años": {
        response: "La consulta preconcepcional es importante a CUALQUIER edad reproductiva, pero especialmente si:\n\n⚠️ Tienes menos de 18 o más de 35 años\n⚠️ Primera gestación\n⚠️ Tienes condiciones de salud previas\n\nNo hay edad incorrecta para cuidar tu salud. 💪",
        followUp: [
            "¿Qué incluye?",
            "¿Para qué sirve?"
        ]
    },
    
    // DESPEDIDAS
    "gracias|muchas gracias|ok|vale|perfecto|entendido|chao|adios|adiós": {
        response: "¡De nada! 😊 Estoy aquí si necesitas más información.\n\nRecuerda: la consulta preconcepcional es GRATIS y es tu derecho. ¡No dudes en solicitarla!",
        followUp: [
            "Buscar profesionales",
            "¿Algo más que deba saber?"
        ]
    }
};

// Respuestas generales para mantener conversación
const generalResponses = [
    {
        keywords: ["ayuda", "help", "no entiendo", "explica"],
        response: "¡Claro! Puedo ayudarte con información sobre:\n\n📋 Qué es y para qué sirve\n🏥 Cómo y dónde solicitarla\n💊 Qué incluye (exámenes, vitaminas, vacunas)\n💰 Costos (es GRATIS)\n📜 Marco legal\n🔍 Buscar profesionales\n\n¿Sobre qué quieres saber más?",
        followUp: [
            "¿Qué es?",
            "¿Cómo la solicito?",
            "¿Qué incluye?"
        ]
    },
    {
        keywords: ["otra cosa", "algo mas", "más", "mas", "que más", "que mas"],
        response: "¡Por supuesto! Te puedo ayudar con:\n\n✨ Componentes de la consulta\n✨ Ácido fólico y vitaminas\n✨ Vacunas necesarias\n✨ Qué evitar antes del embarazo\n✨ Cuándo es el mejor momento\n✨ Buscar profesionales\n\n¿Qué te gustaría saber?",
        followUp: [
            "Ácido fólico",
            "Vacunas",
            "Qué evitar"
        ]
    },
    {
        keywords: ["no", "no gracias", "ya", "nada"],
        response: "Está bien 😊 Si necesitas algo más adelante, aquí estaré.\n\nRecuerda: la consulta es gratuita y es tu derecho. ¡Cuídate! 💕",
        followUp: [
            "¿Algo más?",
            "Buscar profesionales"
        ]
    }
];

// Preguntas rápidas iniciales
const quickQuestions = [
    "¿Qué es la consulta preconcepcional?",
    "¿Cómo la solicito?",
    "¿Es gratis?",
    "¿Qué incluye?",
    "Buscar profesionales"
];

// ==========================================
// FUNCIONES DEL CHATBOT
// ==========================================

let chatHistory = [];

function initChatbot() {
    const chatbotButton = document.getElementById('chatbot-button');
    const chatbotContainer = document.getElementById('chatbot-container');
    const chatbotClose = document.getElementById('chatbot-close');
    const chatbotSend = document.getElementById('chatbot-send');
    const chatbotInput = document.getElementById('chatbot-input');

    if (!chatbotButton || !chatbotContainer) return;

    // Abrir/cerrar chatbot
    chatbotButton.addEventListener('click', () => {
        chatbotContainer.classList.toggle('active');
        if (chatbotContainer.classList.contains('active') && chatHistory.length === 0) {
            showWelcomeMessage();
        }
    });

    chatbotClose.addEventListener('click', () => {
        chatbotContainer.classList.remove('active');
    });

    // Enviar mensaje
    chatbotSend.addEventListener('click', sendMessage);
    chatbotInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });
}

function showWelcomeMessage() {
    const welcomeMsg = {
        type: 'bot',
        text: '¡Hola! 👋 Soy tu asistente virtual sobre consulta preconcepcional.\n\n¿En qué puedo ayudarte?'
    };
    
    addMessage(welcomeMsg);
    showQuickQuestions(quickQuestions);
}

function showQuickQuestions(questions) {
    const messagesContainer = document.getElementById('chatbot-messages');
    
    // Remover botones anteriores si existen
    const oldButtons = messagesContainer.querySelector('.quick-questions');
    if (oldButtons) oldButtons.remove();
    
    const quickQuestionsDiv = document.createElement('div');
    quickQuestionsDiv.className = 'quick-questions';
    
    questions.forEach(question => {
        const btn = document.createElement('button');
        btn.className = 'quick-question-btn';
        btn.textContent = question;
        btn.onclick = () => {
            document.getElementById('chatbot-input').value = question;
            sendMessage();
        };
        quickQuestionsDiv.appendChild(btn);
    });
    
    messagesContainer.appendChild(quickQuestionsDiv);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

function sendMessage() {
    const input = document.getElementById('chatbot-input');
    const message = input.value.trim();
    
    if (!message) return;
    
    // Agregar mensaje del usuario
    addMessage({ type: 'user', text: message });
    input.value = '';
    
    // Buscar respuesta en base de conocimiento
    const response = findResponse(message);
    
    // Simular "escribiendo..."
    setTimeout(() => {
        addMessage({ type: 'bot', text: response.text });
        
        // Mostrar opciones de seguimiento
        if (response.followUp && response.followUp.length > 0) {
            setTimeout(() => {
                showQuickQuestions(response.followUp);
            }, 300);
        }
        
        // Si hay acción (redirect)
        if (response.action === 'redirect') {
            setTimeout(() => {
                window.open(response.url, '_blank');
            }, 1000);
        }
    }, 500);
}

function findResponse(userMessage) {
    const normalizedMessage = userMessage.toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, ""); // Quitar acentos
    
    // Buscar coincidencia en base de conocimiento principal
    for (const [keywords, data] of Object.entries(knowledgeBase)) {
        const patterns = keywords.split('|');
        const match = patterns.some(pattern => 
            normalizedMessage.includes(pattern.toLowerCase())
        );
        
        if (match) {
            return {
                text: data.response,
                action: data.action,
                url: data.url,
                followUp: data.followUp || []
            };
        }
    }
    
    // Buscar en respuestas generales
    for (const item of generalResponses) {
        const match = item.keywords.some(keyword => 
            normalizedMessage.includes(keyword.toLowerCase())
        );
        
        if (match) {
            return {
                text: item.response,
                followUp: item.followUp || []
            };
        }
    }
    
    // Respuesta por defecto amigable
    return {
        text: "Hmm, no estoy segura de cómo responder a eso específicamente. 🤔\n\nPero puedo ayudarte con:\n\n💡 Qué es la consulta preconcepcional\n💡 Para qué sirve y sus beneficios\n💡 Cómo y dónde solicitarla\n💡 Qué incluye (exámenes, vitaminas, vacunas)\n💡 Costos (es GRATIS)\n💡 Buscar profesionales cerca de ti\n\n¿Sobre cuál quieres saber?",
        followUp: [
            "¿Qué es?",
            "¿Para qué sirve?",
            "¿Cómo la solicito?"
        ]
    };
}

function addMessage(message) {
    const messagesContainer = document.getElementById('chatbot-messages');
    const messageDiv = document.createElement('div');
    messageDiv.className = `chat-message ${message.type}`;
    
    // Convertir saltos de línea en <br> y negritas
    const formattedText = message.text
        .replace(/\n/g, '<br>')
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    
    messageDiv.innerHTML = formattedText;
    messagesContainer.appendChild(messageDiv);
    
    // Scroll al final
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
    
    // Guardar en historial
    chatHistory.push(message);
}

// ==========================================
// INICIALIZAR AL CARGAR LA PÁGINA
// ==========================================

document.addEventListener('DOMContentLoaded', initChatbot);