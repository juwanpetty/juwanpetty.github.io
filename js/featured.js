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