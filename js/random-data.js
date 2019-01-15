(function () {
    var getRandomNumber = function (min, max) {
        var randomValue = Math.floor(Math.random() * (max - min) + min);
        return randomValue;
    }

    var getRandomBulean = function () {
        return Math.round(Math.random());
    }

    var getRandomComment = function (commentsArray) {
        var randomComment = [];
        if (getRandomBulean()) {
            randomComment.push(commentsArray[getRandomNumber(0, comments.length)]);
        } else {
            commentNumber1 = getRandomNumber(0, comments.length);
            commentNumber2 = getRandomNumber(0, comments.length);

            while (commentNumber1 === commentNumber2) {
                commentNumber2 = getRandomNumber(0, comments.length);
            }

            randomComment.push(commentsArray[commentNumber1]);
            randomComment.push(commentsArray[commentNumber2]);
        }

        return randomComment;
    }

    class Photo {
        constructor(url, likes, comments, description, hashCode) {
            this.url = url;
            this.likes = likes;
            this.comments = comments;
            this.description = description;
            this.hashCode = hashCode;
        }
    }

    var photos = [];

    var NUMBER_OF_PHOTOS = 25;

    var comments = ["Всё отлично!", "В целом всё неплохо. Но не всё.", "Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.",
        "Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.", "Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.",
        "Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!"];
    var descriptions = ["Тестим новую камеру!", "Затусили с друзьями на море", "Как же круто тут кормят", "Отдыхаем...",
        "Цените каждое мгновенье. Цените тех, кто рядом с вами и отгоняйте все сомненья. Не обижайте всех словами......", "Вот это тачка!"];
    
    for (i = 0; i < NUMBER_OF_PHOTOS; i++) {
        var hashCounter = i + 1;
        photos[i] = new Photo(
            "photos/" + hashCounter + ".jpg",
            getRandomNumber(1, 25),
            getRandomComment(comments),
            descriptions[getRandomNumber(0, descriptions.length)],
            hashCounter
        );
    }

    window.randomData = {
        NUMBER_OF_PHOTOS : NUMBER_OF_PHOTOS,
        photos : photos
    }
})();