let userId = 1
let bookid = 1

class Book {
    static books: Book[] = []

    id: number;
    name: string;
    author: string;

    constructor(
        name: string,
        author: string) {
        this.id = bookid++
        this.name = name
        this.author = author

        Book.books.push(this)
    }
}

class User {
    static users: User[] = [];

    id: number;
    name: string;

    constructor(
        name: string) {
        this.id = userId++
        this.name = name

        User.users.push(this)
    }

    consultCatalog() {
        console.log(Book.books)
    }
}

class LoanService {
    borrow(user: User, book: Book) {
        if (!Loan.loans.some(l => l.book === book && !l.returned)) {
            const loan = new Loan(user, book)
            return {
                success: true,
                data: loan,
                message: "ok"
            }
        }
        else {
            return {
                success: false,
                data: undefined,
                message: "book unavailable"
            }
        }
    }
    giveBack(user: User, book: Book) {
        const loan = Loan.loans.find(l =>
            l.book === book
            && l.user === user
            && !l.returned)
        if (loan) {
            loan.giveBack()
            return {
                success: true,
                data: loan,
                message: "ok"
            }
        }
        else{
            return {
                success: false,
                data: undefined,
                message: "There is no loan"
            }
        }
    }
}
class Loan {
    static loans: Loan[] = []

    user: User;
    book: Book;
    loanDate: Date;
    returned: boolean;
    returnDate?: Date;
    constructor(user: User, book: Book) {
        this.user = user
        this.book = book
        this.loanDate = new Date()
        this.returned = false

        Loan.loans.push(this)
    }

    giveBack() {
        this.returned = true
        this.returnDate = new Date()
    }
}

const book1 = new Book("Jorge A.", "vidas secas")
const book2 = new Book("Jorge A.", "vidas secas")
const book3 = new Book("Jorge A.", "vidas secas")

const user1 = new User("gabriel")
const user2 = new User("gabriela")

console.log(new LoanService().borrow(user2, book3))

