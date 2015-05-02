function createGridDisplay(grid) {
	var table = document.getElementById('table');
	for (var x = 0; x < 4; x++) {
		var row = table.insertRow(x);
		for (var y = 0; y < 4; y++) {
			var cell = row.insertCell(y);
			if (grid[x][y] == 0) {
				cell.innerHTML = 0;
			} else{
				cell.innerHTML = grid[x][y].value;
			};
		}
	};
};

function deletGridDisplay() {
	var table = document.getElementById('table');
	for (var i = 0; i < 4; i++) {
		table.deletRow(i);
	};
};

function updateGridDisplay(grid) {
	deletGridDisplay();
	createGridDisplay(grid);
};