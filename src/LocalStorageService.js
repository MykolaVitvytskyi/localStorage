export default class LocalStorageService{

    static getItems(key){
        return JSON.parse(localStorage.getItem(key));
    }

    static getItem(key, id){
        return JSON.parse(localStorage.getItem(key)).filter(item => item.id === id);
    }

    static addItems(key, list){
        localStorage.setItem(key, JSON.stringify(list));
    }

    static addItem(key, item){
        const list = JSON.parse(localStorage.getItem(key));
        list.push(item);
        localStorage.setItem(key, JSON.stringify(list));
    }

    static updateItems(key, list){
        localStorage.setItem(key, JSON.stringify(list));
        JSON.parse(localStorage.getItem(key));
    }

    static updateItem(key, item){
        let list = JSON.parse(localStorage.getItem(key));
        let NewList = Object.entries(item);
        list.forEach((elem,i) =>{
            let entries = Object.entries(elem);

            for (let j = 0; j < entries.length; j++) {
                if (String(entries[j])===String(NewList[j])){
                    list[i] = item;
                }
            }

        })
        localStorage.setItem(key, JSON.stringify(list));
    }

    static deleteItems(key){
        localStorage.removeItem(key);
    }
    
    static deleteItem(key, id){
        const list = JSON.parse(localStorage.getItem(key)).filter(item => item.id !== id);
        localStorage.setItem(key, JSON.stringify(list));
    }
}