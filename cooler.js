//Objektum orientált klíma berendezés teljesítmény kiszámító alkalmazás

class Cooler {
    constructor(w, l, h, c) {
        this.width = w;
        this.length = l;
        this.height = h;
        this.category = c;
    }

    coolarr = [25, 30, 40];
    heatarr = [40, 60, 80];

    classification = [
        { class: 1, cat: "hőszigetelt",  power: 0},
        { class: 2, cat: "közepesen hőszigetelt", power: 0},
        { class: 3, cat: "szigeteletlen", power: 0}
     ];

    getRoomVolume = () => this.width * this.length * this.height;

    getCoolingPower = () => {

        this.coolarr.forEach((elem, i) => {
            this.classification[i].power = elem;
        });

        let vol = this.getRoomVolume();
        let coolingPower = 0;

        switch(this.category) {
            case 1:
            coolingPower = vol * this.classification[0].power;
            break;
            case 2:
            coolingPower = vol * this.classification[1].power;
            break;
            case 3:
            coolingPower = vol * this.classification[2].power;
            break;
        }
        return coolingPower;
    }
    getHeatingPower = () => {

        this.heatarr.forEach((elem, i) => {
            this.classification[i].power = elem;
        });

        let vol = this.getRoomVolume();
        let heatingPower = 0;

        switch(this.category) {
            case 1:
            heatingPower = vol * this.classification[0].power;
            break;
            case 2:
            heatingPower = vol * this.classification[1].power;
            break;
            case 3:
            heatingPower = vol * this.classification[2].power;
            break;
        }
        return heatingPower;
    }

    getInsulationCategory = () => {
        let insulation = "";
        switch(this.category) {
            case 1:
            insulation = this.classification[0].cat;
            break;
            case 2:
            insulation = this.classification[1].cat;
            break;
            case 3:
            insulation = this.classification[2].cat;
            break;
        }
        return insulation;
    }
}

/*const myCooler = new Cooler(6, 4, 2.4, 1);
console.log(`Számított légköbméter: ${myCooler.getRoomVolume().toFixed(2)} m3`);
console.log(`Szigetelési besorolás: ${myCooler.getInsulationCategory()}`);
console.log(`Szükséges hűtési teljesítmény: ${(myCooler.getCoolingPower() / 1000).toFixed(2)} kW`);
console.log(`Szükséges fűtési teljesítmény: ${(myCooler.getHeatingPower() / 1000).toFixed(2)} kW`);*/

class AirConditioner extends Cooler {
    constructor(w, l, h, c) {
        super(w, l, h, c);
    }
    standards = [2500, 3500, 5200, 7100, 10500, 14100];

    getConditioner() {
        let acceptedPower = 0;
        let calculatedPower = this.getHeatingPower();
        
        for (let i = 0; i < this.standards.length; i++) {
            if(this.standards[i] >= calculatedPower){
                acceptedPower = this.standards[i];
                break;
            }
        }
        return acceptedPower;
    }
}
const myAirConditioner = new AirConditioner(6, 4, 2.4, 2);

console.log(`Számított légköbméter: ${myAirConditioner.getRoomVolume().toFixed(2)} m3`);
console.log(`Szigetelési besorolás: ${myAirConditioner.getInsulationCategory()}`);
console.log(`Szükséges hűtési teljesítmény: ${(myAirConditioner.getCoolingPower() / 1000).toFixed(2)} kW`);
console.log(`Szükséges fűtési teljesítmény: ${(myAirConditioner.getHeatingPower() / 1000).toFixed(2)} kW`);
console.log(`Megfelelő teljesítmény kategória: ${(myAirConditioner.getConditioner() / 1000).toFixed(2)} kW`);