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
	this.viewer.addTile(tile);
};

Controller.prototype.moveTile = function(_tile, _cell) {
	this.grid.removeTile(_tile);
	this.grid.cells[_cell.x][_cell.y] = _tile;
	_tile.updatePosition(_cell);
};

Controller.prototype.getVector = function(_direction) {
	var vectors = {
		0: { x: -1, y: 0},	// Up
		1: { x: 0, y: 1},	// Right
		2: { x: 1, y: 0},	// Down
		3: { x: 0, y: -1}	// Left
	};

	console.log(_direction);
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

Controller.prototype.prepareTiles = function() {
	this.grid.eachCell( function(x, y, tile) {
		if (tile) {
			tile.mergedFrom = null;
		}
	});
};

Controller.prototype.moveGrid = function(_direction) {

		var self = this;
		var vector = this.getVector(_direction);
		var traversals = this.getTraversals(vector);
		var moved = false;

		this.prepareTiles();

		traversals.x.forEach(function (_x) {
			traversals.y.forEach(function (_y) {
				var cell = { x: _x, y: _y};
				var tile = self.grid.cellContent(cell);
					if (tile) {

						var position = self.grid.farthestPosition(cell, vector);
						var next = self.grid.cellContent(position.next);

						if (next && next.value === tile.value && !next.mergedFrom) {
							var merged = new Tile(position.next, tile.value*2);
							merged.mergedFrom = [tile, next];
							console.log(merged);

							self.grid.insertTile(merged);
							self.grid.removeTile(tile);

							tile.updatePosition(position.next);

						} else {
							self.moveTile(tile, position.far);
						}
					}
			});
		});

		if (!this.grid.availableCells()) {
			return console.log("Game Over");
		};

		self.addRandomTile();
};

Controller.prototype.listen = function() {

	var self = this;
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
		self.moveGrid(direction);
		self.viewer.updateGridDisplay(self.grid);
	});
};