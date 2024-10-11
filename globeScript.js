window.onload = function() {
    if (!TagCanvas.Start('myCanvas', 'skill-list', {
        textColour: '#ff9900',
        outlineColour: '#ff0000',
        reverse: true,
        depth: 0.8,
        maxSpeed: 0.05,
        initial: [0.2,-0.1],
        weight: true,
        zoom: 1.1,
        textFont: 'Arial',
        textHeight: 25,
        freezeActive: true,
        wheelZoom: false,
        pinchZoom: true,
        dragControl: true,
        activeCursor: 'pointer'
    })) {
        console.log('Canvas not supported');
    }
};

