# Test Technique
## 1 - Typescript
### 1.a - Analyse de chaîne de caractères
`Algorithmie` -> `src/StringAnalysis/index.ts`
> Écrire une fonction en TypeScript qui prend une chaîne de caractères et renvoie un objet contenant :

- Le nombre de mots dans la chaîne.
- Le mot le plus long.
- Le nombre de caractères (lettres uniquement, sans espaces ni ponctuation).
- La fréquence de chaque lettre.

> Le résultat retourné par la fonction doit correspondre à l'exemple ci-dessous :

```typescript
stringAnalysis("Hello, world!") 
/* Retourne :
{
  wordCount: 2,
  longestWord: "Hello",
  letterCount: 10,
  letterFrequency: {
    h: 1,
    e: 1,
    l: 3,
    o: 2,
    w: 1,
    r: 1,
    d: 1
  }
}
*/
```

### 1.b - Création de Users via POO
`Programmation Orientée Objet | POO` -> `src/CreatingUsers/index.ts`
> Écrire une classe `User` en TypeScript qui permet de créer des utilisateurs avec les informations suivantes :

- Nom complet
- Adresse email
- Mot de passe

> La classe doit également fournir :

- Une méthode pour vérifier si un mot de passe donné correspond au mot de passe de l'utilisateur.
- Une méthode privée pour chiffrer le mot de passe avec Bcrypt lors de la création du User