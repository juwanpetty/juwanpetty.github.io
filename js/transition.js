// INTRO SECTION
document.querySelectorAll('.intro').forEach(function (elem) {

	var modifier = elem.getAttribute('data-modifier');

	basicScroll.create({
		elem: elem,
		from: 'bottom-bottom',
   		to: 'bottom-middle',
		direct: true,
		props: {
            '--opacity': {
                from: .99,
                to: .01
            }
        }
    }).start(); 
});

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
    imageListItem = document.querySelectorAll('.project-image'),
    openNav = new TimelineLite();
    closeNav = new TimelineLite();

menuIcon.addEventListener('click', function() {
    if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');
        
        openNav
            .to(menu, 0.3, {height: '100vh', ease:Power1.easeOut})
            .to(imageList, 0.3, {top: '15%', ease:Power2.easeOut}, '-=0.3');
    } else {
        menu.classList.add('hidden');
        closeNav
            .to(imageList, 0.5, {top: '100%', ease:Power2.easeOut})
            .to(imageListWrapper, 0.5, {y: 0, ease:Power2.easeOut}, '-=0.5')
            .to(menu, 0.3, {height: '0', ease:Power1.easeOut}, '-=0.5');
    }
});