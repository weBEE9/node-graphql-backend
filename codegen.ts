import { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: './src/schema.ts',
  generates: {
    './src/__generated__/graphql.ts': {
      plugins: ['typescript', 'typescript-resolvers'],
    },
  },
};

export default config;
