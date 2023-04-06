window.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.to-catalog').forEach((btn) => {
        btn.addEventListener('click', () => window.location = './catalog.html')
    })
})