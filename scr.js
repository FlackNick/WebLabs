(function () {
    window.startTime = (new Date).getTime();
    window.addEventListener('load',function () {
        document.getElementById('load-time').innerHTML=((new Date).getTime() - window.startTime)/1000 + 'seconds';
    });
})();

window.addEventListener('load',function () {
    let elements = document.querySelectorAll('.nav');
    switch(document.location.pathname) {
        case "/untitled1/index.html":
            elements[0].classList.add('now');
            break;
        case "/untitled1/gallery.html":
            elements[1].classList.add('now');
            break;
        case "/untitled1/my_works.html":
            elements[2].classList.add('now');
            break;
        case "/untitled1/my_data.html":
            elements[3].classList.add('now');
            break;
        case "/untitled1/dynamic_table.html":
            elements[4].classList.add('now');
            break;
        default:
            break;
    }
});