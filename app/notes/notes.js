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

  NotesController.$inject = ['$state', '$scope', 'NotesService']
  function NotesController($state, $scope, NotesService) {
    $state.go('notes.form');

    NotesService.getNotes()
      .then(function() {
        $scope.notes = NotesService.notes;
      });

    $scope.note = {};
    // $scope.message = "seperate controller";
    $scope.saveNote = function() {
      NotesService.create($scope.note)
      $scope.note = { title: '', body_html: ''};
    }
    $scope.editNote = function (note) {
            // $scope.editing = true;
      $scope.note = note;
    }
    $scope.removeNote = function(index) {
      $scope.notes.splice(index, 1);
    }
  };
})();
