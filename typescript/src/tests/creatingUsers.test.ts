import { User } from "../CreatingUsers";

describe('1.b - Création de Users via POO', () => {
    it("a. Création d'un utilisateur", () => {
        const user = new User('John Doe', 'johndoe@gmail.com', 'password');
        expect(user.name).toBe('John Doe');
        expect(user.email).toBe('johndoe@gmail.com');
    });
    it("b. Possibilité de ce connecter", () => {
        const user = new User('John Doe', 'johndoe@gmail.com', 'password');
        expect(user.checkPassword('password')).toBe(true);
    });
    it("c. Refus de connexion en cas de mauvais mot de passe", () => {
        const user = new User('John Doe', 'johndoe@gmail.com', 'password');
        expect(user.checkPassword('badpassword')).toBe(false);
    });
});