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

//minihumanreadable
const decimalCutOff = (number,maxdec=2) => parseInt(number*Math.pow(10, maxdec))*1.0/Math.pow(10, maxdec)

function humanReadable(number,options={maxint:10000,maxdec:2,root:1000}) {
  const suffix= ["","K", "M", "G", "T", "P", "E", "Z", "Y", "R", "Q"]
  let start=0
  for(;number>options.maxint && start < suffix.length;number/=options.root) { start++ }
  return `${decimalCutOff(number,options.maxdec)} ${suffix[start]}`.trim()
}

//rm
tests.push(function test_humanReadable(inject) {
	return humanReadable(935) === "935" && humanReadable(5935) === "5935" && humanReadable(75935) === "75.93 K" && humanReadable(231313231) == "231.31 M"
})
//srm



//text manipulation
function leadingZero(number,fix) {
  let i = (""+parseInt(number))
  let df = fix-i.length
  if (df > 0)  { while(df--) {i="0"+i} }
  return i
}

//rm
tests.push(function leadingZero(inject) {
  	return leadingZero(9,3) == "009" && leadingZero(99,3) == "099" && leadingZero(999,3) == "999" && leadingZero(9999,3) == "9999"
})
//srm

function leadinZero2Digit(number) {
	return (parseInt(number)<10)?"0"+number:""+number
}

//rm
tests.push(function leadinZero2Digit(inject) {
  	return leadinZero2Digit(9) == "09" && leadinZero2Digit(99) == "99" && leadinZero2Digit(999) == "999"
})
//srm

function xlsCopy(tabbedText) { 
	return tabbedText.trim().split("\n").map( (l) => l.split("\t")) 
}

//rm
tests.push(function test_xlsCopy(inject) {
	let test = xlsCopy(`row 1 cell 1	row 1 cell 2
row 2 cell 1	row 2 cell 2
`)
	let compare = [
  [ 'row 1 cell 1', 'row 1 cell 2' ],
  [ 'row 2 cell 1', 'row 2 cell 2' ]
]
  	return equalCheck(test,compare)
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
