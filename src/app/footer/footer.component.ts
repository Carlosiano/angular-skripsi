import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})

export class FooterComponent  implements OnInit {
  @Input() gambar: any

  constructor() { }

  ngOnInit() {}

}
