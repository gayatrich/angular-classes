import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-clases';
  count: number = 0;
  
  imagesList: any[] = [
    {show: true,imgUrl : "https://us05st1.zoom.us/static/6.3.16810/image/new/ZoomLogo.png", name: "zoom"},
    {show: true,imgUrl: "https://www.zarla.com/images/zarla-50-famous-brand-logos-to-inspire-you-5476x3651-20220425.jpeg?crop=21:16,smart&width=420&dpr=2", name: "addidas"}
  ]
  imgUrl: string = this.imagesList[0].imgUrl;
  obj = {
    color: "red",
    icon: "pen.png",
    value: 15500,
    title: "abc"
  }
  cardsList = [
    {
      color: "red",
      icon: "pen.png",
      value: 15500,
      title: "student 1"
    },{
      color: "blue",
      icon: "pen.png",
      value: 2000,
      title: "student 2"
    },{
      color: "green",
      icon: "pen.png",
      value: 3500,
      title: "student 3"
    }
  ];
  styleColor: string = "pink";
  stylesObj = {
    color: "green",
    fontSize: "50px",
    fontWeight: "600"
  }
  showBlock: boolean = false;
  namesList = ["ajay","vijay","john"]
  selectedValue = "ajay";
  myName = "ajay";
  constructor(private router: Router){

  }

  nameChanges(){
    let names = this.namesList[Math.floor(Math.random() * 3)];
    console.log("names", names);
    this.myName = names;
  }

  showBlockClicked(){
    this.showBlock = !this.showBlock;
  }

  nameSelected(name: string){
    this.selectedValue = name;
  }

  selectedImage(img:string){
    this.imgUrl = img;
  }

  login(): void {
    this.router.navigate(["/login"]);
  }

  signup(): void {
    this.router.navigate(["/signup"]);
  }

  counter(value: string): void {
    console.log(value);
    if(value === "inc"){
      this.count++;
    }else{
      this.count--;
    }
  }
}
