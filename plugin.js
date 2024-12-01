(function () {
  'use strict';

  function startPlugin() {
    try {
      var manifest = {
        type: 'video',
        version: '1.0.0',
        name: 'Boosty',
        description: 'Boosty Content Viewer',
        component: 'boosty_component'
      };

      Lampa.Manifest.plugins = manifest;

      function add() {
        try {
          var button = $("<li class=\"menu__item selector\">\n            <div class=\"menu__ico\">\n                <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-zap\">\n                    <polygon points=\"13 2 3 14 12 14 11 22 21 10 12 10 13 2\"></polygon>\n                </svg>\n            </div>\n            <div class=\"menu__text\">".concat(manifest.name, "</div>\n        </li>"));

          button.on('hover:enter', function () {
            try {
              Lampa.Activity.push({
                url: '',
                title: manifest.name,
                component: manifest.component,
                page: 1
              });
            } catch (e) {
              console.error('Error during button action:', e);
              Lampa.Noty.show('Boosty action error: ' + e.message);
            }
          });

          $('.menu .menu__list').eq(0).append(button);
        } catch (e) {
          console.error('Error adding Boosty button:', e);
          Lampa.Noty.show('Boosty button error: ' + e.message);
        }
      }

      if (window.appready) {
        add();
      } else {
        Lampa.Listener.follow('app', function (e) {
          if (e.type === 'ready') add();
        });
      }
    } catch (e) {
      console.error('Error initializing Boosty plugin:', e);
      Lampa.Noty.show('Boosty plugin initialization error: ' + e.message);
    }
  }

  if (!window.boosty_plugin_ready) {
    window.boosty_plugin_ready = true;
    startPlugin();
  }
})();
