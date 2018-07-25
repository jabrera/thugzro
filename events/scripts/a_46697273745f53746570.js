<!--

var password;
var pass1="914627";
var nextSite="5365636f6e645f53746570.htm";

function next_stage() {
	password=prompt('Enter the password to view this page.','Enter Password');
	if (password==pass1) {
		window.location=nextSite;
		alert('Password Correct! Please wait');
	} else {
		alert('Incorrect password! Please try again!');
    }
}

//-->