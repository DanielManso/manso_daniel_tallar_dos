var setBackgroundImage = setInterval(changeImage, 5000);
var imageSource = ["url(./imagenes/footerDos2.png)", "url(./imagenes/footerTres3.png)", "url(./imagenes/footerTres4.png)", "url(./imagenes/footerTres5.png)", "url(./imagenes/footerUno.png)"];
var imageGalery = ["./imagenes/galeriaUno1.png", "./imagenes/galeriaUno2.png", "./imagenes/galeriaUno.png", ];
var index = 0;

function changeImage() {
    if (index === imageSource.length) {
        index = 0;
    }
    document.getElementById("headerimg").style.backgroundImage = imageSource[index];
    index++;
}

var setImage = setInterval(changeImg, 3500);
var imageGalery = ["./imagenes/galeriaUno1.png", "./imagenes/galeriaUno2.png", "./imagenes/galeriaUno.png", ];
var imageGalery2 = ["./imagenes/galeriaDos1.png", "./imagenes/galeriaDos2.png", "./imagenes/galeriaDos.png", ];
var imageGalery3 = ["./imagenes/galeriaTres1.png", "./imagenes/galeriaTres2.png", "./imagenes/galeriaTres.png", ];
var imageGalery4 = ["./imagenes/galeriaCuatro1.png", "./imagenes/galeriaCuatro2.png", "./imagenes/galeriaCuatro.png", ];
var imageGalery5 = ["./imagenes/galeriaCinco1.png", "./imagenes/galeriaCinco2.png", "./imagenes/galeriaCinco.png", ];
var imageGalery6 = ["./imagenes/galeriaSeis1.png", "./imagenes/galeriaSeis2.png", "./imagenes/galeriaSeis.png", ];
var index2 = 0;
var indexx = 0;
var indexxx = 0;
var indexxxx = 0;
var indexxxxx= 0;
var indexxxxxx = 0;

function changeImg() {
    
    if (indexx ===  imageGalery2.length) {
        indexx = 0;
    }
   
    if (indexxxx ===  imageGalery4.length) {
        indexxxx = 0;
    }
  
    if (indexxxxxx ===  imageGalery6.length) {
        indexxxxxx = 0;
    }

    document.getElementById("gallery_two").src= imageGalery2[indexx];
    document.getElementById("gallery_four").src= imageGalery4[indexxxx];
    document.getElementById("gallery_six").src= imageGalery6[indexxxxxx];
    indexx++;
    indexxxx++;
    indexxxxxx++;
}

var setImageSlow = setInterval(changeImageSlow, 5000);

function changeImageSlow() {
    if (index2 ===  imageGalery.length) {
        index2 = 0;
    }
   
    if (indexxx ===  imageGalery3.length) {
        indexxx = 0;
    }
   
    if (indexxxxx ===  imageGalery5.length) {
        indexxxxx = 0;
    }
   

    document.getElementById("gallery_one").src= imageGalery[index2];
    document.getElementById("gallery_three").src= imageGalery3[indexxx];
    document.getElementById("gallery_five").src= imageGalery5[indexxxxx];
    
    index2++;
    indexxx++;
    indexxxxx++;
}



var image = document.getElementById("interaction__img");
var imageG = ["./imagenes/intraction1.png", "./imagenes/intraction2.png","./imagenes/intraction3.png","./imagenes/intraction4.png","./imagenes/intraction5.png", "./imagenes/intraction6.png","./imagenes/intraction7.png","./imagenes/intraction8.png","./imagenes/intraction9.png","./imagenes/intraction10.png","./imagenes/intraction11.png","./imagenes/intraction12.png","./imagenes/intraction13.png","./imagenes/intraction14.png","./imagenes/intraction15.png","./imagenes/intraction16.png","./imagenes/intraction17.png","./imagenes/intraction18.png","./imagenes/intraction19.png","./imagenes/intraction20.png","./imagenes/intraction21.png","./imagenes/intraction22.png","./imagenes/intraction23.png","./imagenes/intraction1.png"];
var indexxx = 0;

document.querySelector("#interaction__img").addEventListener("click", function(){
    if (indexxx ===23) {
        indexxx = 0;
    }
    indexxx +=1;
    image.src = imageG[indexxx]
    console.log(image.src);
});