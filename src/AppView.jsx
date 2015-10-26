
import TodoListView from './TodoListView.jsx';
import RawModelView from './RawModelView.jsx';

import {Collection} from './model.jsx';
import TodoListItemModel from './TodoListItemModel.jsx';

var todoListModel = new Collection([
	new TodoListItemModel("Mow the lawn."),
	new TodoListItemModel("Wash the car.")
]);

export default class AppView extends React.Component
{
	/* Render the View */
	render()
	{
		return (
			<div className="container">
				<div className="row">
					<div className="col-xs-6">
						<h1>Henry&rsquo;s Todo List</h1>
						<TodoListView model={todoListModel}/>
					</div>
					<div className="col-xs-6">
						<h1>Model</h1>
						<RawModelView model={todoListModel}/>
					</div>
				</div>
			</div>
		);
	}
};
