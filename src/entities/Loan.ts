import { User } from "../entities/User.js"
import { Book } from "../entities/Book.js"

export class Loan {
    static loans: Loan[] = []

    #user: User;
    #book: Book;
    #loanDate: Date;
    #returned: boolean;
    #returnDate?: Date;
    constructor(user: User, book: Book) {
        this.#user = user
        this.#book = book
        this.#loanDate = new Date()
        this.#returned = false

        Loan.loans.push(this)
    }
    getUser() {
        return this.#user
    }
    getBook(){
        return this.#book
    }
    isReturned(){
        return this.#returned
    }
    giveBack(){
        this.#returned = true
        this.#returnDate = new Date()
    }
}