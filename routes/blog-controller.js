const express = require('express');
const getAllBlogs= require("../controllers/blog-controller");
const addBlog= require("../controllers/blog-controller");
const updateBlog= require("../controllers/blog-controller");
const getById= require("../controllers/blog-controller");
const deleteBlog= require("../controllers/blog-controller");
const getByUserId= require("../controllers/blog-controller");
const blogRouter = express.Router();

blogRouter.get('/',getAllBlogs);
blogRouter.post('/add',addBlog);
blogRouter.put('/update/:id',updateBlog);
blogRouter.get('/:id',getById);
blogRouter.delete('/:id',deleteBlog);
blogRouter.get('/user/:id',getByUserId);

module.exports = blogRouter;