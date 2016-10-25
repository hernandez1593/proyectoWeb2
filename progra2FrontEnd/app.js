'use strict';
angular.module('app', ['ui.router'])
//.constant('API_URL','localhost:8000/proyectoWeb2/progra2FrontEnd/index.html')
.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/login');
    $stateProvider
        .state('home',{
            url: '/home',
            templateUrl: './home.module/home.view.html',
            controller: 'homeController',
            controllerAs: 'home'

        })
        .state('login',{
            url: '/login',
            templateUrl: './login_register.module/login_register.view.html',
            controller: 'loginRegisterController',
            controllerAs: 'loginRegister'

        })
        /*.state('tours',{
            url: '/tours',
            templateUrl: '/tours/tours.html',
            controller: 'toursCtrl',
            controllerAs: 'tours'
        });*/
});


