class Rectangle{
    constructor(width, height, color){
        this.width = width;
        this.height = height;
        this.color = color;
    }
    area(){
        const area = this.width*this.height;
        const area2 = ()=>{
            return this.width*this.height;
        }
        console.log("area2");
        console.log(area2());
        return area;
    }
    paint(){
        console.log("color is : ");
        console.log(this.color);
    }
    destroy(){

    }
}
const rect = new Rectangle(1,2,"red");
console.log(rect.width);
console.log(rect.height);
const rect2 = new Rectangle(10,20,"black");
const area = rect.area();
const area2 = rect2.area();
// 34
// 2.2