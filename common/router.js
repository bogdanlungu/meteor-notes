/**
 * Iron Router configuration
 */

Router.configure({
   layoutTemplate: 'layout',
   loadingTemplate: 'loading',
   notFoundTemplate: 'notFound',
   progressSpinner: false,
   progressDelay : false
});

Router.route('/', {name: 'welcome'});
Router.route('/not_found', {name: 'notFound'});
