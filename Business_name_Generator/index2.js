function pick(r, a, b, c) {
  return r < 0.33 ? a : r < 0.66 ? b : c;
}

console.log(
  `${pick(Math.random(), "Crazy", "Amazing", "Fire")} ` +
  `${pick(Math.random(), "Engine", "Foods", "Garments")} ` +
  `${pick(Math.random(), "Bros", "Limited", "Hub")}`
);
