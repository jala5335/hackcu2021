function openModal() {
  /* Note that you do NOT have to do a document.getElementById anywhere in this exercise. Use the elements below */
  var myInput = document.getElementById("psw");
  var confirmMyInput = document.getElementById("cpsw");
	var letter = document.getElementById("letter");
	var capital = document.getElementById("capital");
	var number = document.getElementById("number");
	var length = document.getElementById("length");
  var match = document.getElementById("match");


	// When the user starts to type something inside the password field
	myInput.onkeyup = function() {
       console.log('helllooo')

        /* TODO: Question 1.1: Starts here */
        var lowerCaseLetters = /[a-z]/g; // : Fill in the regular experssion for lowerCaseLetters
        var upperCaseLetters = /[A-Z]/g; // : Fill in the regular experssion for upperCaseLetters
        var numbers = /[0-9]/g; // : Fill in the regular experssion for digits
        var minLength = 8; // : Change the minimum length to what what it needs to be in the question
        /* TODO: Question 1.1: Ends here */


        // Validate lowercase letters
        if(myInput.value.match(lowerCaseLetters)) {
            letter.classList.remove("invalid");
            letter.classList.add("valid");
        } else {
            letter.classList.remove("invalid");
            letter.classList.add("invalid");
        }

        // Validate capital letters
        if(myInput.value.match(upperCaseLetters)) {
            capital.classList.remove("invalid");
            capital.classList.add("valid");
        } else {
            capital.classList.remove("invalid");
            capital.classList.add("invalid");
        }

        // Validate numbers
        if(myInput.value.match(numbers)) {
            number.classList.remove("invalid");
            number.classList.add("valid");
        } else {
            number.classList.remove("invalid");
            number.classList.add("invalid");
        }

        // Validate length
        if(myInput.value.length >= minLength) {
            length.classList.remove("invalid");
            length.classList.add("valid");
        } else {
            length.classList.remove("invalid");
            length.classList.add("invalid");
        }
        /* TODO: Question 1.2:  Ends here */
    }
    /* TODO Question 1.3: Starts here */
    confirmMyInput.onkeyup = function() {
                // Validate password and confirmPassword
                var passEqualsConfPass = (myInput.value === confirmMyInput.value); // TODO: Change this to the condition that needs to be checked so that the text entered in password equals the text in confirm password
                if(passEqualsConfPass) {
                    match.classList.remove("invalid");
                    match.classList.add("valid");
                } else {
                    match.classList.remove("invalid");
                    match.classList.add("invalid");
                }
    /* TODO Question 1.3: Starts here */

                // Disable or Enable the button based on the elements in classList
                enableButton(letter, capital, number, length, match);
    }
}


function enableButton(letter, capital, number, length, match) {
    // TODO: Clear this function for students to implement
    var button = document.getElementById('my_submit_button');
    var condition = (match); // TODO: Replace false with the correct condition
    if(condition){
      button.disabled = false;
    }
    else{
      button.disabled = true;
    }
    }


function onClickFunction() {
    document.location = 'homepage.html'
}
