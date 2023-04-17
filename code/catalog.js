import { fillData } from "./data.js";
import { createSearchList, get, getSearches } from "./function.js"

get('https://store-demo.herokuapp.com/api/products')
.then(response => fillData(response))
.catch(error => console.error('Rejeted: ', error))

window.addEventListener('DOMContentLoaded', () => {
    getSearches().forEach(s => s.addEventListener('input', e => createSearchList(e)))  
})
