// VERTICES OF THE TRIANGLES OF THE CUBE
const data = [
	// FRONT LOWER
	-0.5, -0.5,  0.5,	// POINT 0
	-0.5,  0.5,  0.5,	// POINT 1
	 0.5, -0.5,  0.5,	// POINT 3

	// FRONT UPPER
	 0.5,  0.5,  0.5,	// POINT 2
	-0.5,  0.5,  0.5,	// POINT 1
	 0.5, -0.5,  0.5, 	// POINT 3

	// LEFT LOWER
	-0.5, -0.5, -0.5,	// POINT 4
	-0.5,  0.5, -0.5,	// POINT 5
	-0.5, -0.5,  0.5,	// POINT 0

	// LEFT UPPER
	-0.5,  0.5,  0.5, 	// POINT 1
	-0.5,  0.5, -0.5,	// POINT 5
	-0.5, -0.5,  0.5, 	// POINT 0

	// BACK LOWER
	 0.5, -0.5, -0.5, 	// POINT 7
	 0.5,  0.5, -0.5, 	// POINT 6
	-0.5, -0.5, -0.5, 	// POINT 4

	// BACK UPPER
	-0.5,  0.5, -0.5, 	// POINT 5
	 0.5,  0.5, -0.5, 	// POINT 6
	-0.5, -0.5, -0.5, 	// POINT 4

	// RIGHT LOWER
	 0.5, -0.5,  0.5, 	// POINT 3
	 0.5,  0.5,  0.5, 	// POINT 2
	 0.5, -0.5, -0.5, 	// POINT 7
	

	// RIGHT UPPER
	 0.5,  0.5, -0.5, 	// POINT 6
	 0.5,  0.5,  0.5, 	// POINT 2
	 0.5, -0.5, -0.5, 	// POINT 7

	// UP LOWER
	-0.5,  0.5,  0.5, 	// POINT 1
	-0.5,  0.5, -0.5, 	// POINT 5
	 0.5,  0.5,  0.5, 	// POINT 2

	// UP UPPER
	 0.5,  0.5, -0.5, 	// POINT 6
	-0.5,  0.5, -0.5, 	// POINT 5
	 0.5,  0.5,  0.5, 	// POINT 2

	// DOWN LOWER
	-0.5, -0.5,  0.5, 	// POINT 0
	-0.5, -0.5, -0.5, 	// POINT 4
	 0.5, -0.5,  0.5, 	// POINT 3

	// DOWN UPPER
	 0.5, -0.5, -0.5, 	// POINT 7
	-0.5, -0.5, -0.5, 	// POINT 4
	 0.5, -0.5,  0.5, 	// POINT 3
];


//	COLOR DATA FOR EACH POINT
const colors = [
	// FRONT LOWER
	0  ,  0, 204, 		// POINT 0
	0  ,  0, 204, 		// POINT 1
	0  ,  0, 204, 		// POINT 3

	// FRONT UPPER
	0  , 0, 204, 		// POINT 1
	0  , 0, 204, 		// POINT 2
	0  , 0, 204, 		// POINT 3

	// LEFT LOWER
	204, 0,   0, 		// POINT 4
	204, 0,   0, 		// POINT 5
	204, 0,   0, 		// POINT 0

	// LEFT	UPPER
	204, 0,   0, 		// POINT 5
	204, 0,   0, 		// POINT 1
	204, 0,   0, 		// POINT 0

	// BACK LOWER
	0 , 204, 0, 		// POINT 7
	0 , 204, 0, 		// POINT 6
	0 , 204, 0, 		// POINT 4

	// BACK	UPPER
	0 , 204, 0, 		// POINT 4
	0 , 204, 0, 		// POINT 5
	0 , 204, 0, 		// POINT 6

	// RIGHT LOWER
	204, 102,   0,		// POINT 2
	204, 102,   0,		// POINT 7
	204, 102,   0,		// POINT 3
	
	// RIGHT UPPER
	204, 102,   0, 		// POINT 6
	204, 102,   0, 		// POINT 7
	204, 102,   0, 		// POINT 2

	// UP LOWER
	255, 75, 125, 		// POINT 5
	255, 75, 125, 		// POINT 2
	255, 75, 125, 		// POINT 1

	// UP LOWER
	255, 75, 125, 		// POINT 5
	255, 75, 125, 		// POINT 2
	255, 75, 125,
	
	// DOWN	LOWER
	204, 204,   0, 		// POINT 0
	204, 204,   0,		// POINT 4
	204, 204,   0,		// POINT 7

	// DOWN UPPER
	204, 204,   0, 		// POINT 7
	204, 204,   0, 		// POINT 3
	204, 204,   0, 		// POINT 0
];


// COLOR DATA NORMALIZED TO 0...1 RANGE
const normalizedColors = colors.map((x)=> x/255);

// TEXTURE COORDINATES FOR EACH VERTEX
const texture = [
	// FRONT
	0   ,  0.5,
	0   ,    0,
	0.25,  0.5,
	0.25,    0,
	0   ,    0,
	0.25,  0.5,

	// LEFT
	0   ,    1,
	0   ,  0.5,
	0.25,    1,
	0.25,  0.5,
	0   ,  0.5,
	0.25,    1,

	// BACK
	0.25,  0.5,
	0.25,    0,
	0.5 ,  0.5,
	0.5 ,    0,
	0.25,    0,
	0.5 ,  0.5,

	// RIGHT
	0.25,    1,
	0.25,  0.5,
	0.5 ,    1,
	0.5 ,  0.5,
	0.25,  0.5,
	0.5 ,    1,

	// UP
	0.5 ,    1,
	0.5 ,  0.5,
	0.75,    1,
	0.75,  0.5,
	0.5 ,  0.5,
	0.75,    1,

	// DOWN
	0.5 ,  0.5,
	0.5 ,    0,
	0.75,  0.5,
	0.75,    0,
	0.5 ,    0,
	0.75,  0.5,
];

/*
    cube numbering:

    upper layer
     0  1  2
     3  4  5
     6  7  8

    second layer
     9 10 11
    12 13 14
    15 16 17

    last layer
    18 19 20
    21 22 23
    24 25 26
*/