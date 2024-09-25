# Weather Dashboard

This project is a **Weather Dashboard** built with **React**, which allows users to search for weather details of various cities, view dynamic weather data, and delete cities from the list. It includes functionality for users to edit descriptions of the weather data and also calculates how old the data is in hours.

- Demo Link is here[https://weatherapp-livid-phi.vercel.app/]

![Screenshot 2024-09-25 124759](https://github.com/user-attachments/assets/eb38e935-cc71-47e7-a377-27c486b3a0ca)

![Screenshot 2024-09-25 124829](https://github.com/user-attachments/assets/fbac29c5-181f-43e6-bf57-66cd8e487940)

![Screenshot 2024-09-25 124900](https://github.com/user-attachments/assets/2d4e374d-44de-4e52-9787-41276ab5da52)

## Features

- **Search Functionality**: Search for weather data by city name.
- **Editable Description**: Users can edit the description field of each city's weather data.
- **Data Age Calculation**: The age of the data is dynamically calculated based on the difference between the current time and the time the data was fetched.
- **Delete City**: Users can delete a city's weather data from the table.
- **Real-Time Data Update**: The weather data is automatically updated whenever new data is passed as props.

## Tech Stack

- **React**: JavaScript library for building user interfaces.
- **CSS**: For styling the components.
- **React Icons**: For including icons like the delete button.
- **JavaScript**: For the main logic of the weather dashboard.

## Usage

1. **Search for a city**:
   - Enter the city name in the search input and click on the **Search** button to filter the table by that city.

2. **Edit the description**:
   - Click on the description field of a city to edit and update it.

3. **View data age**:
   - The data age in hours is calculated dynamically as the difference between the current time and the data fetch time.

4. **Delete city**:
   - Click on the delete icon next to a city to remove its data from the table.

## Future Enhancements

- **API Integration**: Integrate a real-time weather API to fetch live data for multiple cities.
- **Sorting**: Add functionality to sort cities by name, temperature, or other attributes.
- **Favorites**: Allow users to save cities as favorites for easy access.
- **Pagination**: Implement pagination for easier navigation through large datasets.
