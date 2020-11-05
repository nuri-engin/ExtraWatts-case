## Sample case for `ExtraWatts | Kiwi`
[Kiwi](https://ride.kiwi/) Electric Scooters was born to fight against ineffective urban transportation, traffic congestion as well as the problem of city-wide air pollution. Kiwi electric scooters are completely emission-free. Ride a Kiwi for the benefit of the environment. You’ll love the Kiwi Electric Scooter!

```
Application structure;
    # Assets: SVG files for Logo and map-marker-icon. 
    # Utils: Helper consts and methods.

    # App
        # Components
            # Sidebar
                - Appbar (Mobile version): Toolbar - IconButton (MenuIcon) - AppName (Logo)
                - Drawer: Pixel-Perfect approach between `Appbar` and `SidebarItems` visibility
                - SidebarItems (Desktop version): AppLogo - Nav menu list - Logout button
            # Map
                - Scooters: SVG icon
                - GoogleMapReact: Random pins
```

#### # Tech Stack
- React
- Material UI
- [google-map-react](https://github.com/google-map-react/google-map-react) for Google Maps API

---
###### # Run the app on [Github Pages](https://nuri-engin.github.io/ExtraWatts-case/) or [Heroku](https://kiwi-ride.herokuapp.com/) 
