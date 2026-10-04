/* Deutschweg — the B1 lexical layer, aggregated.
   Wired into tools/compile-units.js when the level passed its own coverage gate
   (1,280 of the declared 1,600 = 80%, 32 of 40 lessons). The remaining lessons
   join this file as they are authored; the gate only fails if the level drops
   back under 80%.
   Unit 6 joined under amendment B1-L2 (DECISIONS-PENDING.md item 25): its six
   lessons carry the 219 entries the Goethe B1 match found the learner already
   meets in the material, plus the 21 the new lessons' own material introduces. */
module.exports = Object.assign({},
  require('./vocab-b1-u1a'),
  require('./vocab-b1-u1b'),
  require('./vocab-b1-u1c'),
  require('./vocab-b1-u2a'),
  require('./vocab-b1-u2b'),
  require('./vocab-b1-u2c'),
  require('./vocab-b1-u3a'),
  require('./vocab-b1-u3b'),
  require('./vocab-b1-u3c'),
  require('./vocab-b1-u4a'),
  require('./vocab-b1-u4b'),
  require('./vocab-b1-u4c'),
  require('./vocab-b1-u5a'),
  require('./vocab-b1-u5b'),
  require('./vocab-b1-u5c'),
  require('./vocab-b1-u6a'),
  require('./vocab-b1-u6b'),
  require('./vocab-b1-u6c')
);
