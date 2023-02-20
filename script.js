

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




function addBook(card_container,new_book){

    const card_element = document.createElement('div');    
        card_element.classList.add('card');
        card_element.setAttribute('id',myLibrary.indexOf(new_book));
        
        const deleteButton = document.createElement('button');
        deleteButton.setAttribute('type','button');
        deleteButton.classList.add('delete');
        deleteButton.textContent = 'delete';
        card_element.appendChild(deleteButton);

        const book_title = document.createElement('h3');
        book_title.textContent = new_book.title;
        card_element.appendChild(book_title);
        
        const book_author = document.createElement('p');
        book_author.textContent = new_book.author;
        card_element.appendChild(book_author);
        
        const book_pages = document.createElement('p');
        book_pages.textContent = new_book.pages;
        card_element.appendChild(book_pages);
        
        const book_status = document.createElement('p');
        book_status.textContent = new_book.read_status;
        card_element.appendChild(book_status);

        card_container.appendChild(card_element);

        
}


function addBooksToLibrary(myLibrary){
   
    const card_container = document.querySelector('.card-container');   
    
    myLibrary.forEach((book) => {
        addBook(card_container,book);
    });
}


function collectAndAddInfo(){
    const card_container = document.querySelector('.card-container');

    const form_title = document.querySelector('#title').value;
    const form_author = document.querySelector('#author').value;
    const form_pages = document.querySelector('#pages').value;
    const form_read_status = document.querySelector('#read_status').value;
    
    const new_book = new book(form_title,form_author,form_pages,form_read_status);
    myLibrary.push(new_book); 
    
    addBook(card_container,new_book);

}



const form_button = document.querySelector('.modal button');
form_button.addEventListener('click',()=>{
    collectAndAddInfo();
    let buttons = document.querySelectorAll('button');
    buttons = Array.from(buttons);
    console.log(buttons);   
    buttons.forEach((button)=>{
    button.addEventListener('click',()=>{
        alert(button.parentNode.id);
    })
    return;
})
});









const book1 = new book('Elden Ring','Miyazaki','699','Not Read');
const book2 = new book('Godaan','Premchand','50','Read');
const book3 = new book('Godaan','Premchand','50','Read');
const book4 = new book('Godaan','Premchand','50','Read');
const book5 = new book('Godaan','Premchand','50','Read');


myLibrary.push(book1);
myLibrary.push(book2);
myLibrary.push(book3);
myLibrary.push(book4);
myLibrary.push(book5);

addBooksToLibrary(myLibrary);
console.log(myLibrary);

/*let buttons = document.querySelectorAll('button');
    buttons = Array.from(buttons);
    console.log(buttons);   
    buttons.forEach((button)=>{
    button.addEventListener('click',function(e){

        let card_element = document.getElementById(e.target.parentNode.id);
        console.log(card_element);
        console.log(card_element.id);
        
        myLibrary.splice(card_element.id,1);
        let updated_card_element_attr = card_element.id
        card_element.setAttribute('id',card_element.id-1);
        console.log(myLibrary);
        e.target.parentNode.remove();
        
    })
    return;
   



})*/


let deleteButtons = document.querySelectorAll('.delete');

deleteButtons.forEach((button)=>{
    button.addEventListener('click',()=>{
        const index = myLibrary.findIndex((book)=>{
            book.title == button.nextSibling.textContent;
        })
        myLibrary.splice(index,1);
        console.log(myLibrary);
        button.parentNode.remove();

    })
})

