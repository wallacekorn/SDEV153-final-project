function phoneCheck(myPhone) {
	var regExp = /^[1-9]{1}[0-9]{2}[-][1-9]{1}[0-9]{2}[-][0-9]{4}$/;
	var phoneNumber = document.forms["myForm"].myPhone.value
	if (phoneNumber.match(regExp)) { return true;}
	else {
	alert("Invalid phone number. Use the format: 000-000-0000");
	return false;}
}