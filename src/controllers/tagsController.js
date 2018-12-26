const Tool = require('../models/tools');

exports.get = async (req, res) => {

    const consulta = req.query.tag;

    try {   
          await Tool.find({ tags: consulta })
                    .then(data => { res.status(200).send(data) });
                    
    } catch (msg) {

          res.status(400).send(msg);
          
    }
};