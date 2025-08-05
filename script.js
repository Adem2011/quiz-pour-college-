const quizzesData = {
    francais: [
        {
            id: 'francais-1',
            title: "Grammaire de base",
            questions: [
                {
                    text: "Quelle est la bonne orthographe ?",
                    type: "single-choice",
                    options: ["Chatteaux", "Châteaux", "Chateaux", "Chateaus"],
                    answer: "Châteaux"
                },
                {
                    text: "Le mot 'poisson' est un nom commun ?",
                    type: "true-false",
                    options: ["Vrai", "Faux"],
                    answer: "Vrai"
                }
            ]
        }
    ],
    anglais: [
        {
            id: 'anglais-1',
            title: "Vocabulaire de base",
            questions: [
                {
                    text: "Comment dit-on 'chien' en anglais ?",
                    type: "single-choice",
                    options: ["Cat", "Dog", "Bird", "Fish"],
                    answer: "Dog"
                },
                {
                    text: "La phrase 'I am happy' signifie 'Je suis content'.",
                    type: "true-false",
                    options: ["Vrai", "Faux"],
                    answer: "Vrai"
                }
            ]
        }
    ],
    espagnol: [
        {
            id: 'espagnol-1',
            title: "Expressions courantes",
            questions: [
                {
                    text: "Comment dit-on 'bonjour' en espagnol ?",
                    type: "single-choice",
                    options: ["Hola", "Adiós", "Gracias", "Por favor"],
                    answer: "Hola"
                },
                {
                    text: "Le mot 'mañana' signifie 'demain'.",
                    type: "true-false",
                    options: ["Vrai", "Faux"],
                    answer: "Vrai"
                }
            ]
        }
    ],
    allemand: [
        {
            id: 'allemand-1',
            title: "Mots simples",
            questions: [
                {
                    text: "Quel est le mot allemand pour 'merci' ?",
                    type: "single-choice",
                    options: ["Bitte", "Hallo", "Tschüss", "Danke"],
                    answer: "Danke"
                },
                {
                    text: "Le mot 'Haus' signifie 'maison'.",
                    type: "true-false",
                    options: ["Vrai", "Faux"],
                    answer: "Vrai"
                }
            ]
        }
    ],
    italien:
