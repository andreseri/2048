var y, x, yVector, xVector;

var update = function(x, y, xVector, yVector) {
	for (var j = 0; j < 3; i++) {
		for (var i = 0; i < 3 ; i++) {
			if ( grid[y + yVector][x + xVector] == 0 ) {
				grid[y + yVector][x + xVector] = grid[x][y]
			}
			else if (grid[y + yVector][x + xVector] == grid[y][x]) {
				grid[y + yVector][x + xVector] = grid[y][x];
			};
			grid[y][x] = 0
			y += yVector;
		};
		x += xVector;		
	};
	nextMove();
};

window.addEventListener('keypress', function(key) {
	switch (key) {
		case 37: 	// left arrow
			y = 0;
			x = 3;
			yVector = 1;
			xVector = -1;
			break;
		case 38: 	// up arrow
			y = 0;
			x = 3;
			yVector = 1;
			xVector = -1;
			break;
		case 39: 	// right arrow
			y = 0;
			x = 3;
			yVector = 1;
			xVector = -1;
			break;
		case 40: 	// down arrow
			y = 0;
			x = 3;
			yVector = 1;
			xVector = -1;
			break;							
	}
	update(y, x, yVector, xVector);
})

