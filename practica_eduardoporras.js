async function fetchData() {
    try {
        // API que devuelve una imagen aleatoria de perros
        const response = await fetch('https://dog.ceo/api/breeds/image/random');
        if (!response.ok) {
            throw new Error('Error en la red: ' + response.statusText);
        }
        const data = await response.json();
        console.log('Imagen aleatoria de perro:', data.message);
    } catch (error) {
        console.error('Error al cargar los datos:', error);
    }
}

fetchData();




// DOM
// Función para mostrar recomendaciones en la consola
function showRecommendations() {
    // Lista de recomendaciones de aplicaciones AI
    const recommendations = [
        'Optimización de Rendimiento',
        'Mejora de Experiencias de Juego',
        'Nuevas Herramientas Creativas'
    ];

    // Itera sobre cada recomendación y la muestra en la consola
    recommendations.forEach(app => {
        console.log(`Recomendación: ${app}`);
    });
}

// Llama a la función para mostrar las recomendaciones
showRecommendations();

