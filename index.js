// Code your solution in this file.
function lowerCaseDrivers(drivers) {
  const newDrivers = drivers.map(function (driv) {
    return driv.toLowerCase();
  })
  return newDrivers;
}

function nameToAttributes(drivers) {
  return drivers.map(function (driv) { return stringToObj(driv)})
}

function stringToObj(string) {
  let newObj = {};
  newObj.firstName = string.split(" ")[0]
  newObj.lastName = string.split(" ")[1]
  return newObj;
}

function attributesToPhrase(drivers) {
  return drivers.map(function (driv) { return nameToPhrase(driv) })
}

function nameToPhrase(attr) {
  return `${attr.name} is from ${attr.hometown}`
}
