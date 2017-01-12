/**
 * Created by dinesh on 10/1/17.
 */
/**
 * Created by maulikpatel on 12/6/16.
 */
'use strict';
(function(){
    angular
        .module('crud-app')
        .factory('StudentService', Service);
    Service.$inject = ['$http','$q'];
    function Service($http,$q){
        return {
            getStudents:getStudents,
            getStudent:getStudent,
            addStudent:addStudent,
            deleteStudent:deleteStudent,
            updateStudent:updateStudent
        };

        /**
         * @method getStudents
         * @description function to get the students
         */
        function getStudents(){
            var defer = $q.defer();
            $http({
                method:'get',
                url:'/products'
            }).then(function(response){
                defer.resolve(response.data);
            }).catch(function(){
                defer.reject();
            });
            return defer.promise;
        }

        /**
         * @method getStudents
         * @description function to get the students
         * @param studentID
         */
        function getStudent(studentID){
            var defer = $q.defer();
            $http({
                method:'get',
                url:'/products/'+studentID
            }).then(function(response){
                defer.resolve(response.data);
            }).catch(function(){
                defer.reject();
            });
            return defer.promise;
        }

        /**
         * @method addStudent
         * @description function to add the student
         */
        function addStudent(data){
            var defer = $q.defer();
            $http({
                method:'post',
                url:'/products',
                data:data
            }).then(function(response){
                defer.resolve(response.data);
            }).catch(function(){
                defer.reject();
            });
            return defer.promise;
        }

        /**
         * @method deleteStudent
         * @description function to add the student
         * @param studentId
         */
        function deleteStudent(studentId){
            var defer = $q.defer();
            $http({
                method:'delete',
                url:'/products/'+studentId
            }).then(function(response){
                defer.resolve(response.data);
            }).catch(function(){
                defer.reject();
            });
            return defer.promise;
        }

        /**
         * @method updateStudent
         * @description function to update Student
         * @param studentId
         */
        function updateStudent(studentId){
            var defer = $q.defer();
            $http({
                method:'put',
                url:'/products/'+studentId
            }).then(function(response){
                defer.resolve(response.data);
            }).catch(function(){
                defer.reject();
            });
            return defer.promise;
        }
    }
})();
