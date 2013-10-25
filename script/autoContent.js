
function init () {
	alert('hello');
$(function() {
    $("#footer").load("http://andersc.github.io/htmlPages/footer.html");
});

$(function() {
    $("#navigation").load("http://andersc.github.io/htmlPages/navigation.html");
});
}

window.addEventListener("load", init, false);