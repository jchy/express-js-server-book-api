const express=require('express');
const uuid=require('uuid');
const Books=require('./Books');
const router=express.Router();

router.get("/",(req,res)=>{
    res.send(Books);
});

router.get("/:bookid",(req,res)=>{
    // console.log(user);
    // const user = Users.find(user=> user.id===req.params.userid);
    const book = Books.find(book => {
       return (Number(book.id) === Number(req.params.bookid));
    });
   
    if(!book){
        res.status(400).send("Book does not exist in the libary");
    }
    res.status(200).json(book);
});


router.post("/",(req,res)=>{
    try{
        const {author, book_name,pusblished_year,pages} = req.body;
        if(!author) throw new Error("Author name is required");
        if(!book_name) throw new Error("Book name is required");
        if(!pusblished_year) throw new Error("Published year is required");
        if(!pages) throw new Error("Pages number is required");
        const book={
            id: uuid.v4(),
            author, 
            book_name,
            pusblished_year,
            pages
        }
        Books.push(book);
        res.status(201).json(book);
    }
    catch(err){
      res.status(400).send(`Invalid request: ${err.toString()}`)
    }
})


router.patch("/:bookid",(req,res)=>{
    try{
        const {author,pusblished_year} = req.body;
        if(!author) throw new Error("Author name is required");
        if(!pusblished_year) throw new Error("Published year is required");
        
        const book = Books.find(book => {
            return (Number(book.id) === Number(req.params.bookid));
         });
         book.author = author;
         book.pusblished_year = pusblished_year;
        res.status(201).json(book);
    }
    catch(err){
      res.status(400).send(`Invalid request: ${err.toString()}`)
    }
})


router.delete("/delete",(req,res)=>{
    try{
        const {id} = req.body;
        if(!id) throw new Error("ID name is required");
        const book = Books.filter(book => {
            return (Number(book.id) !== Number(id));
         });
        res.status(201).json(book);
    }
    catch(err){
      res.status(400).send(`Invalid delete request: ${err.toString()}`)
    }
})


module.exports = router;

