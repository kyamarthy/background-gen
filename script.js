

class Person {
	constructor(name = 'Anonymous', age=0){
		this.name = name;
		this.age = age;
	}
	getGretting(){
		return `Hi. I am ${this.name}!`;
	}
	getDescription(){
		return `I am ${this.name} and I am ${this.age} old.`;
	}
}


class Student extends Person {
	constructor(name, age, major){
		super(name, age);
		this.major = major;
	}

	hasMajor() {
		return !!this.major;
	}
	getDescription(){
		let desc = super.getDescription();

		if( this.hasMajor()){
			desc += ` His major is ${this.major}`
		}
		return desc;
	}
}


class Traveler extends Person {
	constructor(name, age, home){
		super(name,age);
		this.home = home;
	}

	getDescription() {
		let desc = super.getDescription();
		if( !!this.home ){
			desc += ` I am visiting from ${this.home}.`
		}
		return desc;
	}

}
const me = new Traveler('Krishna Yamarthy', 29, "India");
console.log(me.getDescription());

