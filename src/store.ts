import { writable } from "svelte/store";

export const FeedbackStore = writable([
  {
    id: 1,
    rating: 7,
    text: "Com certeza o Svelte é uma das melhores linguagens que já vi na vida. Curva de aprendizagem baixissima e performace lá em cima!",
  },
  {
    id: 2,
    rating: 9,
    text: "O meu grande e velho amigo REACT que me perdoe, mas o SVELTE deu um pau em todos os sentidos. Desde a sintexa exuta até performace!",
  },
  {
    id: 3,
    rating: 8,
    text: "Cara que compilador animal. Somado ainda agora com o SVELTEKIT, prepara seu coração que vai ser demais fazer aplicativos com SVELTE",
  },
]);
