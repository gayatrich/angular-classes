import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  _name!: string;
  @Input() set name(val: string) {
    console.log("name valuechnages", val);
    this._name = val;
    this.getUserDetails(val);
  };
  @Input() from!:string;
  @Output() childClicked = new EventEmitter();
  //  if same values comes again  
  constructor(){
    console.log(" i am constructor");
  }

  getUserDetails(name:string){
    console.log("getting uswer details", name)
  }

  clicked(){
    this.childClicked.emit("hii child clicked");
  }

  // ngOnChanges(changes: SimpleChanges): void {
  //   console.log("i am ngonchanges", changes)
  //   this.getUserDetails(this._name);
  //   // this.getDetailsBasedOnFrom()
  // }
  
  ngOnInit(): void {
    console.log("i am ngOninit");
  }


}
