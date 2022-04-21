//let radius = Number(prompt("Your radius is: "))

let radius = 3
const p = Math.PI;

module.exports.circumference = () => 2 * p * radius;
module.exports.area = () => p * radius ** 2;