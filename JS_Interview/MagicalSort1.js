// The Magical Sorting Hat: Imagine you are creating a magical sorting hat for a wizard school. Implement a JavaScript function that takes an array of student names and assigns them to one of the four houses (Gryffindor (length less than 6), Hufflepuff(length less than 8), Ravenclaw(length less than 12), or Slytherin(length greater than or equal to 12)) based on the length of their names.
let names = ['dev','abhinav','mayank','yash','bhupendrajogi','narendra','jawaharlalnehru','santa','ekbhtlambanaamhumain'];

function MagicalSort(students) {
    let sorted_names = []; 
    for (const name of students) {
    if (name.length < 6){
        sorted_names.push("Gryffindor"); 
    } 
    else if(name.length < 8){
        sorted_names.push("Hufflepuff");
    }
    else if(name.length < 12){
        sorted_names.push("Ravenclaw");
    }
    else{
        sorted_names.push("Slytherin");
    }
    }
    return sorted_names;
}
let result = MagicalSort(names);
console.log(result);

// console.log(MagicalSort(names));
