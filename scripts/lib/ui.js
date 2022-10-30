import { getBook, searchBooks } from './books.js';
import { empty, el } from './helpers.js';

/**
 * Setur „loading state“ skilabað meðan gögn eru sótt.
 * @param {element} main Element sem á að birta skilbaoð í.
 * @param {element} searchForm Leitarform sem á að gera óvirkt.
 */
function setLoading(main, searchForm) {
  /* TODO útfæra */
}

/**
 * Fjarlægir „loading state“.
 * @param {element} main Element sem á að tæma.
 * @param {element} searchForm Leitarform sem á að gera virkt.
 */
function setNotLoading(main, searchForm) {
  /* TODO útfæra */
}

/**
 * Útbýr leitarform og skilar elementi.
 * @param {function} searchHandler Event handler fyrir leit.
 * @returns Element fyrir leitarform.
 */
export function createSearchInput(searchHandler) {
  /* TODO útfæra */
}

/**
 * Útbýr leitarniðurstöðu með titli, höfundum og ártali þegar bók var fyrst
 * útgefin. Titill er hlekkur yfir á nánari upplýsingar um bókina.
 * @param {object} book Bók sem á að birta leitarniðurstöðu fyrir.
 * @returns Elementi fyrir leitarniðurstöðu.
 */
export function createSearchResult(book) {
  /* TODO útfæra */
}

/**
 * Útbýr leitarniðurstöður fyrir leit, birtir eftir hverju var leitað, hvort
 * ekkert hafi fundist, annars listi af niðurstöðum.
 * @param {Array<object>} books Fylki af bókum sem á að birta, gæti verið tómt.
 * @param {string} query Strengur sem leitað var eftir.
 * @returns Elementi með leitarniðurstöðum.
 */
export function createSearchResults(books, query) {
  /* TODO útfæra */
}

/**
 * Útbýr element fyrir öll gögn um bók. Birtir titil fyrir þau gögn sem eru til
 * staðar (ekki tóm fylki) og birtir þau.
 * @param {object} book Gögn fyrir bók sem á að birta.
 * @returns Element sem inniheldur öll gögn um bók.
 */
export function createBook(book) {
  /* TODO útfæra */
}

/**
 * Sækir gögn um bók og birtir þau.
 * @param {element} main Element sem á að birta bók í.
 * @param {element} button Leitarform sem á að gera óvirkt meðan bók er sótt.
 * @param {string} id Auðkenni á bók.
 */
export async function fetchAndRenderBook(main, searchForm, id) {
  /* TODO útfæra */
}

/**
 * Sækir leitarniðurstöður og birtir þær.
 * @param {element} main Element sem á að birta leitarniðurstöður í.
 * @param {element} button Leitarform sem á að gera óvirkt meðan gögn eru sótt.
 * @param {string} query Leitarstrengur.
 */
export async function searchAndRender(main, searchForm, query) {
  /* TODO útfæra */
}

/**
 * Birtir upplýsingar á forsíðu.
 * @param {element} main Element sem á að birta upplýsingar í.
 */
export function renderFrontpage(main) {
  /* TODO útfæra */
}
