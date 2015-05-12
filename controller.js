function Controller(_gridSize, _startTiles) {
	this.size = _gridSize;
	this.startTiles = _startTiles;
	this.viewer = new View();

	this.initiate();
	this.listen();
}

Controller.prototype.initiate = function() {
	this.grid = new Grid(this.size);
	this.addStartTiles();

	console.log('Game initiated');
	console.log(this.grid);

	this.viewer.createGridDisplay(this.grid);
};

Controller.prototype.addStartTiles = function() {
	for (var i = 0; i < this.startTiles; i++) {
		this.addRandomTile();
	}
};

Controller.prototype.addRandomTile = function() {
	var value = Math.random() < 0.9 ? 2 : 4;
	var tile = new Tile(this.grid.randomAvailableCell(), value);

	this.grid.insertTile(tile);
};

Controller.prototype.moveTile = function(_tile, _cell) {
	this.grid.cells[_cell.x][_cell.y] = _tile;
	this.grid.removeTile(_tile);
};

Controller.prototype.getVector = function(_direction) {
	var vectors = {
		0: { x: 0, y: -1},	// Up
		1: { x: 0, y: -1},	// Right
		2: { x: 0, y: -1},	// Down
		3: { x: 0, y: -1}	// Left
	};

	return vectors[_direction];
};

Controller.prototype.getTraversals = function(_vector) {
	var traversals = { x: [], y: [] };

	for (var i = 0; i < this.size; i++) {
		traversals.x.push(i);
		traversals.y.push(i);
	}

	if (_vector.x == 1) { traversals.x.reverse(); }
	if (_vector.y == 1) { traversals.y.reverse(); }

	return traversals;
};

Controller.prototype.moveGrid = function(_direction) {
		var vector = this.getVector(_direction);
		var traversals = this.getTraversals(vector);
		var moved = false;

		traversals.x.forEach(function (x) {
			traversals.y.forEach(function (y) {
			});
		});
};

Controller.prototype.listen = function() {
	var map = {
		38: 0, // Up
	    39: 1, // Right
	    40: 2, // Down
	    37: 3, // Left
	    87: 0, // W
	    68: 1, // D
	    83: 2, // S
	    65: 3  // A
	};

	document.addEventListener('keydown', function(event) {
		var direction = map[event.which];

		event.preventDefault();
		console.log(direction);
		this.moveGrid(direction);
	});
};