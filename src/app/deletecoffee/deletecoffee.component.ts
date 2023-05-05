import { Component, OnInit ,Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Coffee } from '../coffee';
import { CoffeeService } from '../coffee.service';
@Component({
  selector: 'app-deletecoffee',
  templateUrl: './deletecoffee.component.html',
  styleUrls: ['./deletecoffee.component.css']
})
export class DeletecoffeeComponent implements OnInit {

  constructor( public dialogRef: MatDialogRef<DeletecoffeeComponent>, private coffee:CoffeeService,@Inject (MAT_DIALOG_DATA) public data:any ) { }

  ngOnInit(): void {
  }
confirmDElete(){
  this.coffee.delete (this.data.id).subscribe(()=>{
    this.dialogRef.close(this.data.id)
  })
}
}
