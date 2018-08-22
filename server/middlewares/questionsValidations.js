export const questionExists = (req, res, next) => {
    const id = parseInt(req.params.id, 10);

    if (typeof id !== "number") {
        return res.status(400).send({
            status: "Error",
            message: "Invalid Id",
        });
    }

    return next();
}

// export const questionLength = (req, res, next) => {
//         if (result.length < 1) {
//         return res.status(404).send({
//             status: "Error",
//             message: "Question is not available yet"
//         });
//     }

//     return next();
// }