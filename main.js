var canvas = new fabric.Canvas('myCanvas');
var x= document.getElementById("myAudio");
bobj = ''

function new_image()
{
	fabric.Image.fromURL('BirthdayImage.jpg',function(Img){
        bobj = Img;
        bobj.scaleToWidth(700);
        bobj.scaleToHeight(510);
        bobj.set({
            top: 0,
            left: 0
        });
        canvas.add(bobj);
    });
	
}

function playSound(){
	document.getElementById('myAudio').play();
}
