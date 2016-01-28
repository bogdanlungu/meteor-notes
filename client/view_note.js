countTheWords = function(string){
  // Check if the string has tags in it
  // Fixed also the bug when the user was deleting all the tags from the editor -> view source
  if(string){
  var str = string.replace(/(<([^>]+)>)/ig, " ");
  var obj = {};
  obj.wordsCount = Contributions.countWords(str);
  var pages = obj.wordsCount / 350;
  pages = parseFloat(pages);
  obj.pages = pages.toFixed(2);
  return obj;
  }
}

Template.viewNote.helpers({
  note: function(){
    return Notes.findOne({_id: Router.current().params._id});
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

Template.viewNote.events({
  'click .deleteNote': function(e){
    e.preventDefault();
    var noteId = e.currentTarget.id;
    Session.set("noteId", noteId);
    Modal.show('deleteNote');
  },

  'click .editNote': function(e){
    e.preventDefault();
    var noteId = e.currentTarget.id;
    Router.go('/edit-note/'+noteId);
  }
});

Template.deleteNote.helpers({
  note: function(){
    if(Session.get("noteId")){
      return Notes.findOne({_id: Session.get("noteId")});
    }
  }
});

Template.deleteNote.events({
  'click .deleteConfirm': function(e){
    e.preventDefault();
    Meteor.call("removeNote", Session.get("noteId"), function(error, result){
      if(error){
        NotesErrors.throwError(error);
      }else{
        Modal.hide();
        Router.go('/categories');
      }
    });
  }
});
