import { Component, OnInit } from '@angular/core';
import { LazyloadService } from '../service/lazyloadservice.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private lazyload:LazyloadService) { }

 
    ngOnInit(): void {
     
    }
  

}
