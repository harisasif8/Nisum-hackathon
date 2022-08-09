const getItemFromLS = (key = '') => {
    return localStorage.getItem(key);
}


export { getItemFromLS }