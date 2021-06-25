const Posting = require('../models/posting.model');
const postingCtrl = {};

postingCtrl.createPosting = async(req, res) => {
    var posting = new Posting(req.body);

    try {
        await posting.save();

        res.json({

            'status': '1',
            'msg': 'Posting saved.'
        });
    } catch (error) {
        res.json({
            'status': '0',
            'msg': 'Posting Error.' + error
        });
    };
}

postingCtrl.getPostings = async(req, res) => {
    var posting = await Posting.find().exec();

    res.json(posting);
}


postingCtrl.getPostingParams = async(req, res) => {
    const posting = await Posting.findById(req.params.id);

    res.json(posting);
}

postingCtrl.deletePosting = async(req, res) => {
    try {
        await Posting.deleteOne({ _id: req.params.id });

        res.json({
            status: '1',
            msg: 'Posting deleted'
        });
    } catch (error) {
        res.json({
            'status': '0',
            'msg': 'Posting Error.'
        });
    };
}

postingCtrl.modifyPosting = async(req, res) => {
    const posting = new Posting(req.body);

    try {
        await Posting.updateOne({ _id: req.body._id }, posting);

        res.json({
            'status': '1',
            'msg': 'Posting updated.'
        })
    } catch (error) {
        res.json({
            'status': '0',
            'msg': 'Posting Error.'
        });
    };
}

module.exports = postingCtrl;