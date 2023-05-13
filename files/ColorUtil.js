function rgbToHex(r, g, b) {
    if (r > 255 || g > 255 || b > 255)
        throw "Invalid color component";
    return ((r << 16) | (g << 8) | b).toString(16);
}
function hexToRgb(a, value, alpha) {
    a[0] = parseInt(value.slice(1, 3), 16)
    a[1] = parseInt(value.slice(3, 5), 16)
    a[2] = parseInt(value.slice(5, 7), 16)
    a[3] = parseInt(alpha)
}