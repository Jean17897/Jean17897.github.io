let imgbackground = [];

    imgbackground[0] = '../Imagenes/rdimage1.jpg';
    imgbackground[1] = '../Imagenes/rdimage2.jpg';
    imgbackground[2] = '../Imagenes/rdimage3.jpg';

    window.onload = function() {
    var backimg = imgbackground[Math.floor(Math.random()*imgbackground.length)]
    document.body.style.backgroundImage = "url("+backimg+")";

}