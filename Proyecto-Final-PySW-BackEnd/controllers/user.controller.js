const User      = require('../models/user.model');
const userCtrl  = {}
const jwt       = require('jsonwebtoken');


userCtrl.createUser = async (req, res) => {
    var user = new User(req.body);

    try {
        await user.save();

        res.json({
            'status': '1',
            'msg': 'User saved.'
        });
    } catch (error) {
        res.json({
            'status': '0',
            'msg': 'User Error.'
        });
    };
}

userCtrl.getUsers = async (req, res) => {
    var user = await User.find().populate("owner.coach").populate("owner.student");

    res.json(user);
}


userCtrl.getUserParams = async (req, res) => {
    const user = await User.findById(req.params.id);

    res.json(user);
}

userCtrl.deleteUser = async (req, res) => {
    try {
        await User.deleteOne({ _id: req.params.id });

        res.json({
            status: '1',
            msg: 'User deleted.'
        });
    } catch (error) {
        res.json({
            'status': '0',
            'msg': 'User Error.'
        });
    };
}

userCtrl.modifyUser = async (req, res) => {
    const user = new User(req.body);

    try {
        await User.updateOne({ _id: req.body._id }, user);

        res.json({
            'status': '1',
            'msg': 'User updated.'
        });
    } catch (error) {
        res.json({
            'status': '0',
            'msg': 'User Error.'
        });
    };
}


userCtrl.loginUsuario = async (req, res)=>{
    const criteria = {
    Username: req.body.username,
    Password: req.body.password
    }
    User.findOne(criteria, function(err, user) {
    if (err) {
    res.json({
    status: 0,
    message: 'error'})
    };
    if (!user) {
    res.json({
    status: 0,
    message: "not found" })
    } else {
    const unToken = jwt.sign({id: user._id, rol:user.typeUser}, "secretkey");
    res.json({
    status: 1,
    message: "success",
    username: user.username,
    owner: user.owner,
    token: unToken
    });
    }
    }).populate("owner.student").populate("owner.coach");
   }
   


module.exports = userCtrl;