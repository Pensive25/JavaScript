// we need an input from the user
//we need to check if the numbers are divisible by 3 , by 5 and both 3 & 5
//if  i%3===0, print fizz
// if i%5===0, print buzz
// if i% 3 &5 , print fizzbuzz

let form = document.getElementById("my-form");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  let formData = new FormData(event.target);

  let dataObj = Object.fromEntries(formData.entries());

  let number = Number(dataObj.number);

  console.log(number);

  const results = [];

  for (i = 1; i <= number; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      results.push("fizzbuzz");
    } else if (i % 3 === 0) {
      results.push("fizz");
    } else if (i % 5 === 0) {
      results.push("buzz");
    } else {
      results.push(String(i));
    }
    console.log(results);
  }

  const out = `
        <p>FizzBuzz number are:<p>
        <p>${results.join(", ")}</p>
`;

  document.getElementById("out").innerHTML = out;
});
