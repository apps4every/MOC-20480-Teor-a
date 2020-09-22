function init()
{

}
const personList =
    [
        {
            name:   "Adam adam",
            age: 22,
            email:  "adam@example.com"
        },
        {
            name: "eve perkins",
            age: 18,
            email: "eve@example.com"
        },
        {
            name: "melvin wood",
            age: 20,
            email: "melvin@example.com"
        },
        {
            name: "signe lorenzo",
            age: 19,
            email: "signe@example.com"
        },
        {
            name: "william rasmussen",
            age: 25,
            email: "william@example.com"
        }
    ]
const age = 20;

function getPersonsAboveAge(array, age)
{
    const personAboveAge = [];
    for (let person of array)
    {
        if (person.age >= age)
        {
            personAboveAge.push(person);
        }
    }
    return personAboveAge;
}

function printArray(array)
{
    for (var i = 0; i < array.length; i++) {
        console.log(`${array[i].name} (${array[i].age}) ${array[i].email}`);
    }
}

console.log("Lista completa de personas:");
console.log("----------------------------------------------");
printArray(personList);
console.log("==============================================");
const personAboveAge = getPersonsAboveAge(personList, age);
console.log("Lista de personas con edad mínima de " + age + " años:");
console.log("----------------------------------------------");
printArray(personAboveAge);