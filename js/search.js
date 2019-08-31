const searchClient = algoliasearch('OJTYESVQSG', '52cfee1315a66b91bb6e4d0b1ff4ae98');

const search = instantsearch({
  indexName: 'devchat.tv',
  searchClient,
});

search.addWidget(
  instantsearch.widgets.searchBox({
    container: '#searchbox',
  })
);

search.addWidget(
  instantsearch.widgets.hits({
    container: '#hits',
    templates: {
      item: `
        <h2><a href="{{url}}">{{ hierarchy.lvl1 }}</a></h2>
        <p>{{content}}</p>
      `
    },
    transformItems(items) {
      return items.filter(item => !item.url.endsWith('index.html'));
    }
  })
);

search.start();

$('.close').click(function() {
  $('#search').removeClass('open');
});