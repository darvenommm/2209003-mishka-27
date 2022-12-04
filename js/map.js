(function() {
  'use strict';

  const center = [59.938635, 30.323118];

  ymaps.ready(() => {
    const map = new ymaps.Map('map', {
      center: center,
      zoom: 17,
      controls: [],
    });

    const placemark = new ymaps.Placemark(
      center,
      {
        balloonContentHeader: 'Адрес',
        balloonContentBody: 'г. Санкт-Петербург ул. Большая Конюшенная д. 19/8, офис 101',
      },
      {
        iconLayout: 'default#image',
        iconImageHref: './img/icons/map-icon.svg',
        iconImageSize: [67, 100],
        iconImageOffset: [-50, -90],
      }
    );

    map.geoObjects.add(placemark);
  });
})();
