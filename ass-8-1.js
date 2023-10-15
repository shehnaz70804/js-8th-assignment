import emp from './ass-8-2.js';

console.log(emp)

//1. Find the names(array of names) of employees of Hyderabad

let outputName=[]
emp.forEach(emp => {
    if(emp.address.city==="hyderabad"){
        outputName.push(emp.name);
    }
});

console.log('The employees of Hyderabad:',outputName)

//2. Find the name and address of employees whose age between 40 and 50

let output1=[]
emp.forEach(emp => {
    if(emp.age>=40 && emp.age<=50){
        output1.push([emp.name,emp.age]);
    }
});

console.log('Employees of age between 40 and 50:',output1);

//3. Find the employees who are not from Hyderabad

let notHyd=[]
emp.forEach(emp=>{
    if(emp.address.city!=='hyderabad'){
        notHyd.push(emp.name);
    }
});

console.log('Employees who are not from Hyderabad:',notHyd);

//4. Find the names (array of names) of employees whose skill is "reactjs"

let skillReact=[]
emp.forEach(emp=>{
    if((emp.skills.findIndex(ele=>ele==="reactjs"))!==-1){
        skillReact.push(emp.name);
    }
});

console.log('Employees whose skill is "reactjs":',skillReact);