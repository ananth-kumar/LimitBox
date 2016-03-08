(function( $ ) {
    $.fn.limitText = function(options) {
        
        //Add defaults 
        var defaults = {  
            limit: 10,
            createSpan: false,
            dynSpanId:"limitBox-dyn",
            debug:false
        };
        
        //Extend the options and defulats
        var options = $.extend(defaults, options);  
        
        //Initialize
        _init();

        //Debug
        if(options.debug){
            debug( obj );
        }


        _init = function(){
        $(this).keyup(updateCount);
        $(this).keydown(updateCount);
        $(this).bind("paste", updateCount);
        $(this).after("<span id='limitBox-limit' >/"+options.limit+"</span>");
        $(this).after("<span id='"+options.dynSpanId+"' >0</span>");
        }
        function debug( obj ) {
            if ( window.console && window.console.log ) {
                window.console.log(obj);
            }
        };

        function updateCount() {
            var cs = $(this).val().length;
            if(cs > (options.limit-1) && event.keyCode !==8 ){
                event.preventDefault();
                $(this).val(($(this).val().substring(0, options.limit)));
            }
            var cs = $(this).val().length;
            $("#limitBox-dyn").text(cs);

        }
    };
})( jQuery );