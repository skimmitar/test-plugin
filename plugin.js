// Boosty Plugin for LAMPA
(function () {
  let BoostyPlugin = {
    init: function () {
      console.log('Boosty plugin initialized');
      Lampa.Component.add('boosty', BoostyPlugin.createComponent());
      BoostyPlugin.addMenuItem();
    },
    createComponent: function () {
      return {
        name: 'boosty',
        create: function () {
          this.html(`<div class="boosty-container">
                        <h1>Добро пожаловать в Boosty</h1>
                        <p>Здесь будет отображаться ваш контент.</p>
                    </div>`);
        }
      };
    },
    addMenuItem: function () {
      Lampa.Listener.add('menu', function (e) {
        e.add({
          title: 'Boosty',
          component: 'boosty',
        });
      });
    }
  };

  BoostyPlugin.init();
})();
