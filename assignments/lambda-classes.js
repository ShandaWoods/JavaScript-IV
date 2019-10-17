// ## `lambda-classes` - We need a roster of Lambda School personnel. Build it!

// * We have a school to build here! This project will get you used to thinking about classes in JavaScript and building them from a brand new data set.
// * Lambda personnel can be broken down into three different types of `people`.
//   * **Instructors** - extensions of Person
//   * **Students** - extensions of Person
//   * **Project Managers** - extensions of Instructors
// * **IMPORTANT** - You'll need to create 2 - 3 objects for each class and test them according to their unique Attributes. For example:

// ```js
// const fred = new Instructor({
//   name: 'Fred',
//   location: 'Bedrock',
//   age: 37,
//   favLanguage: 'JavaScript',
//   specialty: 'Front-end',
//   catchPhrase: `Don't forget the homies`
// });
// ```

// #### Person

// * First we need a Person class. This will be our `base-class`
// * Person receives `name` `age` `location` all as props
// * Person receives `speak` as a method.
// * This method logs out a phrase `Hello my name is Fred, I am from Bedrock` where `name` and `location` are the object's own props

// #### Instructor

// * Now that we have a Person as our base class, we'll build our Instructor class.
// * Instructor uses the same attributes that have been set up by Person
// * Instructor has the following unique props:
//   * `specialty` what the Instructor is good at i.e. 'redux'
//   * `favLanguage` i.e. 'JavaScript, Python, Elm etc.'
//   * `catchPhrase` i.e. `Don't forget the homies`
// * Instructor has the following methods:
//   * `demo` receives a `subject` string as an argument and logs out the phrase 'Today we are learning about {subject}' where subject is the param passed in.
//   * `grade` receives a `student` object and a `subject` string as arguments and logs out '{student.name} receives a perfect score on {subject}'

// #### Student

// * Now we need some students!
// * Student uses the same attributes that have been set up by Person
// * Student has the following unique props:
//   * `previousBackground` i.e. what the Student used to do before Lambda School
//   * `className` i.e. CS132
//   * `favSubjects`. i.e. an array of the student's favorite subjects ['Html', 'CSS', 'JavaScript']
// * Student has the following methods:
//   * `listsSubjects` a method that logs out all of the student's favoriteSubjects one by one.
//   * `PRAssignment` a method that receives a subject as an argument and logs out that the `student.name has submitted a PR for {subject}`
//   * `sprintChallenge` similar to PRAssignment but logs out `student.name has begun sprint challenge on {subject}`

// #### Project Manager

// * Now that we have instructors and students, we'd be nowhere without our PM's
// * ProjectManagers are extensions of Instructors
// * ProjectManagers have the following unique props:
//   * `gradClassName`: i.e. CS1
//   * `favInstructor`: i.e. Sean
// * ProjectManagers have the following Methods:
//   * `standUp` a method that takes in a slack channel and logs `{name} announces to {channel}, @channel standy times!​​​​​
//   * `debugsCode` a method that takes in a student object and a subject and logs out `{name} debugs {student.name}'s code on {subject}`

// CODE here for your Lambda Classes

class Person {
    constructor(attributes){
        this.name = attributes.name;
        this.age = attributes.age;
        this.location = attributes.location;
    }
    speak (){
    return `Hello my name is ${this.name}, I am from ${this.location}.`
}
}

class Instructor extends Person {
    constructor(attributes){
        super(attributes);
        this.specialty = attributes.specialty;
        this.favLanguage = attributes.favLanguage;
        this.catchPhrase = attributes.catchPhrase;
    }
demo (subject){
    return `Today we are learning about ${subject}.`
}
grade (student, subject){
console.log(`${student.name} receives a perfect score on ${subject}!`); 
    }
}

class Student extends Person {
    constructor(attributes){
        super(attributes);
        this.previousBackground = attributes.previousBackground;
        this.className = attributes.className;
        this.favSubjects = attributes.favSubjects;
        this.subjects = attributes.subjects;
    }
PRAssignment (subject){
    console.log(`${this.name} has submitted a PR for ${subject}`);
}
SprintChallenge (){
    console.log(`${this.name} has begun sprint challenge on ${subject}`);
}
}

class ProjectManager extends Instructor {
    constructor(attributes){
        super(attributes);
        this.GradClassname = attributes.GradClassname;
        this.favInstructor = attributes.favInstructor;
    }
    standUp (channel){
    console.log(`${this.name} announces to ${channel}, @channel standy times!​​​​​`);
    }
    debugsCode (student, subject){
    console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
    }
}

const snape = new Instructor({
    name: 'Snape',
    location: 'Hogwarts',
    age: 40,
    favLanguage: 'Occlumency',
    specialty: 'Love',
    catchPhrase: 'Minus 10 points from Gryffindor',
});

const luna = new Student({
    name: 'Luna Lovegood',
    location: 'Ottery St Catchpole',
    age: 17,
    previousBackground: 'Magazine Editor',
    className:'Ravenclaw',
    favSubjects: 'Astronomy',
    subjects: ['Potions', 'Astronomy', 'Herbology'],
});

const hermione = new ProjectManager({
    name: 'Hermione Granger',
    GradClassname: 'Drop Out',
    favInstructor: 'Prof Flitwick',
    location: 'London',
    age: 17,
    favLanguage: 'Ancient Runes',
    specialty: 'Being a boss',
    catchPhrase: 'Shut up, Ron.',
});

console.log(luna);
console.log(snape);
console.log(hermione);