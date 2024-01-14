console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('form submit successful');
}

function mouseOver() {
	alert(';D')
}

let form = document.querySelector('#contact');
let profilePic = document.querySelector('#paloma');

form.addEventListener('submit', handleSubmit);

profilePic.addEventListener('mouseover', mouseOver);
