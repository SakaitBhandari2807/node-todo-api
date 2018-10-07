const bodyParser = require('body-parser');

const init=(app)=>{
    app.use(bodyParser.json());
}


module.exports={
    init
}