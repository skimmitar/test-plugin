(function () {
  'use strict';

  function startPlugin() {
    try {
      Lampa.Noty.show('Hello');
      console.log('Boosty plugin initialized');
    } catch (e) {
      console.error('Error initializing Boosty plugin:', e);
      Lampa.Noty.show('Plugin error: ' + e.message);
    }
  }

  if (!window.boosty_plugin_ready) {
    window.boosty_plugin_ready = true;

    if (window.appready) {
      startPlugin();
    } else {
      Lampa.Listener.follow('app', function (e) {
        if (e.type === 'ready') startPlugin();
      });
    }
  }
})();
