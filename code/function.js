import { data } from "./data.js";

export function ajax(url){
    return new Promise((reslove, reject) => {
        let xhr = new XMLHttpRequest();
        const loader = document.querySelector('.loader');
        loader.classList.remove('hide');
        xhr.open('GET', url);
        xhr.onreadystatechange = () => {
            if(xhr.readyState === 4 && xhr.status>=200 && xhr.status<300){
                reslove(xhr.response);
                loader.classList.add('hide');
            } else if(xhr.readyState === 4) {
                reject(new Error(`Error in GET request: ${xhr.status}/${xhr.statusText}`))
                loader.classList.add('hide');
            }
        }
        xhr.onerror = function(){
            loader.classList.add('hide');
            reject(new Error('Network error'))
        }
        xhr.send();
    })
}

export async function get(url){
    const loader = document.querySelector('.loader');
    loader.classList.remove('hide');
    const data = await fetch(url);
    loader.classList.add('hide');
    return await data.json()
}

export function createSearchList(e){
    const filteredData = data.filter(el => el.productName.toLowerCase().includes(e.target.value.toLowerCase()))
    console.log(filteredData)
    let dataList = document.querySelector('#filtered-list')
    if (dataList){
        dataList.innerHTML = '';
    }else{
        dataList = document.createElement('datalist')
        dataList.id = "filtered-list"
        document.querySelector('.nav__search').appendChild(dataList);
        getSearches().forEach(el => el.setAttribute('list',dataList.id));
    }
    filteredData.forEach(el => {
        dataList.innerHTML +=  `<option value="${el.productName}">`
    });
}

export function getSearches(){
    return document.querySelectorAll('[data-purpose = "search"]');
}