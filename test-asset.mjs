import { pickPublicAsset } from './src/lib/publicAssets.ts';

const hero = pickPublicAsset({
  prefer: ["hero", "capa", "home", "pudim"],
  fallback: "hero-placeholder.svg",
});

console.log('Hero asset:', hero);
