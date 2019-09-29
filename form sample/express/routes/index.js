module.exports = (app) => {

  app.use('/api/v1/questions', require('./questions.route'));


}
