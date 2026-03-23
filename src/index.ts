import { User } from "./entities/User.js"
import { Book } from "./entities/Book.js"
import { LoanService } from "./services/LoanService.js"

const book1 = new Book("Jorge A.", "vidas secas")
const book2 = new Book("Jorge A.", "vidas secas")
const book3 = new Book("Jorge A.", "vidas secas")

const user1 = new User("gabriel")
const user2 = new User("gabriela")

console.log(new LoanService().borrow(user2, book3))