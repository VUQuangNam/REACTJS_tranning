// Class definition

var KTBootstrapMultipleSelectsplitter = function () {
    
    // Private functions
    var demos = function () {
        // minimum setup
        $('#dunnio_multipleselectsplitter_1, #dunnio_multipleselectsplitter_2').multiselectsplitter();
    }

    return {
        // public functions
        init: function() {
            demos(); 
        }
    };
}();

jQuery(document).ready(function() {
    KTBootstrapMultipleSelectsplitter.init();
});