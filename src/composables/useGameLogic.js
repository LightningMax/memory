import { cardValues } from "@/data/data";
import { ref } from "vue";

// algorithmie pour mélanger les cartes (Fisher–Yates)
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function createDeck() {
  const duplicatedCards = [...cardValues, ...cardValues];

  return duplicatedCards.map((value, index) => ({
    id: index,
    value,
    isFlipped: false,
    isMatched: false,
  }));
}

export function useGameLogic() {
  const flippedCards = ref([]);
  const cards = ref([]);
  const hasWon = ref(false);
  const moves = ref(0);

  function flipCard(card) {
    if (card.isFlipped) return;
    if (card.isMatched) return;
    if (flippedCards.value.length >= 2) return;

    card.isFlipped = true;

    // Ajouter la carte au tableau des cartes retournées
    flippedCards.value.push(card);
    if (flippedCards.value.length === 2) {
      // Vérifie si les paires de cartes sont égales
      checkMatch();
    }
  }

  function checkWin() {
    return cards.value.every((card) => card.isMatched);
  }

  function checkMatch() {
    const [first, second] = flippedCards.value;

    // verifier si la premier carte est égale à la deuxième
    if (first.value === second.value) {
      first.isMatched = true;
      second.isMatched = true;

      // reset le tableau de cartes retournés
      flippedCards.value = [];

      // increment le nb d'essais
      moves.value++;

      // determine si la partie est finie
      if (checkWin()) {
        hasWon.value = true;
      }
    } else {
      setTimeout(() => {
        first.isFlipped = false;
        second.isFlipped = false;
        flippedCards.value = [];
        moves.value++;
      }, 800);
    }
  }

  function startGame() {
    cards.value = shuffle(createDeck(cardValues));
    hasWon.value = false;
    moves.value = 0;
    flippedCards.value = [];
  }

  function resetGame() {
    startGame();
  }

  startGame();

  return { cards, hasWon, moves, flipCard, resetGame };
}
