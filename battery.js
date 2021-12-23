class Battery {
    _energy;
    get energy() {
        return this._energy;
    }

    set energy(value) {
        this._energy = value;
    }

    constructor(value) {
        this._energy = value;
    }
    decreaseEnergy(){
        this.energy -=1;
    }

}