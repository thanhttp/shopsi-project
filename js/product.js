$(document).ready(function() {
    $(".product-commission").mouseover(function() {
        $(this).find('span:nth-child(1)').addClass('d-none');
        $(this).find('span:nth-child(2)').removeClass('d-none');
    });

    $(".product-commission").mouseout(function() {
        $(this).find('span:nth-child(1)').removeClass('d-none');
        $(this).find('span:nth-child(2)').addClass('d-none');
    });
});