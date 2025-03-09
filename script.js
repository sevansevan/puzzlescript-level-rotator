// transpose
document.getElementById("transpose").addEventListener("click", function() {
    console.log('transpose');
	const t = inputText.value;
	const columns = getColumns(t);
	
	inputText.value = columns.join('\n');
});


// Rotate clockwise
document.getElementById("rotateClockwise").addEventListener("click", function() {
	console.log('transpose');
	const t = inputText.value;
	const lines = t.split('\n').filter(line => line.trim() !== '');
	const columns = getColumns(t);
	console.log(columns[0])
	
	let res = []
	for (let col = 0; col < columns.length; col++){
		newLine = columns[col].split('').reverse().join('');
		res.push(newLine);
	}
	inputText.value = res.join('\n');
});

// Rotate counterclockwise
document.getElementById("rotateCounterclockwise").addEventListener("click", function() {
	console.log('transpose');
	const t = inputText.value;
	const lines = t.split('\n').filter(line => line.trim() !== '');
	const columns = getColumns(t);
	console.log(columns[0])
	
	let res = []
	for (let col = columns.length - 1; col >= 0; col--){
		newLine = columns[col];
		res.push(newLine);
	}
	inputText.value = res.join('\n');
});

// Flip horizontally
document.getElementById("flipH").addEventListener("click", function() {
	console.log('flipH!');
	const t = inputText.value;
	const lines = t.split('\n');
	const flippedLines = lines.map(line => {return line.split('').reverse().join('')}); // flip each line 
	const flippedText = flippedLines.join('\n')
	inputText.value = flippedText;
});

// Flip vertically
document.getElementById("flipV").addEventListener("click", function() {
	const t = inputText.value;
	const lines = t.split('\n');
	const flippedLines = lines.reverse();
	inputText.value = flippedLines.join('\n');

});

// Copy to clipboard
document.getElementById("copyToClipboard").addEventListener("click", function() {
    let t = document.getElementById("inputText").value;
	const button = document.getElementById("copyToClipboard");
    navigator.clipboard.writeText(t)
        .then(() => {
            // Change the text and color of the button
            button.textContent = "Copied!";  // Change the button text
            button.style.backgroundColor = "#4C50AF";  // Change the button color (green)

		})
        .catch(err => {
			// Change the text and color of the button
            button.textContent = "Failed to copy: " + err;  // Change the button text
            button.style.backgroundColor = "#AF4C50";  // Change the button color (green)
			
		})
		
		// After 1 second, reset the button text and color
		setTimeout(() => {
			button.textContent = "Copy to clipboard";  // Reset text
			button.style.backgroundColor = "";  // Reset the background color (default)
		}, 1000);  // Wait for 1 seconds
});

function getColumns(t){
	
	const lines = t.split('\n').filter(line => line.trim() !== '');
	const maxLength = Math.max(...lines.map(line => line.length));
	
	let columnsArray = [];
	
	for (let i = 0; i < maxLength; i++){
		let column = lines.map(line => line[i] || '.').join('');
		columnsArray.push(column);
	}
	return columnsArray;
	//const columns = columnsArray.join('\n');
	//return columns;
}