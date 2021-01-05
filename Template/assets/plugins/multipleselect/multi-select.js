(function($) {
	"use strict";
	//basic
	$('.multi-select').multipleSelect();

	//optiongroup
	$('.optmulti-select').multipleSelect({
		multiple: true,
		multipleWidth: 55,
		width: '100%'
	});

	//Multiple Items
	$('.multiselect').multipleSelect({
		width: 460,
		multiple: true,
		multipleWidth: 55
	});

	//hide selectall
	$('.hide-select').multipleSelect({
		selectAll: false
	});

	//Single Row
	$('.single-select').multipleSelect({
		single: true
	});

	//filter-multiple
	$('.filter-multi').multipleSelect({
		filter: true
	})

	//group-filter
	$('.group-filter').multipleSelect({
		filter: true,
		multiple: true
	});

	//custom
	$('.custom-multiselect').multipleSelect({
		styler: function(value) {
			if (value == '1') {
				return 'background-color: #1753fc; color: #ffffff;';
			}
			if (value == '6') {
				return 'background-color: #32cafe; color: #ffffff;';
			}
			if (value == '10') {
				return 'background-color: #ff7088; color: #ffffff;';
			}
		}
	});

})(jQuery);
