// Дз 23

class Student {
  constructor(firstName, lastName, birthYear) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthYear = birthYear;
    this.grades = [];
    this.attendance = new Array(25).fill(null);
  }

  getAge() {
    const currentYear = new Date().getFullYear();
    return currentYear - this.birthYear;
  }

  addGrade(grade) {
    this.grades.push(grade);
  }

  present() {
    const index = this.attendance.indexOf(null);
    if (index !== -1) {
      this.attendance[index] = true;
      console.log(`${this.firstName} ${this.lastName} присутствует.`);
    } else {
      console.log("Отчетность заполнена.");
    }
  }

  absent() {
    const index = this.attendance.indexOf(null);
    if (index !== -1) {
      this.attendance[index] = false;
      console.log(`${this.firstName} ${this.lastName} відсутній.`);
    } else {
      console.log("Отчетность заполнена.");
    }
  }

  summary() {
    const averageGrade = this.grades.reduce((total, grade) => total + grade, 0) / this.grades.length;
    const attendanceCount = this.attendance.filter(status => status === true).length / this.attendance.length;

    if (averageGrade > 90 && attendanceCount > 0.9) {
      return "Молодець!";
    } else if (averageGrade <= 90 && attendanceCount <= 0.9) {
      return "Редиска!";
    } else {
      return "Добре, але можна краще.";
    }
  }
}


const student1 = new Student("Иван", "Петров", 2000);
student1.addGrade(95);
student1.addGrade(85);
student1.present();
student1.present();
console.log(student1.summary()); 
const student2 = new Student("Елена", "Сидорова", 2001);
student2.addGrade(92);
student2.addGrade(87);
student2.absent();
console.log(student2.summary());