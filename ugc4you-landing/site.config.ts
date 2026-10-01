// Constantes de configuration de la landing : prix, promo, urgence, liens et médias.
// Les médias vides ("") affichent un emplacement de remplacement.

export const site = {
  priceNow: 500,
  priceOld: 790,
  installments: 3,
  closeDate: "12 octobre",
  seatsLeft: 7,
  seatsTotal: 30,

  checkoutUrl: "#",
  trustpilotUrl: "#",
  chatUrl: "#",
  contactEmail: "contact@ugc4you.fr",
  // Endpoint POST (JSON { firstname, email }) pour la capture email. Vide = confirmation locale seulement.
  leadEndpoint: "",

  media: {
    heroBg: "", // mp4 en fond du hero
    heroVideo: "", // mp4 16:9 de présentation
    heroPoster: "",
    screenYoudji: "", // capture du dashboard Youdji
    screenFiverr: "",
    reel: ["", "", ""], // 3 mp4 9:16
    students: ["", "", "", "", "", "", "", "", "", ""], // 10 mp4 9:16
    portrait: "",
  },
};

export const promoPct = Math.round((1 - site.priceNow / site.priceOld) * 100);
export const installmentPrice = Math.ceil(site.priceNow / site.installments);

export function eur(n: number) {
  return n.toLocaleString("fr-FR").replace(/ |\s/g, " ");
}
