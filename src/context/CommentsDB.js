// src/context/CommentsDB.js
import Dexie from 'dexie';

export const db = new Dexie('MoviesCommentsDB');
db.version(1).stores({
  comments: '++id, movieId, text, date',
});
