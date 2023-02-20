const form = document.querySelector('form');

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
        

        const deleteButton = document.createElement('button');
        deleteButton.setAttribute('type','button');
        deleteButton.classList.add('delete');
        deleteButton.textContent = 'delete';
        card_element.appendChild(deleteButton);
        

        const book_title = document.createElement('h3');
        book_title.textContent = new_book.title;
        book_title.classList.add('book-title');
        card_element.appendChild(book_title);
        
        const book_author = document.createElement('p');
        book_author.textContent = new_book.author;
        book_author.classList.add('book-author');
        card_element.appendChild(book_author);
        
        const book_pages = document.createElement('p');
        book_pages.textContent = new_book.pages;
        book_pages.classList.add('book-pages');
        card_element.appendChild(book_pages);

        const label = document.createElement('label');
        label.setAttribute('for','read');
        label.textContent = 'Read:';
        card_element.appendChild(label);

        const checkBox = document.createElement('input');
        checkBox.setAttribute('type','checkbox');
        checkBox.setAttribute('id','read');
        if(new_book.read_status == 'Read'){
            checkBox.checked = true;
        }
        card_element.appendChild(checkBox);

        card_container.appendChild(card_element);


        deleteButton.addEventListener('click',()=>{
            const index = myLibrary.findIndex((book)=>{
                return(book.title == book_title.textContent);
            });
            
            myLibrary.splice(index,1);            
            deleteButton.parentNode.remove();
            console.log(myLibrary);
        });

        checkBox.addEventListener('click',()=>{
            const index = myLibrary.findIndex((book)=>{
                return(book.title == book_title.textContent);
            });
            if(checkBox.checked){
                myLibrary[index].read_status = 'Read';
            }
            else{
                myLibrary[index].read_status = 'Not Read';
            }
        });
        

        
}


function addBooksToLibrary(myLibrary){
   
    const card_container = document.querySelector('.card-container');   
    
    myLibrary.forEach((book) => {
        addBook(card_container,book);
    });
}



function collectAndAddInfo(){
    
    let new_book = new book(
        form.title.value,
        form.author.value,
        form.pages.value,
        form.read_status.value
    );
    
    
    const card_container = document.querySelector('.card-container');
    
    myLibrary.push(new_book); 
    
    addBook(card_container,new_book);
    console.log(myLibrary);

}



const form_button = document.querySelector('.modal button');
form_button.addEventListener('click',()=>{
    collectAndAddInfo();
});




const book1 = new book('Elden Ring','Miyazaki','699','Not Read');
const book2 = new book('Godaan','Premchand','50','Read');
const book3 = new book('lekha','Prem','50','Read');
const book4 = new book('pk','raj','50','Read');
const book5 = new book('dhoom3','aamir','50','Read');


myLibrary.push(book1);
myLibrary.push(book2);
myLibrary.push(book3);
myLibrary.push(book4);
myLibrary.push(book5);

addBooksToLibrary(myLibrary);
