Package.describe({
  name: 'theycallmek:accounts-douban',
  version: '0.0.1',
  summary: 'Login Service for douban',
  git: '',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.5');
  
  api.use('accounts-base', ['client', 'server']);
  api.imply('accounts-base', ['client', 'server']);
  api.use('accounts-oauth', ['client', 'server']);
  api.use('theycallmek:douban@0.0.1', ['client', 'server']);
  
  api.addFiles('accounts-douban.js');
  api.addFiles('douban_icon.less', 'client');
});

// Package.onTest(function(api) {
//   api.use('tinytest');
//   api.use('theycallmek:accounts-douban');
//   api.addFiles('accounts-douban-tests.js');
// });
