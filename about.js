console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert("Form Successfully Submitted");
}


let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);


let comp = () => {
	alert("It's staring at an amazing person")
}

document.querySelector('img').addEventListener('mouseover',comp )