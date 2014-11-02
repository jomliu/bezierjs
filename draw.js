// helper function for drawing curves
var drawCurve = function(curve, offset) {
  offset = offset || { x:0, y:0 };
  var ox = offset.x;
  var oy = offset.y;
  // var points = curve.getLUT(100);
  // var p = points[0], i;
  // ctx.moveTo(p.x + ox, p.y + oy);
  // for(i=1; i<points.length; i++) {
  //   p = points[i];
  //   ctx.lineTo(p.x + ox, p.y + oy);
  // }
  var p = curve.points;
  ctx.beginPath();
  ctx.moveTo(p[0].x + ox, p[0].y + oy);
  ctx.bezierCurveTo(
    p[1].x + ox, p[1].y + oy,
    p[2].x + ox, p[2].y + oy,
    p[3].x + ox, p[3].y + oy
  );
  ctx.stroke();
};

// helper function for drawing points as circles
var drawLine = function(p1, p2, offset) {
  offset = offset || { x:0, y:0 };
  var ox = offset.x;
  var oy = offset.y;
  ctx.beginPath();
  ctx.moveTo(p1.x + ox,p1.y + oy);
  ctx.lineTo(p2.x + ox,p2.y + oy);
  ctx.stroke();
};

// helper function for drawing points as circles
var drawPoint = function(p, offset) {
  offset = offset || { x:0, y:0 };
  var ox = offset.x;
  var oy = offset.y;
  ctx.beginPath();
  ctx.arc(p.x + ox, p.y + oy, 5, 0, 2*Math.PI);
  ctx.stroke();
};

// helper function for drawing points as circles
var drawCircle = function(p, r, offset) {
  offset = offset || { x:0, y:0 };
  var ox = offset.x;
  var oy = offset.y;
  ctx.beginPath();
  ctx.arc(p.x + ox, p.y + oy, r, 0, 2*Math.PI);
  ctx.stroke();
};

// helperfunction for drawing bounding boxes
var drawbbox = function(bbox, offset) {
  offset = offset || { x:0, y:0 };
  var ox = offset.x;
  var oy = offset.y;
  ctx.beginPath();
  ctx.moveTo(bbox.x.min + ox, bbox.y.min + oy);
  ctx.lineTo(bbox.x.min + ox, bbox.y.max + oy);
  ctx.lineTo(bbox.x.max + ox, bbox.y.max + oy);
  ctx.lineTo(bbox.x.max + ox, bbox.y.min + oy);
  ctx.closePath();
  ctx.stroke();
};

// helperfunction for drawing outline shapes
var drawShape = function(shape, offset) {
  offset = offset || { x:0, y:0 };
  ctx.beginPath();
  ctx.moveTo(offset.x + shape.startcap.points[0].x, offset.y + shape.startcap.points[0].y);
  ctx.lineTo(offset.x + shape.startcap.points[3].x, offset.y + shape.startcap.points[3].y);
  ctx.bezierCurveTo(
    offset.x + shape.forward.points[1].x, offset.y + shape.forward.points[1].y,
    offset.x + shape.forward.points[2].x, offset.y + shape.forward.points[2].y,
    offset.x + shape.forward.points[3].x, offset.y + shape.forward.points[3].y
  );
  ctx.lineTo(offset.x + shape.endcap.points[3].x, offset.y + shape.endcap.points[3].y);
  ctx.bezierCurveTo(
    offset.x + shape.back.points[1].x, offset.y + shape.back.points[1].y,
    offset.x + shape.back.points[2].x, offset.y + shape.back.points[2].y,
    offset.x + shape.back.points[3].x, offset.y + shape.back.points[3].y
  );
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
};