$(function(e) {
	'use strict';
	$(document).on("pagecreate", "#wizard", function() {
		$(".step").not(":eq(0)").addClass("ui-screen-hidden");
		$(".step:eq(0)").addClass("active");
		$(".progress p:eq(0)").addClass("currentStep");
		$(".ui-content").on("swipeleft swiperight", function(e) {
			var swipe = e.type,
				nextStep = $(".steps").find(".active").next(".step"),
				prevStep = $(".steps").find(".active").prev(".step");
			switch (true) {
				case (swipe == "swipeleft" && nextStep.length > 0):
					$(".step.active").toggleClass("slide out");
					break;
				case (swipe == "swiperight" && prevStep.length > 0):
					$(".step.active").toggleClass("slide out reverse");
					break;
			}
		});
	}).on("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", ".step", function(e) {
		var elm = $(e.target);
		switch (true) {
			case (elm.hasClass("out") && !elm.hasClass("reverse")):
				$(elm).toggleClass("slide out ui-screen-hidden active");
				$(elm).next(".step").toggleClass("slide in active ui-screen-hidden");
				break;
			case (elm.hasClass("out") && elm.hasClass("reverse")):
				$(elm).toggleClass("slide out ui-screen-hidden reverse active");
				$(elm).prev(".step").toggleClass("slide in active reverse ui-screen-hidden");
				break;
			case (elm.hasClass("in") && !elm.hasClass("reverse")):
				elm.toggleClass("slide in");
				break;
			case (elm.hasClass("in") && elm.hasClass("reverse")):
				elm.toggleClass("slide in reverse");
				break;
		}
		var dot = $(".active").index();
		$("p:eq(" + dot + ")").prevAll("p").addBack().addClass("currentStep");
		$("p:eq(" + dot + ")").nextAll("p").removeClass("currentStep");
	});
	$('#basicwizard').bootstrapWizard({
		'tabClass': 'nav nav-tabs navtab-wizard nav-justified bg-muted'
	});
	$('#progressbarwizard').bootstrapWizard({
		onTabShow: function(tab, navigation, index) {
			var $total = navigation.find('li').length;
			var $current = index + 1;
			var $percent = ($current / $total) * 100;
			$('#progressbarwizard').find('.bar').css({
				width: $percent + '%'
			});
		},
		'tabClass': 'nav nav-tabs navtab-wizard nav-justified bg-muted'
	});
	$('#btnwizard').bootstrapWizard({
		'tabClass': 'nav nav-tabs navtab-wizard nav-justified bg-muted',
		'nextSelector': '.button-next',
		'previousSelector': '.button-previous',
		'firstSelector': '.button-first',
		'lastSelector': '.button-last'
	});
	$('#rootwizard').bootstrapWizard({
		'tabClass': 'nav nav-tabs navtab-wizard nav-justified bg-muted',
		'onNext': function(tab, navigation, index) {
			var $valid = $("#commentForm").valid();
			if (!$valid) {
				$validator.focusInvalid();
				return false;
			}
		}
	});
	<!-- ////////////////////////////////////////// -->
	var navListItems = $('div.setup-panel div a'),
		allWells = $('.setup-content'),
		allNextBtn = $('.nextBtn');
	allWells.hide();
	navListItems.on("click", function(e) {
		e.preventDefault();
		var $target = $($(this).attr('href')),
			$item = $(this);
		if (!$item.hasClass('disabled')) {
			navListItems.removeClass('btn-success').addClass('btn-default');
			$item.addClass('btn-success');
			allWells.hide();
			$target.show();
			$target.find('input:eq(0)').focus();
		}
	});
	allNextBtn.on("click", function() {
		var curStep = $(this).closest(".setup-content"),
			curStepBtn = curStep.attr("id"),
			nextStepWizard = $('div.setup-panel div a[href="#' + curStepBtn + '"]').parent().next().children("a"),
			curInputs = curStep.find("input[type='text'],input[type='url']"),
			isValid = true;
		$(".form-group").removeClass("has-error");
		for (var i = 0; i < curInputs.length; i++) {
			if (!curInputs[i].validity.valid) {
				isValid = false;
				$(curInputs[i]).closest(".form-group").addClass("has-error");
			}
		}
		if (isValid) nextStepWizard.removeAttr('disabled').trigger('click');
	});
	$('div.setup-panel div a.btn-success').trigger('click');
});