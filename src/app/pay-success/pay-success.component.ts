import { Component, OnInit } from '@angular/core';
import {WindowRefService} from '../services/window-ref.service';

@Component({
  selector: 'app-pay-success',
  templateUrl: './pay-success.component.html',
  styleUrls: ['./pay-success.component.css']
})
export class PaySuccessComponent implements OnInit {

  constructor(private winRef: WindowRefService) { 
    // this.winRef.getOrder("Order_id").subscribe((data)=>{
    //   console.log(data);
    // })
  }

  ngOnInit(): void {
  }

}
