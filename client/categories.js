Meteor.subscribe('categories', 'notes');

Template.categories.helpers({
  categories: function(){
    return Categories.find({});
  },

  numberOfCategories: function(){
    return Categories.find({}).count();
  },

  notes: function(){
    return Notes.find({category: this._id});
  },

  categoryId: function(){
    return this._id;
  },

  details: function(){
    var noteDetails = Notes.findOne({_id: this._id});
    if(noteDetails.content){
      return countTheWords(noteDetails.content);
    }else{
      return 0;
    }
  }
});

Template.categories.events({
  'click .add': function(e){
    e.preventDefault();
    var categoryName = $('#category').val();
    if(categoryName.length > 3){
      var category = {};
      category.title = categoryName;
      Meteor.call("addCategory", category, function(error, result){
        if(error){
           alert(error);
           $('.alert-warning').show("slow");
           Meteor.setTimeout(function(){
             $('.alert-warning').hide("slow");
           }, 4000);
        }else{
           $('.alert-success').show("slow");
           $('#category').val("");
           Meteor.setTimeout(function(){
             $('.alert-success').hide("slow");
           }, 4000);
        }
      });
    }else{
      alert("Please add a category name!");
    }
  },

  'click .close': function(e){
    e.preventDefault();
    $('.alert-success').hide("slow");
    $('.alert-warning').hide("slow");
  },

  'click .delete': function(e){
    e.preventDefault();
    var categoryId = e.currentTarget.id;
    Session.set("categoryId", categoryId);
    Modal.show('deleteCategory');
  },

  'click .edit': function(e){
    e.preventDefault();
    var categoryId = e.currentTarget.id;
    Session.set("categoryId", categoryId);
    Modal.show('editCategory');
  },

  'click .get': function(e){
    e.preventDefault();
    var theEditorContent = $('#summernote').code();
    alert(theEditorContent);
  }
});

Template.categories.onRendered(function(){
  $(document).ready(function() {
    $('#summernote').summernote();
  });
});

Template.deleteCategory.helpers({
  category: function(){
    if(Session.get("categoryId")){
      return Categories.findOne({_id: Session.get("categoryId")});
    }else{
      return "Error!";
    }
  }
});

Template.deleteCategory.events({
  'click .deleteConfirm': function(e){
    e.preventDefault();
    if(Session.get("categoryId")){
      Modal.hide();
      var theCategoryId = Session.get("categoryId");
      Meteor.call("removeCategory", theCategoryId, function(error, result){
        if(error){
          alert(error);
        }else{
          // the category will dissapear
        }
      });
    }else{
      alert("Error");
    }
  }
});

Template.editCategory.helpers({
  category: function(){
    if(Session.get("categoryId")){
      return Categories.findOne({_id: Session.get("categoryId")});
    }else{
      return "Error!";
    }
  }
});

Template.editCategory.events({
  'click .save': function(e){
    e.preventDefault();
    var categoryId = e.currentTarget.id;
    var category = {};
    category.title = $('#title').val();
    Meteor.call("editCategory", categoryId, category, function(error, result){
      if(error){
        alert(error);
      }else{
        // the category will change its title
      }
    });
  Modal.hide();
  }
});
