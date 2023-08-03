window.onscroll = function () {
	applySticky();
	disableParallax();
};

function applySticky() {
	var navbar = document.getElementById('navbar');
	if (!navbar) {
		return;
	}
	var sticky = navbar.clientHeight;
	if (window.scrollY >= sticky) {
		navbar.classList.add('sticky');
	} else {
		navbar.classList.remove('sticky');
	}
}

function disableParallax() {
	var header = document.getElementById('header');
	if (!header) {
		return;
	}
	var sticky = header.clientHeight;
	if (window.scrollY >= sticky) {
		document.body.style.backgroundColor = 'var(--black-color)';
		header.classList.add('disable');
	} else {
		document.body.style.backgroundColor = 'transparent';
		header.classList.remove('disable');
	}
}
