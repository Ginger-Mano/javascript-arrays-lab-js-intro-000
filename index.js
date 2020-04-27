var kittens = ["Milo", "Otis", "Garfield"] //define your array here

function destructivelyAppendKitten() {
  kittens.push("Ralph");
  return kittens
}// Add your functions and code here

function destructivelyPrependKitten() {
  kittens.unshift("Bob");
  return kittens
}

function destructivelyRemoveLastKitten() {
  kittens.pop()
  return kittens
}

function destructivelyRemoveFirstKitten() {
  kittens.shift()
  return kittens
}

function appendKitten() {
  kittens.concat("Broom");
  return kittens.concat
}
