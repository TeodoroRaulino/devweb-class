## Comando para iniciar next

npx create-next-app@latest
yarn create-next-app

### Comandos principais

- npm run dev
- npm run build

## Padrão de projeto

#### Dentro da src

- **/components**: Armazena componentes reutilizáveis em toda a aplicação.
- **/app**: Contém páginas e layouts específicos para a aplicação principal.
  - **/dashboard**: Páginas e layouts específicos para a área de dashboard.
- **/services**: Lógica para interações com APIs externas.
- **/stores**: Armazena estados globais (pode ser implementado com context API, Redux, etc.)(Eu uso o zustand, fica a dica).
- **/utils**: Funções utilitárias reutilizáveis.
- **/types**: Tipos de TypeScript para garantir a consistência e evitar erros.

## Configuração do tailwind

- Theme: Você pode adicionar seu css personalizado.
- Content: Em resumo, onde você define quais os arquivos e pastas que será implementado o tailwind.
- Mais dúvidas ? [documentação](https://tailwindcss.com/docs/installation)

## .env config [next.config.js](https://nextjs.org/docs/app/api-reference/next-config-js)

Variáveis de ambiente são valores dinâmicos que podem afetar o comportamento de processos em um sistema operacional ou aplicação. No contexto do desenvolvimento de software, as variáveis de ambiente são frequentemente usadas para configurar e personalizar o comportamento de aplicativos e serviços sem a necessidade de modificar diretamente o código-fonte. Elas são particularmente úteis para lidar com informações sensíveis, como chaves de API ou credenciais de banco de dados, de forma segura.

```
// .env
// .env.development
/ .env.template

BACKEND_API_URL=https://api.example.com
```

```
// next.config.js

  env: {
    BACKEND_API_URL: process.env.BACKEND_API_URL,
  }
```

O Nextjs js identifica todos os arquivos .env (se eu não me engano a prioridade no desenvolvimento é para .env.development depois o .env)

## Layout vs Template

- Temos o Layout principal, que toda a aplicação herda dele, necessariamente ele precis ter as tag html/body. Podemos adicionar layouts secundários para a aplicação, por exemplo, um layout acessado apenas na dashbaord. (Tem como desativar também, mas não sei como). O layout mantém o estado, não tem re-rendering
- Template é um tipo de layout que tem re-rendering

## [Middleware](https://nextjs.org/docs/app/building-your-application/routing/middleware)

## Link, Image

O next tem alguns componentes default sem estilização que precisamos utilizar no lugar das tag <img> e <a>.

- O componente link não tem muito mistério de uso, só pensar nela como uma tag <a> própria para do Nextjs
- O componente Image tem algumas particularidades
  - Para permitir requisições de outras fontes, ou seja, API externa, o nextjs pede que você identifique quais são essas fontes. https://nextjs.org/docs/app/api-reference/components/image#remotepatterns

## Routes

- Roteamento
- [Dynamic routes](https://nextjs.org/docs/app/building-your-application/routing/defining-routes)

## Cookie

- Serve side (next cookie)
- Client side (js-cookie)

## next/navigation

```
import {useRouter} from next/navigation

const router = useRouter()
```

- router.push("sua/rota")
- router.refresh()

## data catching

- fetch
- swr
- axios

## client vs server

## useContext
