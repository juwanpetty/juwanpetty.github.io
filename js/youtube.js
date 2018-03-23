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