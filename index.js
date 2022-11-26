function scuberGreetingForFeet(someValue){
  if (someNumber <= 400 ) {
    return "This one is on me!"; 
} else if (someNumber > 2000 && someNumber <= 2500) {
  return "I will gladly take your thirty bucks.";
} else if (someNumber > 2500) {
  return "No can do.";
} else {
  return "No ride available";
}
}

function ternaryCheckCity(){
  if (city === "NYC"){
    return "Ok, sounds good."
   }
   else{
    return "No go.";
   }
  }

function switchOnCharmFromTip(){
  if (tip === "generous"){
    return "Thank you so much."
  }else if (tip === "not as generous"){
    return "Thank you."
  }else {
    return "Bye."
  }
}
