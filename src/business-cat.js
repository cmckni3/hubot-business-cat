// Description:
//   Business Cat
//
// Dependencies:
//   None
//
// Configuration:
//   None
//
// Commands:
//   hubot business cat me - replies with a business cat image
//
// Author:
//   cmckni3

const images = [
  'http://24.media.tumblr.com/tumblr_lmp446tJrW1ql59feo1_400.jpg',
  'http://24.media.tumblr.com/tumblr_lms2d0KNkf1ql59feo1_500.jpg',
  'http://25.media.tumblr.com/tumblr_lms2d2Tipm1ql59feo1_400.jpg',
  'http://25.media.tumblr.com/tumblr_lmydqjI5p71ql59feo1_500.jpg',
  'http://24.media.tumblr.com/tumblr_ln37eqhyrh1ql59feo1_500.jpg',
  'http://25.media.tumblr.com/tumblr_lnaz73C8pE1qgaucwo1_400.jpg',
  'http://25.media.tumblr.com/tumblr_lmdpjmI2ie1ql59feo1_400.jpg',
  'http://25.media.tumblr.com/tumblr_lmfhxcw1xH1ql59feo1_400.jpg',
  'http://25.media.tumblr.com/tumblr_lmdosuH7O11ql59feo1_400.jpg',
  'http://25.media.tumblr.com/tumblr_lmdos60do21ql59feo1_400.jpg'
];

module.exports = robot => {
  robot.hear(/business cat me/i, msg => {
    console.log('here');
    msg.send(msg.random(images));
  });
};
