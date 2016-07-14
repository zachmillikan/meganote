{
  angular.module('meganote.notesForm')
    .controller('NotesFormController', NotesFormController);

  NotesFormController.$inject = ['$scope', '$state', 'Flash', 'Note'];
  function NotesFormController($scope, $state, Flash, Note) {
    const vm = this;
    vm.note = vm.get();
    vm.clearForm = clearForm;
    vm.save = save;
    vm.destroy = destroy;

    /////////////////

    function get() {
      if ($state.params.noteId) {
        return Note.get({ id: $state.params.noteId });
      }
      else
        return new Note();
    }

    function clearForm() {
      vm.note = { title: '', body_html: '' };
    }

    function save() {
      if (vm.note._id) {
        Note.update(vm.note)
          .then(
            res => {
              vm.note = angular.copy(res.data);
              Flash.create('success', 'Saved!');
            },
            () => Flash.create('danger', 'Oops! Something went wrong.')
          );
      }
      else {
        Note.create(vm.note)
          .then(
            note => {
              $scope.$parent.vm.refresh();
              vm.note = note;
              Flash.create('success', 'Saved!');
              $state.go('notes.form', { noteId: vm.note._id });
            },
            () => Flash.create('danger', 'Oops! Something went wrong.')
          );
      }
    }

    function destroy() {
      Note.destroy(vm.note)
        .then(
          () => vm.clearForm()
        );
    }
  }
}
