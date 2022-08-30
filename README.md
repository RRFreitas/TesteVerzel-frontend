# Teste Prático Full Stack Python (Frontend)

### Tecnologia utilizada no Frontend:
- React 17

### Casos de uso:
- Listagem de módulos e aulas
- Login de administrador com token JWT
- Criação, edição e remoção de registros no painel de administrador, com rotas protegidas
- Filtro de módulos na página inicial

### Para rodar o projeto é preciso:
- Node 16
- NPM

### Rodando o projeto (depois de rodar o [backend](https://github.com/RRFreitas/TesteVerzel-backend))
- Vá para a raiz do projeto no terminal
- Garanta que a node utilizado está na versão 16 (`node -v`)
- Rode `npm install`
- Rode `npm start`
- Servidor rodando na URL [http://localhost:3000/](http://localhost:3000/)

### Passo a passo de uso
- Abrir [http://localhost:3000/](http://localhost:3000/)
- Clicar em Login ou ir para [http://localhost:3000/login](http://localhost:3000/login)
- Utilize o login e senha do admin criado no backend conforme o [readme](https://github.com/RRFreitas/TesteVerzel-backend)
- Clicar em Admin ou ir para [http://localhost:3000/admin](http://localhost:3000/admin)
- Na tabela de módulos, clicar no `+`, preencher os dados e salvar.
- Na linha do módulo criado, clicar na seta do lado esquerdo, abrirá uma tabela de aulas, clicar no `+`, preencher os dados e salvar.
- O novo módulo estará na página inicial (clique na logo do canto superior esquerdo ou vá para [http://localhost:3000/](http://localhost:3000/))
- Na página de admin também é possível clica nos ícones de editar para editar as informações do módulo ou aula e excluir.
