export default class SessionStorageService{

    static getItems(key){
        return JSON.parse(sessionStorage.getItem(key));
    }

    static getItem(key, id){
        return JSON.parse(sessionStorage.getItem(key)).filter(item => item.id === id);
    }

    static addItems(key, list){
        sessionStorage.setItem(key, JSON.stringify(list));
    }

    static addItem(key, item){
        const list = JSON.parse(sessionStorage.getItem(key));
        list.push(item);
        sessionStorage.setItem(key, JSON.stringify(list));
    }

    static updateItems(key, list){
        sessionStorage.setItem(key, JSON.stringify(list));
        JSON.parse(sessionStorage.getItem(key));
    }

    static updateItem(key, item){
        let list = JSON.parse(sessionStorage.getItem(key));
        list.forEach((elem, i) => {
            if(elem.id === item.id){
                list[i] = item;
            }
        });
        sessionStorage.setItem(key, JSON.stringify(list));
    }

    static deleteItems(key){
        sessionStorage.removeItem(key);
    }
    
    static deleteItem(key, id){
        const list = JSON.parse(sessionStorage.getItem(key)).filter(item => item.id !== id);
        sessionStorage.setItem(key, JSON.stringify(list));
      }
}