import React from 'react';

// Icon
import { ReactComponent as Close } from '../assets/icons/ui/close.svg';

// Styles
import './info.scss';

export const Info = () => {
	const data = require('../data/info.json');
	const dataInfo = data.info;
	// console.log(dataInfo);

	return (
		<div className='modal-card'>
			<div className='close'>
				<Close />
			</div>
			<h2>{data.title}</h2>
			<div>
				{dataInfo.map((info) => (
					<p key={info.id}>
						<b>{info.title}</b>
						{info.text}
					</p>
				))}
			</div>
		</div>
	);
};
