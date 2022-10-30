const header = document.querySelector('.layout__header');
const main = document.querySelector('.layout__main');

async function onSearch(e) {
  /* TODO útfæra */
}

const searchForm = createSearchInput(onSearch);

header.appendChild(searchForm);

/**
 * Athugar hvaða síðu við erum á út frá query-string og birtir viðeigandi
 * gögn. Ef `id` er gefið er bók birt, ef `query` er gefið er leitarniðurstaða
 * birt, annars er forsíða birt.
 */
function route() {
  /* TODO útfæra */
}

/**
 * Bregst við því þegar við notum vafra til að fara til baka eða áfram.
 */
window.onpopstate = () => {
  /* TODO útfæra */
};

// Athugum í byrjun hvað eigi að birta.
route();
