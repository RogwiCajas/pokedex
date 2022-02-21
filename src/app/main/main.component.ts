import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  name = 'nidoqueen';
  constructor() { 
    
  }
  getName(val:string):void{
    this.name = val;
  }
  ngOnInit(): void {
    
  }

  

}
