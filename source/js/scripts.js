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
