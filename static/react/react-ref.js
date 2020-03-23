const { Component } = React;
class ColorForm extends Component {
	constructor(props) {
		super(props);
		this.submit = this.submit.bind(this);
		this.reset = this.reset.bind(this);
	}
	submit(e) {
		const {title,color} = this.refs;
		e.preventDefault();
		alert(`title:${title.value},color:${color.value}`);
	}
	reset() {
		this.refs.title.value = '';
		this.refs.color.value = '#ff0000';
		this.refs.title.focus();
	}
	render() {
		return <form onSubmit={this.submit} onReset={this.reset}>
			<input ref="title" type="text" placeholder="给你一点颜色瞧一瞧" required/>
			<input ref="color" type="color" required/>
			<button type="submit">点我看颜色</button>
			<button type="reset">重置颜色</button>
		</form>
	}
}

ReactDOM.render(<ColorForm />, document.getElementById('app'));