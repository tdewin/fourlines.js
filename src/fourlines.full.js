/*
  Collection of functions that you keep on googling for. Should be maximum 4 lines of code per function, ... maybe, ... hopefully
*/
var tests = []

//check if objects are truely equal
function equalCheck(objectA,objectB) {
    return JSON.stringify(objectA) === JSON.stringify(objectB);
}

tests.push(function test_equalcheck(inject) {
	 return equalCheck(([0,1,2]),([0,1,2]));
})

//create an array of numbers with steps in between
function arrayXToY(start,stop,step) {
  let returnArray = [];
	for(;start<stop;start+=step) { returnArray.push(start) };
  return returnArray;
}

tests.push(function test_arrayXToY(inject) {
	return equalCheck(arrayXToY(0,20,3),([0, 3, 6, 9, 12, 15, 18]));
})


//Auto testing
tests.forEach(f => {
	let result = f();
  console.log(`Test Name: ${f.name}  Passed : ${result?"Yes":"No"}`)
})
