function Grid(_size) {
	this.size = _size;
	this.cells = this.createGrid();
};

Grid.prototype.createGrid = function() {
	var cells = [];
	for (var x = 0; x < this.size; x++) {
		for (var y = 0; y < this.size; y++) {
			cells[x] = new Array(this.size + 1).join('0').split('').map(parseFloat);
		}
	};

	return cells;
};

Grid.prototype.eachCell = function(callback) {
	for (var x = 0; x < 4; x++) {
		for (var y = 0; y < 4; y++) {
			callback(x, y, this.cells[x][y]);
		};
	};
};

Grid.prototype.availableCell = function(_cell) {
	return !(this.cellContent(_cell));
};

Grid.prototype.withinBounds = function(_cell) {
	return _cell.x >= 0 && _cell.x < this.size && _cell.y >= 0 && _cell.y < this.size;
};

Grid.prototype.cellContent = function(_cell) {
	if (this.withinBounds(_cell)) {
		return this.cells[_cell.x][_cell.y];
	} else {
		return false;
	}
};

Grid.prototype.availableCells = function() {
	var cells = [];

	this.eachCell(function(x, y, tile) {
		if(!tile) {
			cells.push({ x: x, y: y})
		};
	});

	return cells;
};

Grid.prototype.randomAvailableCell = function() {
	var cells = this.availableCells();

	if (cells.length) {
		return cells[ Math.floor(Math.random() * cells.length)];
	};
};

Grid.prototype.insertTile = function(tile) {
	this.cells[tile.x][tile.y] = tile;
};

Grid.prototype.removeTile = function(tile) {
	this.cells[tile.x][tile.y] = 0;
};

Grid.prototype.farthestPosition = function(cell, vector) {

	var before;

	do {
		before = cell;
		cell = { x: before.x + vector.x, y: before.y + vector.y};
	} while ( this.withinBounds(cell) && this.availableCell(cell));

	return {
		far : before,
		next : cell
	};
	
};

function Tile(_position, _value) {
	this.x = _position.x;
	this.y = _position.y;
	this.value = _value || 2;
};

Tile.prototype.updatePosition = function(_position) {
	this.x = _position.x;
	this.y = _position.y;

};