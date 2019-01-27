(function () {
    var ENTER_CODE = 13;
    var ESC_CODE = 27;
    var uploadOverlay = document.querySelector(".upload-overlay");
    var uploadFile = document.querySelector("#upload-file");
    var uploadFormCansel = document.querySelector("#upload-cancel");
    var slider = document.querySelector(".upload-effect-level");

    slider.classList.add("hidden");

    var closeUploadOverlay = function () {
        uploadOverlay.classList.add("hidden");
        uploadFile.value = null;
        window.removeEventListener("keydown", onUploadEscPress);
    }

    var openUploadOverlay = function () {
        uploadOverlay.classList.remove("hidden");
        window.addEventListener("keydown", onUploadEscPress);
    }

    var onUploadEscPress = function (evt) {
        if (evt.keyCode === ESC_CODE) {
            closeUploadOverlay();
        }
    }

    var onFormCanselEnterPress = function (evt) {
        if (evt.keyCode === ENTER_CODE) {
            closeUploadOverlay();
        }
    }

    var onFileUpload = function () {
        openUploadOverlay();
    }

    var onFormCansel = function () {
        closeUploadOverlay();
    }

    uploadFile.addEventListener("change", onFileUpload);
    uploadFormCansel.addEventListener("click", onFormCansel);
    uploadFormCansel.addEventListener("keydown", onFormCanselEnterPress);

    // отмена закрытия окна загрузки изображения при фокусе на ввод хеш-тэгов
    var hashTegInput = document.querySelector(".upload-form-hashtags");

    var onInputFocus = function () {
        window.removeEventListener("keydown", onUploadEscPress);
    }

    var onInputBlur = function () {
        window.addEventListener("keydown", onUploadEscPress);
    }

    hashTegInput.addEventListener("focus", onInputFocus);
    hashTegInput.addEventListener("blur", onInputBlur);

    //отмена закрытия окна загрузки изображения при фокусе на ввод комментария
    var commentInput = document.querySelector(".upload-form-description");
    
    commentInput.addEventListener("focus", onInputFocus);
    commentInput.addEventListener("blur", onInputBlur);
})();