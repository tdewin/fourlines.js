/*
  Collection of functions that you keep on googling for. Should be maximum 4 lines of code per function, ... maybe, ... hopefully

  Should be easy to copy paste if you don't need the full code

  Idea is to bundle and remove anything between //rm && //srm
*/

//rm
var tests = []
//srm


//check if objects are truely equal
function equalCheck(objectA,objectB) {
    return JSON.stringify(objectA) === JSON.stringify(objectB);
}

//rm
tests.push(function test_equalcheck(inject) {
	 return equalCheck(([0,1,2]),([0,1,2]));
})
//srm

//create an array of numbers with steps in between
function arrayXToY(start,stop,step) {
  let returnArray = [];
	for(;start<stop;start+=step) { returnArray.push(start) };
  return returnArray;
}

//rm
tests.push(function test_arrayXToY(inject) {
	return equalCheck(arrayXToY(0,20,3),([0, 3, 6, 9, 12, 15, 18]));
})
//srm


//Time Functions
//Make sure to copy constant functions
const secondsToMS = t => t*1000 
const minutesToMS = t => t*60000
const hoursToMS = t => t*3600000
const daysToMS = t => t*86400000
const addTime = (date,milliseconds) =>  new Date(date.getTime()+(milliseconds))

//test edit 

//add <hours> to a date object
function addSeconds(date,seconds) {
  return addTime(date,secondsToMS(seconds))
}

//rm
//validates both addHours as well as minifunction hoursToMS
tests.push(function test_addSeconds(inject) {
	let date =  addSeconds(new Date(0),1)
  return date.toString() === (new Date(1000)).toString()
})
//srm

//add <hours> to a date object
function addMinutes(date,minutes) {
  return addTime(date,minutesToMS(minutes))
}

//rm
//validates both addHours as well as minifunction hoursToMS
tests.push(function test_addMinutes(inject) {
	let date =  addMinutes(new Date(0),1)
  return date.toString() === (new Date(60*1000)).toString()
})
//srm

//add <hours> to a date object
function addHours(date,hours) {
  return addTime(date,hoursToMS(hours))
}

//rm
//validates both addHours as well as minifunction hoursToMS
tests.push(function test_addHours(inject) {
	let date =  addHours(new Date(0),1)
  return date.toString() === (new Date(3600*1000)).toString()
})
//srm

//add <days> to a date object
function addDays(date,days) {
  return addTime(date,daysToMS(days))
}

//rm
tests.push(function test_addDays(inject) {
	let date =  addDays(new Date(0),1)
  return date.toString() === (new Date(3600*24*1000)).toString()
})
//srm


//rm
//Auto testing
//Inject doesn't have a function yet but who knows
allpassed = true
tests.forEach(f => {
	let inject = {}
	let result = f(inject);
  console.log(`Test Name: ${f.name}  Passed : ${result?"Yes":"No"}`)
  allpassed = allpassed && result
})
process.exit(allpassed?0:1)
//srm
