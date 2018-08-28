import { db } from "../db/queries";

export default class SignupUsers {

	static createUser(req, res, next) {
		const { username,
				firstName,
				lastName,
				email,
         	    passwd,
         	    reEnterPasswd } = req.body;
            
        if (reEnterPasswd !== passwd ) {
            return res.status(409).json({
                message: "password didn't match"
            });
        }


		db.none("INSERT INTO Users(username, firstName, lastName, email, password)" + 
		"VALUES(${username}, ${firstName}, ${lastName}, ${email}, ${password})",
			req.body)
			.then(() => {
				res.status(201)
					.json({
						status: "success",
						message: "New user created"
					});
			})
			.catch((err) => {
				return next(err);
			});
	}
}