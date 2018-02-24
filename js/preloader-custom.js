$(document).ready(function () {
    var preloader    = $('#preloader'), // селектор прелоадера
        imagesCount  = $('img').length, // количество изображений
        dBody        = $('body'), //обращаемся к body
        percent      = 100 / imagesCount, // количество % на одну картинку
        progress     = 0, // точка отсчета
        imgSum       = imagesCount, // количество картинок
        loadedImg    = 0; // счетчик загрузки картинок

    if (imagesCount >= imgSum && imagesCount > 0) {
        preloader.css('background', '#010326');
        dBody.css('overflow', 'hidden');

        $(".dws-progress-bar").circularProgress({
            color: "transparent",
            line_width: 10,
            height: "200px",
            width: "200px",
            percent: 0,
            // counter_clockwise: true,
            starting_position: 0
        }).circularProgress('animate', percent, 1000);

        for (var i = 0; i < imagesCount; i++) { // создаем клоны изображений
            var img_copy        = new Image();
            img_copy.src        = document.images[i].src;
            img_copy.onload     = img_load;
            img_copy.onerror    = img_load;
        }

        function img_load () {
            progress += percent;
            loadedImg++;
            if (progress >= 100 || loadedImg == imagesCount) {
                preloader.delay(400).fadeOut('slow');
                dBody.css('overflow', '');
                let hLoadElem = $('.hideLoad').toggleClass('hideLoad');
            }
            $(".dws-progress-bar").circularProgress('animate', progress, 500);
        }
    } else {
        preloader.remove();
    }


});
