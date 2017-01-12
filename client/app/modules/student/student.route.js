(function(){
    'use strict';
    angular
        .module('crud-app')
        .config(routeConfig);
    routeConfig.$inject = ['$stateProvider'];
    function routeConfig($stateProvider){
        $stateProvider
            .state('app.student', {
                url:'/student',
                abstract:true,
                template:'<ui-view></ui-view>'
            })
            .state('app.student.list', {
                url:'/list',
                controller:'StudentListController',
                controllerAs:'vm',
                resolve: {
                    'students': ['StudentService', function (StudentService) {
                        return StudentService.getStudents();
                    }]
                },
                templateUrl: '/app/modules/student/templates/list-student.html'
            })
            .state('app.student.add', {
                url:'/add',
                controller:'AddStudentController',
                controllerAs:'vm',
                templateUrl: '/app/modules/student/templates/add-student.html'
            })
            .state('app.student.edit', {
                url:'/edit/:id',
                resolve:{
                    'student':['StudentService',function(StudentService){
                        return StudentService.getStudent();
                    }]
                },
                controller:'EditStudentController',
                controllerAs:'vm',
                templateUrl: '/app/modules/student/templates/edit-student.html'
            });
    }
})();
