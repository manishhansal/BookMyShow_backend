// const userModel = require('../Models/userModel');
// const JWTService = require('../CommonLib/JWTtoken');
// const encryptDecrypt = require('../CommonLib/encryption-decryption');
// const tokenModel = require('../Models/token');
// const constantObj = require('../CommonLib/constant');


// async function googleLogin(req, res) {

//     // let email = req.user.email;
//     // res.user = req.user;
//     // //check for email
//     // const userDetail = await userModel.findOne({ email });

//     if (userDetail) {
//         //create token and send back to FE
//         let obj = {
//             firstName: userDetail.firstName,
//             lastName: userDetail.lastName,
//             age: userDetail.age,
//             phoneNo: userDetail.phoneNo,
//             email: userDetail.email,
//             gender: userDetail.gender

//         }
//         let JWTtoken = JWTService.generateToken(obj);
//         delete userDetail.password;
//         await tokenModel.insertMany([{ userId: userDetail._id, token: JWTtoken }]);
//         res.status(200).json(
//             {
//                 message: "Success login",
//                 token: JWTtoken,
//                 userDetail
//             });
//     } else {
//         let lastUser = await userModel.find({}).sort({ id: -1 }).limit(1);
//         let encryptedPassword = encryptDecrypt.encryptPassword("kjdslkjadkj@23144$$");
//         let userDetailObj = {
//             firstName: req.user.given_name,
//             lastName: req.user.family_name,
//             age: -1,
//             phoneNo: -1,
//             email,
//             gender: "NA",
//             password: encryptedPassword,
//             role: "USER"
//         }
//         let response = await userModel.insertMany([userDetailObj]);
//         delete userDetailObj.password;
//         let JWTtoken = JWTService.generateToken(userDetailObj);
//         delete response[0].password;
//         await tokenModel.insertMany([{ userId: response[0]._id, token: JWTtoken }]);

//         res.status(200).json(
//             {
//                 message: "Registeration Success",
//                 token: JWTtoken,
//                 userDetail: response
//             });

//     }

// }

// async function failedGoogleLogin(req, res, next) {

//     res.status(500).json({ status: constantObj.status.FAILED, message: "Google login failed" });
// }

// module.exports = {
//     googleLogin,
//     failedGoogleLogin
// }