(function () {
    var uploadForm = document.querySelector(".upload-form-hashtags");
    //Хеш-теги
    var hashTegInput = document.querySelector(".upload-form-hashtags");

    var onFormSubmit = function () {
        var hashTagsArr = hashTegInput.value.split("#");
        if (hashTagsArr.length !== 0) {
            for (var i = 0; i < hashTagsArr.length; i++) {
                if (hashTagsArr[i].length = 0) {
                    hashTegInput.setCustomValidity("Хеш-тэг не может состоять только из одной решётки!");
                    hashTegInput.valid = false;
                }
            }
        }
        uploadForm.checkValidity();
    }

    uploadForm.addEventListener("submit", onFormSubmit);
})();