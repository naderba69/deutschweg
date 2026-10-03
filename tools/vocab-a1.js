/* Deutschweg — P3.2 lexical layer, slice 2: A1 (lessons a1-u1-l1 … a1-u4-l6).
   Same row shape as tools/vocab-a0a1.js:
     [ headword, plural/forms, Arabic gloss, example sentence,
       the sentence an Arabic speaker typically produces, why it is wrong,
       error family, optional surface form to blank ]
   The rows are grouped by unit so no single file grows past what one reviewer
   can read at a sitting. The compiler refuses a row whose example does not
   contain the blankable core, so every example carries its headword. */

module.exports = Object.assign({},
  require('./vocab-a1-u1a'),
  require('./vocab-a1-u1b'),
  require('./vocab-a1-u2a'),
  require('./vocab-a1-u2b'),
  require('./vocab-a1-u3a'),
  require('./vocab-a1-u3b'),
  require('./vocab-a1-u4a'),
  require('./vocab-a1-u4b'),
  require('./vocab-a1-u5a'),
  require('./vocab-a1-u5b')
);
