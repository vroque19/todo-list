// In a real app, this data would live in a database,
// rather than in memory. But for now, we cheat.
const db = (new Map());

export function getTodos(userid) {
	if (!db.has(userid)) {
		db.set(userid, [{
			id: crypto.randomUUID(),
			description: 'task',
			done: false
		}]);
	}
	return db.get(userid);
}

export function createTodo(userid, description) {
	if (!db.has(userid)) {
		db.set(userid, []);
	}
	const todos = db.get(userid);

	todos.push({
		id: crypto.randomUUID(),
		description,
		done: false
	});
	console.log(todos, userid);
	console.log(description)
	return todos;
}

export function updateTodo(userid, description, todoid) {
	const todos = db.get(userid);
	const index = todos.findIndex(todo => todo.id === todoid);
	todos[index].description = description;
}

export function deleteTodo(userid, todoid) {
	const todos = db.get(userid);
	if (!todos) {
		throw new Error(`No todos found for user with id ${userid}`);
	}
	const index = todos.findIndex(todo => todo.id === todoid);

	if (index !== -1) {
		todos.splice(index, 1);
	}
}
