import LocalStorageService from "./LocalStorageService";
import SessionStorageService from "./SessionStorageService";

const fruits = [
    {"title":"apples", "price":10, "id":Math.trunc(new Date().valueOf()*Math.random())},
    {"title":"bananas", "price":20, "id":Math.trunc(new Date().valueOf()*Math.random())},
    {"title":"pears", "price":15, "id":Math.trunc(new Date().valueOf()*Math.random())}
]

const oranges = {"title":"oranges", "price":25, "id":Math.trunc(new Date().valueOf()*Math.random())}
const apples = {"title":"apples", "price":12, "id":123456789};

LocalStorageService.addItems("fruits", fruits);
LocalStorageService.addItem("fruits", oranges);
LocalStorageService.updateItems("fruits", fruits);
LocalStorageService.updateItem("fruits",apples);
console.log(LocalStorageService.getItems("fruits"));
console.log(LocalStorageService.getItem("fruits", 123456789));
LocalStorageService.deleteItem("fruits", 123456789)
LocalStorageService.deleteItems("fruits");

SessionStorageService.addItems("fruits", fruits);
SessionStorageService.addItem("fruits", oranges);
SessionStorageService.updateItems("fruits", fruits);
SessionStorageService.updateItem("fruits",apples);
console.log(SessionStorageService.getItems("fruits"));
console.log(SessionStorageService.getItem("fruits", 123456789));
SessionStorageService.deleteItem("fruits", 123456789)
SessionStorageService.deleteItems("fruits");