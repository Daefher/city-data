# City Explorer

City Explorer is an Angular application designed to provide users with detailed information about cities worldwide. It features an interactive interface where users can select cities to view detailed data, including population, attractions, and images. The application utilizes modal components to display city information dynamically and includes a loading indicator for a better user experience during data retrieval.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js (version 14.x or later)
- Angular CLI (version 11.x or later)

### Installation

1. Clone the repository:
    ```bash 
    git clone https://github.com/your-repo/city-explorer.git

2. Navigate to the project directory:
    ```bash 
    cd city-explorer

3. Install dependencies:
    ```bash
    npm install

4. Run the project:
    ```bash
    ng serve

5. Open a browser and navigate to `http://localhost:4200/` to view the application.

## Components

### Modal Component

- **Selector**: `app-city-modal`
- **Inputs**:
- `show`: Boolean - Controls the visibility of the modal.
- `cityName`: String - The name of the city to display information for.
- `isLoading`: Boolean - Indicates whether the application is fetching city data.
- **Outputs**:
- `close`: Event - Emits an event when the modal is closed.

### Services

CityDataService
Responsible for fetching city data from an external API.

- getCityData(cityName: string): Fetches data for the specified city. Returns an Observable that emits the city data.

- Example Usage:
    ```bash
    this.cityDataService.getCityData(['New York'])
  .subscribe(data => {
    console.log(data);
  });

