export default () => ({
  database: {
    host: process.env.DATABASE_HOST,
    port: parseInt(process.env.DATABASE_PORT, 10) || 5432,
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    name: process.env.DATABASE_NAME,
  },
  fiatConversionApiKey: process.env.FIAT_CONVERSION_API_KEY,
  coinbaseCommerceApiKey: process.env.COINBASE_COMMERCE_API_KEY,
});
