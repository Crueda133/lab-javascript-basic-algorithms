// Iteration 1: Names and Input
// 1.1 Create a variable hacker1 with the driver's name.
// 1.2 Print "The driver's name is XXXX".
// 1.3 Create a variable hacker2 with the navigator's name.
// 1.4 Print "The navigator's name is YYYY".

let hacker1 = "Paul";
console.log(`The driver's name is ${hacker1}`);
let hacker2 = "Steve";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
// Iteration 2: Conditionals
// 2.1. Depending on which name is longer, print: - The driver has the longest name, it has XX characters. or - It seems that the navigator has the longest name, it has XX characters. - Wow, you both have equally long names, XX characters! • or

if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters.`,
  );
} else if (hacker1.length < hacker2.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`,
  );
} else {
  console.log(
    `Wow, you both have equally long names, ${hacker1.length} characters!`,
  );
}

// Iteration 3: Loops
// 3.1 Print the characters of the driver's name, separated by space, and in capital letters, i.e., (use .toUpperCase)
// 3.2 Print all the characters of the navigator's name in reverse order, i.e., "nhoJ"'! "JOHN".
// 3.3 Depending on the lexicographic order of the strings, print: • The driver's name goes first. • Yo, the navigator goes first, definitely. • What?! You both have the same name?

console.log(hacker1.toUpperCase().split("").join(" "));
console.log(hacker2.toUpperCase().split("").reverse().join(""));

if (hacker1 < hacker2) {
  console.log("The driver's name goes first.");
} else if (hacker1 > hacker2) {
  console.log("Yo, the navigator goes first, definitely.");
} else {
  console.log("What?! You both have the same name?");
}

//ask prof: Iteration 3: Loops : Why if we add the .reverse besides the hacker2 or at the end of the console.log it says that it isn't a function and give error?
