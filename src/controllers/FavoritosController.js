const FavoritosModel = require('../models/FavoritosModel');


module.exports = {

    async create(request,response){
        try{
            const user_id = request.session.user
        const produtoFavorito = request.body;
        const result = await FavoritosModel.create(produtoFavorito);
        
        return response.status(200).json({favoritos_id:result[0]})
    }catch(error){
        console.warn('Favoritos creation failed' + error)
        return response.status(500).json({
            notification: "Internal server error while trying to create Favoritos",
          });
    }
},
async getById(request,response){
    try{
    const {favoritos_id} = request.params;
    const result = await FavoritosModel.getById(favoritos_id)
    
    if (result != 0 )
    return response.status(200).json({notification: 'favoritos get successfully'})
    else 
    response.status(400).json({notification:'favoritos get failed'})
}catch(error){
    console.warn('Favoritos get failed' + error)
    return response.status(500).json({
        notification: "Internal server error while trying to get Favoritos",
      });
}
},
async delete(request,response){
    try{
    const {favoritos_id} = request.params;
    const result = await FavoritosModel.deleteById(favoritos_id);
    
    if (result != 0 )
    return response.status(200).json({notification: 'favoritos deletion successfully'})
    else 
    response.status(400).json({notification:'favoritos deletion failed'})
}catch(error){
    console.warn('Favoritos deletion failed' + error)
    return response.status(500).json({
        notification: "Internal server error while trying to delete Favoritos",
      });
}
}
}