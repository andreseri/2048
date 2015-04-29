var grid = [[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]];

function random() {
	return Math.floor(Math.random() * 4);
}

function initiate() {
	var y = random();
	var x = random();
	grid[y][x] = 2;
	do {
		y = random();
		x = random();
	}
	while (grid[y][x] != 0);
	grid[y][x] = 2;
};

function nextMove() {
	do {
		y = random();
		x = random();
	}
	while (grid[y][x] != 0);
	if (random() <= 0.75) {grid[y][x] = 2} else{grid[y][x] = 4};
};

initiate();
console.log(grid);