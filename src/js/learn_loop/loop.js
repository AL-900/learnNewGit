import React from 'react'

export let myLoop = (num) =>
{
	for (let index = 1; index <= num; index++) {
		console.log(index);
		<p>{index}</p>
	}
};
