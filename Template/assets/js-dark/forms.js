/*selectize*/
require(['jquery', 'selectize'], function ($, selectize) {
	$(document).on("ready", function (e) {
		$('#input-tags').selectize({
			delimiter: ',',
			persist: false,
			create: function (input) {
				return {
				value: input,
				text: input
				}
			}
		});

		$('#select-beast').selectize({});

		$('#select-users').selectize({
			render: {
				option: function (data, escape) {
					return '<div>' +
					'<span class="image"><img src="' + data.image + '" alt=""></span>' +
					'<span class="title">' + escape(data.text) + '</span>' +
					'</div>';
				},
				item: function (data, escape) {
					return '<div>' +
					'<span class="image"><img src="' + data.image + '" alt=""></span>' +
					escape(data.text) +
					'</div>';
				}
			}
		});

		$('#select-countries').selectize({
			render: {
				option: function (data, escape) {
					return '<div>' +
					'<span class="image"><img src="' + data.image + '" alt=""></span>' +
					'<span class="title">' + escape(data.text) + '</span>' +
					'</div>';
				},
				item: function (data, escape) {
					return '<div>' +
					'<span class="image"><img src="' + data.image + '" alt=""></span>' +
					escape(data.text) +
					'</div>';
				}
			}
		});
	});
});

/*input-mask*/
require(['input-mask']);




 