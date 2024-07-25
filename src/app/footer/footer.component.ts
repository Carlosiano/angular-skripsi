import { NgFor } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'footer',
  standalone: true,
  imports: [NgFor],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})

export class FooterComponent  implements OnInit {
  @Input() gambar: any

  constructor() { }

  ngOnInit() {}

}
