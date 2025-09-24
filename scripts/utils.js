import { Card } from "./Card.js";
import { imageOverlay } from "./index.js";

export function createCard(name, link) {
  const card = new Card(name, link, "#template-cards", () => {
    imageOverlay.open(link, name);
  });
  const cardElement = card.generateCard();

  return cardElement;
}
