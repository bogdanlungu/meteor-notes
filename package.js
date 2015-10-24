Package.describe({
  name: 'bogdanlungu:meteor-notes',
  version: '1.0.0',
  summary: 'The dashboard and the functionality for the meteorNotes App.',
  git: '',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.use(['mongo','minimongo','mongo-livedata','templating'], ['client','server']);
  api.use(['sacha:spin','twbs:bootstrap','multiply:iron-router-progress', 'meteorhacks:fast-render'], 'client');

  api.use('accounts-password', ['client','server']);

  api.use(['iron:router'], ['client','server']);
  api.imply('iron:controller', ['client','server']);

  api.use('ian:accounts-ui-bootstrap-3@1.2.59', ['client','server']);

  api.addFiles(['common/router.js', 'collections/notes_collections.js', 'server/publications.js'],['client','server']);

  api.addFiles([
      'client/layout.html',
      'client/main.html',
      'client/welcome.html',
      'client/welcome.js',
      'client/stylesheets/style.css',
      'client/includes/access_denied.html',
      'client/includes/loading.html',
      'client/includes/not_found.html',
      'client/config.js'
  ],'client');

  api.addAssets(['img/preloader_sm.GIF'], 'client');
});
