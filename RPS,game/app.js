function getComputerInput(max) {
  let computerInput = Math.floor(Math.random() * max);
  if (computerInput === 0) return "rock";
  else if (computerInput === 1) return "paper";
  else return "scissor";
}

let computerData = getComputerInput(3);

function getHumanInput(humanData) {
  humanData = humanData.toLowerCase();
  if (humanData === computerData) return "It's a tie";
  else if (
    (humanData === "rock" && computerData === "scissor") ||
    (humanData === "scissor" && computerData === "paper") ||
    (humanData === "paper" && computerData === "rock")
  )
    return "You Win!";
  else return "You Lose!";
}

let form = document.getElementById("form");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  let formData = new FormData(e.target);
  // console.log(formData)
  let dataObj = Object.fromEntries(formData.entries());
  // console.log(formData.entries())
  // console.log(dataObj);
  let humanData = dataObj.value;
  // console.log(data);
 
 

  let result = getHumanInput(humanData);
   const out = `

    <p>User choice is ${humanData}</p>
    <p>Computer is ${computerData}</p>


    <h3>${result}</h3>

`;
 document.getElementById("display").innerHTML = out;
});
