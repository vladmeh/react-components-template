/**
 * Created by mvl on 15.02.2017.
 */
import React from 'react';

function Post(props){
	return(
		<div>
			<h3>{props.title}</h3>
			<p>{props.content}</p>
		</div>
	)
}

function ListBlogPost(props) {
	const sidebar = (
		<ul>
			{props.posts.map((post) =>
				<li key={post.id}>
					{post.title}
				</li>
			)}
		</ul>
	);

	const content = props.posts.map((post) =>
		<Post
			key={post.id}
			title={post.title}
			content={post.content}/>
	);


	return (
		<div>
			{sidebar}
			<hr />
			{content}
		</div>
	);
}

export default ListBlogPost;

/*const posts = [
	{id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
	{id: 2, title: 'Installation', content: 'You can install React from npm.'}
];

ReactDOM.render(
	<ListBlogPost posts={posts} />,
	document.getElementById('root')
);*/
