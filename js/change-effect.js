(function () {
    //Логика изменения размера изображения
    var SIZE_STEP = 25;
    var MIN_SIZE = 25;
    var MAX_SIZE = 100;
    var SCALE_CFCNT = 0.01;
    var uploadImg = document.querySelector(".effect-image-preview");   
    var resizeMin = document.querySelector(".upload-resize-controls-button-dec");
    var resizeMax = document.querySelector(".upload-resize-controls-button-inc");
    var sizeValue = document.querySelector(".upload-resize-controls-value");    

    var onResizeMinClick = function () {
        var sizeValueInt = parseInt(sizeValue.value);
        if ((sizeValueInt - SIZE_STEP) > MIN_SIZE) {
            sizeValue.value = sizeValueInt - SIZE_STEP + "%";
        } else if ((sizeValueInt - SIZE_STEP) <= MIN_SIZE) {
            sizeValue.value = MIN_SIZE + "%";
        }
        changeScale();
    }

    var onResizeMaxClick = function () {
        var sizeValueInt = parseInt(sizeValue.value);
        if ((sizeValueInt + SIZE_STEP) < MAX_SIZE) {
            sizeValue.value = sizeValueInt + SIZE_STEP + "%";
        } else if ((sizeValueInt + SIZE_STEP) >= MAX_SIZE) {
            sizeValue.value = MAX_SIZE + "%";
        }
        changeScale();
    }

    var changeScale = function () {
        var scaleValue = parseInt(sizeValue.value) * SCALE_CFCNT;
        uploadImg.style.transform = "scale(" + scaleValue + "," + scaleValue + ")";
    }

    resizeMin.addEventListener("click", onResizeMinClick);
    resizeMax.addEventListener("click", onResizeMaxClick);

    //Логика применения эффектов
    var effectRadios = document.querySelectorAll(".upload-effect-controls input[name=effect]");    

    var onRadioChange = function () {
        var slider = document.querySelector(".upload-effect-level");
        var value = this.value;   

        var removeCurrent = function () {
            uploadImg.classList.remove(window.chahgeEffect.currentEffect);
        }
        //сброс значений фильтров
        uploadImg.style.filter = "";
        
        if (value == "none") {
            slider.classList.add("hidden");
        } else slider.classList.remove("hidden");        

        //переключение эффекта в зависимости от значения value
        switch (value) {
            case "none":     
                removeCurrent();
                window.initSlider.resetSlider();
                window.chahgeEffect.currentEffect = null;
                break;
            case "chrome": 
                removeCurrent();
                window.initSlider.resetSlider();
                window.chahgeEffect.currentEffect = "effect-chrome";
                window.initSlider.callback = window.chahgeEffect.changeChrome;
                break;
            case "sepia":
                removeCurrent();
                window.initSlider.resetSlider();
                window.chahgeEffect.currentEffect = "effect-sepia";
                window.initSlider.callback = window.chahgeEffect.changeSepia;
                break;
            case "marvin":
                removeCurrent();
                window.initSlider.resetSlider();
                window.chahgeEffect.currentEffect = "effect-marvin";
                window.initSlider.callback = window.chahgeEffect.changeMarvin;
                break;
            case "phobos":
                removeCurrent();
                window.initSlider.resetSlider();
                window.chahgeEffect.currentEffect = "effect-phobos";
                window.initSlider.callback = window.chahgeEffect.changePhobos;
                break;
            case "heat":
                removeCurrent();
                window.initSlider.resetSlider();
                window.chahgeEffect.currentEffect = "effect-heat";
                window.initSlider.callback = window.chahgeEffect.changeHeat;
                break;
        }
        //применение эффекта к изображению
        uploadImg.classList.add(window.chahgeEffect.currentEffect);
    }

    effectRadios.forEach(function (radio) {
        radio.addEventListener("change", onRadioChange);
    });

    window.chahgeEffect = {
        currentEffect : null,
        changeChrome: function (proportion) {            
            uploadImg.style.filter = "grayscale(" + proportion + ")";
        },
        changeSepia : function (proportion) {
            uploadImg.style.filter = "sepia(" + proportion + ")";
        },
        changeMarvin: function (proportion) {
            uploadImg.style.filter = "invert(" + proportion*100 + "%" + ")";
        },
        changePhobos: function (proportion) {
            uploadImg.style.filter = "blur(" + proportion*5 + "px" + ")";
        },
        changeHeat: function (proportion) {            
            uploadImg.style.filter = "brightness(" + (proportion * (3 - 1) + 1) + ")";
        }
    }
})();