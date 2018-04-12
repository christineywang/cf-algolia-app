// Require module
const ContentfulToAlgolia = require('contentful-to-algolia');
const CONTENTFUL_SPACE = '2q1fpqwpgegt';
const CONTENTFUL_ACCESSTOKEN =
  'a5928e816edc7addfa4298669bd534f83b8cd907b920511b7d2f86f0d5b3e270';
const ALGOLIA_APPID = '9CB4OUQMXY';
const ALGOLIA_APIKEY = '56047a4ac5c37fca75ac7666a1ccc587';

// Generate new instance
const Sync = new ContentfulToAlgolia({
  algolia: {
    applicationId: ALGOLIA_APPID,
    apiKey: ALGOLIA_APIKEY
    // indexPrefix: 'dev_' // for Development mode
  },

  contentful: {
    accessToken: CONTENTFUL_ACCESSTOKEN,
    space: CONTENTFUL_SPACE,
    host: 'cdn.contentful.com'
  },

  locales: [['en-US', 'en'], ['de-DE', 'de']]
});

// Sync data
Sync.sync(
  '2PqfXUJwE8qSYKuM0U6w8M',
  'product',
  function(algolia_response) {
    console.log('number of indexed entries', algolia_response.length);
  }
  // [String <entryId>],
  // [Function <manipulateSingle>]
);
