function isValid(value){
  
  const regexMatch = value.match(/[0-1]/g);
  return regexMatch && regexMatch.length == value.length;  
}

function handleChange(value){
  //setting output to null
  document.getElementById("output").innerHTML = "";
  // validate
  if(!isValid(value)){
    // show label
    document.getElementById("danger").removeAttribute("hidden");
    return;
  }
  // value = parseInt(value)
  // hide label
  document.getElementById("danger").setAttribute("hidden", true);
  // get binary to decimal call

  // show decimal value to UI - H3
  document.getElementById("output").innerHTML = b2d(value);
}