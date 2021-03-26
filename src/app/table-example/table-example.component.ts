import {Component, OnInit} from '@angular/core';
import {AngularFireDatabase} from '@angular/fire/database';


export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [];


@Component({
  selector: 'app-table-example',
  templateUrl: './table-example.component.html',
  styleUrls: ['./table-example.component.css']
})
export class TableExampleComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;

  constructor(private db: AngularFireDatabase) {
  }

  ngOnInit(): void {
    this.db.list('items').valueChanges().subscribe((items: []) => {
      this.dataSource = items;
    });
  }

  createNewRow = () => {
    const newObject = {position: 1, name: 'toto', weight: '152564', symbol: 'MA'};
    this.db.list('items').push(newObject);
  }

}
