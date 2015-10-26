Template.editNote.helpers({
  note: function(){
    return Notes.findOne({_id: Router.current().params._id});
  },

  categories: function(){
    return Categories.find({});
  },

  checkCategory: function(){
    var noteDetails = Notes.findOne({_id: Router.current().params._id});
    if(noteDetails.category == this._id){
      return true;
    }
  },

  lastUpdated: function(){
    if(!this.updated){
      return this.note.date;
    }else{
      return this.note.updated;
    }
  },

  countWords: function(){
    var noteDetails = Notes.findOne({_id: Router.current().params._id});
    if(noteDetails.content){
      return countTheWords(noteDetails.content);
    }else{
      return 0;
    }
  }
});

Template.editNote.events({
  'click .updateNote': function(e){
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
      var noteId = e.currentTarget.id;
      Meteor.call("updateNote", noteId, note, function(error, result){
        if(error){
          alert(error);
        }else{
          $('.alert-success').show("slow");
          Meteor.setTimeout(function(){
            $('.alert-success').hide("slow");
          }, 2000);
        }
      });
    }else{
      alert("All fields have to be completed!");
    }
  }
});

Template.editNote.onRendered(function(){
  $(document).ready(function() {
    $('#summernote').summernote();
  });
});
