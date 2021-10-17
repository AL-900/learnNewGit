import React from 'react'
import API from './textContext'


export function HoverContext(params) {
	return (
		<API.Provider value = {theme ='dark'}>
			<div classname='container mt-5 mt-5'>
				<center>
					<h3>Hovered</h3>
				</center>
			</div>
		</API.Provider>
	);
}