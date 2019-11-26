import { Op } from 'sequelize'

import User from '../models/User'

export default {
    async show(req, res) {
        //Encontrar todos os usuários que tem o email do GMAIL
        //Desses usuários quero buscar todos que moram na "Avenida Brasil"
        //Desses usuários eu quero buscar as tecnologias que começam com React

        const users = await User.findAll({
            attributes: ['name', 'email'],
            where: {
                email: {
                    [Op.iLike]: "%@gmail.com"
                }
            },
            include: [
                {
                    association: "addresses", where: { street : "Avenida Brasil" }
                },
                {
                    association: "techs",
                    required: false,
                    where: {
                        name: {
                        [Op.iLike]: "React%"
                        }
                    }
                }
            ]

        })
        return res.json(users)
    
    }
}