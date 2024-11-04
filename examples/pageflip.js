import { PageFlip } from './js/page-flip.module.mjs';

document.addEventListener('DOMContentLoaded', function () {
    const pageFlip = new PageFlip(document.getElementById('demoBookExample'), {
        width: 500, // base page width
        height: 700, // base page height

        size: 'fixed', //"stretch",
        disableFlipByClick: false,
        useMouseEvents: true,
        showPageCorners: false,
        clickEventForward: false,
        maxShadowOpacity: 0.5, // Half shadow intensity
        showCover: true,
        mobileScrollSupport: false, // disable content scrolling on mobile devices
        //clickEventClasses: ['page-arrow-right', 'page-arrow-left'],
    });

    // load pages
    pageFlip.loadFromHTML(document.querySelectorAll('.page'));

    document.querySelector('.page-total').innerText = pageFlip.getPageCount();
    document.querySelector('.page-orientation').innerText = pageFlip.getOrientation();

    document.querySelector('.btn-prev').addEventListener('click', () => {
        pageFlip.flipPrev(); // Turn to the previous page (with animation)
    });

    document.querySelector('.btn-next').addEventListener('click', () => {
        pageFlip.flipNext(); // Turn to the next page (with animation)
    });

    // triggered by page turning
    pageFlip.on('flip', (e) => {
        document.querySelector('.page-current').innerText = e.data + 1;
    });

    pageFlip.on('changeState', (e) => {
        document.querySelector('.page-state').innerText = e.data;
    });
});
