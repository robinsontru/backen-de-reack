import blogmoldel from "../models/blogmoldel.js";


///metods para el crud

///mostrar todos los registros
export const getALLBlogs= async(req,res)=>{
try {
   const blogs = await blogmoldel.findAll()
   res.json(blogs)
} catch (error) {
    res.json({Message:error.Message})
}
}
//mostrar un registro
export const getblogs= async(req,res)=>{
    try {
       const blogs = await blogmoldel.findAll({
        // where:{id: {id:req.params.id}}
                where:{ id:req.params.id }

       })
       res.json(blogs[0])
       console.log(blogs[0]);
    } catch (error) {
        res.json({message:error.message})
    }
    }
//crear un registro
export const createblogs= async(req,res)=>{
    try {
        await blogmoldel.create(req.body)
            res.json({
                "message":"registro creado coorectamente"
            })
        
      
     } catch (error) {
         res.json({Message:error.Message})
     }
     }

//actualizar un registro
export const updateblogs= async(req,res)=>{
    try {
        await blogmoldel.update(req.body,{
            //  where:{  id:req.params.id}
            where:{ id:req.params.id }
            })   
            res.json({
                "message":"registro actualizado  coorectamente"
            })  
     } catch (error) {
         res.json({message:error.message})
     }
     }
//eliminar un registro
export const deleteblogs= async(req,res)=>{
    try {
        await blogmoldel.destroy({
            where:{ id:req.params.id }
            })
            res.json({
                "message":"registro eliminado coorectamente"
            })
                 
      
     } catch (error) {
         res.json({Message:error.Message})
     }
     }

