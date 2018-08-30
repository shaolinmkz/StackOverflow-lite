export const signupValidation = (req, res, next) => {

    const { username,
        firstName,
        lastName,
        email,
        password,
        reEnterPassword } = req.body;

    if (!username || !firstName || !lastName || !email || !password || !reEnterPassword) {
        return res.status(400)
            .json({
                status: "Error",
                message: "A field or more is empty"
            });
    }
    if (password !== reEnterPassword) {
        return res.status(422) //Unprocessable Entity
            .json({
                status: "Error",
                message: "Password doesn't match"
            });
    }
    if (typeof username !== "string" || typeof firstName !== "string" || typeof lastName !== "string" || typeof email !== "string" || typeof password !== "string") {
        return res.status(400)
            .json({
                status: "Error",
                message: "Invalid input"
            });
    }
    if (typeof username === "number" || typeof firstName === "number" || typeof lastName === "number" || typeof email === "number") {
        return res.status(400)
            .json({
                status: "Error",
                message: "A field or more has an invalid input"
            });
    }
    next();
}

export const loginValidation = (req, res, next) => {

    const { 
        email,
        password } = req.body;

    if (!email || !password ) {
        return res.status(400)
            .json({
                status: "Error",
                message: "A field or more is empty"
            });
    }

    if (typeof email !== "string" || typeof password !== "string") {
        return res.status(400)
            .json({
                status: "Error",
                message: "Invalid input"
            });
    }

    if (typeof email === "number") {
        return res.status(400)
            .json({
                status: "Error",
                message: "A field or more has an invalid input"
            });
    }
    next();
}