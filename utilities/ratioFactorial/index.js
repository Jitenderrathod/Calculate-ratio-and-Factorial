const ratioNo = require("../ratio/index");
const factorialNo = require("../factorial/index");

const ratioAndFactorial = (n1, n2, n3) => {
  const ratio = ratioNo(n1, n2);
  const factorial = factorialNo(n3);

  return { ratio, factorial };
};

module.exports = ratioAndFactorial;

console.log(ratioAndFactorial);
