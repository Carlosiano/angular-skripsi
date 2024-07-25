import { NgFor } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'main',
  standalone: true,
  imports: [NgFor],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})

export class MainComponent  implements OnInit {
  @Input() gambar: any
  @Input() infoPMB: any
  @Input() kampus:any
  @Input() categories:any
  @Input() fasilitas:any
  @Input() alasanKuliah: any
  constructor() { }

  ngOnInit() {}

}