import * as db from '$lib/server/db.js';
import { fail } from '@sveltejs/kit';


 export function load({cookies}) {
    let id = cookies.get('userid');
    if(!id) {
      id = crypto.randomUUID();
      cookies.set('userid', id, {path: '/'});
    }
    return {
      todos: db.getTodos(id)
    };
}

export const actions = {
  create: async({ cookies, request }) => {
    const data = await request.formData(); // returns a promise
    try {
      db.createTodo(cookies.get('userid'), data.get('description'));
    } catch (error: any){
        return fail(422, {
          description: data.get('description'),
          error: error.message
        });
    }
  },
  delete: async({ cookies, request }) => {
    const data = await request.formData();
    db.deleteTodo(cookies.get('userid'), data.get('id'));
  }
}



