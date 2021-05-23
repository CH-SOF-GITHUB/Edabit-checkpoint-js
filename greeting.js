function greeting(name) {
  switch(name){
    
    case "Randy":
      console.log("Hi! I'm Randy, and I'm from Germany.")
      break;
    case "Karla":
      console.log("Hi! I'm Karla, and I'm from France.")
      break;
    case "Wendy":
      console.log("Hi! I'm Wendy, and I'm from Japan.")
      break;
    case "Norman":
      console.log("Hi! I'm Norman, and I'm from England.")
      break;
    case "Sam":
      console.log("Hi! I'm Sam, and I'm from Argentina.")
      break;
    default:
      console.log("Hi! I'm a guest.");
  }
}

greeting("Wendy") // "Hi! I'm Randy, and I'm from Germany."
greeting("Sam")   // "Hi! I'm Sam, and I'm from Argentina."
greeting("Monti") // "Hi! I'm a guest."
greeting("Trudy") //"Hi! I'm a guest."
greeting("Wendy") // "Hi! I'm Wendy, and I'm from Japan."