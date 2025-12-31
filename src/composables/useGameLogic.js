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

function createDeck(cardvalues) {
  const duplicatedCards = [...cardValues, ...cardValues];

  return duplicatedCards.map((value, index) => ({
    id: index,
    value,
    isFlipped: false,
    isMatched: false,
  }));
}

export function flipCard(card) {
  if (card.isFlipped) return;
  if (card.isMatched) return;

  card.isFlipped = true;
}

export const cards = ref(shuffle(createDeck(cardValues)));
