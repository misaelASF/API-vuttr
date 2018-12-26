const Tool = require('../models/tools');

exports.post = async (req, res) => {

     try {
            await Tool.create(req.body)
                      .then(data => { res.status(201).send(data) });

     } catch (msg) {

          res.status(400).send(msg);

     }
};

exports.get = async (req, res) => {

     try {
            await Tool.find(req.params)
                      .then(data => { res.status(200).send(data) });

     } catch (msg) {

           res.status(400).send(msg);

     }
};

exports.delete = async (req, res) => {

      try {
            await Tool.findOneAndDelete( req.params._id )
                      .then(data =>  { res.status(200).send({}) });

      } catch (msg) {

            res.status(400).send(msg);
            
      }
};
