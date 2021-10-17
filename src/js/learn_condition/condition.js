import { myLoop } from "../learn_loop/loop";
import { colors, arr } from "/src/js/common";
import React, { useState, useEffect } from "react";

// setTimeout(() => {
// 	let getAge = prompt("Your age Please !");

// 	let myConditionOfAge = () => (getAge >= 18 ? `Nunu Daray Taile ! ` : `Bacca Polapan ! `);

// 	setTimeout(function () {
// 		alert(myConditionOfAge());
// 		myLoop(getAge);
// 	}, 2000);
// }, 3000);

export function HelloWorld() {
	const [getcolor, setcolor] = useState("black");

	let changeColor = () => {
		let color = colors[Math.floor(Math.random() * colors.length)]; // 'colors' import from common.js
		return color;
	};

	return (
		<div>
			<p id='p' onMouseEnter={() => setcolor(changeColor())} style={{ height:'50vh' , color: getcolor, fontSize: "10rem ", textAlign: "center" }}>
				Hello World . Joy Bangla !
			</p>


			
		</div>
	);
}

let myNamata = (n = 2) => {
	arr.map((v) => {
		let num = v;

		let namata = num * n;

		let synt = `${num} * ${n} = ${namata}`;

		console.log(synt);
	});
};

// let n = prompt(" !!!!!!!! " );

// myNamata(2.21);