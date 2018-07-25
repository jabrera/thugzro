<!--

var password;
var pass1="914627";
var next_site="466f757274685f53746570.htm";

function next_stage() {
	password=prompt('Enter the password to view this page.','Enter Password');
	if (password==pass1) {
		window.location=next_site;
		alert('Password Correct! Please wait');
	} else {
		alert('Incorrect password! Please try again!');
    }
}

//-->