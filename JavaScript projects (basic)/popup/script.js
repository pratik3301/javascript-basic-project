const open = document.getElementById('open');
const close = document.getElementById('close');
const container = document.getElementById('container');


function pressedOpen(){
	container.classList.add('active');

};

function pressedClose(){
	container.classList.remove('active');

};