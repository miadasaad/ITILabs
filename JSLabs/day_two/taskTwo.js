// box object
function Box(height,length,width,material,content){

    this.height= height;
    this.width= width;
    this.length = length;
    this.material = material
    this.content = content;

    // nums of added books initially
    function countBook() {
        Box.prototype.AddedBooks = this.content.length;
    }
    countBook.call(this)
    //add book
    this.AddBook= function (book) {
        console.log(this.content);
        founBook =false;
        for (let i = 0; i < this.content.length; i++) {

            if (book.title == this.content[i].title) {
                this.content[i].numOfcopies++;
                founBook =true;
                break;
            } 
        }
        if (founBook == false) {
            this.content.push(book)
            Box.prototype.AddedBooks++;
        }  
        console.log(this.content);   
    }
    //delete book
    this.deleteBook = function (title) {

      for (let i = 0; i < this.content.length; i++) {
        if (title == this.content[i].title) {
            if (this.content[i].numOfcopies>1) {
                this.content[i].numOfcopies--;  
            }
            else{
                this.content.splice(i,1)
            }
        }
        
      }  
      console.log(this.content);
    }
}
//static count of added books
Box.prototype.AddedBooks;
Box.prototype.valueOf = function() {
    return this.content.length;
  };

//book
function Book(title,numOfChp,author,numOfPag,publisher,numOfcopies) {
    this.title= title;
    this.numOfChp =numOfChp
    this.author= author
    this.numOfPag= numOfPag
    this.publisher = publisher
    this.numOfcopies = numOfcopies;
    (function countBook() {
        Book.count++;
    })();
}


Book.count =0;
Book.NumOfBooks= function () {
    return Book.count;
}


var bo= new Book("jhfkjhf",5,"fd,",6,"fj",1)
var boo= new Book("dht",5,"fd,",6,"fj",5)
var bok= new Book("dht",5,"fd,",6,"fj",5)
// console.log(Book.prototype.NumOfBooks());
// console.log(Book.prototype.count);


var BOOOOx = new Box(5,5,5,"tdty",[bok,boo])
console.log(BOOOOx+5);


BOOOOx.AddBook(bo)

BOOOOx.deleteBook("jhfkjhf")
// console.log(Box.prototype.AddedBooks);