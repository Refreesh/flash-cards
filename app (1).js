
const flashcards = [
    {
        question: "S’adapter aux attentes clients sur des locations plus courtes ?",
        answer: "Permet d’attirer plus de monde, optimiser l’utilisation des bateaux, et faire des ventes en dehors des longues périodes."
    },
    {
        question: "Investir dans des bateaux plus bas de gamme dédiés à la location à petit prix ?",
        answer: "Permet d’attirer une clientèle plus jeune avec des budgets plus limités, tout en assurant de la rentabilité par volume."
    },
    {
        question: "Proposer des activités entre membres du club ?",
        answer: "Crée un sentiment de communauté, fidélise les clients et ajoute une source de revenu secondaire par les événements."
    },
    {
        question: "Réguler les émissions polluantes ?",
        answer: "Répond aux attentes écologiques des jeunes générations et améliore l’image de marque de l’entreprise."
    }
];

let currentIndex = 0;
let score = 0;

const questionEl = document.getElementById("question");
const answerEl = document.getElementById("answer");
const scoreEl = document.getElementById("score");
const restartBtn = document.getElementById("restart");

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function loadCard() {
    const card = flashcards[currentIndex];
    questionEl.textContent = card.question;
    answerEl.textContent = card.answer;
    answerEl.classList.add("hidden");
}

function toggleAnswer() {
    answerEl.classList.toggle("hidden");
}

function submitAnswer(isCorrect) {
    if (isCorrect) score++;
    currentIndex++;
    scoreEl.textContent = "Score : " + score;

    if (currentIndex < flashcards.length) {
        loadCard();
    } else {
        questionEl.textContent = "Quiz terminé !";
        answerEl.textContent = "Ton score final : " + score + " / " + flashcards.length;
        answerEl.classList.remove("hidden");
        document.querySelector(".buttons").style.display = "none";
        restartBtn.style.display = "inline-block";
    }
}

function restartQuiz() {
    currentIndex = 0;
    score = 0;
    shuffle(flashcards);
    scoreEl.textContent = "Score : 0";
    document.querySelector(".buttons").style.display = "flex";
    restartBtn.style.display = "none";
    loadCard();
}

shuffle(flashcards);
loadCard();
