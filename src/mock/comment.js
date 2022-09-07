import {getRandomInt, getRandomSentance, getRandomDate} from '../utils.js';
import {EMOTIONS, LOREM_TEXT} from '../const.js';

const generateEmotion = (emotions) => emotions[getRandomInt(0, emotions.length - 1)];

export const generateComment = (id) => ({
  id: id,
  author: 'Ilya O\'Reilly',
  comment: getRandomSentance(LOREM_TEXT),
  date: getRandomDate(),
  emotion: generateEmotion(EMOTIONS)
});
