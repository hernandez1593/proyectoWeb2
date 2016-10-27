'use strict';

angular.module('app')
    .controller('loginRegisterController', ['$state', function ($stateProvider) {
        var th = this;

        th.register = {
            name: '',
            lastname: '',
            email: '',
            password: ''
        };

        th.login = {
            user: '',
            password: ''
        };

        th.x = function () {
            console.log(th.register);

        };

    }]);