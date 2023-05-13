var self = this

function hideElement(e) {
    e.style.display = "none";
}
function get(eA, callback) {
    for (e in eA)
        self[eA[e]] = document.getElementById(eA[e])
    callback()
}
function copySize(a, b) {
    b.width = a.width
    b.height = a.height
}