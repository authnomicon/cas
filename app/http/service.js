exports = module.exports = function(loginHandler) {
  var express = require('express');
  var router = new express.Router();
  
  router.get('/login', authenticateHandler);
  
  
  router.get('/validate', validateHandler);
  
  return router;
};

exports['@implements'] = [
  'http://i.bixbyjs.org/http/Service',
  'http://schemas.authnomicon.org/js/http/cas/Service'
];
exports['@path'] = '/login/password';
exports['@require'] = [
  './handlers/login'
];
