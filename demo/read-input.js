window.__i10c = {};

window.__i10c.getInput = (inputEle) => {
    return inputEle.val;
}

window.__i10c.setInput = (inputEle, val) => {
    inputEle.value = val;
}

window.__i10c.allInput = () => {
    var elements = document.getElementsByTagName('input');
    for (var i = 0; i < elements.length; i++) {
        console.log("Found " + elements[i].value);
    }
};