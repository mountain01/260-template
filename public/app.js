const app = angular.module('app', ['ui.router']);


//=================== Components =================== \\

app.component('main', {
  templateUrl: './components/main.component.html',
  bindings: {},
  controller: class MainComponent {
    constructor() {};
    $onInit() {};
    static get $inject() {
      return [];
    }
  }
});
app.component('admin', {
  templateUrl: './components/admin.component.html',
  bindings: {},
  controller: class AdminComponent {
    constructor() {};
    $onInit() {};
    static get $inject() {
      return [];
    }
  }
});
app.component('voter', {
  templateUrl: './components/voter.component.html',
  bindings: {},
  controller: class VoterComponent {
    constructor() {};
    $onInit() {};
    static get $inject() {
      return [];
    }
  }
});

//=================== Config =================== \\

app.config(function ($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state({
      name: 'main',
      url: '/main',
      component: 'main'
    })
    .state({
      name: 'admin',
      url: '/admin',
      component: 'admin'
    })
    .state({
      name: 'voter',
      url: '/voter',
      component: 'voter'
    });
  $urlRouterProvider.otherwise('main');
})