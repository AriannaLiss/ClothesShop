import { addColorFilter, clearCatalogPage, createProductCard, getColorSet } from "./product-card.js";

export let data;

export const fillData = (response) => {
    data = response
    Object.freeze(data);
    clearCatalogPage();
    data.forEach((el) => {createProductCard(el)})
    getColorSet(data);
    addColorFilter();
}
