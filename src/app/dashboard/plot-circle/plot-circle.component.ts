import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-plot-circle',
  templateUrl: './plot-circle.component.html',
  styleUrls: ['./plot-circle.component.css']
})
export class PlotCircleComponent implements OnInit {
  sales: any=[{'name':"Websites", 'sale':468},{'name':"Logo", 'sale':312},{'name':"Social Media", 'sale':312},{'name':"Adwords", 'sale':156},{'name':"Websites", 'sale':312}];
  SumSales:number=0;
  countSales:Number=0;
  circleDeg=90;
  constructor() { }

  ngOnInit() {
     let color=0;
     let rotate=0;
     let skew=0;
    this.countSales=1/this.sales.length*100;
    console.log(this.countSales)
    for(let i=0;i<this.sales.length;i++){
      this.SumSales+=this.sales[i].sale;
    }
    for(let i=0;i<this.sales.length;i++){
      rotate+=this.sales[i].sale/this.SumSales*360;
      color+=Number(this.countSales)+20;
      skew=360*this.sales[i].sale/this.SumSales+90;
      this.sales[i].style={};
      this.sales[i].style.color=color;
      this.sales[i].style.rotate=rotate;
      this.sales[i].style.skew=skew;
      this.sales[i].style.all="'rotate('+rotate+'deg) skew('+skew+'deg)'";
      console.log(this.sales)
    }


  }

}
