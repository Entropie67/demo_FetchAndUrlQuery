

let parms = location.search.substring(1).split("&");
let temp = parms[0].split("=");  // Les autres varaibles se trouvent éventuellement en params[i]
let variable = decodeURI(temp[0]);
let value = decodeURI(temp[1]);
console.log(temp);
console.log(variable + " = " + value);