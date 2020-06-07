import { Component, OnInit } from '@angular/core';
import {WindowRefService} from '../services/window-ref.service';

@Component({
  selector: 'app-pay-success',
  templateUrl: './pay-success.component.html',
  styleUrls: ['./pay-success.component.css']
})
export class PaySuccessComponent implements OnInit {

  constructor(private winRef: WindowRefService) { 
    // this.winRef.getOrder("order_EzPOcsMLDnuBa9").subscribe((data)=>{
    //   console.log(data);
    // })
  }

  ngOnInit(): void {
  }

}
