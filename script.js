// Тегіс скролл
document.querySelectorAll('.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const section = document.querySelector(this.getAttribute('href'));
        section.scrollIntoView({ behavior: 'smooth' });
    });
});

// Рейтинг диаграммасы (Chart.js)
const ctx = document.getElementById('ratingChart').getContext('2d');
const ratingChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['MyAnimeList', 'IMDb', 'AniList'],
        datasets: [{
            label: 'Рейтинг',
            data: [8.4, 8.7, 8.5],
            backgroundColor: ['#ff4d4d', '#1e90ff', '#ffcc00'],
            borderColor: ['#fff'],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true,
                max: 10,
                title: {
                    display: true,
                    text: 'Рейтинг (10/10)',
                    color: '#fff'
                },
                ticks: { color: '#fff' }
            },
            x: {
                ticks: { color: '#fff' }
            }
        },
        plugins: {
            legend: { labels: { color: '#fff' } }
        }
    }
});

// Parallax эффектісі
document.addEventListener('mousemove', (e) => {
    const parallaxImages = document.querySelectorAll('.parallax-container img');
    parallaxImages.forEach(img => {
        const rect = img.getBoundingClientRect();
        const x = (e.clientX - rect.left - rect.width / 2) / 50;
        const y = (e.clientY - rect.top - rect.height / 2) / 50;
        img.style.transform = `rotateX(${y}deg) rotateY(${x}deg) scale(1.1)`;
    });
});

// Галерея суреттерін басқанда масштабтау
document.querySelectorAll('.gallery-img').forEach(img => {
    img.addEventListener('click', () => {
        img.classList.toggle('enlarged');
    });
});