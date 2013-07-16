var API_URL = 'http://localhost:3008/';
var facts   = null;
var cursor  = 0;

var refreshFacts = function refreshFacts(limit){

  var limitFacts = limit || 10;

  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function onreadystatechange() {

    if (this.readyState === 4) {
      
      facts = JSON.parse(this.responseText).data;
      changeFact();
    }
  };

  xhr.open('GET', API_URL);
  xhr.send();
};


var changeFact = function changeFact() {
  if(!facts)
    return;

  document.getElementById('loader').style.display   = 'block';
  document.getElementById('content').style.display  = 'none';
  document.getElementById('currentFact').src        = facts[cursor].picture;

  console.log(cursor);
  cursor++;

  if(cursor >= facts.length)
    cursor = 0;
};

var loader = function loader() {
  document.getElementById('loader').style.display   = 'none';
  document.getElementById('content').style.display  = 'block';
};

refreshFacts();

document.getElementById('currentFact').addEventListener('click', changeFact);
document.getElementById('currentFact').addEventListener('load', loader);