(function () {
    var pictureTemplate = document.querySelector("#picture-template").content;
    var createPictureElem = function (template, pictureData) {
        var pictureElem = template.cloneNode(true);
        pictureElem.querySelector("img").src = pictureData.url;
        pictureElem.querySelector(".picture-likes").textContent = pictureData.likes;
        pictureElem.querySelector(".picture-comments").textContent = pictureData.comments.length;
        pictureElem.querySelector(".picture").dataset.unicHash = pictureData.hashCode;
        return pictureElem;
    }
   
    var picturesFragment = document.createDocumentFragment();
    for (var i = 0; i < window.randomData.NUMBER_OF_PHOTOS; i++) {
        var pictureElem = createPictureElem(pictureTemplate, window.randomData.photos[i]);
        picturesFragment.appendChild(pictureElem);
    }
    document.querySelector(".pictures").appendChild(picturesFragment);
})();