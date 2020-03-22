// 数据
const list = [{title:'item 1',content:'content 1'},
{title:'item 2',content:'content 2'}];

const style = {
	border: '2px solid red',
	marginBottom:20,
	padding:20,
	backgroundColor: 'pink'
};
// 列表项
const Item = ({title,content}) => <article style={style}>
	<header>
		<h1>{title}</h1>
	</header>
	<section>
		<div>{content}</div>
	</section>
</article>;

// 列表
const List = (props) => <div className="article-list">
	{
		props.data.map((item,i) => <Item key={i} title={item.title} content={item.content} />)
	}
</div>;


ReactDOM.render(<List data={list} />, document.getElementById('app'));