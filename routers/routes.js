import express from "express";
import { getALLBlogs,getblogs,createblogs,deleteblogs,updateblogs } from "../controllers/blogcontroller.js";
// const router = expresss.Router()
const router = express.Router()

router.get('/',getALLBlogs)
router.get('/:id',getblogs)
router.post('/',createblogs)
router.put('/:id',updateblogs)
router.delete('/:id',deleteblogs)

export default router