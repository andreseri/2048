function Grid(_size) {
	this.size = _size;
	this.cells = this.createGrid();
};

Grid.prototype.createGrid = function() {
	var cells = new Array(this.size);
	for (var i = 0; i < this.size; i++) {
		cells[i] = new Array(this.size + 1).join('0').split('').map(parseFloat);
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

function Tile(_position, _value) {
	this.x = _position.x;
	this.y = _position.y;
	this.value = _value || 2;
};

Tile.prototype.updatePosition = function(_position) {
	this.x = _position.x;
	this.y = _position.y;

};