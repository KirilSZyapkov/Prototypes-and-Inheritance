function Person(firsName, lastName){
    this.firstName = firsName;
    this.lastName = lastName;
    Object.defineProperty(this,'fullName',{
        get: function (){
            return `${this.firstName} ${this.lastName}`
        },
        set: function (value) {
            [this.firstName, this.lastName] = value.split(` `);
        },
    })
}

const myPerson = new Person('ivan', 'vazov');
console.log(myPerson.fullName);
console.log(myPerson.firstName);
myPerson.fullName = 'vanko edno';
console.log(myPerson.fullName);