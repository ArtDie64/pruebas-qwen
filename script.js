// Script para funcionalidades interactivas

// Agregar efecto de scroll suave para enlaces internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Agregar efecto hover a las secciones
document.querySelectorAll('.section').forEach(section => {
    section.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px)';
        this.style.boxShadow = '0 8px 15px rgba(0,0,0,0.1)';
        this.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
    });
    
    section.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
        this.style.boxShadow = '0 4px 6px rgba(0,0,0,0.05)';
    });
});

// Agregar efecto a los elementos de trabajo
document.querySelectorAll('.job-item').forEach(job => {
    job.addEventListener('mouseenter', function() {
        this.style.borderLeftColor = '#1a3a6c';
        this.style.transition = 'border-left-color 0.3s ease';
    });
    
    job.addEventListener('mouseleave', function() {
        this.style.borderLeftColor = '#2c5282';
    });
});

// Función para alternar la visibilidad de contenido adicional
function toggleContent(elementId) {
    const element = document.getElementById(elementId);
    if (element.style.display === 'none' || element.style.display === '') {
        element.style.display = 'block';
    } else {
        element.style.display = 'none';
    }
}

// Inicializar contador de visitas o estadísticas si es necesario
window.addEventListener('load', function() {
    console.log('Página de CV cargada correctamente');
    
    // Efecto de fade-in al cargar la página
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease-in-out';
    
    setTimeout(function() {
        document.body.style.opacity = '1';
    }, 100);
});