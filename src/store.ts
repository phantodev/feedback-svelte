import { writable } from "svelte/store";

export const FeedbackStore = writable([
  {
    id: 1,
    rating: 7,
    text: "Aqui vai o primeiro Feedback adipisicing elit. consequuntur vel vitae commodi alias voluptatem est voluptatum ipsa quae.",
  },
  {
    id: 2,
    rating: 9,
    text: "O segundo Feedback é mais maneiro adipisicing elit. consequuntur vel vitae commodi alias voluptatem est voluptatum ipsa quae.",
  },
  {
    id: 3,
    rating: 8,
    text: "Terceiro fode tudo! adipisicing elit. consequuntur vel vitae commodi alias voluptatem est voluptatum ipsa quae.",
  },
]);
