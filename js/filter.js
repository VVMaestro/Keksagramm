(function () {
    var TIMEOUT_VALUE = 600;
    var filtersRadio = Array.from(document.querySelectorAll(".filters-radio"));
    var filteredData = window.randomData.photos.slice();
    var lastTimeout;
    var filterToSort = {
        "recommend" : sortByRecomend = function (left, right) {
            return left.order - right.order;
        },
        "popular": sortByPopular = function (left, right) {
            return right.likes - left.likes;
        },
        "discussed": sortByDiscussed = function (left, right) {
            return right.comments.length - left.comments.length;
        },
        "random": sortByRandom = function () {
            var randomValue = Math.floor(Math.random() - 1);
            return randomValue;
        }
    };

    var sortPhotos = function (callback) {
        filteredData.sort(callback);
    }

    var onFilterChange = function () {
        var filterValue = this.value;
        if (lastTimeout) {
            clearTimeout(lastTimeout);
        }
        lastTimeout = setTimeout(function () {
            sortPhotos(filterToSort[filterValue]);
            document.querySelector(".pictures").innerHTML = "";
            window.addPictures(filteredData);
        }, TIMEOUT_VALUE);
    }

    filtersRadio.forEach(function (elem) {
        elem.addEventListener("change", onFilterChange);
    });
})();