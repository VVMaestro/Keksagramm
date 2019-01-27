(function () {
	var levelPin = document.querySelector(".upload-effect-level-pin");
	var levelVal = document.querySelector(".upload-effect-level-val");
	var levelLine = document.querySelector(".upload-effect-level-line");
	var maxValue = levelLine.offsetWidth;

	var calculateProportion = function () {
		var currentValue = levelVal.offsetWidth,
		proportion = currentValue / maxValue;
		return proportion;
	}

	//слушатель для обработчика опускания мыши
	var onMouseDown = function (evt) {
		evt.preventDefault();
		evt.stopPropagation();
		var startX = evt.clientX;

		//слушатель для обработчика движения мыши
		var onPinMouseMove = function (moveEvt) {
			var moveOrigin = moveEvt.clientX;
			var lineCoords = levelLine.getBoundingClientRect();
			var shiftX = startX - moveEvt.clientX;
			maxValue = levelLine.offsetWidth;
			startX = moveEvt.clientX;


			if (moveOrigin >= lineCoords.left && moveOrigin <= lineCoords.left + maxValue) {
				levelPin.style.left = (levelPin.offsetLeft - shiftX) + "px";
			} else if (moveOrigin < lineCoords.left) {
				levelPin.style.left = 0 + "px";
			} else if (moveOrigin > lineCoords.left + maxValue) {
				levelPin.style.left = maxValue + "px";
			}

			levelVal.style.width = levelPin.offsetLeft + "px";

			window.initSlider.callback(calculateProportion());
		}
		//слушатель для обработчика поднятия кнопки мыши
		var onPinMouseUp = function () {

			window.initSlider.callback(calculateProportion());

			document.removeEventListener("mousemove", onPinMouseMove);
			document.removeEventListener("mouseup", onPinMouseUp);
		}

		document.addEventListener("mousemove", onPinMouseMove);
		document.addEventListener("mouseup", onPinMouseUp);
	}

	levelPin.style.left = "100%";
	levelVal.style.width = "100%";

	//обработчик на нажатие и перетаскивание пина
	levelPin.addEventListener("mousedown", function (evt) {
		onMouseDown(evt);
	});

	//обработчик на нажатие и перетаскивание по линии
	levelLine.addEventListener("mousedown", function (evt) {
		var lineCoords = levelLine.getBoundingClientRect();
		levelPin.style.left = (evt.clientX - lineCoords.left) + "px";
		levelVal.style.width = levelPin.offsetLeft + "px";
		
		onMouseDown(evt);

		window.initSlider.callback(calculateProportion());
	});

	window.initSlider = {
		callback: null,
		resetSlider : function () {
			levelPin.style.left = "100%";
			levelVal.style.width = "100%";
		}
	}
})();