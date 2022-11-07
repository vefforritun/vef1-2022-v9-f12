/* eslint-disable guard-for-in */
import { el, empty } from './lib/helpers.js';

const AUTHOR_API = 'https://openlibrary.org/search/authors.json'


function createAuthorsList(query) {
  const list = document.createElement('ul');

  const url = new URL(`${AUTHOR_API}?q=${query}`);

  list.appendChild(list.appendChild(el('li', { class: 'foo' }, 'Sæki gögn...')))

  fetch(url)
    .then((response) => {
      empty(list);
      response.json().then((data) => {
        for (const doc of data.docs) {
          console.log(doc)

          list.appendChild(list.appendChild(el('li', { class: 'foo' }, doc.name)))
        }
      })
    }) 
    .catch((error) => {
      empty(list);
      list.appendChild(list.appendChild(el('li', { class: 'foo' }, 'Villa!!')))
      console.error('gat ekki sótt gögn', error);
    })

  return list;
}

function main(query) {
  const mainElement = document.querySelector('main');

  const authors = createAuthorsList(query);

  mainElement.appendChild(authors)
}

main('Stephen King');
