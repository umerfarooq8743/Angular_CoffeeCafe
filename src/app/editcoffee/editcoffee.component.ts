import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Coffee } from '../coffee';
import { CoffeeService } from '../coffee.service';

@Component({
  selector: 'app-editcoffee',
  templateUrl: './editcoffee.component.html',
  styleUrls: ['./editcoffee.component.css']
})
export class EditcoffeeComponent implements OnInit {

  constructor(private coffee:CoffeeService ,private route:ActivatedRoute,private router:Router) { }
  coffeeRecord:Coffee={
    id:0,
    name:'',
    owner:'',
    mobile:'',
    location:''
  }
  ngOnInit(): void {
    this.route.paramMap.subscribe((params)=>{
      let id=Number(params.get('id'));
      this.getbyId(id);
    })
  }
  getbyId(id:number){
    this.coffee.getById(id).subscribe((data)=>{
      this.coffeeRecord=data;
    })
  }
updateRecord(){
  this.coffee.update(this.coffeeRecord).subscribe(()=>{
    this.router.navigate(['/']);
  })
}
}
