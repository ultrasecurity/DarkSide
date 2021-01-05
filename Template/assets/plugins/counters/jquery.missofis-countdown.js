/*!
 * Missofis Countdown Timer
 * 
 * 	Author: Kemal Yılmaz
 * 	Website: http://missofis.com
 * 	License: MIT
 *
 * @see http://jqueryboilerplate.com/ for this jQuery plugin boilerplate details
 */ 
;( function ( $, window, document, undefined ) {



	'use strict';



	/**
	 * Plugin defaults
	 */
	var PLUGIN_NAME = 'countdown',
	    defaults = {

			from: 180, // 3 minutes (3*60)
			to: 0, // stop at zero
			movingUnit: 1000, // 1000 for 1 second increment/decrements
			timerEnd: undefined,
			outputPattern: '$day Days $hour : $minute : $second',
			autostart: true

		},
		outputReplacement = new RegExp( '\\$day|\\$hour|\\$minute|\\$second', 'g' );



	/**
	 * Plugin constructor
	 *
	 * @param element
	 *
	 * @param options
	 */
	function Plugin( element, options ) {

		// set scope vars
		this.element = element;
		this.$element = $( element );

		// set plugin setting
		this.settings = $.extend( {}, defaults, options );

		// set name and defaults
		this._defaults = defaults;
		this._name = PLUGIN_NAME;

		// set counter direction (counting up/down) and timer current position
		// _displacement is -1 for count down +1 for counting up, NaN for equality 
		// set current interval id memory
		// set counter status flag
		this._displacement = -1 * ( this.settings.from - this.settings.to ) / Math.abs( this.settings.from - this.settings.to );
		this._timerAt = this.settings.from;
		this._intervalId = undefined;
		this._isCounting = false;

		// call initialize
		this.init();

	}



	/**
	 * Plugin prototype
	 */
	Plugin.prototype = {

		/*
		------------------------------------------------------------
		    PLUGIN PUBLIC API
		------------------------------------------------------------
		*/

		/**
		 * Plugin initialization
		 */
		init: function() {

			// initiate timer starting text
			this._updateTimerText();

			// check autostart and start counter
			if( this.settings.autostart ) 
				this._start();

		},

		/**
		 * Remove timer javascript counter and delete timer instance from element
		 */
		destroy: function() {

			// clear timer 
			window.clearInterval( this._intervalID );

			//  remove plugin instance
			$.data( this.element, 'plugin_' + PLUGIN_NAME, null );

		},

		/**
		 * Resumes counter
		 */
		resume: function() {

			// check if counter is running and return
			if( this._isCounting )
				return;			

			// start timer
			this._start();

		},

		/**
		 * Pause counter
		 */
		pause: function() {

			// check if counter is not running and return
			if( ! this._isCounting )
				return;

			// set counter as stopped
			this._isCounting = false;

			// clear old interval
			if( undefined !== this._intervalID )
				window.clearInterval( this._intervalID );

		},



		/*
		------------------------------------------------------------
		    PLUGIN PSEUDO-PRIVATE API by "_" NAMING CONVENTION
		------------------------------------------------------------
		*/


		/**
		 * Starts counter
		 */
		_start: function() {

			// get plugin
			var that = this;

			// clear old interval
			if( undefined !== this._intervalID )
				window.clearInterval( this._intervalID );

			// 
			this._isCounting = true;

			// todo :: do not set an interval for from == to equality 

			// 
			this._intervalID = window.setInterval( function() {

				// update timer position (fire event?)
				that._timerAt += that._displacement;

				// update timer
				that._update();

			}, that.settings.movingUnit );

		},

		/**
		 * Stop and destroy counter
		 */
		_stop: function() {

			// destroy timer
			this.destroy();

			// call timerEnd callback if defined
			if( this.settings.timerEnd && 'function' === typeof this.settings.timerEnd ) {

				// set calback functions scope to jQuery element timer being created 
				// todo :: change context with native element instead of jQuery one
				this.settings.timerEnd.call( this.$element );

			}

		},

		/**
		 * Update counter data
		 */
		_update: function() {

			// get plugin
			var that = this;

			// 
			this._updateTimerText();

			// 
			if( this._timerAt === this.settings.to || isNaN( this._timerAt ) ) {

				// 
				this._stop();

			}

		},

		/**
		 * Update timer via intervalID's
		 */
		_updateTimerText: function() {

			// get plugin
			var that = this;

			// 
			this.$element.text( function( index, text ) {

				// 
				var _parsedStuff = that._parseSeconds( that._timerAt );

				// 
				var _daysParsed = _parsedStuff.days.toString(),
					_hoursParsed = _parsedStuff.hours.toString(),
				    _minutesParsed = _parsedStuff.minutes.toString(),
				    _secondsParsed = _parsedStuff.seconds.toString();

				// check days/hours/minutes/second and change single digit result with 2 digit ones ( 1's to 01's )
				if( _parsedStuff.days < 10 )
					_daysParsed = '0' + _daysParsed;
				if( _parsedStuff.hours < 10 )
					_hoursParsed = '0' + _hoursParsed;
				if( _parsedStuff.minutes < 10 )
					_minutesParsed = '0' + _minutesParsed;
				if( _parsedStuff.seconds < 10 )
					_secondsParsed = '0' + _secondsParsed;

				// todo :: compare perfromance between length check and regexp replace 

				// return parsed timer string
				return that.settings.outputPattern.replace( outputReplacement, function( match, offset, string ) {

					// 
					switch( match ) {
						case '$day':
							return _daysParsed;
						case '$hour':
							return _hoursParsed;
						case '$minute':
							return _minutesParsed;
						case '$second':
							return _secondsParsed;
						default: 
							return '';
					}

				} );
				
			} );

		},

		/**
		 * Split up seconds to time components (days, hours, minutes, seconds)
		 *
		 * @param seconds
		 */
		_parseSeconds: function( seconds ) {

			// handle negative counting
			seconds = Math.abs( seconds );

			//
			var _parsedTime = {
				days: 0,
				hours: 0,
			    minutes: Math.floor( seconds / 60 ),
			    seconds: 0
			};

			// get days
			if( seconds >= 86400 ) {

				_parsedTime.days = Math.floor( seconds / 86400 );
				_parsedTime.hours = Math.floor( seconds % 86400 / 3600 );

			}
			else if( seconds >= 3600 )
				_parsedTime.hours = Math.floor( seconds / 3600 );

			// get minutes
			if( seconds >= 3600 )
				_parsedTime.minutes = Math.floor( seconds % 3600 / 60 );

			// get seconds
			_parsedTime.seconds = seconds % 60;

			// return parset numeric values
			return _parsedTime;

		}		

	};



	/**
	 * Plugin wrapper
	 */
	$.fn[ PLUGIN_NAME ] = function ( options ) {

		// instantiate plugin with chaining enabled if options is omitted or is an object
		if( undefined === options || 'object' === typeof options ) {

	        return this.each( function () {

	        	// create new plugin in elements data object which plugin is executed from
	        	// skip plugin instantiation if plugin set in element's data object already
	            if ( ! $.data( this, 'plugin_' + PLUGIN_NAME ) )
	                $.data( this, 'plugin_' + PLUGIN_NAME, new Plugin( this, options ) );

	        } );
		
		}
		// capture any public plugin method call 
		// skip pseudo-private function via "_" skipper
		// skip 'init' call 
		// @see https://github.com/jquery-boilerplate/jquery-boilerplate/wiki/Extending-jQuery-Boilerplate
		else if( 'string' === typeof options && options[ 0 ] !== '_' && options !== 'init' ) {

			return this.each( function() {

				// get current instance of plugin
				var instance = $.data( this, 'plugin_' + PLUGIN_NAME );

				// check if plugin instance is available and instance has target method being called
				if( instance instanceof Plugin && 'function' === typeof instance[ options ] ) {

					// call the plugin public method
					instance[ options ].call( instance );

				}			

			} );

		}

    };



} ) ( jQuery, window, document );