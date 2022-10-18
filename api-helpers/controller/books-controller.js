import Book from "../model/Book";

export const getAllBooks = async(req,res)=>{
    let books;
    try{
       books =await Book.find();
    }catch(err){
       return new Error(err);
    }

    if(!books){
       return res.status(500).json({message:'Internal Server Error'});
    }

    if(books.length === 0){
        return res.status(404).json({message:'No books found'});
    }
    return res.status(200).json({books});
}


export const addBooks = async(req,res)=>{
      const {title, author, price, imageUrl, featured} = req.body;

      if(!title 
        && title.trim()==='' && !author 
        && title.trim()==='' && !price 
        && !imageUrl && imageUrl.trim()==='' 
        && !featured 
        && featured.trim()===''){
        return res.status(422).json({message:'Invalid Inputs'});
      }

      let book;

      try{
        book = new Book({title,author,price,imageUrl,featured})
        book = await book.save()
      }catch(err){console.log(err.message)}

      if(!book){
        return res.status(500).json({message:'Internal Server Error'});
      }

      return res.status(201).json({book})
}


export const updateBook = async(req,res)=>{
    const id = req.query.id;
    const {title, author, price, imageUrl, featured} = req.body;

      if(!title 
        && title.trim()==='' && !author 
        && title.trim()==='' && !price 
        && !imageUrl && imageUrl.trim()==='' 
        && !featured 
        && featured.trim()===''){
        return res.status(422).json({message:'Invalid Inputs'});
      }

      let book;

      try{
        book = await Book.findByIdAndUpdate(id,{title,author,price,imageUrl,featured});
      }catch(err){console.log(err.message)}

      if(!book){
        return res.status(500).json({message:'Internal Server Error'});
      }

      return res.status(201).json({book})
}

export const deleteBook =async (req,res) => {

      const id = req.query.id;
      let book;

      try{

        book = await Book.findByIdAndRemove(id);
      }catch(err){
        return new Error(err);
      }

      if(!book){
        return res.status(500).json({message:'Unable to delete'})
      }

      return res.status(200).json({message:'Sucessfully deleted'});

}


export const getBook = async(req,res) => {

  const id = req.query.id;

  let book;

  try{
    book =await Book.findById(id);
  }catch(err){
    return new Error(err);
  }

  if (!book) {
    return res.status(404).json({message:'No book found from the given Id.'})
  }else{
    return res.status(200).json({book});
  }

}