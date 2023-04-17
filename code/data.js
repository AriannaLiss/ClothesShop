export let data;

export const fillData = (response) => {
    data = response
    Object.freeze(data);
    console.log(data)
}
