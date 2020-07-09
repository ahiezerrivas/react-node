//super class
class Holiday {
    constructor(destination, days) {
        this.destination = destination
        this.days = days
    }

    info(){
        console.log(`${this.destination} will take ${this.days}`)
    }
}

console.log(Holiday.prototype);

const trip = new Holiday('Kathmandu, Nepal',  30)
console.log(trip.info());

//sub class
class Expedition extends Holiday {
    constructor(destination, days, gear) {
        super(destination, days)
        this.gear = gear;

    }
    info() {
        super.info();
        console.log(`Bring your ${this.gear.join("and your")}`)
    }
}

const tripWithGear = new Expedition("Everest", 30, ["Sunglasses", "Flasgs", "Camera"]);
tripWithGear.info()