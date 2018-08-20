function getParam(name) {
   name        = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
   var regex   = new RegExp('[\\?&]' + name + '=([^&#]*)');
   var results = regex.exec(location.search);
   return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
};

var content = document.getElementById("mainContent");
var xhttp   = new XMLHttpRequest();

xhttp.onreadystatechange = function() {
	if (this.readyState == 4) {
	  if (this.status == 200) {content.innerHTML = this.responseText;}
	  if (this.status == 404) {content.innerHTML = "Page not found.";}
	}
}

function loadPage(url) {
	  xhttp.open("GET", url+"?"+new Date().getTime(), true);
	  xhttp.send();
}

function getParam(name) {
   name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
   var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
   var results = regex.exec(location.search);
   return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
};

var content = document.getElementById("mainContent");