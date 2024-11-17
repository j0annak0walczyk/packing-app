# Packing App - Frontend Portfolio Project

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Design and Usability](#design-and-usability)
- [Future Enhancements](#future-enhancements)
- [Known Issues](#known-issues)
- [Deployment](#deployment)
- [Conclusion](#conclusion)

## Overview

**Packing App** is an interactive web application designed for organizing and managing travel packing lists. Developed as part of my frontend development portfolio, this project showcases my skills in creating responsive, data-driven, and user-friendly interfaces using modern web technologies.

## Features

- **Create and Manage Trips**: Users can add new trips with detailed information, including country, city, arrival and departure dates. The app automatically calculates the trip duration based on these dates.
- **Packing List Management**: Users can add items to specific trips and even transfer items between different trips. Each packing list can be edited or items can be removed as needed.
- **Interactive Map Integration**: The app allows users to open a map, search for a location, and create a new trip directly from the map view.
- **Weather Forecast**: Users can input a city to view the weather forecast for the upcoming week, aiding in decision-making for packing.
- **CRUD Operations**: Full support for creating, editing, and deleting trips, as well as managing items within each trip.
- **Responsiveness**: The app is fully responsive on laptops and mobile devices, with plans to extend this support to tablets and other devices.
- **Reusable UI Components**: The app structure includes reusable components for consistent design and functionality. Components like `Button`, `Select`, `Loader`, and `ModalComponent` are organized under the `ui` folder.
- **Custom Hooks**: Custom React hooks such as `useAddItem` and `useDeleteTrip` are used to manage data handling across the app.

## Technologies Used

- **Frontend Framework**: React.js
- **Styling**: CSS Modules for scoped and maintainable styling.
- **Database**: Supabase for trip and item data storage and retrieval.
- **APIs**:
  - Map and geolocation services for the interactive map feature.
  - Weather API for displaying forecasts.
- **Deployment**: Hosted on Netlify for a free and seamless deployment experience.

## Design and Usability

- **Custom Design**: The logo and overall design were created from scratch to ensure a unique and consistent user experience.
- **Filters and Sorting**: Built-in filters and sorting options allow users to easily manage and view their trips and packing lists.

## Future Enhancements

### Planned Features and Improvements:

1. **User Authentication**: Implement real user authentication so each user can manage their own set of trips and packing lists.
2. **Optimized Image Rendering**: Improve the performance of image loading to ensure faster and smoother rendering.
3. **Enhanced Responsiveness**: Extend responsive design to include tablet and other device formats.
4. **Improved Error Handling**: Refine error handling to prevent redundant messages, particularly when deleting trips with multiple items.
5. **Additional Reusable Components**: Develop more reusable components, such as a standardized component for displaying trip details.

## Known Issues

- **Multiple Error Messages**: Currently, deleting a trip that includes multiple items may trigger several success messages, one for each item. This needs to be refined for better UX.
- **Image Loading Speed**: Image assets load more slowly than desired and will be optimized in future updates.

## Deployment

The application is deployed via [Netlify](https://www.netlify.com/) for easy access and real-world testing.

## Conclusion

Packing App is a robust project that demonstrates a range of frontend development skills, from data management and UI/UX design to responsive design and API integration. It is a stepping stone towards further enhancements and a testament to my capability as a frontend developer.
