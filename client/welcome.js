Template.welcome.helpers({
  loggedIn: function () {
    return Meteor.user();
  },

  redirectToCategories: function () {
    Router.go('categories');
  }
});

Template.welcome.onRendered(function () {
  new WOW().init();
});
