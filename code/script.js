import { get } from "./function.js"

window.addEventListener('DOMContentLoaded', () => {

    document.querySelectorAll('.to-catalog').forEach((btn) => {
        btn.addEventListener('click', () => window.location = './catalog.html')
    })

    get('https://store-demo.herokuapp.com/api/products')
    .then(response => console.log('FulFiled: ', response))
    .catch(error => console.error('Rejeted: ', error))
})
