
// AnimalShelter class
class AnimalShelter {
    constructor() {
        this.Lion = [];
        this.Tiger = [];
    }

    // enqueue()
    enqueue(animal) {
        if (animal === 'Lion') {
            let value = {
                name: animal,
            };
            this.Lion.push(value);
        }
        if (animal === 'Tiger') {
            let value = {
                name: animal,
            };
            this.Tiger.push(value);
        }else {
            return null;
        }
    }

    // dequeue()
    dequeue(pref) {
        if (pref !== 'Lion' || pref !== 'Tiger') {

            return null;

        } else {
            if (pref === 'Lion') {
                this.Lion.pop();
                
                return this.Lion;
            }
            else {
                this.Tiger.pop();
                return this.Tiger;
            }
        }
    }
}
module.exports = AnimalShelter;
