const btn = document.getElementById('btn');
const container = document.getElementById('container');

function pressed (){
	createNotification();
}


function createNotification()
{
	const notif = document.createElement('div');
	notif.classList.add('toast');

	notif.innerText = "This challenge is fun";
	container.appendChild(notif);

	setTimeout(() => { 
		notif.remove(); 
	}, 5000); 
}
