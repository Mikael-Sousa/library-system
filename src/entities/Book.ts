let bookid = 1

export class Book {
    static books: Book[] = []

    #id: number;
    #name: string;
    #author: string;

    constructor(
        name: string,
        author: string) {
        this.#id = bookid++
        this.#name = name
        this.#author = author

        Book.books.push(this)
    }
    consultCatalog() {
        console.log(Book.books)
    }
}

