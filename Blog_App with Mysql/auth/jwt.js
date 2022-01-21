const jwt = require('jsonwebtoken')

const generatToken = (data) => {
    const token = jwt.sign(data, 'nasir')
    return token

}
const accessToken = (req,res,next) => {
    const token=req.headers.cookie.split("=")[1]
    // const token=req.headers.cookie.split("=")[0]
    const decoded = jwt.verify(token,'nasir')
    req.data=decoded
    next()

}
module.exports ={generatToken,accessToken}
