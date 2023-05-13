function transparentImage(ctx, p, c) {
    var imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    var data = imageData.data;
    p[3] = alpha.value
    o = [parseInt(r.value), parseInt(g.value), parseInt(b.value), parseInt(a.value)]
    for (var i = 0; i < data.length; i += 4) {
        if ((p[0] + o[0] >= data[i] && p[0] - o[0] <= data[i]) &&
            (p[1] + o[1] >= data[i + 1] && p[1] - o[1] <= data[i + 1]) &&
            (p[2] + o[2] >= data[i + 2] && p[2] - o[2] <= data[i + 2]) &&
            (p[3] + o[3] >= data[i + 3] && p[3] - o[3] <= data[i + 3])) {
            data[i] = c[0]
            data[i + 1] = c[1]
            data[i + 2] = c[2]
            data[i + 3] = c[3]
        }

    }
    
    ctx.putImageData(imageData, 0, 0)
}