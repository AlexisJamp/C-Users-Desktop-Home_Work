// Дз 21
class Person {
    constructor(name, gender) {
      this.name = name;
      this.gender = gender;
    }
  }
  
  class Apartment {
    people = [];
  
    addPerson(person) {
      this.people.push(person.name);
    }
  
    showPeople() {
      console.log(this.people);
    }
  }
  
  class Building {
    apartments = [];
    constructor() {
      this.maxNumber = 10;
    }
    
    
    addApartment(apartment) {
        if (this.apartments.length < this.maxNumber){
            this.apartments.push(apartment);
        }
        else{
            console.log('Full of people')
        }
      
    }
  
    showApartments() {
      console.log("Apartments in the building:", this.apartments);
    }
  }
  

  const john = new Person("John", "male");
  const mary = new Person("Mary", "female");
  const jack = new Person('Jack', 'male');
  const luci = new Person('Luci', 'female');
  const paul = new Person('Paul', 'male');
  const chen = new Person('Chen', 'male');
  
  const apartment = new Apartment();
  const apartment2 = new Apartment();
  const apartment3 = new Apartment();
  const apartment4 = new Apartment();
  const apartment5 = new Apartment();
  const apartment6 = new Apartment();
  const apartment7 = new Apartment();
  const apartment8 = new Apartment();
  const apartment9 = new Apartment();
  const apartment10 = new Apartment();
  const apartment11 = new Apartment()


  apartment.addPerson(john);
  apartment.addPerson(mary);
  apartment2.addPerson(jack);
  apartment2.addPerson(luci);
  apartment3.addPerson(mary);
  apartment3.addPerson(paul);
  apartment4.addPerson(chen);

  apartment.showPeople(); 
  
  const building = new Building();
  building.addApartment(apartment);
  building.addApartment(apartment2);
  building.addApartment(apartment3);
  building.addApartment(apartment4);
  building.addApartment(apartment5);
  building.addApartment(apartment6);
  building.addApartment(apartment7);
  building.addApartment(apartment8);
  building.addApartment(apartment9);
  building.addApartment(apartment10);
  building.addApartment(apartment11);

  building.showApartments(); 