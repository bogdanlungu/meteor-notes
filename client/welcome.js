Template.welcome.helpers({
   loggedIn: function() {
      return Meteor.user();
   }
});

Template.layout.helpers({

});

Template.welcome.onRendered(function(){
  new WOW().init();
});
