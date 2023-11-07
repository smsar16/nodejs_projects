import inquirer from "inquirer"

class Student {
    name:string
    constructor(n:string){
        this.name=n
    }
}

class Person{
    students:Student[]=[]

    addStudent(obj:any){
        this.students.push(obj)
    }
}

const persons = new Person()


const programStart = async (persons:Person)=>{
    do{console.log("Welcome Guest");

    const ans = await inquirer.prompt({
        type:"list",
        message:" Whom do you wish to consult with? ",
        name:"select",
        choices:["self","student"]
    });
    if(ans.select =="self"){
        console.log("Hello! Talk to yourself please!");
        
    }    

    if(ans.select =="student"){
        // console.log("Hello! Which student do you wish to consult with?");
        const ans = await inquirer.prompt({
            type:"input",
            message:"Which student do you wish to consult with? ",
            name:"student"
        });

        const student = persons.students.find(val => val.name == ans.student)

        if(!student){
            const name = new Student(ans.student)
            persons.addStudent(name)

            console.log(`Hello! I am ${name.name}, I am doing well. `);
            console.log(persons.students);
            }
            if(student){
                console.log(`Hello! I am ${student.name}, did you wish to see me? `);
                
            }
    }} 
    while(true)
    

};

programStart(persons)