export default class Project{
    constructor(name){
        this._name = name.toLowerCase();
        this._team = new Array();
        this._resources = new Array();
    }

    getName(){
        return this._name.toUpperCase();
    }

    addParticipant(participant){
        let index = this._encontrarParticipante(participant);

        if(index >= 0){
            return false;
        } else {
            this._team.push(participant); 
            return true;
        }
    }

    _encontrarParticipante(participant){
        for(let i = 0; i < this._team.length; i++){
            if(participant.getId() === this._team[i].getId()){
                return i;
            }
        }
    }

    addItem(item){
        this._resources.push(item); 
    }

    getNumParticipants(type){ 
        
        var lista = this._team;
        var n, i, k, aux;
        n = lista.length;            
        for (k = 1; k < n; k++) {
            for (i = 0; i < (n - k); i++) {
                if (lista[i] > lista[i + 1]) {
                    aux = lista[i];
                    lista[i] = lista[i + 1];
                    lista[i + 1] = aux;
                }
            }
        }
        



    } 

    getCost(){
        let cost = 0;

        this._resources.forEach((item) => {
            cost += item.getTotalCost();
        });

        return cost;
    }
}
