(function () {
  'use strict';

  function startPlugin() {
    Lampa.Noty.show('Hello');
    console.log('Boosty plugin initialized');
  }

  if (!window.boosty_plugin_ready) {
    window.boosty_plugin_ready = true;
    startPlugin();
  }
})();
