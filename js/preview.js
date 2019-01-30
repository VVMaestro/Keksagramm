(function () {
    var fillBigPicture = function (clickedPicture, dataArr) {
        var currentPicture = null;
        for (var i = 0; i < dataArr.length; i++) {
            if (clickedPicture.dataset.unicHash == dataArr[i].hashCode) {
                currentPicture = dataArr[i];
            }
        }
        bigPicture.querySelector(".gallery-overlay-image").src = currentPicture.url;
        bigPicture.querySelector(".likes-count").textContent = currentPicture.likes;
        bigPicture.querySelector(".comments-count").textContent = currentPicture.comments.length;
    }

    //Работа с большим превью изображением
    var ENTER_CODE = 13;
    var ESC_CODE = 27;
    var bigPicture = document.querySelector(".gallery-overlay");
    var pictures = Array.from(document.querySelectorAll(".picture"));
    var bigPictureClose = document.querySelector(".gallery-overlay-close");

    var onBigPictureEscPress = function (evt) {
        if (evt.keyCode === ESC_CODE) {
            closeBigPicture();
        }
    }

    var closeBigPicture = function () {
        bigPicture.classList.add("hidden");
        window.removeEventListener("keydown", onBigPictureEscPress);
    }

    var openBigPicture = function () {
        bigPicture.classList.remove("hidden");
        window.addEventListener("keydown", onBigPictureEscPress);
    }

    document.body.addEventListener("click", function (evt) {
        var pictureLink = evt.target.parentNode;
        if (pictureLink.dataset.unicHash) {
            evt.preventDefault();
            fillBigPicture(pictureLink, window.randomData.photos);
            openBigPicture();
        }
    });

    bigPictureClose.addEventListener("click", function () {
        closeBigPicture();
    });

    document.body.addEventListener("keydown", function (evt) {
        var pictureLink = evt.target;
        if (evt.keyCode === ENTER_CODE && pictures.indexOf(pictureLink) != -1) {
            evt.preventDefault();
            fillBigPicture(pictureLink, window.randomData.photos);
            openBigPicture();
        }
    });    
})();