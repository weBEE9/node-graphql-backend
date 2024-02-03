import { Resolvers } from './__generated__/graphql.js';

const resolvers: Resolvers = {
  Query: {
    books: (_, args) => {
      const { title: queryTitle } = args.input;

      if (queryTitle) {
        return books.filter((book) => {
          const lowerCaseTitle = book.title.toLowerCase();
          const lowerCaseArg = queryTitle.toLowerCase();

          return lowerCaseTitle.includes(lowerCaseArg);
        });
      }

      return books;
    },
    book: (_, args) => {
      const { id: queryID } = args.input;
      return books.find((book) => book.id === queryID);
    },
  },
};

export const authorKate = {
  id: '1',
  name: 'Kate Chopin',
};

export const authorPaul = {
  id: '2',
  name: 'Paul Auster',
};

const books = [
  {
    id: '1',
    title: 'The Awakening',
    author: authorKate,
  },
  {
    id: '2',
    title: 'City of Glass',
    author: authorPaul,
  },
  {
    id: '3',
    title: `Kate's second book`,
    author: authorKate,
  },
  {
    id: '4',
    title: `Kate's third book`,
    author: authorKate,
  },
  {
    id: '5',
    title: `Paul's second book`,
    author: authorPaul,
  },
];

export default resolvers;
