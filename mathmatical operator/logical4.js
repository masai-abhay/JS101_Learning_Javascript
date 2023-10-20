//Problem 4: Given 3 numbers (all different values), print which is greatest//

let a= 30
let b = 40
let c = 50

/*if(a > b && a > c)
{
  console.log("a big")
}
else if(b > a && b > c)
{
  console.log("b big")
}
else if(c > a && c > b)
{
  console.log("c greatest")
  }*/

console.log(a > b && a > c ? "a" : b > a && b > c ? "b" : "c")
