class Person {
	constructor(stats) {
        this.name = stats.name, 
        this.age = stats.age, 
        this.location = stats.location
	}
	speak() {
		return `Hello my name is ${this.name}, I am from ${this.location}.`;
	}
}

class Student extends Person{
    constructor(statsStudent){
        super(statsStudent);
        this.previousBackground = statsStudent.previousBackground,
        this.className = statsStudent.className,
        this.favSubjects = statsStudent.favSubjects
    }
    listsSubjects(){
        return this.favSubjects
    }
    PRAssignment(subject){
        return `${this.name} has submitted a PR for ${subject}.`;
    }
    sprintChallenge(subject){
        return `${this.name} has begun sprint challenge on ${subject}.`;
    }
}
class Instructor extends Person{
    constructor(statsInstructor){
        super(statsInstructor);
        this.specialty = statsInstructor.specialty,
        this.favLanguage = statsInstructor.favLanguage,
        this.catchPhrase = statsInstructor.catchPhrase
    }
    demo(subject){
        return `Today we are learning about ${subject}.`;
    }
    grade(student, subject) {
        return `${student.name} receives a perfect score on ${subject}.`;
    }
    
}


class ProjectManager extends Instructor{
    constructor(statsPM){
    super(statsPM);
    this.gradClassName = statsPM.gradClassName,
    this.favInstructor = statsPM.favInstructor
}
    standup(slackChannel){
        return `${this.name} announces to ${slackChannel}, @channel standy times!​​​​​`;
        
    }
    debugsCode(student, subject){
        return `${this.name} debugs ${student.name}'s code on ${subject}`;
    }
}

const fred = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
});

const david = new Instructor({
    name: 'David',
    location: 'USA',
    age: 25,
    favLanguage: 'JavaScript',
    specialty: 'Teach',
    catchPhrase: `That's dope`
});

const shane = new Student({
    name: 'Shane',
    location: 'USA',
    age: 34,
    previousBackground: 'pharmacy retail',
    className: 'WEB24',
    favSubjects: ['Flexbox', 'LESS', 'JavaScript', 'HTML'],
    favLanguage: 'HTML',
    specialty: 'Front-end',
    catchPhrase: `Are we done yet?`
});

const rachel = new Student({
    name: 'Rachel',
    location: 'USA',
    age: 23,
    previousBackground: 'pharmacy retail',
    className: 'WEB2000',
    favSubjects: ['HTML', 'CSS', 'JavaScript'],
    favLanguage: 'CSS',
    specialty: 'Front-end',
    catchPhrase: `You're Stupid`
});

const jaytee = new ProjectManager({
    name: 'Jaytee',
    location: 'USA',
    age: 'n/a',
    previousBackground: 'skateboarding',
    className: 'TL-WEB24',
    favSubjects: 'JavaScript',
    favLanguage: 'Python',
    favInstructor: 'Brittany',
    gradClassName:  'WEB20',
    specialty: 'Back-end',
    catchPhrase: `Let's scope it out?`
});

const bret = new ProjectManager({
    name: 'Bret',
    location: 'Canada',
    age: 'old',
    previousBackground: 'wrestling',
    className: 'WWE',
    favSubjects: 'Submission',
    favLanguage: 'English',
    favInstructor: 'Stu Hart',
    gradClassName:  'Hall Of Fame',
    specialty: 'Sharpshooter',
    catchPhrase: `I'm The Best There is, The Best There Was & The Best There Will Ever Be`
});

console.log(rachel);

console.log(david.speak());

console.log(fred.demo("LESS"));
console.log(bret.grade(shane, "Python"));


console.log(rachel.listsSubjects());
console.log(shane.PRAssignment("Responsive Design"));
console.log(rachel.sprintChallenge("JavaScript"));

console.log(jaytee.standup("WEB24"));
console.log(bret.debugsCode(shane, "Python"));
