/**
 * Created by mvl on 15.02.2017.
 */
import React from 'react';

function Mailbox(props) {
	const unreadMessages = props.unreadMessages;
	return (
		<div>
			<h1>Hello!</h1>
			{unreadMessages.length > 0 &&
			<h2>
				You have {unreadMessages.length} unread messages.
			</h2>
			}
		</div>
	);
}

export default Mailbox;

/*
const messages = ['React', 'Re: React', 'Re:Re: React'];

ReactDOM.render(
	<Mailbox unreadMessages={messages} />,
	document.getElementById('root')
);
*/
