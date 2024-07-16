/**
 *
 * @class
 * @param {string} name - Le nom complet de l'utilisateur.
 * @param {string} email - L'adresse email de l'utilisateur.
 * @param {string} password - Le mot de passe de l'utilisateur. Ce mot de passe sera chiffré.
 *
 * @method hashPassword - Méthode privée pour chiffré le mot de passe avec bcrypt.
 * @returns {string} Le mot de passe chiffré.
 * @method checkPassword - Vérifie si le mot de passe donné correspond au mot de passe chiffré de l'utilisateur.
 * @returns {boolean} true si le mot de passe correspond, false dans le cas contraire.
 * 
 */

export class User {}