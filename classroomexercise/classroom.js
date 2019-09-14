var Student = require("./student");


var Classroom = function (number, prof, roomNum) {
    this.studentsArr = [];
    this.number = number;
    this.prof = prof; 
    this.roomNum = roomNum;

    this.addStudent = function(name, subject, GPA) {
        this.studentsArr.push( new Student(name, subject, GPA));
    };
};

module.exports = Classroom;