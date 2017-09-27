define(['plugins/router'], function(router) {
   return {
      router: router,
      activate: function() {
          router.map([
              { route: ['', 'catalog'], title: 'Catalog', moduleId: 'viewmodels/catalog', nav: true },
              { route: 'about', title: 'About', moduleId: 'viewmodels/about', nav: true },
              { route: 'cards/:param1', hash: '#cards', title: 'Cards', moduleId: 'viewmodels/cards', nav: false }

         ]).buildNavigationModel();


         return router.activate();
      },
   };
});