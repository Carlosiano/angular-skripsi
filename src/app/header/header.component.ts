import { NgFor } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'header',
  standalone: true,
  imports: [NgFor],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})

export class HeaderComponent implements OnInit {
  @Input() scrollY = 0;
  @Input() gambar: any;
  @Input() active = false;
  @Input() toggleActiveClass: any;
  @Input() navLinks: any;
  constructor() { }

  ngOnInit() {}
}
