/**
 * Created by dinesh on 12/1/17.
 */
'use strict';
(function(){
    angular
        .module('crud-app')
        .controller('EditStudentController', Controller);
    Controller.$inject=['student'];

    /**
     * @method Controller
     * @description controller to manage the list of the student
     * @constructor
     */
    function Controller(student){
        var vm = this;
        activate();
        /**
         * @method activate
         * @description function to be called after controller is active
         */
        function activate(){
            vm.student = student;
        }
    }
})();