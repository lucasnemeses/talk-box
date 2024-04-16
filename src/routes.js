import { randomUUID } from 'node:crypto';
import { Database } from './database.js';
import { buildRoutePath } from './utils/build-route-path.js';

const database = new Database();

export const routes = [
  {
    method: 'POST',
    path: buildRoutePath('/tasks'),
    handler: (req, res) => {
      const { title, description } = req.body;

      if (title && description) {
        const created_at = new Date().toISOString();
        const updated_at = created_at;

        const task = {
          id: randomUUID(),
          title,
          description,
          completed_at: null,
          created_at,
          updated_at,
        };

        database.insert('tasks', task);

        return res.writeHead(201).end();
      }

      const errorResponse = JSON.stringify({
        error: {
          title: 'Bad Request',
          description: 'Please provide `title` and `description` fields in the request body.',
        },
      });

      return res
        .writeHead(400, {'Content-Type': 'application/json'})
        .end(errorResponse);
    },
  },
  {
    method: 'GET',
    path: buildRoutePath('/tasks'),
    handler: (req, res) => {
      const { search } = req.query;

      const tasks = database.select('tasks', search ? {
        title: search,
        description: search,
      } : null);

      return res
        .setHeader('Content-type', 'application/json')
        .end(JSON.stringify(tasks));
    },
  },
  {
    method: 'PUT',
    path: buildRoutePath('/tasks/:id'),
    handler: (req, res) => {
      const { id } = req.params;
      const { title, description } = req.body;

      if (title || description) {
        database.update('tasks', id, {
          ...(title && { title }),
          ...(description && { description }),
          updated_at: new Date().toISOString(),
        });

        return res.writeHead(204).end();
      }

      const errorResponse = JSON.stringify({
        error: {
          title: 'Bad Request',
          description: 'Please provide `title` and/or `description` fields in the request body.',
        },
      });

      return res
        .writeHead(400, {'Content-Type': 'application/json'})
        .end(errorResponse);
    },
  },
  {
    method: 'PATCH',
    path: buildRoutePath('/tasks/:id/complete'),
    handler: (req, res) => {
      const { id } = req.params;

      database.complete('tasks', id);

      return res.writeHead(204).end();
    },
  },
  {
    method: 'DELETE',
    path: buildRoutePath('/tasks/:id'),
    handler: (req, res) => {
      const { id } = req.params;

      database.delete('tasks', id);

      return res.writeHead(204).end();
    },
  },
];
