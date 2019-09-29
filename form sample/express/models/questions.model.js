const db = require('../bootstrap/db');
const Schema = db.Schema;


const QuestionsSchema = new Schema ({
    title:               {type: String, require:true, unique: true},
    question1:           {type: String, require:true, unique: true},
    answer1_a:           {type: String, require:true},
    answer1_b:           {type: String, require:true},
    answer1_c:           {type: String, require:true},
    correctAnswer1:     {type: String, require:true}
    
    


},{
    collection: 'everything',
    timestamps: true
})


module.exports = db.model('Questions', QuestionsSchema);
