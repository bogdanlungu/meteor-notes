/**
 * Iron Router configuration
 */

Router.configure({
   layoutTemplate: 'layout',
   loadingTemplate: '',
   notFoundTemplate: 'notFound',
   progressSpinner: false,
   progressDelay : false
});

Router.configure({
    waitOn: function() { return [Meteor.subscribe('categories'), Meteor.subscribe('notes')]; }
})

Router.route('/', {name: 'welcome'});
Router.route('/not_found', {name: 'notFound'});

Router.onBeforeAction(function() {
  if (! Meteor.userId()) {
    this.render('accessDenied');
  } else {
    this.next();
  }
}, {only: 'categories'});

Router.onBeforeAction(function() {
  if (! Meteor.userId()) {
    this.render('accessDenied');
  } else {
    this.next();
  }
}, {only: 'addNote'});

Router.onBeforeAction(function() {
  if (! Meteor.userId()) {
    this.render('accessDenied');
  } else {
    this.next();
  }
}, {only: 'viewNote'});

Router.onBeforeAction(function() {
  if (! Meteor.userId()) {
    this.render('accessDenied');
  } else {
    this.next();
  }
}, {only: 'editNote'});


Router.route('/categories', {name: 'categories'});
Router.route('/add-note', {name: 'addNote'});
Router.route('/view-note/:_id', {name: 'viewNote'});
Router.route('/edit-note/:_id', {name: 'editNote'});
