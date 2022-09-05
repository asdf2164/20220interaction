//active
void setup(){
  size(500,500);
  background(#2E2789);
}
void draw(){

  if(mousePressed){
    line(mouseX,mouseY, pmouseX,pmouseY);
  }
}
void keyPressed(){
   if(key=='1') stroke(#F73D28) ;
   if(key=='2') stroke(#E228F7) ;
   if(key=='3') stroke(#1E1198) ;
}
