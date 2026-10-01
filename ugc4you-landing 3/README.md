# UGC4YOU · Landing page formation

Next.js 16 (App Router) + Tailwind CSS 4. Page 100 % statique (prérendue), déployable telle quelle sur Vercel.

```bash
npm install
npm run dev     # http://localhost:3000
npm run build && npm start
```

## Où modifier quoi

| Quoi | Fichier |
| --- | --- |
| Prix, promo, date limite, places, liens (paiement, Trustpilot, chat), endpoint email | `site.config.ts` |
| Vidéos et images (hero, 3 démos, 10 vidéos élèves, captures Youdji/Fiverr, portrait) | `site.config.ts` → `media` (chemins vers `public/…`) |
| Programme (semaines → modules → leçons) | `data/programme-data.json` |
| Textes : problèmes, méthode, avis, FAQ, élèves, offre, footer | `lib/content.ts` |
| Couleurs (tokens) | `app/globals.css` (`@theme`) |
| Polices (même lien Google Fonts que la maquette : Unbounded 500/600/800, Space Grotesk 400/500/700) | `app/layout.tsx` |

Un média laissé vide (`""`) affiche un emplacement « à venir ». Ex. : déposer `public/videos/hero.mp4` puis `heroVideo: "/videos/hero.mp4"`.

## Sections (ordre de la maquette v2)

Hero · logos marques · « Tu te reconnais ? » · résultats (compteurs animés + captures) · 3 vidéos 9:16 · méthode (4 cartes) · programme (onglets semaine / modules / leçons) · calculateur de rentabilité · vidéos élèves (carrousel flèches + swipe) · avis (2 colonnes défilantes, pause au survol) · FAQ (accordéon, un seul ouvert) · bloc prix · formateur · capture email · barre CTA collante · bulle de contact · footer.

## Notes

- Valeurs (couleurs, tailles, espacements, ombres) reprises des attributs `style` de `Page Formation UGC4YOU v2.dc.html`. Desktop ≥ 1024 px fidèle à la maquette ; en dessous, mise en page mobile first (grilles empilées, onglets scrollables, fan de téléphones mis à l'échelle).
- Surlignage des titres : joué à l'entrée dans l'écran, avec filets de sécurité ; sans JS ou avec « réduire les animations », le texte est affiché directement.
- Capture email : sans `leadEndpoint`, le formulaire affiche seulement la confirmation. Brancher un endpoint (Brevo, ConvertKit, route API…) qui accepte `POST { firstname, email }`.
- Les logos Youdji et Fiverr du hero sont chargés depuis leurs URL d'origine (comme dans la maquette) ; à rapatrier dans `public/` si besoin.
