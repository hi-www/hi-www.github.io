///Drag'n Drop functions


function allowDrop(ev) 
{
    ev.preventDefault();
}

function drag(ev) 
{
    ev.dataTransfer.setData("text", ev.target.id);
    ev.dataTransfer.effectAllowed = "copy";
}

function drop(ev) 
{
    ev.preventDefault();
    var x = ev.clientX;
    var y = ev.clientY;
    var data = ev.dataTransfer.getData("text");
    var copyimg = document.createElement("img");
    var original = document.getElementById(data);
    copyimg.src = original.src;
    ev.target.appendChild(copyimg);
    
    copyimg.setAttribute("style", "position: absolute; top: "+y+"px; left:"+x+"px;");
}

document.querySelector('button').addEventListener('click', function() {
        html2canvas(document.querySelector('.specific'), {
            onrendered: function(canvas) {
                // document.body.appendChild(canvas);
              return Canvas2Image.saveAsPNG(canvas);
            }
        });
    });
