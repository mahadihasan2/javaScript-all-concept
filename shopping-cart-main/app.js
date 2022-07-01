// console.log("Click this website");

document.getElementById("case-pluse").addEventListener("click", function () {
  // console.log("case plus")

  const caseInput = document.getElementById("case-number");
  const caseNumber = caseInput.value;
  const caseValue = parseInt(caseNumber) + 1;
  caseInput.value = caseValue;
  // console.log(caseNumber);
})




