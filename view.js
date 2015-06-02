function View() {
	this.gridContainer = document.querySelector('#table');
	this.tileContainer = document.querySelector('.tile-container');
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

View.prototype.addTile = function(_tile) {
	tile = _tile;
	var newTile = document.createElement("div");
	newTile.innerHTML = tile.value;
	this.tileContainer.appendChild(newTile);
	newTile.setAttribute("class", "tile p"+tile.x+"-"+tile.y);
	console.log(this.tileContainer);
};

View.prototype.deletGridDisplay = function() {
	for (var i = 3; i >= 0; i--) {
		this.gridContainer.deleteRow(i);
	};
};

View.prototype.updateGridDisplay = function(_grid) {
	this.deletGridDisplay();
	this.createGridDisplay(_grid);
};