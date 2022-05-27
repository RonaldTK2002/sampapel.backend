const connection = require('../database/connection')

module.exports = {

    async create(produtoFavorito){

        const result = await connection('favoritos').insert(produtoFavorito);

        return result 
    },
    async getById(user_id){

        const result = await connection('favoritos').where({user_id}).select('*');

        return result 
    },
    
    async deleteById(produtos_id){

        const result = await connection('favoritos').where({produtos_id}).delete();

        return result 
    },
}