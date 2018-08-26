import { db } from "../db";

export default class SignupUsers {

	static createUser(req, res) {
		const { username,
			firstName,
			lastName,
			email,
            password,
            reEnterPassword } = req.body;
            
        if (reEnterPassword !== password ) {
            return res.status(409).json({
                message: "password didn't match"
            });
        }


		db.none(`INSERT INTO Users(username, firstName, lastName, email, password)
            values(${username}, ${firstName}, ${lastName}, ${email}, ${password})`,
		req.body)
			.then(() => {
				res.status(201)
					.json({
						status: "success",
						message: "New user created"
					});
			})
			.catch((err) => {
				return err;
			});
	}
}