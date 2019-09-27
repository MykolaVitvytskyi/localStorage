import LocalStorageService from "./LocalStorageService";
import SessionStorageService from "./SessionStorageService";

const fruits = [
    {"title":"apples", "price":10, "id":123456789},
    {"title":"bananas", "price":20, "id":Math.trunc(new Date().valueOf()*Math.random())},
    {"title":"pears", "price":15, "id":Math.trunc(new Date().valueOf()*Math.random())}
]

const oranges = {"title":"oranges", "price":25, "id":Math.trunc(new Date().valueOf()*Math.random())}
const apples = {"title":"apples", "price":12, "id":123456789};

LocalStorageService.addItems("fruits", fruits);
LocalStorageService.addItem("fruits", oranges);
LocalStorageService.updateItem("fruits",apples);
LocalStorageService.updateItems("fruits", fruits);
console.log(LocalStorageService.getItems("fruits"));
console.log(LocalStorageService.getItem("fruits", 123456789));
LocalStorageService.deleteItem("fruits", 123456789)
LocalStorageService.deleteItems("fruits");

SessionStorageService.addItems("fruits", fruits);
SessionStorageService.addItem("fruits", oranges);
SessionStorageService.updateItem("fruits",apples);
SessionStorageService.updateItems("fruits", fruits);
console.log(SessionStorageService.getItems("fruits"));
console.log(SessionStorageService.getItem("fruits", 123456789));
SessionStorageService.deleteItem("fruits", 123456789)
SessionStorageService.deleteItems("fruits");