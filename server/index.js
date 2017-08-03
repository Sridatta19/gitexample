

// Start our app!
const app = require('./server');
app.set('port', process.env.PORT || 3001);
const server = app.listen(app.get('port'), () => {
  console.log(`Express running on PORT ${server.address().port}`);
});
