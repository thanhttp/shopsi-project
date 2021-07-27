$(document).ready(function() {
    $('#logistics-read-more').click(function() {
        $('.logistics-item:nth-of-type(n+8)').toggleClass('d-none');

        $('.logistics-read-more-name').toggle();
        $('.logis-icon-read-more i').toggle();
    });

    let items = document.querySelectorAll('.carousel .carousel-item')

    items.forEach((el) => {
        const minPerSlide = 4
        let next = el.nextElementSibling
        for (var i = 1; i < minPerSlide; i++) {
            if (!next) {
                // wrap carousel by using first child
                next = items[0]
            }
            let cloneChild = next.cloneNode(true)
            el.appendChild(cloneChild.children[0])
            next = next.nextElementSibling
        }
    })

});