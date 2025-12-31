import { cardValues } from "@/data/data";
import { ref } from "vue";

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

export const cards = ref(createDeck(cardValues));
