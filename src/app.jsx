
import {Model, Collection} from './model.jsx';
import RawModelView from './RawModelView.jsx';

var uuid = 0;

class TodoListItemModel extends Model {
	constructor(description) {
		super({
			description: description,
			done: false,
			uuid: ++uuid
		});
	}
}

var todoListModel = new Collection([
	new TodoListItemModel("Mow the lawn."),
	new TodoListItemModel("Wash the car.")
]);

class TodoListItem extends React.Component
{
	componentWillMount()
	{
		this.props.model.on("change", () => {
			this.forceUpdate();
		});
	}

	markAsDone() {
		this.props.model.setProp("done", !this.props.model.getProp("done"));
	}

	render() {
		return (
			<div className="well well-sm">
				<div className="media-body">
					<p className="media-heading">
						{
							(() => {
								if (this.props.model.getProp("done")) {
									return <strike>{this.props.model.getProp("description")}</strike>
								} else  {
									return this.props.model.getProp("description")
								}
							})()
						}
					</p>
					<div className="btn-group btn-group-sm">
						<button type="button" className="btn btn-default" onClick={()=>{ this.props.onDeleteItem(this.props.model) } }><span className="glyphicon glyphicon-trash"/></button>
						{
							(() => {
								if (this.props.model.getProp("done")) {
									return <button type="button" className="btn btn-success" onClick={this.markAsDone.bind(this)}><span className="glyphicon glyphicon-ok-sign"/></button>
								} else  {
									return <button type="button" className="btn btn-default" onClick={this.markAsDone.bind(this)}><span className="glyphicon glyphicon-ok-circle"/></button>
								}
							})()
						}
					</div>
				</div>
			</div>
		);
	}
}

class TodoList extends React.Component
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
			<TodoListItem key={item.getProp("uuid")} model={item} onDeleteItem={this.removeItem.bind(this)}/>
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

class AppView extends React.Component
{
	/* Render the View */
	render()
	{
		return (
			<div className="container">
				<div className="row">
					<div className="col-xs-6">
						<h1>Henry&rsquo;s Todo List</h1>
						<TodoList model={todoListModel}/>
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

export default AppView;
