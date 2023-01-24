function duplicateCount(text){
  //...
const arr = Array.from(text);
let count2 = 0

for (let x in arr) {
 const findDuplicates = arr => arr.filter((item, index) => arr.indexOf(item) !== index)
const duplicates = findDuplicates(arr);
  count2 = duplicates.length

  }
console.log(count2); 

}

duplicateCount("aabcd")