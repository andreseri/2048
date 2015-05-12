function View() {
	this.gridContainer = document.querySelector('#table');
	this.score = 0;
};

View.prototype.createGridDisplay = function(_grid) {
	var table = this.gridContainer;
	var grid = _grid;
	for (var x = 0; x < 4; x++) {
		var row = table.insertRow(x);
		for (var y = 0; y < 4; y++) {
			var cell = row.insertCell(y);
			if (grid.cells[x][y] == 0) {
				cell.innerHTML = 0;
			} else {
				cell.innerHTML = grid.cells[x][y].value;
			};
		};
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