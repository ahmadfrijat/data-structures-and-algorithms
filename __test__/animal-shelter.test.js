const Animal = require('../challenges/fifoAnimalShelter/animal-shelter.js');

describe('Animal shelter', ()=>{
  it('Can successfully add an animal by using enqueue method it should return null for any animal except Lion & Tiger', ()=>{
    let newAnimal = new Animal();
    newAnimal.enqueue('cat');
    expect(newAnimal.enqueue('cat')).toBeNull();
  });
  it('Can successfully add an Animal by using enqueue method', ()=>{
    let newAnimal = new Animal();
    newAnimal.enqueue('Lion');
    newAnimal.enqueue('Tiger');
    newAnimal.enqueue('cat');
    expect(newAnimal.Lion[0].name).toEqual('Lion');
    expect(newAnimal.Tiger[0].name).toEqual('Tiger');
    expect(newAnimal.enqueue('cat')).toBeNull();
  });
  it('Can successfully delete an Animal by using dequeue method', ()=>{
    let newAnimal = new Animal();
    newAnimal.enqueue('Lion');
    newAnimal.enqueue('Lion');
    newAnimal.enqueue('Tiger');
    newAnimal.enqueue('cat');
    expect(newAnimal.Lion[1].name).toEqual('Lion');
    expect(newAnimal.Tiger[0].name).toEqual('Tiger');
    expect(newAnimal.dequeue('cat')).toBeNull();
  });
});