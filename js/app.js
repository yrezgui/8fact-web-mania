var API_URL = 'http://localhost:3008/';
var facts   = null;

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
  if(!facts) {
    document.getElementById('loader').style.display   = 'block';
    document.getElementById('content').style.display  = 'none';
    return;
  }

  document.getElementById('loader').style.display   = 'none';
  document.getElementById('content').style.display  = 'block';
  document.getElementById('currentFact').src        = facts[0].picture;
};

refreshFacts();
