/**
 * Created by dinesh on 12/1/17.
 */
'use strict';
(function(){
    angular
        .module('crud-app')
        .controller('StudentListController', Controller);
    Controller.$inject=['students'];

    /**
     * @method Controller
     * @description controller to manage the list of the student
     * @constructor
     */
    function Controller(students){
        var vm = this;
        activate();
        /**
         * @method activate
         * @description function to be called after controller is active
         */
        function activate(){
            vm.studentList = students;
        }
    }
})();