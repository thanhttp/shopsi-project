$(document).ready(function() {
    $('#side-bar-search').click(function() {
        $('input[name="search"]').toggleClass('d-none');
    });

    $('#side-bar-search-repon').click(function() {
        $('input[name="search-repon"]').toggleClass('d-none');
        $('#home').toggleClass('d-none')
    });
});