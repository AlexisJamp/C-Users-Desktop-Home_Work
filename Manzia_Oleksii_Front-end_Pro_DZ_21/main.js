// ДЗ 21

class Person {
    constructor(name, gender){
        this.name = name;
        this.gender = gender;
    }
}

class Appartament{
    livingPeople = [];

    addPeople(){
        this.livingPeople.push(Person.name);
    }
    showAppartment(){
        console.log(this.livingPeople)
    }
}

class Building{
    Apps = [];
    maxNum = 10;
    
    constructor(maxNum){
        this.maxNum = maxNum;
    }

    ifMore(Appartament){
        if(this.Apps.length < maxNum){
            this.Apps.push(Appartament.livingPeople)
        }
        else{console.log('Building is full of strangers, find another')}
        }
    
    addApp(){
        this.Apps.push(Appartament.livingPeople)
    }
    
    showBuilding(){
        console.log(this.Apps)
    }
}



const John = new Person('John')
const Mary = new Person('Mary')

const apartment1 = new Appartament()
apartment1.addPeople(John)
apartment1.addPeople(Mary)

const apartment2 = new Appartament()
const apartment3 = new Appartament()

const building = new Building()

building.addApp(apartment1)
building.addApp(apartment2)

console.log(apartment1.livingPeople)
console.log(Appartament.showAppartment)
console.log(Building.showBuilding)