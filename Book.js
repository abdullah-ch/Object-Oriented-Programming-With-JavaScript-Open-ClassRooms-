class Book {
    constructor(title, author, pages, description, currentPage = 1, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.description = description;
        this.currentPage = currentPage;
        this.read = read;
    }
    readBook(currentPage) {
        if (currentPage > this.pages || currentPage <= 0) {
            this.read = false;
            alert("Invalid Page.....");
        }
        else if (0 <= currentPage <= this.pages) {
            this.currentPage = currentPage;
            if (this.currentPage === this.pages) {
                this.read = true;
            }
            else {
                this.read = false;
            }
        }
    }
}
