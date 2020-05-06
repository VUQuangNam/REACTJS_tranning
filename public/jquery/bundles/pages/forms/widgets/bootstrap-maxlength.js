// Class definition

var KTBootstrapMaxlength = function () {
    
    // Private functions
    var demos = function () {
        // minimum setup
        $('#dunnio_maxlength_1').maxlength({
            warningClass: "dunnio-badge dunnio-badge--warning dunnio-badge--rounded dunnio-badge--inline",
            limitReachedClass: "dunnio-badge dunnio-badge--success dunnio-badge--rounded dunnio-badge--inline"
        });

        // threshold value
        $('#dunnio_maxlength_2').maxlength({
            threshold: 5,
            warningClass: "dunnio-badge dunnio-badge--danger dunnio-badge--rounded dunnio-badge--inline",
            limitReachedClass: "dunnio-badge dunnio-badge--success dunnio-badge--rounded dunnio-badge--inline"
        });

        // always show
        $('#dunnio_maxlength_3').maxlength({
            alwaysShow: true,
            threshold: 5,
            warningClass: "dunnio-badge dunnio-badge--primary dunnio-badge--rounded dunnio-badge--inline",
            limitReachedClass: "dunnio-badge dunnio-badge--brand dunnio-badge--rounded dunnio-badge--inline"
        });

        // custom text
        $('#dunnio_maxlength_4').maxlength({
            threshold: 3,
            warningClass: "dunnio-badge dunnio-badge--danger dunnio-badge--rounded dunnio-badge--inline",
            limitReachedClass: "dunnio-badge dunnio-badge--success dunnio-badge--rounded dunnio-badge--inline",
            separator: ' of ',
            preText: 'You have ',
            postText: ' chars remaining.',
            validate: true
        });

        // textarea example
        $('#dunnio_maxlength_5').maxlength({
            threshold: 5,
            warningClass: "dunnio-badge dunnio-badge--primary dunnio-badge--rounded dunnio-badge--inline",
            limitReachedClass: "dunnio-badge dunnio-badge--brand dunnio-badge--rounded dunnio-badge--inline"
        });

        // position examples
        $('#dunnio_maxlength_6_1').maxlength({
            alwaysShow: true,
            threshold: 5,
            placement: 'top-left',
            warningClass: "dunnio-badge dunnio-badge--brand dunnio-badge--rounded dunnio-badge--inline",
            limitReachedClass: "dunnio-badge dunnio-badge--brand dunnio-badge--rounded dunnio-badge--inline"
        });

        $('#dunnio_maxlength_6_2').maxlength({
            alwaysShow: true,
            threshold: 5,
            placement: 'top-right',
            warningClass: "dunnio-badge dunnio-badge--success dunnio-badge--rounded dunnio-badge--inline",
            limitReachedClass: "dunnio-badge dunnio-badge--brand dunnio-badge--rounded dunnio-badge--inline"
        });

        $('#dunnio_maxlength_6_3').maxlength({
            alwaysShow: true,
            threshold: 5,
            placement: 'bottom-left',
            warningClass: "dunnio-badge dunnio-badge--warning dunnio-badge--rounded dunnio-badge--inline",
            limitReachedClass: "dunnio-badge dunnio-badge--brand dunnio-badge--rounded dunnio-badge--inline"
        });

        $('#dunnio_maxlength_6_4').maxlength({
            alwaysShow: true,
            threshold: 5,
            placement: 'bottom-right',
            warningClass: "dunnio-badge dunnio-badge--danger dunnio-badge--rounded dunnio-badge--inline",
            limitReachedClass: "dunnio-badge dunnio-badge--brand dunnio-badge--rounded dunnio-badge--inline"
        });

        // Modal Examples

        // minimum setup
        $('#dunnio_maxlength_1_modal').maxlength({
            warningClass: "dunnio-badge dunnio-badge--warning dunnio-badge--rounded dunnio-badge--inline",
            limitReachedClass: "dunnio-badge dunnio-badge--success dunnio-badge--rounded dunnio-badge--inline",
            appendToParent: true
        });

        // threshold value
        $('#dunnio_maxlength_2_modal').maxlength({
            threshold: 5,
            warningClass: "dunnio-badge dunnio-badge--danger dunnio-badge--rounded dunnio-badge--inline",
            limitReachedClass: "dunnio-badge dunnio-badge--success dunnio-badge--rounded dunnio-badge--inline",
            appendToParent: true
        });

        // always show
        // textarea example
        $('#dunnio_maxlength_5_modal').maxlength({
            threshold: 5,
            warningClass: "dunnio-badge dunnio-badge--primary dunnio-badge--rounded dunnio-badge--inline",
            limitReachedClass: "dunnio-badge dunnio-badge--brand dunnio-badge--rounded dunnio-badge--inline",
            appendToParent: true
        });

        // custom text
        $('#dunnio_maxlength_4_modal').maxlength({
            threshold: 3,
            warningClass: "dunnio-badge dunnio-badge--danger dunnio-badge--rounded dunnio-badge--inline",
            limitReachedClass: "dunnio-badge dunnio-badge--success dunnio-badge--rounded dunnio-badge--inline",
            appendToParent: true,
            separator: ' of ',
            preText: 'You have ',
            postText: ' chars remaining.',
            validate: true
        });
    }

    return {
        // public functions
        init: function() {
            demos();  
        }
    };
}();

jQuery(document).ready(function() {
    KTBootstrapMaxlength.init();
});