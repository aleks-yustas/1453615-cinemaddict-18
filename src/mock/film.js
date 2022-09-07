import {getRandomInt, getRandomText, getRandomDate} from '../utils.js';
import {LOREM_TEXT, CommentId} from '../const.js';

const generateCommentsId = () => {
  const maxCommentCount = 20;
  const commentsCount = getRandomInt(0, maxCommentCount);

  const generatedComments = Array.from({length: commentsCount}, () => getRandomInt(CommentId.MIN, CommentId.MAX));

  return Array.from(new Set(generatedComments));
};

const generateTitle = () => getRandomText(LOREM_TEXT).split(/\.|\s/).slice(0, 4).join(' ');

const generatePoster = () => {
  const posterFileNames = [
    'the-man-with-the-golden-arm.jpg',
    'the-great-flamarion.jpg',
    'the-dance-of-life.jpg',
    'santa-claus-conquers-the-martians.jpg',
    'sagebrush-trail.jpg',
    'popeye-meets-sinbad.png',
    'made-for-each-other.png'
  ];

  return posterFileNames[getRandomInt(0, posterFileNames.length - 1)];
};

const generateGenres = () => {
  const genres = [
    'Drama',
    'Musical',
    'Cartoon',
    'Western',
    'Comedy',
    'Mystery'
  ];
  const genresCount = getRandomInt(1, genres.length - 1);

  const generatedGenres = Array.from({length: genresCount}, () => genres[getRandomInt(0, genres.length - 1)]);

  return Array.from(new Set(generatedGenres));
};

const generateRuntime = () => getRandomInt(0, 200);

export const generateFilm = () => ({
  id: '0',
  comments: generateCommentsId(),
  filmInfo: {
    title: generateTitle(),
    alternativeTitle: 'Laziness Who Sold Themselves',
    totalRating: 5.3,
    poster: `images/posters/${generatePoster()}`,
    ageRating: 0,
    director: 'Tom Ford',
    writers: [
      'Takeshi Kitano'
    ],
    actors: [
      'Morgan Freeman'
    ],
    release: {
      date: '2019-05-11T00:00:00.000Z',
      releaseCountry: 'Finland'
    },
    runtime: generateRuntime(),
    genre: generateGenres(),
    description: getRandomText(LOREM_TEXT)
  },
  userDetails: {
    watchlist: Boolean(getRandomInt()),
    alreadyWatched: Boolean(getRandomInt()),
    watchingDate: getRandomDate(),
    favorite: Boolean(getRandomInt())
  }
});

