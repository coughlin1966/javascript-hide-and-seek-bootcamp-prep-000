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

function deepestChild() {
  let grand = document.querySelector('div#grand-node');
  let next = grand.children[0];

  while (next) {
    grand = next;
    next = grand.children[0];
  }
return grand;
}
