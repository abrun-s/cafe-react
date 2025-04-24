## Summary

cafe-react is a single-page React application that showcases laptop-friendly cafes, primarily in Tokyo, allowing users to discover cozy work spots with stable Wi-Fi, power sockets, and more. It leverages a local JSON dataset for initial rendering and seamlessly fetches live data from a remote REST API whenever a search term is entered. Users can search by cafe name, filter by amenities, view each cafe’s location on Google Maps, and share their own favorite work spots via an intuitive form.

## Features

- **Live search & filter**: Type in the search bar to query cafes by title; results update in real time.  
- **Criteria filtering**: Narrow down cafes by amenities—Stable Wi-Fi, Power sockets, Quiet, Coffee, Food—via sidebar checkboxes.  
- **Add your own cafe**: Submit a new cafe with title, address, criteria, and photo; instantly appears in the list.  
- **Cafe listing**: Displays all matching cafes as cards showing image, title, and criteria tags.  
- **Google Maps integration**: “Show the map” button opens each cafe’s location in Google Maps for easy navigation.  
- **Responsive UI components**: Navbar, Searchbar, Sidebar, and Cafe cards styled with CSS and Bootstrap utility classes.

## Tech Stack

- **React** 18 + **Vite** for fast development and build tooling  
- **JavaScript (JSX)** and **CSS Modules** for component styling  
- **Bootstrap 5** and **Font Awesome** for layout and icons  
- **Local JSON** (`cafedata.json`) seed data with fields like `title`, `address`, `hours`, `criteria`, and `picture`  
- **Fetch API** for remote data with React hooks (`useEffect`, `useState`)  
- **Heroku-ready** backend endpoint supporting `GET /api/v1/cafes` and query params (`?title=…`)

## Installation

1. **Clone the repo**  
   ```bash
   git clone https://github.com/abrun-s/cafe-react.git
   cd cafe-react
2. **Install dependencies**
    ```bash
   npm install
3. **Start the development server**
     ```bach
     npm run dev

