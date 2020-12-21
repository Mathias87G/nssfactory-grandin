$(document).ready(function () {


    var i = 0
    // Slider Array
    var imagesArray = [
        {
            img: "https://images.pexels.com/photos/5675247/pexels-photo-5675247.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            date: "18 settembre 2015",
            title: "Most Important Days on Watchlab"
        },

        {
            img: "https://images.pexels.com/photos/5675245/pexels-photo-5675245.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            date: "23 settembre 2018",
            title: "Other Days"
        }

    ]

    // slider
    printSlider();
    $('.prev').click(function () {
        prevSlide();
    });
    $('.next').click(function () {
        nextSlide();
    });


    // Funzioni

    // slider
    function printSlider() {
        $(".press-slider img").attr("src", imagesArray[i].img);
        $(".slider-txt .slider-date").text(imagesArray[i].date);
        $(".slider-txt .slider-title").text(imagesArray[i].title);
    }

    // function prev button
    function prevSlide() {
        if (i > 0) {
            i--;
        } else {
            i = imagesArray.length - 1;
        }
        printSlider();
    }

    // Function next button
    function nextSlide() {
        if (i < imagesArray.length - 1 && i >= 0) {
            i++;
        } else {
            i = 0;
        }
        printSlider();
        console.log(i);
    }


});