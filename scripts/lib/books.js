import { mockBook, mockSearch } from '../mocks.js';

/** Grunnslóð á API. */
const API_URL = 'https://openlibrary.org/';

/** Hversu mörgum niðurstöðum á leit að skila að hámarki. */
const API_MAX_RESULTS = 30;

/** Á að nota mock gögn? */
const USE_MOCK = false;

/**
 * Skilar Promise sem bíður í gefnar millisekúndur.
 * @param {number} ms Tími til að sofa í millisekúndum.
 */
// eslint-disable-next-line no-unused-vars
async function sleep(ms) {
  /* TODO útfæra */
  // Hægt að nota til að prófa loading virkni.
}

/**
 * Sækir gögn á slóð og skilar þeim sem JSON eða `null` ef villa kom upp.
 * @param {string} url Slóð á API til að sækja gögn frá.
 * @returns {Promise<any>} Gögn sem JSON hlutur eða `null` ef villa.
 */
async function queryApi(url) {
  // await sleep(1000);
  /* TODO útfæra */
}

/**
 * Leitar að bók eftir gefnum leitarstreng. Skilar fylki af niðurstöðum, hámark
 * skilgreint í `API_MAX_RESULTS`, ef villa kemur upp er tómu fylki skilað.
 * @param {string} query Strengur sem á að leita eftir.
 * @returns Fylki af niðurstöðum.
 */
export async function searchBooks(query) {
  /* TODO útfæra */

  let results;
  if (USE_MOCK) {
    results = mockSearch;
  } else {
    results = await queryApi(url);
  }

  /* TODO útfæra */
}

/**
 * Skilar bók með gefnu auðkenni eða `null` ef bók finnst ekki. Gögn fyrir bók:
 * - `id` - Auðkenni bókar.
 * - `title` - Titill bókar.
 * - `cover` - Slóð á mynd af bók, `undefined` ef engin.
 * - `subjects` - Fylki af efni sem bókin fjallar um.
 * - `places` - Fylki af staðsetningum sem bókin fjallar um.
 * - `people` - Fylki af einstaklingum sem bókin fjallar um.
 *
 * @param {string} id `work id` bókar (t.d. `/works/OL262758W`).
 * @returns Upplýsingum um bók eða `null` ef bók fannst ekki.
 */
export async function getBook(id) {
  let result;
  if (USE_MOCK) {
    result = mockBook;
  } else {
    /* TODO útfæra */
  }

  /* TODO útfæra */
}
