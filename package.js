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
  api.use(['sacha:spin','twbs:bootstrap','multiply:iron-router-progress', 'meteorhacks:fast-render', 'peppelg:bootstrap-3-modal', 'summernote:summernote', 'timmyg:wow'], 'client');
  api.use(['bogdanlungu:meteor-notes-errors'], 'client');
  api.use('bogdanlungu:meteor-notes-contributions', ['client', 'server']);
  api.use('accounts-password', ['client','server']);

  api.use(['iron:router'], ['client','server']);
  api.imply('iron:controller', ['client','server']);

  api.use('ian:accounts-ui-bootstrap-3@1.2.59', ['client','server']);

  api.addFiles(['common/router.js', 'collections/notes_collections.js', 'server/publications.js', 'server/permissions.js'],['client','server']);

  api.addFiles([
      'client/layout.html',
      'client/main.html',
      'client/welcome.html',
      'client/welcome.js',
      'client/stylesheets/style.css',
      'client/includes/access_denied.html',
      'client/includes/loading.html',
      'client/includes/not_found.html',
      'client/categories.html',
      'client/categories.js',
      'client/add_note.html',
      'client/add_note.js',
      'client/view_note.html',
      'client/view_note.js',
      'client/edit_note.html',
      'client/edit_note.js',
      'client/config.js',
      'client/loader.html'
  ],'client');

  api.addAssets(['img/preloader_sm.GIF',
  'img/meteorNotes-is-responsive.png',
  'img/meteorNotes-responsive.png',
  'img/create-account-2.png',
  'img/create-account.png',
  'img/create-categories-2.png',
  'img/create-categories.png',
  'img/add-note.png',
  'img/track-contributions.png'
  ],
  'client');

  api.export('Categories');
  api.export('Notes');
});
