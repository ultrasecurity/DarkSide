$(function(){
   'use strict'

   // Toggles
   $('.toggle').toggles({
	 on: true,
	 height: 26
   });

   // Input Masks
   $('#dateMask').mask('99/99/9999');
   $('#phoneMask').mask('(999) 999-9999');
   $('#ssnMask').mask('999-99-9999');

   // Time Picker
   $('#tpBasic').timepicker();
   $('#tp2').timepicker({'scrollDefault': 'now'});
   $('#tp3').timepicker();

   $(document).on('click','#setTimeButton', function (e){
	 $('#tp3').timepicker('setTime', new Date());
   });

   // Color picker
   $('#colorpicker').spectrum({
	 color: '#0061da'
   });

   $('#showAlpha').spectrum({
	 color: 'rgba(0, 97, 218, 0.5)',
	 showAlpha: true
   });

   $('#showPaletteOnly').spectrum({
	   showPaletteOnly: true,
	   showPalette:true,
	   color: '#DC3545',
	   palette: [
		   ['#1D2939', '#fff', '#0866C6','#23BF08', '#F49917'],
		   ['#DC3545', '#17A2B8', '#6610F2', '#fa1e81', '#72e7a6']
	   ]
   });

});
$(function(){
   'use strict'
   // Datepicker
   $('.fc-datepicker').datepicker({
	 showOtherMonths: true,
	 selectOtherMonths: true
   });

   $('#datepickerNoOfMonths').datepicker({
	 showOtherMonths: true,
	 selectOtherMonths: true,
	 numberOfMonths: 2
   });

 });
$(function(){
   'use strict';

   $('.select2').select2({
	 minimumResultsForSearch: Infinity
   });

   // Select2 by showing the search
   $('.select2-show-search').select2({
	 minimumResultsForSearch: ''
   });

   // Colored Hover
   $('#select2').select2({
	 dropdownCssClass: 'hover-success',
	 minimumResultsForSearch: Infinity // disabling search
   });

   $('#select3').select2({
	 dropdownCssClass: 'hover-danger',
	 minimumResultsForSearch: Infinity // disabling search
   });

   // Outline Select
   $('#select4').select2({
	 containerCssClass: 'select2-outline-success',
	 dropdownCssClass: 'bd-success hover-success',
	 minimumResultsForSearch: Infinity // disabling search
   });

   $('#select5').select2({
	 containerCssClass: 'select2-outline-info',
	 dropdownCssClass: 'bd-info hover-info',
	 minimumResultsForSearch: Infinity // disabling search
   });

   // Full Colored Select Box
   $('#select6').select2({
	 containerCssClass: 'select2-full-color select2-primary',
	 minimumResultsForSearch: Infinity // disabling search
   });

   $('#select7').select2({
	 containerCssClass: 'select2-full-color select2-danger',
	 dropdownCssClass: 'hover-danger',
	 minimumResultsForSearch: Infinity // disabling search
   });

   // Full Colored Dropdown
   $('#select8').select2({
	 dropdownCssClass: 'select2-drop-color select2-drop-primary',
	 minimumResultsForSearch: Infinity // disabling search
   });

   $('#select9').select2({
	 dropdownCssClass: 'select2-drop-color select2-drop-indigo',
	 minimumResultsForSearch: Infinity // disabling search
   });

   // Full colored for both box and dropdown
   $('#select10').select2({
	 containerCssClass: 'select2-full-color select2-primary',
	 dropdownCssClass: 'select2-drop-color select2-drop-primary',
	 minimumResultsForSearch: Infinity // disabling search
   });

   $('#select11').select2({
	 containerCssClass: 'select2-full-color select2-indigo',
	 dropdownCssClass: 'select2-drop-color select2-drop-indigo',
	 minimumResultsForSearch: Infinity // disabling search
   });
 });