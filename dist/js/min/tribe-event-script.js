jQuery(document).ready(function($){
    $(document).on('click', '*[value="Global"]', function(e){
        var targetSelection = $('*[for="_ecp_custom_13"]').parents('.tribe-field-type-checkbox').children('.tribe-section-content-field').find('input');
        if ( $(this).prop("checked") === true ) {
            checkBox(targetSelection, 0, true);
        } else {
            checkBox(targetSelection, 0, false);
        }
    });
    var checkBox = function ( elem, num, check ) {
        if ( num < elem.length ) {
            elem.eq(num).prop("checked", check);
            num++;
            checkBox(elem, num, check);
        }
    };
});