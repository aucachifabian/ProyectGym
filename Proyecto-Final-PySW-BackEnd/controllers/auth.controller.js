//importamos el manejador de token
const jwt = require('jsonwebtoken');
const authCtrl = {}
const User = require('../models/user.model');
    
authCtrl.verifyToken = async (req, res, next)=>{
   if(!req.headers.authorization){
      res.json({ 'status':'0', 'msg': 'Unauthorized request.'})
    }
    var arrayTexto = req.headers.authorization.split(' ');
    var token = null;
    (arrayTexto.length >=2)?token=arrayTexto[1]:token=null;
    if(token==null){
    res.json({ 'status':'0', 'msg': 'Unauthorized request.'});
    }else{
    try {
    const payload = jwt.verify(token, "secretkey");
    req.userId = payload._id;
    req.rol = payload.rol;
    next();
    } catch (error) {
    res.json({ 'status':'0', 'msg': 'Unauthorized request.'});
    }
 }
}

authCtrl.isStudent = async (req, res, next) => {
let user = null;
  try {
      user = await User.findById(req.userId);
      if(user!=null)
        { next();
          return;
        }
      return res.status(403).json({ message: "Require Moderator Role!" });
    } catch (error) {
      console.log(error)
      return res.status(500).send({ message: error });
    }
  };
//exportamos el manejador de token
module.exports= authCtrl;