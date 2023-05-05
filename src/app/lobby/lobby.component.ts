import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Coffee } from '../coffee';

import { CoffeeService } from '../coffee.service';
import { DeletecoffeeComponent } from '../deletecoffee/deletecoffee.component';

@Component({
  selector: 'app-lobby',
  templateUrl: './lobby.component.html',
  styleUrls: ['./lobby.component.css']
})
export class LobbyComponent implements OnInit {
allCoffee:Coffee[]=[];
displayedColumns: string[] = ['id', 'name', 'owner', 'mobile','location','actions'];
  constructor(private coffee:CoffeeService ,public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getAllCoffee();
  }
getAllCoffee(){
  this.coffee.getAll().subscribe((data:any)=>{
    this.allCoffee =data;

  })
}
delete(id:number){
const  deletecon= this.dialog.open(DeletecoffeeComponent,{
  width: '250px',
  data: {id },

})
deletecon.afterClosed().subscribe((result)=>{
  if(result){
    this.allCoffee=this.allCoffee.filter((_)=>_.id !==id );
  }
})
}
}
