console.log("Hello World!");
// alert("CHECK")

// String Concat
var myName = "Kishore"
alert(" Hello there, " + myName ) 

// Tweet challenge
var message = prompt("Your message below :");
alert("You have entered " + message.length + " characters, you are left with" + (140 - message.length));

// Slice
var message = prompt("Your message below :");
var message140 = message.slice(0, 140);
alert(message140);

// Upper and lower
var name = prompt("Your name please!");
alert(name.slice(0,1).toLocaleUpperCase() + name.slice(1, name.length).toLocaleLowerCase());

// Dog's age to Human age
var dogAge = prompt("What's your dog's age?");
var humanAge = ((dogAge - 2) * 4) + 12;
alert(humanAge);