/*
Brandon Takeshita
11/09/2026
SDEV 117
*/

//get access to our buttons and declare global variables
let index = 0;

const left = document.querySelector("#previous");
const right = document.querySelector("#next");

document.getElementById("size").textContent = data.length;

left.onclick = function(event) {
    //move down one index
    index--;

    //show the current record
    display();
}

right.onclick = function(event) {
    //move up one index
    index++;

    //show the current record
    display();
}

function display()
{
    //get the next record
    let record = data[index];

    //show the record on the page...
    document.getElementById("name").textContent = record.name;
    document.getElementById("year").textContent = record.year;
    document.getElementById("rank").textContent = record.rank;
    document.getElementById("wealth").textContent = "$" + record.wealth["worth in billions"] + " billion";
    document.getElementById("company").textContent = record.company.name;
    document.getElementById("age").textContent = record.demographics.age;

    let age = record.demographics.age;
    if(age > 0){
        document.getElementById("age").textContent = age;
    } else{
        document.getElementById("age").textContent = "Unknown";
    }
}

function facts()
{
    //fact 1 - richest person from the entire dataset
    let richest = data[0];

    for(let person of data){
        if(person.wealth["worth in billions"] > richest.wealth["worth in billions"]){
            richest = person;
        }
    }

    document.getElementById("fact1").textContent = "The richest person is " + richest.name + " in " + richest.year + " with a net worth of $" + richest.wealth["worth in billions"] + " billion!";

    //fact 2 - average net worth
    let total = 0;

    for(let person of data){
        total += person.wealth["worth in billions"];
    }

    let average = total / data.length;
    document.getElementById("fact2").textContent = "The average net worth is $" + average.toFixed(2) + " billion across " + data.length + " entries.";

    //fact 3 - number of women from the list
    let women = 0;

    for(let person of data){
        if(person.demographics.gender === "female"){
            women++;
        }
    }

    document.getElementById("fact3").textContent = "The number of billionaire women in this dataset is " + women + "!";

}

display();
facts();
