// var instructors = ["Will", "Scott", "Hannah", "Casey"];
//     console.log(instructors);
//     console.log(instructors.length);
// instructors.pop()
// console.log(instructors);

// var ironman = { name: "Tony Stark", secretIdentity: false };
// var captainAmerica = { name: "Steve Rodgers", secretIdentity: false};
// var spiderman = { name: "Peter Parker", secretIdentity: true};
// function greetAvenger(hero) {
//     if (hero === ironman) {
//         console.log (`Hello, ${hero.name}.`);
//     }   else if (hero === captainAmerica) {
//         console.log (`Hello, ${hero.name}`);
//     }   else  { 
//         console.log (`I don't know who you are!`); 
//     }   
// }
    
// greetAvenger(spiderman) 
// greetAvenger(captainAmerica)
// greetAvenger(ironman)


var melissa= {
    name: "Melissa",
    program: "Front End",
    module: 1,
    alum: false
  }
  function studentUpdate(student) {
    return `${student.name} is one of our awesome ${student.program} students, currently in module ${student.module}.`; 
  }
console.log(studentUpdate(melissa)); 

var allie = {
    name: "Allie",
    program: "Front End",
    module: 1,
    alum: false,
    projects: ["Dog Party", "Number Guesser", "Check Yo Self", "Mythical Creatures"],
};
 function studentLog(student){
    var statement = `${student.name} is an awesome ${student.program} student! They have build the following projects: `;

    for(var j = 0; j < allie.projects.length; j++) {
        if(j === allie.projects.length - 1) {
            statement += `and ${allie.projects[j]}.`;
        } else {
            statement += `${allie.projects[j]}, `;
        }
    }

    return statement;
}
    console.log(studentLog(allie));
    allie.projects.push("Yay")
    console.log(studentLog(allie))