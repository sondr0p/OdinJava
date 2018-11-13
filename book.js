function book (title, author, pages, haveRead){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.haveRead = haveRead;

    this.info = function() {
        if(haveRead) {
            console.log(title + " by " + author + ", " + pages + " pages, have read");
        }else{
            console.log(title + " by " + author + ", " + pages + " pages, have not read");
        }
        
    }
}

b = new book("harry potter", "jk rowling", 300, true);
c = new book("cat in a hat", "dr seuss", 50, false);
b.info();
c.info();