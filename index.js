function receivesAFunction(callBack) {
  callBack()
}

function returnsANamedFunction() {
  return function namedAFunction() {

  }
}
const returnsAnAnonymousFunction = (function() {
  return function() {

  }
})
