## Steps:

# Milestone 1:

CHECK- Create a card component and render static data.

# Milestone 2:

CHECK- Make the card component reusable
CHECK- Render multiple cards with different data

# Milestone 3:

CHECK- Create a new “My Tokens” page

- When clicking a card on the home page, add it to your “My Tokens” list
- Navigating to your My Tokens page should show you all your favourited tokens
- Use Zustand to persist the data across page loads

# Milestone 4:

- Use the Coin Market Cap API (or similar) to pull dynamic data, limit the amount returned to 10 or 20, don’t worry about pagination.
- Here's the link to the docs: https://coinmarketcap.com/api/documentation/v1/
- Specifically this endpoint should be pretty handy: https://coinmarketcap.com/api/documentation/v1/#operation/getV1CryptocurrencyListingsLatest
- Here’s an API key: `0cb61b43-fe49-42ce-8e3a-e030fb104f24`

# Milestone 5:

- Instead of using zustand to persist state, implement Mongo DB to store your “My Tokens” data.

# Milestone 6:

- Add in the ability to delete/remove favourited items
