(function () {
    document.querySelector(".upload-overlay").classList.remove("hidden");
    var levelPin = document.querySelector(".upload-effect-level-pin");
    var levelVal = document.querySelector(".upload-effect-level-val");
    var levelLine = document.querySelector(".upload-effect-level-line");    

    levelPin.addEventListener("mousedown", function (evt) {
        evt.preventDefault();
        var startX = evt.clientX; 
        var maxValue = levelLine.offsetWidth;
        
        var onPinMouseMove = function (moveEvt) {
            var moveOrigin = moveEvt.clientX;
            var lineCoords = levelLine.getBoundingClientRect();
            var shiftX = startX - moveEvt.clientX;
            startX = moveEvt.clientX;

            if (moveOrigin >= lineCoords.left && moveOrigin <= lineCoords.left + maxValue) {
                levelPin.style.left = (levelPin.offsetLeft - shiftX) + "px";                
            } else if (moveOrigin < lineCoords.left) {
                levelPin.style.left = 0 + "px";
            } else if (moveOrigin > lineCoords.left + maxValue) {
                levelPin.style.left = maxValue + "px";
            }

            levelVal.style.width = levelPin.offsetLeft + "px";

            // window.changeEffectValue();
        }
        
        var onPinMouseUp = function () {            
            // changeEffectValue();
            document.removeEventListener("mousemove", onPinMouseMove);
            document.removeEventListener("mouseup", onPinMouseUp);
        }
        
        document.addEventListener("mousemove", onPinMouseMove);
        document.addEventListener("mouseup", onPinMouseUp);
    });
})();