const authors = {
  athornz: {
    name: 'Josh Burton',
    additionalName: 'athornz',
    address: 'Auckland, New Zealand',
    brand: 'Mobile Developer @ Ark Labs',
    children: '...',
    email: 'josh@arklabs.nz',
    familyName: 'Burton',
    gender: 'Male',
    givenName: 'Josh',
    height: '...',
    homeLocation: 'Auckland',
    jobTitle: 'Mobile Developer',
    knows: '...',
    memberOf: '...',
    nationality: 'New Zealander',
    owns: '...',
    parent: '...',
    performerIn: '...',
    publishingPrinciples: '...',
    relatedTo: '...',
    seeks: '...',
    sibling: '...',
    telephone: '...',
    weight: '...',
    workLocation: '...',
    worksFor: '...',
    description: '...',
    disambiguatingDescription: '...',
    identifier: '...',
    image: 'https://www.gravatar.com/avatar/4aa6db42c30f72b99277993b12d57af3?s=200',
    sameAs: 'https://josh.app',
    url: 'https://josh.app'
  }
};

const getAuthor = (id) => {
  const author = {
    ...authors[id],
    '@type': 'Person'
  };
  return author
    ? author
    : authors[0];
};

module.exports = {
  authors,
  getAuthor
};
