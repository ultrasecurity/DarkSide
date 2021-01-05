jQuery.fn.ratingStars = function( options ) {
 
    var defaults = {
        selectors: {
            starsSelector: '.rating-stars',
            starSelector: '.rating-star',
            starActiveClass: 'is--active',
            starHoverClass: 'is--hover',
            starNoHoverClass: 'is--no-hover',
            targetFormElementSelector: '.rating-value'
        }
    };
 
    var settings = $.extend( {}, defaults, options );

    var methods = {
        init: function(element) {
            var me = this;
            
            methods.registerEvents(element);
            methods.loadDefaultValue(element);
        },

        loadDefaultValue: function (element) {
            var me = this;
            var defaultValue = $(element).children(settings.selectors.targetFormElementSelector).val();

            var i = 0;
            $.each($(element).children(settings.starsSelector).children(settings.starSelector), function(index, element) {
                if(i <= (defaultValue - 1)) {
                    $(element).addClass(settings.selectors.starActiveClass);
                }
                i++;
            });
        },

        registerEvents: function (element) {
            var me = this;
    
            $.each($(element).children(settings.starsSelector).children(settings.starSelector), function(index, starElement) {
                $(starElement).on("mouseenter", $.proxy(me.onStarEnter, me, starElement, element));
                $(starElement).on("mouseleave", $.proxy(me.onStarLeave, me, starElement, element));
                $(starElement).on("click touchstart", $.proxy(me.onStarSelected, me, starElement, element));
            });
        },

        onStarEnter: function(starElement, container) {
            var me = this;
            var elementIndex = $(starElement).index();
    
            // add the hover classes
            var i = 0;
            $.each($(container).children(settings.starsSelector).children(settings.starSelector), function(index, element) {
                if(i <= elementIndex) {
                    // add a class to represent the chosen stars.
                    $(element).addClass(settings.selectors.starHoverClass);
                } else {
                    // add a class to represent the remaining stars.
                    $(element).addClass(settings.selectors.starNoHoverClass);
                }
                i++;
            });

            $(container).trigger("ratingOnEnter", {
                ratingValue: (elementIndex + 1)
            });
        },
    
        onStarLeave: function(starElement, container) {
            var me = this;
            var elementIndex = $(starElement).index();
    
            // remove all hover classes
            $(container).children(settings.starsSelector).children(settings.starSelector).removeClass(settings.selectors.starHoverClass);
            $(container).children(settings.starsSelector).children(settings.starSelector).removeClass(settings.selectors.starNoHoverClass);

            $(container).trigger("ratingOnLeave", {
                ratingValue: (elementIndex + 1)
            });
        },
    
        onStarSelected: function(starElement, container) {
            var me = this;
            var elementIndex = $(starElement).index();
    
            // remove the currently selected class
            $(container).children(settings.starsSelector).children(settings.starSelector).removeClass(settings.selectors.starActiveClass);
    
            // set the selected class for the stars
            var i = 0;
            $.each($(container).children(settings.starsSelector).children(settings.starSelector), function(index, element) {
                if(i <= elementIndex) {
                    $(element).addClass(settings.selectors.starActiveClass);
                }
                i++;
            });
    
            // set the rating value to the form
            $(container).children(settings.selectors.targetFormElementSelector).val(elementIndex + 1);

            $(container).trigger("ratingChanged", {
                ratingValue: (elementIndex + 1)
            });
        }
    };
 
    return this.each(function() {
        methods.init($(this));
    });
};