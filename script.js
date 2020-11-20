var toggleButton = (function() {
    var first = true;
    return function() {
        first ? openNav() : closeNav();
        first = !first;
    }
})();

function openNav() {
    document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
};