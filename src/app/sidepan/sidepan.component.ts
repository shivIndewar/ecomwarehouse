import { Component } from '@angular/core';
import {MatTreeModule} from '@angular/material/tree';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

interface FoodNode {
  name: string;
  children?: FoodNode[];
}

const TREE_DATA: FoodNode[] = [
  {
    name: 'Fruit',
    children: [{name: 'Apple'}, {name: 'Banana'}, {name: 'Fruit loops'}],
  },
  {
    name: 'Vegetables',
    children: [
      {
        name: 'Green',
        children: [{name: 'Broccoli'}, {name: 'Brussels sprouts'}],
      },
      {
        name: 'Orange',
        children: [
          {
            name: 'santra',
            children: [
              {
                name: 'Green',
                children: [{name: 'Broccoli'}, {name: 'Brussels sprouts'}],
              },
              {
                name: 'Orange',
                children: 
                [
                  {
                    name: 'Pumpkins',
                    children: [
                      {
                        name: 'Green',
                        children: [{name: 'Broccoli'}, {name: 'Brussels sprouts'}],
                      },
                      {
                        name: 'Orange',
                        children: [{name: 'Pumpkins'}, {name: 'Carrots'}],
                      },
                    ],
                  }, 
                  {name: 'Carrots'}],
              },
            ],
          },
          {
            name: 'Mosumbi',
            children: [{name: 'Pumpkins'}, {name: 'Carrots'}],
          },
        ],
      },
    ],
  },
  {
    name: 'Fruit',
    children: [{name: 'Apple'}, {name: 'Banana'}, {name: 'Fruit loops'}],
  },
  {
    name: 'Vegetables',
    children: [
      {
        name: 'Green',
        children: [{name: 'Broccoli'}, {name: 'Brussels sprouts'}],
      },
      {
        name: 'Orange',
        children: [
          {
            name: 'santra',
            children: [
              {
                name: 'Green',
                children: [{name: 'Broccoli'}, {name: 'Brussels sprouts'}],
              },
              {
                name: 'Orange',
                children: 
                [
                  {
                    name: 'Pumpkins',
                    children: [
                      {
                        name: 'Green',
                        children: [{name: 'Broccoli'}, {name: 'Brussels sprouts'}],
                      },
                      {
                        name: 'Orange',
                        children: [{name: 'Pumpkins'}, {name: 'Carrots'}],
                      },
                    ],
                  }, 
                  {name: 'Carrots'}],
              },
            ],
          },
          {
            name: 'Mosumbi',
            children: [{name: 'Pumpkins'}, {name: 'Carrots'}],
          },
        ],
      },
    ],
  }
];


@Component({
  selector: 'app-sidepan',
  standalone: true,
  imports: [MatTreeModule,MatIconModule,MatButtonModule],
  templateUrl: './sidepan.component.html',
  styleUrl: './sidepan.component.css'
})
export class SidepanComponent {
  dataSource = TREE_DATA;

  childrenAccessor = (node: FoodNode) => node.children ?? [];

  hasChild = (_: number, node: FoodNode) => !!node.children && node.children.length > 0;


  performAction(node:any){
    console.log(node);
  }
  
}
