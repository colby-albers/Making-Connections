function accept(id) {
    var element = document.querySelector(id);
    element.remove();
}

function release(id) {
    var element = document.querySelector(id);
    element.remove();
}

function ChangeName() {
    var change = document.querySelector("#change");
    change.innerText = "Colby Albers";
}