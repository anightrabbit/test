// 生命周期分3个阶段，mount，update，unmount
// 在render方法之前设置setState不会促发更新阶段，只会合并初始状态
// 在render方法之后设置setState会促发更新阶段
// render方法内设置setState会报错，循环更新直到内存泄漏

const getFakeMembers = count => new Promise((resolve, reject) => {
	const api = `https://api.randomuser.me/?nat=NO&results=${count}`;
	const request = new XMLHttpRequest();
	request.open('GET',api);
	request.onload = ()=> (request.status == 200)
	? resolve(JSON.parse(request.response).results)
	: reject(Error(request.statusText));
	request.onerror = err=> reject(err);
	request.send();
});

const Member = ({email,picture,name,location}) =>
	<div className="member">
		<img src={picture.thumbnail} alt="img" />
		<h1>{name.first} {name.last}</h1>
		<p><a href={"mailto:"+ email}>{email}</a></p>
		<p>{location.city},{location.state}</p>
	</div>

class MemberList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			loading: false,
			members: [],
			error: null
		};
	}

	componentWillMount() {
		console.log('componentWillMount');
		this.setState({loading:true});// 不会促发更新周期事件
		getFakeMembers(this.props.count)
		.then(members => {
			console.log('componentWillMount开始促发一次更新周期');
			this.setState({members,loading:false})
			console.log('componentWillMount结束更新周期');
		},
			error => this.setState({error,loading:false})
		)
	}

	componentWillUpdate(nextProps, nextState) {
		console.log(nextProps,nextState,'componentWillUpdate');
	}

	componentDidMount() {
		console.log('componentDidMount');
		// this.setState({loading:true});
		// getFakeMembers(this.props.count)
		// .then(members => {
		// 	console.log('componentDidMount开始促发一次更新周期');
		// 	this.setState({members,loading:false})
		// 	console.log('componentDidMount结束更新周期');
		// },
		// 	error => this.setState({error,loading:false})
		// )
	}

	render() {
		const { members, loading, error} = this.state;
		console.log('render');
		return (<div className="member-list">
			{
				loading
				? <span>Loading Members</span>
				: members.length
					? members.map((user,i) => <Member key={i} {...user} />)
					: <span>0 members loaded...</span>
			}
			{
				error ? <p>Error Loading Members: error</p> : ""
			}
		</div>)
	}

	componentWillUnmount() {
		console.log('componentWillUnmount');
	}

}

ReactDOM.render(<MemberList count="10" />, document.getElementById('app'));

setTimeout(()=>{
	ReactDOM.unmountComponentAtNode(document.getElementById('app'));
},5000);