import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export class Helper {
// hint from code mentor tutorials @OlawaleAladeusi

    //Hash Password Method
    static hashPassword (password) {
        return bcrypt.hashSync(password, 8);
    }

    //comparePassword
    static comparePassword (hashPassword, password) {
        return bcrypt.compareSync(password, hashPassword);
    }

    //isValidEmail helper method
    static isValidEmail(email) {
        return /\S+@\S+\.\S+/.test(email);
    }

    //Generate Token
    static generateToken(id, email, password) {
        const token = jwt.sign({
            userId: id,
            email: email,
            password: password
        },
            process.env.SECRET_KEY, { expiresIn: "2d" }
        );
        return token;
    }
}