var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');

function initMap() {
  var uluru = { lat: 59.938894, lng: 30.323015 };
  var map = new google.maps.Map(
    document.getElementById('map'), { zoom: 18, center: uluru });
  var marker = new google.maps.Marker({
    position: uluru,
    map: map,
    icon: 'img/icon-map-pin.svg'
  });
}

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--open');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--open');
  }
});

document.querySelectorAll('.objects__shopping-cart').forEach(function (item) {
  item.addEventListener('click', function (evt) {
    evt.preventDefault();
    var formPopup = document.querySelector('.form-order');
    var formPopupOpen = document.querySelector('.form-order__wrapper');
    if (formPopup && formPopupOpen) {
      formPopup.classList.toggle('form-order--open');
      formPopupOpen.classList.toggle('form-order__wrapper--open');
    }
  })
})
