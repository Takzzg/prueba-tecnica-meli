# Prueba Tecnica Mercado Libre

## Como levantar el proyecto

esta app fue inicializada con `yarn create next-app`.

1. Instalar dependencias.

```bash
    # yarn
    yarn

    # npm
    npm install
```

2. Iniciar servidor dev.

```bash
    # yarn
    yarn dev

    # npm
    npm run dev
```

3. Abrir [http://localhost:3000](http://localhost:3000) en el navegador.

## Testing

1. Iniciar servidor dev.
2. Abrir Cypress en una consola nueva.

```bash
    # yarn
    yarn cy

    # npm
    npm run cy
```

3. Elegir entre E2E y Componentse
    - cada archivo es un test, se puede cambiar sin reiniciar
    - Component testing no requiere servidor dev.

## Estructura del proyecto

```bash
    ./ # root
    |   app/
    |   |   api/
    |   |   |   details/route.ts # pedir detalles, descripcion y categoria de un item
    |   |   |   search/route.ts # buscar items por titulo
    |   |
    |   |   items/
    |   |   |   page.tsx # reads url query and shows y llama a api/search/
    |   |   |   /[id]/page.tsx # read id from url search params y llama a api/details
    |   |
    |   |   globals.scss # reset estilos globales (margin: 0; etc...)
    |   |   icon.png # icono pestaña
    |   |   layout.tsx # se muestra en todas las urls, contiene a la caja de busqueda
    |   |   page.tsx # localhost:3000/
    |
    |   components/
    |   cypress/
    |   public/assets/ # imagenes estaticas
    |   styles/guidelines.scss # variables sass con colores, tamaños, etc...
    |   types/api.ts # tipos devueltos por api/search/ y api/details/
    |   .env # URLs ML
    |   [...]
```

<br>
<hr>

<details>
    <summary>Original Next.js Readme.md</summary>

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

-   [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
-   [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

</details>
