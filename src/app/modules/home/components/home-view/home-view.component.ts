import { Component, OnInit } from '@angular/core';
import { City } from 'src/app/interfaces/city';
import { CityServiceService } from 'src/app/services/city-service.service';

@Component({
  selector: 'app-home-view',
  templateUrl: './home-view.component.html',
  styleUrls: ['./home-view.component.scss']
})
export class HomeViewComponent implements OnInit {

  public cities: string[] = ["New York", "Los Angeles", "Chicago", "San Francisco", "Dallas", "San Diego", "Phoenix", "Houston", "Philadelphia","San Antonio"]
  public cities_front: { city: string; url: string }[] = [
    {
      city: "New York",
      url: "https://upload.wikimedia.org/wikipedia/commons/1/16/New_York_City_from_Empire_State_Building_002.jpg",
    },
    {
      city: "Los Ángeles",
      url: "https://upload.wikimedia.org/wikipedia/commons/5/55/Downtown_Los_Angeles_from_Griffith_Observatory.jpg",
    },
    {
      city: "Chicago",
      url: "https://upload.wikimedia.org/wikipedia/commons/0/02/Willis_Tower_From_Lake.jpg",
    },
    {
      city: "San Francisco",
      url: "https://upload.wikimedia.org/wikipedia/commons/5/53/NorCal2018_Golden_Gate_Bridge_at_nightfall_DSCF3015_FRD.jpg",
    },
    {
      city: "Dallas",
      url: "https://upload.wikimedia.org/wikipedia/commons/7/71/Dallas_skyline.jpg",
    },
    {
      city: "San Diego",
      url: "https://upload.wikimedia.org/wikipedia/commons/a/aa/BalboaPark_Museum.jpg",
    },
    {
      city: "Phoenix",
      url: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Phoenix.skyline.750pix.jpg",
    },
    {
      city: "Houston",
      url: "https://upload.wikimedia.org/wikipedia/commons/e/e8/HoustonCityHall_DANIEL2986.jpg",
    },
    {
      city: "Filadelfia",
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Philadelphia212.jpg/800px-Philadelphia212.jpg",
    },
    {
      city: "San Antonio",
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Alamo_pano.jpg/1280px-Alamo_pano.jpg",
    },
  ];  
  public cities_info: City[] = []; 
  modalOpen = false; 
  selectedCityName = '';
  constructor(
    private city_service: CityServiceService
  ) { }

  ngOnInit(): void {
    
  }

  openModal(city:string){
    this.selectedCityName = city;
    this.modalOpen = true;
    console.log(this.modalOpen)
  }

  closeModal() {
    this.modalOpen = false;
  }
  
}
