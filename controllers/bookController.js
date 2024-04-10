//perticular request par kya kaam horha h

const books = [
    {id:1 , title:'Book1' , author : 'Author 1'},
    {id:2 , title:'Book2' , author : 'Author 2'},
    {id:3 , title:'Book3' , author : 'Author 3'},
];

//READ 
const getBooks = (req,res)=>{
    res.json(books);
};




//CREATE (new data create eg id 4 in books)


const createBook = (req,res)=>{
    console.log(req.body);  
    //req.body contain JSON data
    const newBook=req.body;
    newBook.id=books.length+1;
    books.push(newBook);
    res.status(201).json(newBook);
}

//UPDATE

const updateBook = (req,res)=>{
    const id=parseInt(req.params.id);
    const updatedBook=req.body;
    const index=books.findIndex(book => book.id === id);

    if(index !== -1){
        //Store old data of perticular idx also store updated data
        books[index]={...books[index],...updatedBook};
        res.json(books[index]);

    }else{
        
        res.status(404).json({error:"book not found"});
    }

}

//DELETE

const deleteBook = (req,res)=>{
    const id=parseInt(req.params.id);
    const index=books.findIndex(book => book.id === id);

    if(index !== -1){
        const deletedBook=books[index];

        //remove single element from perticular index
        books.slice(index,1);
        res.json(deletedBook);

    }else{
        res.status(404).json({error:"book not found"});
    }

}

module.exports = {
    getBooks,
    createBook,
    updateBook,
    deleteBook

}
