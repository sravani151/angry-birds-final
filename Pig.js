class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("sprites/enemy.png");
 //this.Visiblity=255;
 this.remove=true;
  }
display()
{
  //console.log(this.body.)
if((this.body.speed)<2.5)
{super.display();
}else
{
World.remove(world,this.body);  

//push();
//this.Visibility=this.Visibility-5
//tint(255,this.Visiblity)
//image(this.image,this.body.position.x,this.body.position.y,50,50);

//push();
//this.Visiblity=this.Visiblity-5;


//do nothing
//image(this.image,this.body.position.x,this.body.position.y,50,50)
//pop();
//}
if(this.remove===true){
  score=score+10;
  this.remove=false;
}
}

//score(){
  //if(this.Visibility<0&this.Visibility>15)
//{
//score=+1
//}
}
}

