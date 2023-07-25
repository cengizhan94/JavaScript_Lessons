const name = "Cengiz Han Uyar"
const department = "Computer Science"
const salary = "14.500 TL"

//Older
/* const a = "Name: "+ name + "\n" + "Department: "+ department + "\n"+ "Salary: " + salary + "\n";
console.log(a) */

//New
 /* const a = `Name: ${name}\nDepartment: ${department}\nSalary: ${salary}.`
console.log(a)  */

function a() {
    return "Merhaba";
}

const html = `
        <ul>
            <li>${name}</li>
            <li>${department}</li>
            <li>${salary}</li>
            <li>${10/4}</li>
            <li> ${a()}</li>

        </ul>
`;

document.body.innerHTML = html;

