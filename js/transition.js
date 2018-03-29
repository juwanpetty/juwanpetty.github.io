// FEATURED SECTION
document.querySelectorAll('.project-item-content').forEach(function (elem) {

	var modifier = elem.getAttribute('data-modifier');

	basicScroll.create({
		elem: elem,
		from: 'top-top',
   		to: 'bottom-bottom',
		direct: true,
		props: {
			'--translateY': {
				from: '0',
				to: 10 * modifier + 'px'
			}
		}
	}).start();
});

// YOUTUBE SECTION
document.querySelectorAll('.youtube').forEach(function (elem) {

	var modifier = elem.getAttribute('data-modifier');

	basicScroll.create({
		elem: elem,
		from: 'top-bottom',
   		to: 'middle-middle',
		direct: true,
		props: {
            '--opacity': {
                from: .01,
                to: .99
            }
        }
	}).start();
});

document.querySelectorAll('.youtube-wrapper .item').forEach(function (elem) {

	var modifier = elem.getAttribute('data-modifier');

	basicScroll.create({
		elem: elem,
		from: 'top-top',
   		to: 200,
		direct: true,
		props: {
			'--translateY': {
				from: '0',
				to: 10 * modifier + 'px'
			}
		}
	}).start();
});

// NAVIGATION SECTION
let menu = document.querySelector('.js-menu'),
    menuIcon = document.querySelector('.js-menu-icon'),
    imageList = document.querySelectorAll('.image-list'),
    imageListWrapper = document.querySelectorAll('.image-list-wrapper'),
    imageListItem = document.querySelectorAll('.project-image');
    // openNav = new TimelineLite();
	// closeNav = new TimelineLite();
	
	// CustomEase.create("custom", "M0,0 C1,0 0,1 1,1");

menuIcon.addEventListener('click', function() {
	if (menu.classList.contains('hidden') || menu.classList.contains('visible')) {
		if (menu.classList.contains('hidden')) {
			menu.classList.remove('hidden');
			menu.classList.add('visible');
		} else {
			menu.classList.remove('visible');
			menu.classList.add('hidden');
		}
	} else {
		// if neither is true
		menu.classList.add('visible');
	}
});