var Model = (function() {
	
	var grid = [];
	var gamePlay = false;

	function createGrid(gridSize) {
		grid = new Array(gridSize)
		for (var i = 0; i < gridSize; i++) {
			grid[i] = new Array(gridSize+1).join('0').split('').map(parseFloat);
		};
	};

	function eachCell(callback) {
		for (var x = 0; x < 4; x++) {
			for (var y = 0; y < 4; y++) {
				callback(x, y, grid[x][y]);
			};
		};
	};

	function availableCells() {
		var cells = [];

		eachCell(function(x, y, tile) {
			if(!tile) {
				cells.push({ x: x, y: y})
			};
		});

		return cells;
	};

	function randomAvailableCell() {
		var cells = availableCells();

		if(cells.length) {
			return cells[ Math.floor(Math.random() * cells.length)];
		};
	};

	function Tile(position, value) {
		this.x = position.x;
		this.y = position.y;
		this.value = value || 2;
	};

	function insertTile(tile) {
		grid[tile.x][tile.y] = tile;
	};

	function removeTile(tile) {
		grid[tile.x][tile.y] = null;
	};

	function addRandomTile() {
		var value = Math.random < 0.9 ? 4 : 2;
		var tile = new Tile(randomAvailableCell(), value);

		insertTile(tile);
	};

	function addStartTiles(startTiles) {
		for (var i = 0; i < startTiles; i++) {
			addRandomTile();
			gamePlay = true;
		};
	};

	return {
		initiate : function(_gridSize, _startTiles) {
			var gridSize = _gridSize;
			var startTiles = _startTiles;
			if (!gamePlay) {
				createGrid(gridSize);
				addStartTiles(startTiles)
			} else {
				console.log('Game already initiated.')
			}
		},

		checkGrid : function() {
			console.log(grid)
		}
	};
})();

Model.initiate(4,2);
Model.checkGrid();