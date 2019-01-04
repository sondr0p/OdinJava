let myLibrary = [];
let numCol = 4;

function book (title, author, pages, haveRead){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.haveRead = haveRead;

    this.info = function() {
        if(haveRead) {
            // console.log(title + " by " + author + ", " + pages + " pages, have read");
            return "" + title + " by " + author + ", " + pages + " pages, have read";
        }else{
            // console.log(title + " by " + author + ", " + pages + " pages, have not read");
            return "" + title + " by " + author + ", " + pages + " pages, have not read";
        }
        
    }
}

// Loops through array and displays each book on page
function render() {
    var row = document.createElement("tr");
    for(i = 0; i < myLibrary.length; i++){
        var title = document.createElement("td");
        var author = document.createElement("td");
        var pages = document.createElement("td");
        var ifRead = document.createElement("td");
        title.innerHTML = myLibrary[i].title;
        author.innerHTML = myLibrary[i].author;
        pages.innerHTML = myLibrary[i].pages;
        ifRead.innerHTML = myLibrary[i].haveRead;
        row.appendChild(title);
        row.appendChild(author);
        row.appendChild(pages);
        row.appendChild(ifRead);
    }
    document.getElementById("table").appendChild(row);
}

function addBook(){
    var t = prompt("Please enter a title");
    var a = prompt("Please enter an author");
    var p = prompt("Please enter number of pages");
    var ifRead = prompt("Please enter if read (true/false)");
    var b = new book(t, a, p, ifRead);
    myLibrary.push(b);
    render();
}