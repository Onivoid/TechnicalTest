import { stringAnalysis } from "../StringAnalysis";

describe("1.a - Analyse de chaîne de caractères", () => {
    test("a. Analyse d'un texte simple", () => {
        const result = stringAnalysis("Hello, world!");
        expect(result).toEqual({
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
                d: 1,
            },
        });
    });

    test("b. Analyse d'un texte avec chiffres et ponctuation", () => {
        const result = stringAnalysis(
            "The quick brown fox jumpss over the lazy dog. 1234567890!"
        );
        expect(result).toEqual({
            wordCount: 9,
            longestWord: "jumpss",
            letterCount: 36,
            letterFrequency: {
                t: 2,
                h: 2,
                e: 3,
                q: 1,
                u: 2,
                i: 1,
                c: 1,
                k: 1,
                b: 1,
                r: 2,
                o: 4,
                w: 1,
                n: 1,
                f: 1,
                x: 1,
                j: 1,
                m: 1,
                p: 1,
                s: 2,
                v: 1,
                l: 1,
                a: 1,
                z: 1,
                y: 1,
                d: 1,
                g: 1,
            },
        });
    });

    test("c. Analyse d'un texte long avec divers charactères", () => {
        const longText =
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
        const result = stringAnalysis(longText);
        expect(result).toEqual({
            wordCount: 69,
            longestWord: "reprehenderit",
            letterCount: 369,
            letterFrequency: {
                a: 29,
                b: 3,
                c: 16,
                d: 19,
                e: 38,
                f: 3,
                g: 3,
                h: 1,
                i: 42,
                l: 22,
                m: 17,
                n: 24,
                o: 29,
                p: 11,
                q: 5,
                r: 22,
                s: 18,
                t: 32,
                u: 29,
                v: 3,
                x: 3,
            },
        });
    });

    test("d. Analyse d'un texte long avec répétitions de lettres et mix de majuscules et minuscules", () => {
        const repeatingText =
            "aAaA bBbB cCcC dDdD eEeE fFfF gGgG hHhH iIiI jJjJ kKkK lLlL mMmM nNnN oOoO pPpP qQqQ rRrR sSsS tTtT uUuU vVvV wWwW xXxX yYyY zZzZ";
        const result = stringAnalysis(repeatingText);
        expect(result).toEqual({
            wordCount: 26,
            longestWord: "aAaA",
            letterCount: 104,
            letterFrequency: {
                a: 4,
                b: 4,
                c: 4,
                d: 4,
                e: 4,
                f: 4,
                g: 4,
                h: 4,
                i: 4,
                j: 4,
                k: 4,
                l: 4,
                m: 4,
                n: 4,
                o: 4,
                p: 4,
                q: 4,
                r: 4,
                s: 4,
                t: 4,
                u: 4,
                v: 4,
                w: 4,
                x: 4,
                y: 4,
                z: 4,
            },
        });
    });
});
