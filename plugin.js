(function () {
  'use strict';

  function startPlugin() {
    var manifest = {
      type: 'video',
      version: '1.0.0',
      name: 'Boosty', // Название кнопки
      description: 'Просмотр контента Boosty',
      component: 'boosty_component' // Имя компонента
    };

    // Регистрация манифеста
    Lampa.Manifest.plugins = manifest;

    // Функция добавления кнопки в меню
    function add() {
      var button = $("<li class=\"menu__item selector\">\n            <div class=\"menu__ico\">\n                <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-zap\">\n                    <polygon points=\"13 2 3 14 12 14 11 22 21 10 12 10 13 2\"></polygon>\n                </svg>\n            </div>\n            <div class=\"menu__text\">".concat(manifest.name, "</div>\n        </li>"));

      button.on('hover:enter', function () {
        Lampa.Activity.push({
          url: '', // Если URL нужен, можно указать ссылку
          title: manifest.name,
          component: manifest.component, // Ссылка на компонент
          page: 1
        });
      });

      // Добавляем кнопку в главное меню
      $('.menu .menu__list').eq(0).append(button);
    }

    // Добавляем кнопку при готовности приложения
    if (window.appready) {
      add();
    } else {
      Lampa.Listener.follow('app', function (e) {
        if (e.type == 'ready') add();
      });
    }
  }

  // Запуск плагина только один раз
  if (!window.boosty_plugin_ready) {
    window.boosty_plugin_ready = true;
    startPlugin();
  }
})();
