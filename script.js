

const add_book_div = document.querySelector("#add-book");

add_book_div.addEventListener('click',()=>{
    alert('hello world');
});


let myLibrary = [];

function book(title,author,pages,read_status){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read_status = read_status;
}


function addBooksToLibrary(myLibrary){
   
    const card_container = document.querySelector('.card-container');   
    
    myLibrary.forEach((book) => {
        const card_element = document.createElement('div');    
        card_element.classList.add('card');
        
        const book_title = document.createElement('h3');
        book_title.textContent = book.title;
        card_element.appendChild(book_title);
        
        const book_author = document.createElement('p');
        book_author.textContent = book.author;
        card_element.appendChild(book_author);
        
        const book_pages = document.createElement('p');
        book_pages.textContent = book.pages;
        card_element.appendChild(book_pages);
        
        const book_status = document.createElement('p');
        book_status.textContent = book.read_status;
        card_element.appendChild(book_status);

        card_container.appendChild(card_element);
    });
}




const book1 = new book('Elden Ring','Miyazaki','699','Not Read');
const book2 = new book('Godaan','Premchand','50','Read');
const book3 = new book('Godaan','Premchand','50','Read');
const book4 = new book('Godaan','Premchand','50','Read');
const book5 = new book('Godaan','Premchand','50','Read');
const book6 = new book('Godaan','Premchand','50','Read');

myLibrary.push(book1);
myLibrary.push(book2);
myLibrary.push(book3);
myLibrary.push(book4);
myLibrary.push(book5);
myLibrary.push(book6);
addBooksToLibrary(myLibrary);
console.log(myLibrary);