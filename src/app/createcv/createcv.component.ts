import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-createcv',
  templateUrl: './createcv.component.html',
  styleUrls: ['./createcv.component.css']
})
export class CreatecvComponent implements OnInit {
  nom: string;
  prenom: string;

  constructor() { }

  ngOnInit(): void {
  }

}
