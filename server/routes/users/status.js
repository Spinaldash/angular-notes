'use strict';


module.exports = {
  handler: function(request, reply) {
    reply(request.auth.credentials.email);
  }
};
