function solve() {

    const TASKS = {
        JUNIOR: [' is working on simple task.'],
        SENIOR: [
            ` is working on a complicated task.`,
            ` is taking time off work.`,
            ` is supervising junior workers.`
        ],
        MANAGER: [
            ` scheduled a meeting.`,
            ` is preparing a quarterly report.`
        ]
    }

    class Employee {
        constructor(name, age, tasks) {

            this.name = name;
            this.age = age;
            this.salary = 0;
            this.tasks = tasks;
            this._index = 0;
        }

        work() {
            if (this._index === this.tasks.length) {
                this._index = 0;
            }
            console.log(this.name + this.tasks[this._index]);
            this._index++;
        };

        collectSalary() {
            console.log(`${this.name} received ${this.getSalary()} this month.`);
        };

        getSalary(){
            return this.salary;
        }

    }

    class Junior extends Employee {
        constructor(name, age) {
            super(name, age, TASKS.JUNIOR);

        }

    }

    class Senior extends Employee {
        constructor(name, age) {
            super(name, age, TASKS.SENIOR);

        }

    }

    class Manager extends Employee {
        constructor(name, age) {
            super(name, age, TASKS.MANAGER);
            this.dividend = 0;
        }


       getSalary(){
            return this.dividend + this.salary;
       }
    }

    return {Employee, Junior, Senior, Manager}
}

result = solve();

var guy1 = new result.Junior('pesho', 20);
var guy2 = new result.Senior('gosho', 21);
var guy3 = new result.Manager('ivan', 22);

console.log(guy1.hasOwnProperty('name'));
console.log(guy1.hasOwnProperty('age'));;
console.log(guy1.hasOwnProperty('salary'));
console.log(guy2.hasOwnProperty('name'));
console.log(guy2.hasOwnProperty('age'));
console.log(guy2.hasOwnProperty('salary'));
console.log(guy3.hasOwnProperty('name'));
console.log(guy3.hasOwnProperty('age'));
console.log(guy3.hasOwnProperty('salary'));
console.log(guy3.hasOwnProperty('dividend'));
