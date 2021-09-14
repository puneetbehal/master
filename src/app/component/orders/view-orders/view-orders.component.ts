import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-orders',
  templateUrl: './view-orders.component.html',
  styleUrls: ['./view-orders.component.css']
})
export class ViewOrdersComponent implements OnInit {

  parameters='';
  constructor(private activatedRoute: ActivatedRoute) { 
  this.activatedRoute.params.subscribe(data=>{
    this.parameters=data.id});
  }
  ngOnInit(): void {
  }

}
