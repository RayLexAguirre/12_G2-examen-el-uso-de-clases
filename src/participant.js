export default class Participant{
    constructor(id, name, type){
        this._id = id;
        this._name = name;
        this._type = this._limit(type);
    }

    _limit(type){
        if(type >= 1 && type <= 3){
            return type;
        } else {
            return 1;
        }
    }

    _elejirTipo(type){
        if(type === 1){
            return "Estudiante";
        } else if(type === 2){
            return "Asesor";
        } else if(type === 3){
            return "Patrocinador";
        } else {
            return 1;
        }
    }

    getId(){
        return this._id;
    }

    getName(){
        return this._name.toUpperCase();
    }

    getType(){
        return this._type;
    }

    getTypeName(){
        return this._elejirTipo(this._type);
    }
}