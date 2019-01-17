(function () {
    var ENTER_CODE = 13;
    var ESC_CODE = 27;
    var uploadOverlay = document.querySelector(".upload-overlay");
    var uploadFile = document.querySelector("#upload-file");
    var uploadFormCansel = document.querySelector("#upload-cancel");

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
})();