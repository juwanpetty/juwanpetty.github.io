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
   		to: 300,
		direct: true,
		props: {
			'--translateY': {
				from: '0',
				to: 10 * modifier + 'px'
			}
		}
	}).start();
});