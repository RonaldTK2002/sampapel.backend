const FavoritosModel = require('../models/FavoritosModel');


module.exports = {

    async create(request,response){
        try{
            const {user_id} = request.query;
        const {produtos_id} = request.body;
        const result = await FavoritosModel.create({user_id,produtos_id});
        
        return response.status(200).json(result)
    }catch(error){
        console.warn('Favoritos creation failed' + error)
        return response.status(500).json({
            notification: "Internal server error while trying to create Favoritos",
          });
    }
},
async getById(request,response){
    try{
    const {user_id} = request.params;
    const result = await FavoritosModel.getById(user_id)
    
    
    return response.status(200).json(result)
    
    
}catch(error){
    console.warn('Favoritos get failed' + error)
    return response.status(500).json({
        notification: "Internal server error while trying to get Favoritos",
      });
}
},
async delete(request,response){
    try{
    const {produtos_id} = request.params;
    const result = await FavoritosModel.deleteById(produtos_id);
    
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