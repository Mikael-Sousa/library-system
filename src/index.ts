let userId = 1
let bookid = 1

class Book {
    static books: Book[] = []

    id: number;
    name: string;
    author: string;
    available: boolean

    constructor(
        name: string,
        author: string) {
        this.id = bookid++
        this.name = name
        this.author = author
        this.available = true

        Book.books.push(this)
    }
}

class User {
    static users: User[] = [];

    id: number;
    name: string;
    borrowedBooks: Book[] = [];

    constructor(
        name: string) {
        this.id = userId++
        this.name = name

        User.users.push(this)
    }

    consultCatalog() {
        console.log(Book.books)
    }

    borrow(book: Book) {
        if (book.available) {
            book.available = false
            this.borrowedBooks.push(book)
        }
    }
    giveBack(book: Book) {
        const res = this.borrowedBooks.find(b => b === book)
        if (!book.available && res) {
            book.available = true
            this.borrowedBooks = this.borrowedBooks.filter(
                b => b !== book)
        }
    }
}

const book1 = new Book("Jorge A.", "vidas secas")
const book2 = new Book("Jorge A.", "vidas secas")
const book3 = new Book("Jorge A.", "vidas secas")

const user1 = new User("gabriel")
const user2 = new User("gabriela")

user1.borrow(book1)
user1.borrow(book2)
user1.borrow(book3)

user1.giveBack(book1)

user1.consultCatalog()
console.log(User.users)

