//Создание маленьких превью фото
var createPictureElem = function (template, pictureData) {
    var pictureElem = template.cloneNode(true);
    pictureElem.querySelector("img").src = pictureData.url;
    pictureElem.querySelector(".picture-likes").textContent = pictureData.likes;
    pictureElem.querySelector(".picture-comments").textContent = pictureData.comments.length;
    pictureElem.querySelector(".picture").dataset.unicHash = pictureData.hashCode;
    return pictureElem;
}

var addPictureElems = function (pictureBox) {    
    var picturesFragment = document.createDocumentFragment();
    for (var i = 0; i < window.randomData.NUMBER_OF_PHOTOS; i++) {
        var pictureElem = createPictureElem(pictureTemplate, window.randomData.photos[i]);
        picturesFragment.appendChild(pictureElem);
    }
    document.querySelector(pictureBox).appendChild(picturesFragment);
}
//Наполнение превью изображения данными
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

var pictureTemplate = document.querySelector("#picture-template").content;
// generateRandomData();
addPictureElems(".pictures");

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
    if (pictures.indexOf(pictureLink) != -1) {
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

//Загрузка изображение и показ формы редактирования
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

//Применения эффекта для изображения и редактирование размера изображения
var levelPin = document.querySelector(".upload-effect-level-pin");
var levelVal = document.querySelector(".upload-effect-level-val");
var levelLine = document.querySelector(".upload-effect-level-line");

var onPinMouseUp = function () {
    var currentValue = levelVal.offsetWidth;
    var maxValue = levelLine.offsetWidth;
    var proportion = currentValue / maxValue;
    return proportion;
}

levelPin.addEventListener("mouseup", onPinMouseUp);