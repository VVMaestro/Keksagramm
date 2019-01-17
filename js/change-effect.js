(function () {
    //Логика изменения размера изображения
    var SIZE_STEP = 25;
    var MIN_SIZE = 25;
    var MAX_SIZE = 100;
    var SCALE_CFCNT = 0.01;
    var resizeMin = document.querySelector(".upload-resize-controls-button-dec");
    var resizeMax = document.querySelector(".upload-resize-controls-button-inc");
    var sizeValue = document.querySelector(".upload-resize-controls-value");
    var uploadImage = document.querySelector(".upload-form-preview img");    

    var onResizeMinClick = function () {
        var sizeValueInt = parseInt(sizeValue.value);
        if ((sizeValueInt - SIZE_STEP) > MIN_SIZE) {
            sizeValue.value = sizeValueInt - SIZE_STEP + "%";
        } else if ((sizeValueInt - SIZE_STEP) <= MIN_SIZE) {
            sizeValue.value = MIN_SIZE + "%";
        }
    }

    var onResizeMaxClick = function () {
        var sizeValueInt = parseInt(sizeValue.value);
        if ((sizeValueInt + SIZE_STEP) < MAX_SIZE) {
            sizeValue.value = sizeValueInt + SIZE_STEP + "%";
        } else if ((sizeValueInt + SIZE_STEP) >= MAX_SIZE) {
            sizeValue.value = MAX_SIZE + "%";
        }
    }

    var onSizeValueChange = function () {
        uploadImage.style.transform = "scale(" + (parseInt(sizeValue.value) * SCALE_CFCNT) + ")";
    }

    resizeMin.addEventListener("click", onResizeMinClick);
    resizeMax.addEventListener("click", onResizeMaxClick);
    sizeValue.addEventListener("input", onSizeValueChange);

    //Логика применения эффектов
    

    window.changeEffectValue = function () {
        var currentValue = levelVal.offsetWidth;
        var proportion = currentValue / maxValue;
    }
})();