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

const colorsData = [
	//   0,   0, 204, 	// blue
	// 204,   0,   0, 	// red
	//   0, 204,   0, 	// green 
	// 204, 102,   0,	// orange 
	// 255, 255, 255,	// white
	// 204, 204,   0,	// yellow
];

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

const normalizedColors = colors.map((x)=> x/255);

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

const cubeMap = new Map();
cubeMap.set(0,"-1,1,1");
cubeMap.set(1,"0,1,1");
cubeMap.set(2,"1,1,1");
cubeMap.set(3,"-1,1,0");
cubeMap.set(4,"0,1,0");
cubeMap.set(5,"1,1,0");
cubeMap.set(6,"-1,1,-1");
cubeMap.set(7,"0,1,-1");
cubeMap.set(8,"1,1,-1");

cubeMap.set(9,"-1,0,1");
cubeMap.set(10,"0,0,1");
cubeMap.set(11,"1,0,1");
cubeMap.set(12,"-1,0,0");
cubeMap.set(13,"0,0,0");
cubeMap.set(14,"1,0,0");
cubeMap.set(15,"-1,0,-1");
cubeMap.set(16,"0,0,-1");
cubeMap.set(17,"1,0,-1");

cubeMap.set(18,"-1,-1,1");
cubeMap.set(19,"0,-1,1");
cubeMap.set(20,"1,-1,1");
cubeMap.set(21,"-1,-1,0");
cubeMap.set(22,"0,-1,0");
cubeMap.set(23,"1,-1,0");
cubeMap.set(24,"-1,-1,-1");
cubeMap.set(25,"0,-1,-1");
cubeMap.set(26,"1,-1,-1");

const upRotateMap = new Map();
upRotateMap.set(0, 2);
upRotateMap.set(2, 8);
upRotateMap.set(8, 6);
upRotateMap.set(6, 0);
upRotateMap.set(4, 4);
upRotateMap.set(1, 5);
upRotateMap.set(5, 7);
upRotateMap.set(7, 3);
upRotateMap.set(3, 1);

const upRevRotateMap = new Map();
upRevRotateMap.set(0, 6);
upRevRotateMap.set(6, 8);
upRevRotateMap.set(8, 2);
upRevRotateMap.set(2, 0);
upRevRotateMap.set(4, 4);
upRevRotateMap.set(1, 3);
upRevRotateMap.set(3, 7);
upRevRotateMap.set(7, 5);
upRevRotateMap.set(5, 1);

const downRotateMap = new Map();
const downRevRotateMap = new Map();

const leftRotateMap = new Map();
const leftRevRotateMap = new Map();

const rightRotateMap = new Map();
rightRotateMap.set(2, 20);
rightRotateMap.set(20, 26);
rightRotateMap.set(26, 8);
rightRotateMap.set(8, 2);
rightRotateMap.set(14, 14);
rightRotateMap.set(5, 11);
rightRotateMap.set(11, 23);
rightRotateMap.set(23, 17);
rightRotateMap.set(17, 5);

const rightRevRotateMap = new Map();
rightRevRotateMap.set(2, 8);
rightRevRotateMap.set(8, 26);
rightRevRotateMap.set(26, 20);
rightRevRotateMap.set(20, 2);
rightRevRotateMap.set(14, 14);
rightRevRotateMap.set(5, 17);
rightRevRotateMap.set(17, 23);
rightRevRotateMap.set(23, 11);
rightRevRotateMap.set(11, 5);

const frontRotateMap = new Map();
const frontRevRotateMap = new Map();

const backRotateMap = new Map();
const backRevRotateMap = new Map();


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
