### :green_book: Task description:
Create an authentication service (credentials: login & password).

After being authenticated download data from public API 
(available APIs can be found [here](https://github.com/public-apis/public-apis)),
save it to local database and then show it.

Use the following technologies:

- Node.js
- TypeScript
- TypeORM
- Swagger
- MongoDB
- Docker (optional)

### :gear: Usage:

- #### backend
  1. Open terminal in the project's root directory and run `npm install`.
  2. Create a `.env` file in the project root directory containing properties from the `.env.example` file.
  3. Run `npm start`
  
- #### frontend *
  1. Go to the `front` directory and 
  2. Run `npm install`.
  3. Run `npm run serve`

## :warning: Warning!

Current frontend implementation leaves much to be desired, as it can be broken easily. The API itself is more resilient.
Thus, I suggest using Postman to test it. You can import Postman collection [here](https://www.getpostman.com/collections/5136830063c318c4a093).
