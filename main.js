quick_draw_set=["aircraft carrier","airplane","alarm clock","ambulance","angel","animal migration",
"ant","anvil","apple","arm","asparagus","axe","backpack","banana","bandage","barn","baseball","baseball bat",
"basket","basketball","bat","bathtub","beach","bear","beard","bed","bee","belt","bench","bicycle","binoculars",
"bird","birthday cake","blackberry","blueberry","book","boomerang","bottlecap","bowtie","bracelet","brain",
"bread","bridge","broccoli","broom","bucket","bulldozer","bus","bush","butterfly","cactus","cake","calculator",
"calendar","camel","camera","camouflage","campfire","candle","cannon","canoe","car","carrot","castle","cat",];

function setup(){
    canvas=createCanvas(280,280);
    canvas.center();
}

function draw(){
    strokeWeight(13);
    stroke(0);
    if(mouseIsPressed){
       line(pmouseX,pmouseY,mouseX,mouseY);
    }
    check_sketch();
    if(drawn_sketch == sketch){
        timer_counter = 0;
        answer_holder = "set";
        score = score+1;
        document.getElementById("score").innerHTML = "Score: "+score;
    }
}
function check_sketch(){
    timer_counter++;
    document.getElementById("timer").innerHTML = "Timer: "+timer_counter;
    if(timer_counter>500){
        document.getElementById("your_sketch").innerHTML = "Your Sketch: ";
        document.getElementById("confidence").innerHTML = "Confidence: ";
        timer_counter = 0;
        timer_check = "completed";
    }
    if(timer_check == "completed" || answer_holder == "set"){
        timer_check = "";
        answer_holder = "";
        updateCanvas();
    }
}

function update_canvas(){
    background("white");
}
random_number=Math.floor((math.random()*quick_draw_data_set.length)+1);