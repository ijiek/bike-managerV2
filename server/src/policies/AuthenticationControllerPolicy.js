const Joi = require('joi') // framework used for validation

module.exports = {
    register(req, res, next) {
        const schema = {
            email: Joi.string().email(),
            password: Joi.string().regex(
                new RegExp('^[a-zA-Z0-9]{8,32}$ ') // requirements and limits for password 
            )
        }

        // const { error, value } = Joi.validate(req.body, schema)
        const { error } = Joi.validate(req.body, schema)

        if (error) {
            switch (error.detail[0].context.key) {
                case 'email':
                    res.status(400).send({
                        error: 'this is not a valid email, please provide a valid email adress'
                    })
                    break
                case 'password':
                    res.status(400).send({
                        error: `The password must only have: 
                        <br> - lowercase, uppercase letteres
                        <br> - a minimum 8 characters and a maximum 32
                     `
                    })
                    break
                default:
                    res.status(400).send({
                        error: 'The information entered is invalid '
                    })

            }
        } else {
            next()
        }
    }
}