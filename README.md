# TalkBox API

Bem-vindo ao TalkBox API! Este é um projeto simples de API CRUD para gerenciamento de tarefas. Aqui você pode criar, ler, atualizar e excluir suas tarefas de maneira fácil e eficiente.

## Funcionalidades Principais

- Criação de uma tarefa.
- Listagem de todas as tarefas.
- Atualização de uma tarefas pelo `id`.
- Remover uma tarefa pelo `id`.
- Marcar pelo `id` uma tarefa como completa.
- Importação de tarefas em massa por um arquivo CSV.

## Uso Básico

- **Criar Tarefa**: Envie uma requisição `POST` para `/tasks` com um JSON contendo o `title` e `description`.

- **Listar Tarefas**: Faça uma requisição `GET` para `/tasks` para visualizar todas as tarefas existentes.

- **Atualizar Tarefa pelo ID**: Envie uma requisição `PUT` para `/tasks/{id}` com um JSON contendo o `title` e/ou `description`.

- **Remover Tarefa pelo ID**: Faça uma requisição `DELETE` para `/tasks/{id}` para remover uma tarefa específica.

- **Marcar Tarefa como Completa pelo ID**: Envie uma requisição `PATCH` para `/tasks/{id}/complete` para marcar uma tarefa como completa.

## Instalação e Configuração

Clone este repositório:
```
git clone https://github.com/lucasnemeses/talk-box.git
```

Instale as dependências:
```
npm install
```

Inicie o servidor:
```
npm start
```
