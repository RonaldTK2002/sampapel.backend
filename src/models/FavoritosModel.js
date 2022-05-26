const connection = require('../database/connection')

module.exports = {

    async create(produtoFavorito){

        const result = await connection('favoritos').insert(produtoFavorito);

        return result 
    },
    async getById(favoritos_id){

        const result = await connection('favoritos').where({favoritos_id}).select('*');

        return result 
    },
    
    async deleteById(favoritos_id){

        const result = await connection('favoritos').where({favoritos_id}).delete();

        return result 
    },
}