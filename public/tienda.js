window.addEventListener('load', function () {

    var carriege__value = 0;

    var carriege = JSON.parse(localStorage.getItem('carriege'));
    if (carriege === null) {
        carriege = [];
    }

    iconBuy();

    document.querySelector('.description__buy').addEventListener("click", function (event) {
        event.preventDefault();
        var elemen = document.querySelector('.description__buy');
        console.log(elemen);
        let parent = elemen.parentElement.parentElement.parentElement.parentElement;

        let product = {
            product__name: parent.querySelector('h1').innerText,
            product__price: parent.querySelector('h2').innerText,
            product__size: parent.querySelector('h3').innerText,
            product__img: parent.querySelector('.infoProduct img').getAttribute('src'),
        };

        carriege.push(product);
        localStorage.setItem('carriege', JSON.stringify(carriege));
        console.log(carriege);
        iconBuy();
    });

    iconBuy();
    console.log(carriege);

    function iconBuy() {
        carriege.forEach(function (elemen) {
            carriege__value += parseFloat(elemen.product__price);
        });
        document.querySelector('.nav__tags p').innerText = carriege.length;
    }
});