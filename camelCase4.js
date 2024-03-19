function processData(input) {
  let primaryValue = input[0];
  let secondValue = input[2];

  if (primaryValue === "S" && secondValue === "M") {
    let str2 = input.substring(0, input.length - 2);
    str2 = str2.substring(4);
    let modifiedString = "";
    for (let i = 0; i < str2.length; i++) {
      if (str2[i] === str2[i].toUpperCase()) {
        modifiedString += str2[i] = " " + str2[i].toLowerCase();
      } else {
        modifiedString += str2[i];
      }
    }
    console.log(modifiedString);
  }
}
processData("S;M;olaMundo()");
