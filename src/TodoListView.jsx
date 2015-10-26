
import TodoListItemView from './TodoListItemView.jsx';
import TodoListItemModel from './TodoListItemModel.jsx';

export default class TodoListView extends React.Component
{
	componentWillMount()
	{
		this.props.model.on("change", () => {
			this.forceUpdate();
		});
	}

	addItem(event) {
		event.preventDefault();
		var description = this.refs.inputDescription.value;
		this.refs.inputDescription.value = "";

		this.props.model.insert(new TodoListItemModel(description));
	}

	removeItem(item) {
		console.log(item);
		this.props.model.remove(item);
	}

	renderItemView(item, index) {
		return (
			<TodoListItemView key={item.getProp("uuid")} model={item} onDeleteItem={this.removeItem.bind(this)}/>
		);
	}

	render()
	{
		return (
			<div>
				{this.props.model.getRaw().map(this.renderItemView.bind(this))}
				<form className="form-inline" onSubmit={this.addItem.bind(this)}>
					<input className="form-control" ref="inputDescription" type="text"/>
					&nbsp;
					<button className="btn btn-primary" type="submit">Add</button>
				</form>
			</div>
		);
	}
}
