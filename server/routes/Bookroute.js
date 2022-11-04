const express=require('express')
const router =express.Router()

const Book=require('../models/BookModel')
router.route("/create").post((req,res)=>{
  const title=req.body.title
  const description=req.body.description
  const isbn=req.body.isbn
  const image=req.body.image
  const author=req.body.author
  const price=req.body.price
  const stars=req.body.stars
  const newBook=new Book({
 isbn,
 title,
 description,
 image,
 author,
 price,
 stars
 
  })
  newBook.save()
})
router.route('/book').get((req,res)=>{
    Book.find().then(foundBook=>res.json(foundBook))
})
module.exports=router