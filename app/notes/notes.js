(function() {
  angular.module('meganote.notes', ['ui.router'])
  .config(notesConfig)
  .controller('NotesController', NotesController);

  notesConfig.$inject = ['$stateProvider'];
  function notesConfig($stateProvider) {
    $stateProvider

    .state('notes', {
      url: '/notes',
      templateUrl: 'notes/notes.html',
      controller: 'NotesController'
    })

    .state('notes.form', {
      url: '/:noteId',
      templateUrl: 'notes/notes-form.html'
    });
  }

  NotesController.$inject = ['$state', '$scope']
  function NotesController($state, $scope) {
    $state.go('notes.form');

    $scope.notes = [];
    $scope.note = {};
    // $scope.message = "seperate controller";
    $scope.saveNote = function() {
            $scope.notes.push($scope.note);
            $scope.note = {};
    }

    $scope.removeNote = function(index) {
      $scope.notes.splice(index, 1);
    }

    $scope.editNote = function (note) {
            // $scope.editing = true;
            $scope.note = note;
          }
  };
})();
