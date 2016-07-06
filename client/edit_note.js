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

  numberOfWords: function(){
    return Session.get("numberOfWords");
  },

  numberOfPages: function(){
    return Session.get("numberOfPages");
  }
});

Template.editNote.events({
  'click .updateNote': function(e){
    e.preventDefault();
    save();
  }
});

Template.editNote.onRendered(function(){
  $(document).ready(function() {
    $('#summernote').summernote();
  });

  watchChanges = Meteor.setInterval(function(){
    var noteContent = $('#summernote').code();
    Session.set("numberOfWords", countTheWords(noteContent).wordsCount);
    Session.set("numberOfPages", countTheWords(noteContent).pages);
  }, 500);
});

Template.editNote.onCreated(function(){
  // autosave the note every 3 minutes
  theInterval = Meteor.setInterval(save, 180000);
});

Template.editNote.onDestroyed(function(){
  Meteor.clearInterval(theInterval);
  Meteor.clearInterval(watchChanges);
});

function save(){
  var title = $('#title').val();
  var category = $('#category').val();
  var noteContent = $('#summernote').code();

  var noteId = Router.current().params._id;
  var contentNoHtml = noteContent.replace(/(<([^>]+)>)/ig, " ");
  Contributions.add(noteId, contentNoHtml);

  var error = 0;
  if((title.length < 4)){
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
    Meteor.call("updateNote", noteId, note, function(error, result){
      if(error){
        console.log(error);
      }else{
        $('.autosave').show(500);
        Meteor.setTimeout(function(){
          $('.autosave').hide(500);
        }, 3000);
      }
    });

  }else{
    NotesErrors.throwError("All fields have to be completed!");
  }
}
