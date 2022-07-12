function LocalStorage() {
    return {
        setLocal(key, data) {
            localStorage.setItem(key, JSON.stringify(data));
        },
        getLocal(key) {
            return JSON.parse(localStorage.getItem(key)) || [];
        },
    };
}

export default LocalStorage;
