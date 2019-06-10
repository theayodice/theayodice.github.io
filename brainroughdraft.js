var x = 265;
var y = 125;
var xx = 340;
var yy = 160;
var a = 365;
var b = 365;
var c = 850;
var d = 335;
var chlo = 865;
var chlo2 = 100;
var t = 805;
var tt = 35;
var m = -200;
var mm = -200;
var n = -200;
var nn = -200;
var o = -200;
var oo = -200; 
var p = -200; 
var pp = -200;
var q = -200; 
var qq = -200;
var color1 = 56;
var color2 = 104;
var color3 = 160;
var color4 = 56;
var color5 = 104;
var color6 = 160;
var color7 = 56;
var color8 = 104;
var color9 = 160;
var color10 = 56;
var color11 = 104;
var color12 = 160;
var color13 = 56;
var color14 = 104;
var color15 = 160;

function setup() {
    
    createCanvas(1200,604);
    
    
    myimage = loadImage("finalbrain.jpg");
}

function draw() {
background(255);
    image(myimage,width/2-215,-50,600,600);
     
    
    fill(color1,color2,color3);
    textSize(30);
    textFont("Arial");
    text("Frontal Lobe",270,160);
    
    fill(color10,color11,color12);
    textSize(30);
    textFont("Arial");
    text("Temporal Lobe",370,400);
    
    fill(color13,color14,color15);
    textSize(30);
    textFont("Arial");
    text("Cerebellum",855,370);
    
    fill(color7,color8,color9);
    textSize(30);
    textFont("Arial");
    text("Occipital Lobe",870,135);
    
    fill(color4,color5,color6);
    textSize(30);
    textFont("Arial");
    text("Parietal Lobe",810,70);
    
    fill(255, 212, 30);
    
    //(x axis, y axis, width, height)
    //frontal lobe button
    rect(x,y,180,50);
    
    //temporal lobe button
    rect(a,b,210,50);
    
    //cerebellum love button
    rect(c,d,165,50);
    
    //occipital lobe button
    rect(chlo,chlo2,202,50);
    
    //parietal lobe button
    rect(t,tt,190,50);
    

    fill(color1, color2, color3);
        textSize(22);
        textFont("Arial");
        text("Frontal Lobe: Controls important cognitive skills, such as emotional expression, problem solving, and memory.",m,mm);
    fill(color10,color11,color12);
        textSize(22);
        textFont("Arial");
        text("Temporal Lobe: Processes memories, integrating them with sensations of taste, sound, sight and touch.",p,pp);
   fill(color13,color14,color15);
        textSize(22);
        textFont("Arial");
        text("Cerebellum: Coordinates voluntary movements such as posture, balance, and coordination.",q,qq);
   fill(color7,color8,color9);
        textSize(22);
        textFont("Arial");
        text("Occipital Lobe: Responsible for vision.",o,oo); 
  fill(color4,color5,color6);
        textSize(22);
        textFont("Arial");
        text("Parietal Lobe: Processes information about temperature, taste, touch and movement.",n,nn);
    
   
    
    // mouseX > starting coordinate of rect on x axis && mouseX < (starting coordinate + width of rect) && mouseY > starting coordinate of rect on y axis && mouseY < (starting coordinate + height of rect) 

    if (mouseIsPressed && mouseX > 265 && mouseX < 445 && mouseY > 125 && mouseY < 175) {
        x = -100;
        y = -100;
        m = 75;
        mm = 470;
        
    } 
    
    if (mouseIsPressed && mouseX > 365 && mouseX < 575 && mouseY > 365 && mouseY < 415) {
        a = -100;
        b = -100;  
        
        p = 75; 
        pp = 560;
    }
    
   if (mouseIsPressed && mouseX > 850 && mouseX < 1015 && mouseY > 335 && mouseY < 385) {
        c = -100;
        d = -100;
        q = 75; 
        qq = 590
   }
    
    if (mouseIsPressed && mouseX > 865 && mouseX < 1067 && mouseY > 100 && mouseY < 150) {
        chlo = -100;
        chlo2 = -100;
        o = 75;
        oo = 530;
        
    }
if (mouseIsPressed && mouseX > 805 && mouseX < 995 && mouseY > 35 && mouseY < 85) {
        t = -100;
        tt = -100;
        n = 75;
        nn = 500;
    }
 if (keyIsPressed == true) {
        if (keyCode == UP_ARROW) {
            
            color1 = 249;
            color2 = 31;
            color3 = 7;
            color4 = 255;
            color5 = 239;
            color6 = 28;
            color7 = 59;
            color8 = 224;
            color9 = 22;
            color10 = 211;
            color11 = 94;
            color12 = 224;
            color13 = 64;
            color14 = 121;
            color15 = 196;
            
        } else if (keyCode == DOWN_ARROW) {
            
            color1 = 56;
            color2 = 104;
            color3 = 160;
            color4 = 56;
            color5 = 104;
            color6 = 160;
            color7 = 56;
            color8 = 104;
            color9 = 160;
            color10 = 56;
            color11 = 104;
            color12 = 160;
            color13 = 56;
            color14 = 104;
            color15 = 160;
        
        }
 }
}