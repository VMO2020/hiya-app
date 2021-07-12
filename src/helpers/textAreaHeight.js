// Dealing with Textarea Height
import { useState } from 'react';

// Initial height in 'px'
const initHeight = 30;

// Height increment factor in 'px'
const incHeight = 22;

// Number of characters to start to increase the height (break point)
const numCharacters = 34;

export const calcHeight = ({ inputText }) => {
	const [height, setHeight] = useState(`${initHeight}px`);

	// Clac the increment 'inc' based in numCharacters
	let inc = Math.floor(inputText.length / numCharacters);
	// console.log(inc);
	let newHeight = initHeight + inc * incHeight;
	setHeight(`${newHeight}px`);

	return height;
};

// USE in 'textarea'
// style={{ height: `${height}` }}
