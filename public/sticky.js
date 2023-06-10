window.onscroll = function () {
	applySticky();
};

function applySticky() {
	var navbar = document.getElementById('navbar');
	if (!navbar) {
		return;
	}
	var sticky = navbar.offsetTop;
	if (window.scrollY >= sticky) {
		navbar.classList.add('sticky');
	} else {
		navbar.classList.remove('sticky');
	}
}
