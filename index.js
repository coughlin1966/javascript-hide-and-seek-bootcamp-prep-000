function getFirstSelector(selector) {
  var firstselector = document.querySelector(selector);
  return firstselector;
}

function nestedTarget() {
var nestedElement = document.getElementById('nested').querySelectorAll('div.target');
return nested;
}

function increaseRankBy(n) {
  var upRank = document.getElementById('app').querySelectorAll('ul.ranked-list li');
  for (let i = 0; i < upRank.length; i++) {
  upRank[i].innerHTML = parseInt(upRank[i].innerHTML) + n
  }
}

/*
function deepestChild() {
  const criteriaFn = 'boo'
  let array = document.getElementById('app').querySelectorAll('#grand-node')
  let current = array
  let next = []
  while (current) {
    if (current = criteriaFn) {
      return current
    }
    if (array.isArray(current)) {
      for (let i = 0; i < current.length; i++) {
        next.push(current[i])
  }
}
current = next.shift()
  }
  return null
}

function deepestChild() {
  //var grandNode = document.getElementById('app').querySelectorAll('div#grand-node')
  var grandNode = document.querySelector('#grand-node');
  var deepestNode = grandNode.children[0];
  for (var i = 0; !deepestNode.children[i]; i++) {
    deepestNode = deepestNode.children[i]
  }
  return deepestNode.innerHTML;
}
*/

function deepestChild() {
  let grand = document.querySelectorAll('div#grand-node')
  let next = grand.children[0]

  while (next) {
    grand = next
    next = grand.children[0]
  }
return grand
}
