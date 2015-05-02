var grid = [[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]];
var startTiles = 2;

function Tile(position, value) {
	this.x = position.x;
	this.y = position.y;
	this.value = value || 2;
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
		}
	})

	return cells;
};

function randomAvailableCell() {
	var cells = availableCells();

	if(cells.length) {
		return cells[ Math.floor(Math.random() * cells.length)];
	}
}

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

function addStartTiles() {
	for (var i = 0; i < startTiles; i++) {
		addRandomTile();
	};
};

addStartTiles();
createGridDisplay(grid);
console.log(grid);