import { db } from "../db";

// export const userExists = (req, res, next) => {

//    const { username,
//         firstName,
//         lastName,
//         email,
//         password,
//         reEnterPassword } = req.body; 
    
//     db.one(`select * from users where username = ${username}`, req.body)
//         .then((checkUsername) => {
//             if (username === req.body.username) {
//                 return res.status(409).json({
//                     message: 'Username you entered already exist',
//                 })
//             }
//         }
//     next();
// }