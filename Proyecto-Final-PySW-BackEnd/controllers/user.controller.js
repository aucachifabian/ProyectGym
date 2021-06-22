const User      = require('../models/user.model');
const userCtrl  = {}
const jwt       = require('jsonwebtoken');

User.createIndexes();

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
            'msg': 'User Error.'+error
        });
    };
}

userCtrl.getUsers = async (req, res) => {
    var user = await User.find().populate("coach").populate("student");

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


userCtrl.loginUsuario = async (req, res) => {
    console.log(req.body);

    const criteria = {
        user_name   : req.body.user_name,
        password    : req.body.password
    }

   await User.findOne(criteria, function(err, user) {
        if (err) {
            //console.log("paso x1");

            res.json({
                'status': '0',
                'msg'   : 'error'
            });
        };
        
        if (!user) {
            console.log("paso x2");

            res.json({
                'status': '0',
                'msg'   : "not found" 
            });

        } else {
          //  console.log("paso x3");

            const unToken = jwt.sign({_id : user._id, rol : user.type_user}, "secretkey");
            console.log(" student :  " + user.student)
            console.log("  coach  :  "  + user.coach)
            res.json({
                'status'    : '1',
                'msg'       : 'success',
                'type_user' : user.type_user,
                 'userStudent' : user.student,
                 "userCoach" : user.coach,
                //'owner'     : user.owner,
                'token'     : unToken
                
            });
          

        //    console.log("paso x4");
        };
      //  console.log("paso x5");
    }).populate("student").populate("coach");
}
   


module.exports = userCtrl;