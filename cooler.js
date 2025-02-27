//Objektum orientált klíma berendezés teljesítmény kiszámító alkalmazás

class Cooler {
    constructor(w, l, h, c) {
        this.width = w;
        this.length = l;
        this.height = h;
        this.category = c;
    }
    classification = [
        { class: 1, cat: "hőszigetelt",  power: 25},
        { class: 2, cat: "közepesen hőszigetelt", power: 30},
        { class: 3, cat: "szigeteletlen", power: 40}
     ];

    getRoomVolume = () => this.width * this.length * this.height;

    getCoolingPower = () => {
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

const myCooler = new Cooler(5, 6, 2.3, 3);
console.log(`Légköbméter: ${myCooler.getRoomVolume()} m3`);
console.log(`Hűtási teljesítmény: ${myCooler.getCoolingPower()} W`);
console.log(`Besorolás: ${myCooler.getInsulationCategory()}`);