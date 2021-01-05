jQuery(function(e){
	       'use strict';

	       // Initialize popover
	       $('[data-toggle="popover"]').popover();

	       $('[data-popover-color="head-primary"]').popover({
	         template: '<div class="popover popover-head-primary" role="tooltip"><div class="arrow"><\/div><h3 class="popover-header"><\/h3><div class="popover-body"><\/div><\/div>'
	       });

	       $('[data-popover-color="head-success"]').popover({
	         template: '<div class="popover popover-head-success" role="tooltip"><div class="arrow"><\/div><h3 class="popover-header"><\/h3><div class="popover-body"><\/div><\/div>'
	       });

	       $('[data-popover-color="head-warning"]').popover({
	         template: '<div class="popover popover-head-warning" role="tooltip"><div class="arrow"><\/div><h3 class="popover-header"><\/h3><div class="popover-body"><\/div><\/div>'
	       });

	       $('[data-popover-color="head-danger"]').popover({
	         template: '<div class="popover popover-head-danger" role="tooltip"><div class="arrow"><\/div><h3 class="popover-header"><\/h3><div class="popover-body"><\/div><\/div>'
	       });

	       $('[data-popover-color="head-info"]').popover({
	         template: '<div class="popover popover-head-info" role="tooltip"><div class="arrow"><\/div><h3 class="popover-header"><\/h3><div class="popover-body"><\/div><\/div>'
	       });

	       $('[data-popover-color="head-teal"]').popover({
	         template: '<div class="popover popover-head-teal" role="tooltip"><div class="arrow"><\/div><h3 class="popover-header"><\/h3><div class="popover-body"><\/div><\/div>'
	       });

	       $('[data-popover-color="head-indigo"]').popover({
	         template: '<div class="popover popover-head-indigo" role="tooltip"><div class="arrow"><\/div><h3 class="popover-header"><\/h3><div class="popover-body"><\/div><\/div>'
	       });

	       $('[data-popover-color="head-purple"]').popover({
	         template: '<div class="popover popover-head-purple" role="tooltip"><div class="arrow"><\/div><h3 class="popover-header"><\/h3><div class="popover-body"><\/div><\/div>'
	       });

	       $('[data-popover-color="head-pink"]').popover({
	         template: '<div class="popover popover-head-pink" role="tooltip"><div class="arrow"><\/div><h3 class="popover-header"><\/h3><div class="popover-body"><\/div><\/div>'
	       });

	       $('[data-popover-color="head-orange"]').popover({
	         template: '<div class="popover popover-head-orange" role="tooltip"><div class="arrow"><\/div><h3 class="popover-header"><\/h3><div class="popover-body"><\/div><\/div>'
	       });

	       $('[data-popover-color="head-dark"]').popover({
	         template: '<div class="popover popover-head-dark" role="tooltip"><div class="arrow"><\/div><h3 class="popover-header"><\/h3><div class="popover-body"><\/div><\/div>'
	       });

	       $('[data-popover-color="primary"]').popover({
	         template: '<div class="popover popover-primary" role="tooltip"><div class="arrow"><\/div><h3 class="popover-header"><\/h3><div class="popover-body"><\/div><\/div>'
	       });

	       $('[data-popover-color="success"]').popover({
	         template: '<div class="popover popover-success" role="tooltip"><div class="arrow"><\/div><h3 class="popover-header"><\/h3><div class="popover-body"><\/div><\/div>'
	       });

	       $('[data-popover-color="warning"]').popover({
	         template: '<div class="popover popover-warning" role="tooltip"><div class="arrow"><\/div><h3 class="popover-header"><\/h3><div class="popover-body"><\/div><\/div>'
	       });

	       $('[data-popover-color="danger"]').popover({
	         template: '<div class="popover popover-danger" role="tooltip"><div class="arrow"><\/div><h3 class="popover-header"><\/h3><div class="popover-body"><\/div><\/div>'
	       });

	       $('[data-popover-color="info"]').popover({
	         template: '<div class="popover popover-info" role="tooltip"><div class="arrow"><\/div><h3 class="popover-header"><\/h3><div class="popover-body"><\/div><\/div>'
	       });

	       $('[data-popover-color="teal"]').popover({
	         template: '<div class="popover popover-teal" role="tooltip"><div class="arrow"><\/div><h3 class="popover-header"><\/h3><div class="popover-body"><\/div><\/div>'
	       });

	       $('[data-popover-color="indigo"]').popover({
	         template: '<div class="popover popover-indigo" role="tooltip"><div class="arrow"><\/div><h3 class="popover-header"><\/h3><div class="popover-body"><\/div><\/div>'
	       });

	       $('[data-popover-color="purple"]').popover({
	         template: '<div class="popover popover-purple" role="tooltip"><div class="arrow"><\/div><h3 class="popover-header"><\/h3><div class="popover-body"><\/div><\/div>'
	       });

	       $('[data-popover-color="orange"]').popover({
	         template: '<div class="popover popover-orange" role="tooltip"><div class="arrow"><\/div><h3 class="popover-header"><\/h3><div class="popover-body"><\/div><\/div>'
	       });

	       $('[data-popover-color="pink"]').popover({
	         template: '<div class="popover popover-pink" role="tooltip"><div class="arrow"><\/div><h3 class="popover-header"><\/h3><div class="popover-body"><\/div><\/div>'
	       });

	       // By default, Bootstrap doesn't auto close popover after appearing in the page
	       // resulting other popover overlap each other. Doing this will auto dismiss a popover
	       // when clicking anywhere outside of it
	       $(document).on('click', function (e) {
	         $('[data-toggle="popover"],[data-original-title]').each(function () {
	             //the 'is' for buttons that trigger popups
	             //the 'has' for icons within a button that triggers a popup
	             if (!$(this).is(e.target) && $(this).has(e.target).length === 0 && $('.popover').has(e.target).length === 0) {
	                 (($(this).popover('hide').data('bs.popover')||{}).inState||{}).click = false  // fix for BS 3.3.6
	             }

	         });
	       });
	     });