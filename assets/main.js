const navMenu = document.querySelector('.navMenu input');
const nav = document.querySelector('nav ul');

navMenu.addEventListener('click', function() {
	nav.classList.toggle('slide');
});