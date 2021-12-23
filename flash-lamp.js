class FlashLamp{
    _battery;
    status;
    constructor(battery, status) {
        this.status = status;
        this._battery = battery;
    }

    switch(){
        this.status = !this.status;
    }

    get battery() {
        return this._battery;
    }
    getBatteryInfo(){
        return this.battery.energy;
    }

    light(){
        if (this.status){
            alert('Lighting.');
        } else {
            alert('Not lighting.');
        }
    }
}
