$(function() {
    var btn = $('#demo li');
    $(btn).on('click', function() {
        var i = $(btn).index(this);
        $("#tabs>div,#demo li").each(function(index, elem) {
            $(elem).removeClass('show');
            $(elem).removeClass('active');
        });
        $(this).attr('class', 'active');
        $('#tabs>div').eq(i).attr('class', 'show');
    });
});