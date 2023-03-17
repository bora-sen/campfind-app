export function useLocalStorage(){
    const getFromLocalStorage = JSON.parse(localStorage.getItem('user')) ?? false;
    function saveToLocalStorage(val){
        localStorage.setItem('user',JSON.stringify(val));
    }
    return [getFromLocalStorage,saveToLocalStorage]
}