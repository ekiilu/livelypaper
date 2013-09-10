/*
 * 
 * Name space lp.core.utils.Flipbook module 
 *
 *
 * Author:
 * Eric Kiilu - 2013 (c)
 *
 * LICENSE http://creativecommons.org/licenses/by-nc-sa/3.0/
 *
 * Copyright: 
 *
 * Eric Kiilu
 * 
 * Version 0.0.0.1
 * This draws a flipbook given 
 *
 */

define(
	[
	"./lp.core.utils",
	"./lp.core.utils.Shapes.Circle",
	"./lp.core.utils.Point2D"
	],

	function(
		utils,
		Circle,
		Point2D
		){

		Flipbook = function(_canvas,mybox){
		  var ctx = _canvas.getContext("2d"),
				canvas = _canvas,
				box = mybox,
				width = canvas.width,
				height = canvas.height,
				pageLeft,
				pageTop,
				pageWidth,
				pageHalfHeight,
				pageHalfWidth,
				innerRadius,
				outerRadius,
				distanceFromTop,
				bisectorAngle,
				bisectorTangent,
				dy,
				dx,
				angle2Follow,
				spineTop,
				spineCenter,
				spineBottom,
				corner,
				clipPoint0,
				clipPoint1,
				clipPoint2,
				clipPoint3,
				divTarget,
				dirtyCount,
				mouse = new Point2D(0,0),
				follow = new Point2D(0,0),
				radius1 = new Point2D(0,0),
				radius2 = new Point2D(0,0),
				bisector = new Point2D(0,0),
				bisectorBottom = new Point2D(0,0),
				targetBottom = new Point2D(0,0),
				sheetCanvas = document.createElement("canvas"),
				sheetctx = sheetCanvas.getContext("2d"),
				clipCanvas = document.createElement("canvas"),
				clipctx = clipCanvas.getContext("2d"),
				shadowsCanvas = document.createElement("canvas"),
				shadowsctx = shadowsCanvas.getContext("2d");




			//Render the flipbook given canvas context
			function render(){

				circle =  new Circle(20,40,ctx,10,"green");
				circle.draw();
				drawBoundaryRing("green",4,3,30);

				//set sizes
			 	pageLeft = width *.01
			 	pageWidth = width *.49;
			 	pageHeight = height * .98;
			 	pageTop = height*.01;
			 	pageHalfHeight = pageHeight*.5;
			 	innerRadius = pageWidth;
			 	outerRadius = Math.sqrt(pageWidth*pageWidth+pageHeight*pageHeight);

			 	//Spine top
			 	spineTop = new Point2D(pageLeft+pageWidth,pageTop);
			 	spineCenter = new Point2D(pageLeft + pageWidth,pageTop +pageHalfHeight);
			 	spineBottom = new Point2D(pageLeft+pageWidth,pageTop+pageHeight);
			 	edgeBottom = new Point2D(pageLeft + pageWidth*2,pageTop+pageHeight);
			 	corner = new Point2D(edgeBottom.getX()-1,edgeBottom.getY()-1);

			 	radius1 = new Point2D(0,0);
			 	mouse = new Point2D(edgeBottom.getX()-50, edgeBottom.getY()-50);
			 	follow = new Point2D(edgeBottom.getX()-50, edgeBottom.getY()-50);
			 	dirtyCount = 80;


			 	//Draw Framework 
			 	drawRectangle("#666666",0,0,width,height);
			 	drawRectangle("#ffffff",pageLeft,pageTop,pageWidth*2,pageHeight);
			 	drawBoundaryRing("rgba(0,0,0,0.5)",spineBottom.getX(),spineBottom.getY(),innerRadius);
			 	drawBoundaryRing("rgba(0,0,0,0.5)",spineTop.getX(),spineTop.getY(),outerRadius);
			 	drawLine("rgba(0,0,0,0.5)",spineTop.getX(),spineTop.getY(),spineBottom.getX(),spineBottom.getY());
				drawCircle("rgba(0,0,0,0.7)", spineTop.getX(),spineTop.getY(), "ST");
				drawCircle("rgba(0,0,0,0.7)", spineCenter.getX(), spineCenter.getY(), "SC");
				drawCircle("rgba(0,0,0,0.7)",spineBottom.getX(),spineBottom.getY(), "SB");
				drawCircle("rgba(0,0,0,0.7",edgeBottom.getX(),edgeBottom.getY(), "EB");
			}

			function drawBoundaryRing(color,x,y,r){
				ctx.fillStyle= color;
				ctx.beginPath();
				ctx.arc(x,y,r,0,Math.PI*2,true);
				ctx.closePath();
				//ctx.fill();
				ctx.stroke();
			}

			function drawCircle(color,x,y,text){
				ctx.fillStyle = color;
				ctx.beginPath();
				ctx.arc(x,y,10,0,Math.PI*2,true);
				ctx.closePath();
				ctx.fill();
				ctx.fillStyle ="#ffffff";
				ctx.textAlign = "center";
				ctx.fillText(text, x,y+4);

			}

			function drawRectangle(color,x,y,w,h){
				ctx.fillStyle = color;
				ctx.beginPath();
				ctx.rect(x,y,w,h);
				ctx.closePath();
				ctx.fill();
			}

			function drawLine(color,x1,y1,x2,y2){
				ctx.strokeStyle = color;
				ctx.beginPath();
				ctx.moveTo(x1,y1);
				ctx.lineTo(x2,y2);
				ctx.closePath();
				ctx.stroke();
			}

			return{
				render: render
			}

		}


		utils.Flipbook = Flipbook;
		return utils.Flipbook;
	});