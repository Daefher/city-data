import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { City } from 'src/app/interfaces/city';
import { CityServiceService } from 'src/app/services/city-service.service';

@Component({
  selector: 'app-city-modal',
  templateUrl: './city-modal.component.html',
  styleUrls: ['./city-modal.component.scss']
})
export class CityModalComponent implements OnInit {

  @Input() show: boolean = false;
  @Input() cityName: string = '';
  @Output() closeModal = new EventEmitter<void>();
  isLoading: boolean = true;

  public city_info: City = {
    name: '',
    population: 0,
    longitude: 0,
    region: '',
    summary: ''
  };

  constructor(private city_service: CityServiceService) {
  }

  ngOnInit(): void {
    this.city_service.getCities([this.cityName]).subscribe((response: any) => {
      this.city_info = response.cities[0];
      this.isLoading = false;
      console.log(this.city_info)
    });
  }

  close() {
    this.show = false;
    this.closeModal.emit();
  }

}
