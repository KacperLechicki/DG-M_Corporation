const navMobile = document.querySelector('.nav-mobile');
const navBtn = document.querySelector('.hamburger');
const footerYear = document.querySelector('.footer__year');
const body = document.querySelector('body');
const allNavItems = document.querySelectorAll('#mobile-link');

const handleNav = () => {
	navBtn.classList.toggle('is-active');
	navMobile.classList.toggle('nav-mobile--active');
	body.classList.toggle('ohidden');
};

allNavItems.forEach((item) => {
	item.addEventListener('click', () => {
		navMobile.classList.remove('nav-mobile--active');
		navBtn.classList.toggle('is-active');
		body.classList.toggle('ohidden');
	});
});

navBtn.addEventListener('click', handleNav);

const handleCurrentYear = () => {
	const year = new Date().getFullYear;
	footerYear.innerText = year;
};

handleCurrentYear();
