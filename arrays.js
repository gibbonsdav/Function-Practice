// ---------------------------
// The Arrays You Will Work With
// ---------------------------
var numbers = [1, 12, 4, 18, 9, 7, 11, 3, 101, 5, 6]
var strings = ["this", "is", "a", "collection", "of", "words"]
var instructors = [
  { firstname: "JD", teaches: "JavaScript" },
  { firstname: "Tim", teaches: "JavaScript" },
  { firstname: "Brit", teaches: "Ruby" },
  { firstname: "Joe", teaches: "iOS" },
  { firstname: "Jake", teaches: "JavaScript" },
  { firstname: "Will", teaches: "JavaScript" },
  { firstname: "Calvin", teaches: "JavaScript" },
  { firstname: "James", teaches: "Ruby" }
]

// ---------------------------
// 1. Find largest number
// ---------------------------
console.log(Math.max.apply(null, numbers))

// ---------------------------
// 2. Find longest string
// ---------------------------
let longest = strings.reduce(function(a, b) {
  return a.length > b.length ? a : b
}, "")
console.log(longest)
// ---------------------------
// 3. Find even numbers
// ---------------------------

function even(inputArray) {
  let arr = []
  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i] % 2 === 0) {
      arr.push(inputArray[i])
    }
  }
  return arr
}
console.log(even(numbers))

// ---------------------------
// 4. Find odd numbers
// ---------------------------

// ---------------------------
// 5. Find words that contain `is`
// ---------------------------

// ---------------------------
// 5. Join Both Arrays Together
// ---------------------------

// ---------------------------
// 6. Use the Instructors array and find all that teach JavaScript,
//    then sort them alphabetically
// ---------------------------
