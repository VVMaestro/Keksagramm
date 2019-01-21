(function () {
	var uploadForm = document.querySelector("#upload-select-image");
	//Хеш-теги
	var hashTegInput = document.querySelector(".upload-form-hashtags");
	var MAX_OF_HASHT = 5;
	var MAX_OF_HT_LENGTH = 20;

	var onHashTegInput = function (evt) {
		debugger;
		//если поле ввода пустое - не проверяем форму
		if (hashTegInput.value != "") {
			hashTegInput.setCustomValidity("");
			var hashTags = hashTegInput.value.split(" ");
		} else {
			hashTegInput.setCustomValidity("");
			return;
		}
		//удаляем пробелы
		for (var l = 0; l < hashTags.length; l++) {
			if (hashTags[l] == "") hashTags.splice(l, 1);//проблема с уменьшением размера массива и прерыванием работы цикла!
		}
		//проверки
		for (var i = 0; i < hashTags.length; i++) {			
			//проверяем наличие решётки в начале
			var hashTegFirstChar = hashTags[i].charAt(0);
			if (hashTegFirstChar != "#") {
				hashTegInput.setCustomValidity("Хеш-тег должен начинаться с \"#\"");
			}
			//проверяем разделение пробелами
			for (var j = 1; j < (hashTags[i].length); j++) {
				if (hashTags[i].charAt(j) == "#") {
					hashTegInput.setCustomValidity("Хеш-теги должны быть разделены пробелами!");
				}
			}
			//проверяем решётку
			if (hashTags[i] == "#") {
				hashTegInput.setCustomValidity("Хеш-тег не может состоять только из одной решётки!");
			}
			//проверяем одинаковые хештеги
			for (var k = i-1; k >= 0; k--) {
				if (hashTags[k] == hashTags[i]) {
					hashTegInput.setCustomValidity("Не должно быть повторяющихся хештегов!");
				}
			}
			//проверяем количество хештегов
			if (hashTags.length > MAX_OF_HASHT) {
				hashTegInput.setCustomValidity("Можно использовать до " + MAX_OF_HASHT + " хеш-тегов");
			}
			//проверяем длину хеш-тегов
			if (hashTags[i].length > MAX_OF_HT_LENGTH) {
				hashTegInput.setCustomValidity("Длинна одного хеш-тега не должна превышать " + MAX_OF_HT_LENGTH + " символа(-ов).");
			}
		}
		
	}

	hashTegInput.addEventListener("input", onHashTegInput);
})();