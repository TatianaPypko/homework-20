class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  showInformation() {
    console.log(`${this.name} ${this.age}`);
  }
}

class Car {
  constructor(brand, model, year, number) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.number = number;
    this.owner = {};
  }

  addOwner(ownerCar) {
    if (ownerCar instanceof Person && ownerCar.age > 18) {
      this.owner = ownerCar;
    } else {
      console.log("You can`t be an owner!");
    }
  }

  showInformationCar() {
    console.log(`${this.brand} ${this.model} ${this.year} ${this.number}`);
    if (this.owner.hasOwnProperty('name')) {
      this.owner.showInformation();
    } else {
      console.log(`This ${this.brand} is without owner`);
    }
  }
}

const ivan = new Person("Ivan", 12);
const oleg = new Person("Oleg", 40);

const toyota = new Car("Toyota", "camry", 2020, "HY 8970 OP");
const audi = new Car("Audi", "A5", 2018, "PJ 2536 IN");

toyota.addOwner(ivan);
audi.addOwner(oleg);

toyota.showInformationCar();
audi.showInformationCar();