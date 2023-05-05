import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Coffee } from '../coffee';
import { CoffeeService } from '../coffee.service';

@Component({
  selector: 'app-addcoffee',
  templateUrl: './addcoffee.component.html',
  styleUrls: ['./addcoffee.component.css']
})
export class AddcoffeeComponent implements OnInit {
coffeeRecord:Coffee={
  id:0,
  name:'',
  owner:'',
  mobile:'',
  location:''
}
  constructor(private coffee:CoffeeService,private router:Router) { }

  ngOnInit(): void {
  }
  addRecords(){
    this.coffee.create(this.coffeeRecord).subscribe((data)=>
    {
      this.router.navigate(["/"]);
    })
  }
}
