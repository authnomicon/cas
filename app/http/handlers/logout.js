exports = module.exports = function(prompt, authenticate, flow, errorLogging) {
  
  // Needs to accept both internal and external state.
  return flow('cas-logout',
    authenticate([ 'session', 'anonymous' ]),
    server.authorization(
      validateClient,
      processTransaction,
      completeTransaction
    ),
    prompt(),
    errorLogging(),
    server.authorizationErrorHandler(),
  { external: true });
};

exports['@require'] = [
  'http://i.bixbyjs.org/http/middleware/authenticate',
  'http://i.bixbyjs.org/http/middleware/state/flow',
  'http://i.bixbyjs.org/http/middleware/errorLogging'
];
