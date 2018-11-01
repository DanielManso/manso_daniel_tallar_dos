window.addEventListener('load', function(){
    var carriege__value = 0;

    var carriege = JSON.parse(localStorage.getItem('carriege'));
    if (carriege === null) {
        carriege = [];
    }

    function createElements(elem){
        var section = document.createElement('section');
        section.setAttribute('class', 'check__file');

        var article1 = document.createElement('article');
        article1.setAttribute('class', 'check__img');

        var article2 = document.createElement('article');
        article2.setAttribute('class', 'check__info');

        var img = document.createElement('img');
        img.setAttribute('src', elem.product__img);

        var h2 = document.createElement('h2');
        h2.setAttribute('class', 'check__title');
        h2.innerText = elem.product__name;

        var h3 = document.createElement('h3');
        h3.innerText = elem.product__size;

        var h2_1 = document.createElement('h2');
        h2_1.innerText = elem.product__price;

        article1.appendChild(img);
        article2.appendChild(h2);
        article2.appendChild(h3);
        article2.appendChild(h2_1);

        section.appendChild(article1);
        section.appendChild(article2);

        document.querySelector('.check').appendChild(section);
    }

    carriege.forEach(function(elem){
        createElements(elem);
        carriege__value += parseFloat(elem.product__price);
    });

    document.querySelector('.total').innerText = carriege__value.toFixed(2);
});