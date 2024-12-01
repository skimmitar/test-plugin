(function () {
  // Плагин добавляет кнопку в главное меню
  let BoostyPlugin = {
    init: function () {
      console.log('Boosty plugin initialized');
      this.addMenuItem();
    },
    addMenuItem: function () {
      // Добавляем кнопку "Boosty" в главное меню
      Lampa.Listener.add('menu', function (e) {
        e.add({
          title: 'Boosty', // Название кнопки
          component: 'boosty', // Имя компонента (пока можно заглушку)
          page: true // Указывает, что это отдельная страница
        });
      });
    }
  };

  BoostyPlugin.init();
})();
