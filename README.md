<h1 align="center">
    <!-- <img alt="React Native Twitch.tv" width="300px" src="https://res.cloudinary.com/dhcpizhbr/image/upload/v1606341394/readme-assets/TwitchExtrudedWordmarkPurple_y3mimi.svg" /> -->
    <br>
    :paperclip: All My Links
</h1>

<h4 align="center">
  Linktree inspired tool API built with NodeJS & TypeORM :satellite:
</h4>

## :rocket: Technologies

This project was developed by Vinícius Coelho for studying purposes with the following technologies:

-  [NodeJS](https://reactnative.dev/)
-  [Express](https://expressjs.com/)
-  [TypeORM](https://typeorm.io/)
-  [TypeScript](https://www.typescriptlang.org/)
-  [PostgreSQL](https://www.postgresql.org/)
-  [VS Code][vc] with [EditorConfig][vceditconfig] and [ESLint][vceslint]

## :information_source: How To Use

To clone and run this application, you'll need [Git](https://git-scm.com), [Node.js v10.16][nodejs] or higher + [Yarn v1.13][yarn] or higher installed on your computer. Also a SQL database instance of your choice should be running. Be sure to update your database information on [ormconfig.json](./ormconfig.json) file (refer to [TyopeORM documentation](https://typeorm.io/)). 
From your command line:

```bash
# Clone this repository
$ git clone https://github.com/vini-coelho/all-my-links-backend

# Go into the repository
$ cd all-my-links-backend

# Install dependencies
$ yarn install

# Run the migrations
$ yarn typeorm migration:run

# Start the server
$ yarn dev
```

## :memo: License

This project is under the MIT license. See the [LICENSE](./LICENSE) for more information.

---

Made with ♥ by Vinicius Coelho :wave: [Get in touch!](https://www.linkedin.com/in/viniciustcoelho/)

[nodejs]: https://nodejs.org/
[yarn]: https://yarnpkg.com/
[vc]: https://code.visualstudio.com/
[vceditconfig]: https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig
[vceslint]: https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint