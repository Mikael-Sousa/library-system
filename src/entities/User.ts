let userId = 1

export class User {
    static users: User[] = [];

    #id: number;
    #name: string;

    constructor(
        name: string) {
        this.#id = userId++
        this.#name = name

        User.users.push(this)
    }
}