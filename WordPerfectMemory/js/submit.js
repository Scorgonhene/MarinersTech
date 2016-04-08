(function(){ 
  var form = document.getElementById('login');       // Get form element
var elements = form.elements;                    // Get all form elements
    var elUsername = elements.username          // Select username entered
var elMain = document.getElementById('main');
  addEvent(form, 'submit', function(e) {             // When user submits form
    e.preventDefault();                              // Stop it being sent
    var msg      = 'Welcome ' + elUsername.value;            // Create welcome message
    document.getElementById('main').textContent = msg; // Write welcome message
elMain.textContent = msg;
  });
}());