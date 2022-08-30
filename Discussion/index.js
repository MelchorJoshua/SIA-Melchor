let sample = '["pizza","hamburger","spaghetti","shanghai","hotdog","pancit bihon"]';

console.log(sample);

let parseSample = JSON.parse(sample)

parseSample.pop()
parseSample.push("ice cream")

jsonArr = JSON.stringify(parseSample)
console.log(jsonArr)