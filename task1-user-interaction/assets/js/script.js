setTimeout(function(){ 
	renderUserInfo(getUserInfo());
 }, 2000);

function getUserInfo() {
		const userdata = [];
		username = prompt('What is your name?', 'Name');
		if (!username) {
			userdata.push('Name is not entered');
		} else {
			userdata.push(username);
		}
		birthdate = prompt('What is your birth date', '01.01.2000');
		if (!birthdate) {
			userdata.push('Birth date is not entered');
		} else {
			userdata.push(birthdate);
		}
		address = prompt('Where do you live?', 'Kiev');
		if(!address) {
			userdata.push('Address is not entered');
		} else {
			userdata.push(address);
		}
		return userdata; 
}
		
function renderUserInfo(userdata) {
	const h1 = document.createElement('h1');
	h1.innerHTML = 'User Data';
	document.body.appendChild(h1);

	const divUsername = document.createElement('div');
	divUsername.className = 'name';
	divUsername.innerHTML = 'User Name: ' + userdata.shift();
	document.body.appendChild(divUsername);

	const divBirthdate = document.createElement('div');
	divBirthdate.className = 'birthdate';
	divBirthdate.innerHTML = 'Birth Date: ' + userdata.shift();
	document.body.appendChild(divBirthdate);

	const divAddress = document.createElement('div');
	divAddress.className = 'address';
	divAddress.innerHTML = 'Address: ' + userdata.shift();
	document.body.appendChild(divAddress);

}