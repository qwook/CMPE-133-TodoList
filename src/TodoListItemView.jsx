
export default class TodoListItemView extends React.Component
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
