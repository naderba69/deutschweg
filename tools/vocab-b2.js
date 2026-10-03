/* Deutschweg — the B2 lexical layer, aggregated.
   Route C (DECISIONS-PENDING item 20): each workshop authors 40 full items and
   declares the rest of its row's 90 words in `material`, which the compiler
   verifies against the workshop's own German text. Wired per workshop as the
   level is authored; the coverage gate reads the material measure. */
module.exports = Object.assign({},
  require('./vocab-b2-w01'),
  require('./vocab-b2-w02'),
  require('./vocab-b2-w03'),
  require('./vocab-b2-w04'),
  require('./vocab-b2-w05'),
  require('./vocab-b2-w06'),
  require('./vocab-b2-w07'),
  require('./vocab-b2-w08'),
  require('./vocab-b2-w09'),
  require('./vocab-b2-w10'),
  require('./vocab-b2-w11'),
  require('./vocab-b2-w12'),
  require('./vocab-b2-w13'),
  require('./vocab-b2-w14'),
  require('./vocab-b2-w15')
);
