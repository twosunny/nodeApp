var users = require('../../app/controller/user.server.controller');
 
module.exports = function(app) {
    app.route('/users')
    .post(users.create)
    .get(users.list);

};
