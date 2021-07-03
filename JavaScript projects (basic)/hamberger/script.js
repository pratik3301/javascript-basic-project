
function pressed(){
	const btn = document.getElementById("btn");
	const nav = document.getElementById("nav");
	nav.classList.toggle("active");
	btn.classList.toggle("active");
}

// btn.addEventListner("click", ()=> {
// 	nav.classList.toggle("active");
// 	btn.classList.toggle("active");
// });