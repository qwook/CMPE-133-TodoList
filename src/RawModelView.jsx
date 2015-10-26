
export default class RawModelView extends React.Component
{
	componentWillMount()
	{
		this.props.model.on("change", () => {
			this.forceUpdate();
		});
	}
	
	render() {
		return (
			<pre>
				{this.prettify()}
			</pre>
		)
	}

	prettify(data) {
		var ret = "";

		ret += "[\n";

		for (var i in this.props.model.data) {
			var model = this.props.model.data[i];

			ret += "\t{\n";

			for (var k in model.data) {
				ret += "\t\t\"" + k + "\": \"" + model.data[k] + "\",\n";
			}
			ret = ret.substring(0, ret.length-2) + "\n";

			ret += "\t},\n";
		}

		if (this.props.model.data.length > 0) {
			ret = ret.substring(0, ret.length-2) + "\n";
		}

		ret += "]";

		return ret;
	}

}
