
function getItem(key:string){
    return localStorage.getItem(key);    
}

function getItemAsJson(key:string){
    let object:any;
    object=localStorage.getItem(key);
    try{
        return JSON.parse(object);
    } catch(exception){
        return null;
    }
}

function setItem(key:string,value:string){
    localStorage.setItem(key,value);
}

function setItemAsJSON(key:string,value:object){
    localStorage.setItem(key,JSON.stringify(value));
}

function isPresent(key:string){
    if(getItem(key)){
        return true;
    } else{
        return false;
    }
}


export const storageService = {
    getItem,
    getItemAsJson,
    setItem,
    setItemAsJSON,
    isPresent
};