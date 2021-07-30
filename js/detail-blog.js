$(document).ready(function() {
    $('.quick-view-item').click(function() {
        var data_article = $(this).data('article');

        var elmnt = document.getElementById(data_article);
        elmnt.scrollIntoView();
    });
});