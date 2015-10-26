
import {Model} from './model.jsx';

var uuid = 0;

export default class TodoListItemModel extends Model {
	constructor(description) {
		super({
			description: description,
			done: false,
			uuid: ++uuid
		});
	}
}
