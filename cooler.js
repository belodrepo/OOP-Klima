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

const myCooler = new Cooler(5, 4, 2.5, 2);
console.log(`Számított légköbméter: ${myCooler.getRoomVolume()} m3`);
console.log(`Szigetelési besorolás: ${myCooler.getInsulationCategory()}`);
console.log(`Szükséges hűtési teljesítmény igény: ${myCooler.getCoolingPower() / 1000} kW`);
console.log(`Szükséges fűtési teljesítmény igény: ${myCooler.getHeatingPower() / 1000} kW`);