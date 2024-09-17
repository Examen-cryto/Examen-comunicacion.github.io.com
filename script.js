function checkAnswers() {
    const correctAnswers = {
        q1: "b",
        q2: "b",
        q3: "c",
        q4: "a",
        q5: "c",
        q6: "una comparación implícita",
        q7: "tan rápido como un rayo",
        q8: "miguel de cervantes",
        q9: "una composición literaria que expresa emociones o sentimientos",
        q10: "el cielo oscuro / susurra silencios",
        q11: "in media res",
        q12: "una narración extensa, con personajes complejos y una trama desarrollada",
        q13: "uso de símbolos, temas exóticos, y musicalidad",
        q14: "un poema lírico en tono solemne y de alabanza",
        q15: "el cuento es breve y con una sola trama, la novela es extensa y con múltiples tramas"
    };

    let score = 0;
    let totalPoints = (5 * 0.5) + (10 * 2);  // 5 preguntas de opción múltiple a 0.5 puntos + 10 preguntas escritas a 2 puntos

    // Obtener nombre y grado del estudiante
    const nombre = document.getElementById('student-name').value.trim();
    const grado = document.getElementById('student-grade').value.trim();

    if (nombre === '' || grado === '') {
        alert('Por favor, ingresa tu nombre y grado.');
        return;
    }

    // Revisar respuestas de opción múltiple (0.5 puntos cada una)
    for (let i = 1; i <= 5; i++) {
        let questionId = 'q' + i;
        let options = document.getElementsByName(questionId);
        let selectedOption = Array.from(options).find(option => option.checked);
        if (selectedOption && selectedOption.value === correctAnswers[questionId]) {
            score += 0.5;
        }
    }

    // Revisar respuestas escritas (2 puntos cada una)
    for (let i = 6; i <= 15; i++) {
        let questionId = 'q' + i;
        let userAnswer = document.getElementById(questionId).value.toLowerCase().trim();
        if (userAnswer && userAnswer.includes(correctAnswers[questionId].toLowerCase())) {
            score += 2;
        }
    }

    // Calcular porcentaje
    let percentage = (score / totalPoints) * 100;

    // Definir el mensaje de retroalimentación
    let feedbackMessage;
    if (percentage === 100) {
        feedbackMessage = "¡Excelente trabajo! Has respondido todas las preguntas correctamente.";
    } else if (percentage >= 80) {
        feedbackMessage = "Muy bien hecho. Has obtenido una puntuación alta.";
    } else if (percentage >= 50) {
        feedbackMessage = "Buen trabajo, pero hay margen para mejorar.";
    } else {
        feedbackMessage = "Sigue practicando. Puedes mejorar con más estudio.";
    }

    // Mostrar el resultado
    let resultDiv = document.getElementById("result");
    if (resultDiv) {
        resultDiv.innerHTML = `
            <p>Nombre: ${nombre}</p>
            <p>Grado: ${grado}</p>
            <p>Tu puntuación es: ${score} de ${totalPoints} (${percentage.toFixed(2)}%).</p>
            <p>${feedbackMessage}</p>
        `;
    } else {
        console.error('Elemento con ID "result" no encontrado.');
    }

    // Deshabilitar todos los campos de entrada
    const inputs = document.querySelectorAll('input[type="text"], input[type="radio"]');
    inputs.forEach(input => input.disabled = true);
    
    // Deshabilitar el botón de enviar
    const submitButton = document.querySelector('button[type="button"]');
    if (submitButton) {
        submitButton.disabled = true;
    }
}
