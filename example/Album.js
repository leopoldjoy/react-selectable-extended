import React from 'react';

const Album = ({
	selected,
	selecting,
	title,
	year
}) => {
	let classes;
	if(selecting){
		classes = selected ? 'item selected selecting' : 'item selecting';
	}else{
		classes = selected ? 'item selected' : 'item';
	}
	return (
		<div className={classes}>
			<h2>{title}</h2>
			<small>{year}</small>
		</div>
	)
};

export default Album;
