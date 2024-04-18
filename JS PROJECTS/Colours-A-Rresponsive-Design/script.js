var index = 0;

function changeColrs() {
    var colors = ["red", "purple", "blue", "orange", "green", "yellow", "pink", "beige", "black", "maroon", "grey"];

    document.getElementsByTagName("body")[0].
        style.background = colors[index++];

    if (index > colors.length - 1)
        index = 0;
}

