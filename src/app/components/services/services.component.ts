import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/service/api-service.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  tcServices: any = [];
  constructor(private services: ApiServiceService) { }

  ngOnInit(): void {
    this.services.getServices().subscribe({
      next: (data) => {
        this.tcServices = data
        console.log(data)
      },
      complete: () =>{},
      error: (err) => {console.log(err)}
    })
  }

  
}
