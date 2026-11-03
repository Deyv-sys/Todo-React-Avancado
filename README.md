# Todo React Avançado

Aplicação de lista de tarefas feita com React. As tarefas são salvas no armazenamento local do navegador.

## URL do site

https://deyv-sys.github.io/Todo-React-Avancado/

O site ficará disponível após habilitar GitHub Pages com a opção **GitHub Actions** e executar o workflow com sucesso na branch `main`.

## Executar localmente

Requisitos: Node.js 20 ou superior e npm.

```bash
npm ci
npm start
```

A aplicação estará disponível em [http://localhost:3000](http://localhost:3000).

## Verificações

```bash
npm run lint
npm run test -- --watchAll=false
npm run build
```

## CI/CD

O workflow em `.github/workflows/main.yml` executa lint, testes e build em pushes e pull requests para `main`. Após um push bem-sucedido em `main`, o build é publicado automaticamente no GitHub Pages.

Para habilitar a publicação no repositório, configure **Settings → Pages → Build and deployment → Source** como **GitHub Actions**. O workflow usa o `GITHUB_TOKEN` fornecido pelo GitHub Actions; não é necessário cadastrar secrets adicionais.

Consulte as execuções na [aba Actions](https://github.com/Deyv-sys/Todo-React-Avancado/actions).
