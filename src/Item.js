export default class Item{
    constructor(name, cost, quantity){
        this._name = name;
        this._cost = cost;
        this._quantity = quantity;
    }

    getName() { 
        return this._name.toUpperCase(); 
    }

    getCost() {
        return this._cost;
    }

    getTotalCost() {
        return (this._cost * this._quantity);
    }

    
}