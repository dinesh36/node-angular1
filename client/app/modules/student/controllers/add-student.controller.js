/**
 * Created by dinesh on 12/1/17.
 */
'use strict';
(function(){
    angular
        .module('crud-app')
        .controller('AddStudentController', Controller);
    Controller.$inject=['StudentService'];

    /**
     * @method Controller
     * @description controller to manage the list of the student
     * @constructor
     */
    function Controller(StudentService){
        var vm = this;
        vm.addStudent = addStudent;
        activate();
        /**
         * @method activate
         * @description function to be called after controller is active
         */
        function activate(){
        }

        function addStudent(){
            StudentService.addStudent()
        }
    }
})();