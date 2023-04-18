export function createProductCard(cardData){
    const cardContainer = document.createElement('div');
    cardContainer.classList.add('catalog__product');
    cardContainer.classList.add('product-card');
    cardContainer.dataset.type = cardData.productType;
    // console.log(cardData);
    cardContainer.innerHTML = `
        <img src="${cardData.availableOptions[0].optionImages[0]}" alt="shorts" class="product-card__img">
        <div class="product-card__title-place">
            <h5 class="product-card__title subtitle">${cardData.productName}</h5>
        </div>
        <ul class="product-card__rating">
            <li class="product-card__star"></li>
            <li class="product-card__star"></li>
            <li class="product-card__star"></li>
            <li class="product-card__star"></li>
            <li class="product-card__star"></li>
        </ul>
        <p class="product-card__text">As low as <span class="product-card__price">$${cardData.availableOptions[0].prices[0].price}</span></p>
        <div class="product-card__color-wrapper">
            <ul class="product-card__color-list">
                ${getColors(cardData).map(color => `<li class="product-card__color color-square" style = "background-color:#${color}"></li>`).join('')}
            </ul>
        </div>
        <div class="product-card__btn">ADD TO CART</div>
        `
    document.querySelector('.catalog__products').appendChild(cardContainer);
}

function getColors(data){
    return data.availableOptions.map(option => option.optionColorCode)
}

export function getColorSet(data){
    const colorSet=[];
    data.forEach((product) => {
        getColors(product).forEach((color) => {if (!colorSet.includes(color)) colorSet.push(color)})
    })
    const colorGrid = document.querySelector('#color-grid')
    colorGrid.innerHTML = '';
    colorSet.forEach(color => colorGrid.innerHTML += `<li class="color-square" style = "background-color: #${color}"></li>`)
    return colorSet
}

export function clearCatalogPage(){
    document.querySelector('.catalog__products').innerHTML='';
}

export function addColorFilter(){
    const colorSquars = document.querySelectorAll('.color-square')
    colorSquars.forEach((el) => {
        el.addEventListener('click',(e)=>{
            console.log(e.target.style.backgroundColor)
            filterByColor(e.target.style.backgroundColor)
    })
})
}

function filterByColor(color){
    const cards = document.querySelectorAll('.product-card')

    cards.forEach(card => {
        const [...cardColors] = card.querySelectorAll('.color-square')
        //console.log(cardColors)
        if (cardColors.filter(colorSq => colorSq.style.backgroundColor == color).length > 0){
            console.log(color)
            card.classList.remove('hide') 
        } else {
            card.classList.add('hide')
        }
    })
}
