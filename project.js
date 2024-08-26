const t = new bt.Turtle()

const width = 125;
const height = 125;

setDocDimensions(width, height);

// Draw the floor
const polyline = ([
  [[0, 20],
  [125, 20]]
]);

// Draw a tree

t.up();
t.goTo([100,20]);
t.down();
t.left(90)
t.forward(20);
t.right(180);

const s = 15;
for (let i = 0; i < 3; i++){
  t.left(45);
  t.forward(s-i-2);
  t.right(180);
  t.forward(s-i-2);
  t.left(90);
  t.forward(s-i-2);
  t.left(180);
  t.forward(s-i-2);
  t.right(135);
  t.forward(5);
}

t.up();
t.goTo([98,41]);
t.down();

for (let i = 0; i < 15; i = i+2){
  t.left(135);
  t.forward(10);

}


// Make the hill

const curve = bt.catmullRom([[0,46], [10, 50], [40,41], [53, 28], [74,23],[80,20]])

//Make the snowman
//c = 19,54
//r = 5
//dx = 3
//dy = 4

const ball = bt.catmullRom([[22,58], [24,54], [22,50], [19,49], [15,51], [14,54], [15,57], 
                            [19,59], [22,58]]);



// draw it
drawLines(polyline);
drawLines(t.lines());
drawLines([curve]);
drawLines([ball]);