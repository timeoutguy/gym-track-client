## Extensões do VSCode recomendadas:

- Tailwind CSS IntelliSense
- ESlint
- Gitlens
- Prettier
- ES7 React/Redux/GraphQL/React-Native snippets
- vscode-styled-components

## Criando novos componentes

Quando for criar um novo componente, criar uma pasta com o nome do componente dentro da pasta `components` e dentro dessa pasta um arquivos index.jsx. Exemplo do componente `Texto`:
`src/components/Texto/index.jsx`

```js
import React from 'react';
const Texto = () => {
  return <h1>Texto</h1>;
};
export default Texto;
```

## Criando novas páginas

Quando for criar uma nova pagina, criar uma pasta com o nome da página dentro da pasta `pages` e dentro dessa pasta um arquivos index.jsx. Exemplo da página `Home`:
`src/pages/Home/index.jsx`

```js
import React from 'react';
const Home = () => {
  return (
    <div>
      <h1> Bem vindo </h1>
    </div>
  );
};
export default Home;
```

após isso é necessário ir no arquivo `routes.js` e criar uma rota para essa página. Exemplo:

```js
import React from 'react';
import { Switch, Route } from 'react-router-dom';
// Importar páginas aqui
import Home from './pages/Home';
const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  );
};
export default Routes;
```

## Scripts do projeto

### `yarn start`

Roda a aplicação no modo de desenvolvimento.<br />
Por padrão, roda no endereço [http://localhost:3000](http://localhost:3000).

A página recarrega automaticamente quando salva.<br />

### `yarn test` (Não usar)

Inicia a aplicação no modo teste.<br />

### `yarn build`

Builda a aplicação e salva na pasta `build`.<br />
Serve para otimizar a aplicação react e lançar sua versão final.
[deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn watch:css`

Transforma o arquivo `tailwind.css` no arquivo `main.css`

## Learn More

To learn React, check out the [React documentation](https://reactjs.org/).
