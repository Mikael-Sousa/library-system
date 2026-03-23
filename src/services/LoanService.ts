import { User } from "../entities/User.js"
import { Book } from "../entities/Book.js"
import { Loan } from "../entities/Loan.js"

export class LoanService {
        borrow(user: User, book: Book) {
            if (!Loan.loans.some(l => l.getBook() === book && !l.isReturned())) {
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
                l.getBook() === book
                && l.getUser() === user
                && !l.isReturned())
            if (loan) {
                loan.giveBack()
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
                    message: "There is no loan"
                }
            }
        }
    }
