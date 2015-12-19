Template.addNote.helpers({
  categories: function(){
    return Categories.find({});
  }
});

Template.addNote.events({
  'click .create': function(e){
    e.preventDefault();
    var title = $('#title').val();
    var category = $('#category').val();
    var noteContent = $('#summernote').code();
    var error = 0;
    if(!(title.length > 4)){
      error = 1;
    };

    if(category == 0){
      error = 1;
    };

    if(noteContent == 0){
      error = 1;
    }

    if(error == 0){
      var note = {};
      note.title = title;
      note.category = category;
      note.content = noteContent;
      Meteor.call("addNote", note, function(error, result){
        if(error){
          alert(error);
        }else{
          // alert("The note was saved in the database");
          var theId = result;
          Router.go('editNote', {_id: theId});
          var contentNoHtml = $(noteContent).text();
          Contributions.addFirstLog(theId, contentNoHtml);
        }
      });
    }else{
      alert("Please complete all the fields!");
    }
  }
});

Template.addNote.onRendered(function(){
  $(document).ready(function() {
    $('#summernote').summernote();
  });
});
