Spotify Clone - Web Music Player

About The Project

This project is a front-end clone of the popular music streaming service, Spotify. It is designed to replicate the look, feel, and basic functionality of the Spotify web player using fundamental web technologies. The goal of this project is to create a visually appealing and interactive user interface that allows users to browse playlists, view album art, and control music playback, including playing, pausing, and scrubbing through tracks.

This clone was built from scratch to demonstrate proficiency in HTML for structure, CSS for custom styling and animations, Bootstrap for responsive layout, and JavaScript for handling all user interactions and media controls. It is a static front-end application and does not connect to any backend or the official Spotify API. The music and playlist data are hard-coded into the JavaScript for demonstration purposes.

PROJECT PREVIEW

Here is a glimpse of the application's interface and core functionalities.

Main View and Player!
[VIEW](https://github.com/user-attachments/assets/76440ca2-e372-4890-801c-069e0c089249)

![DOWN-VIEW](https://github.com/user-attachments/assets/68c729bc-6f49-47dc-a820-155aa70bad09)


Artist Section

Live Demo in Action
This animation shows the responsive sidebar, which expands on hover, and the seamless music playback initiated by clicking on a playlist.

![DOWN-VIEW](https://github.com/user-attachments/assets/9d742084-6285-4bd2-b961-2dcb414255c0)


Built With

This project was created using the following core technologies:

HTML5: Used for creating the fundamental structure and layout of all the components of the webpage, from the sidebar and main content area to the footer player.

CSS3: Used for all the custom styling to match Spotify's branding. This includes colors, fonts, spacing, hover animations on cards, sidebar transitions, and custom styling for the progress and volume sliders.

Bootstrap 5: A popular CSS framework used to ensure the website is fully responsive and looks great on all devices (desktops, tablets, and mobiles). It provided the grid system for laying out the sidebar and content, as well as pre-styled components like cards and buttons.

JavaScript (ES6): The core logic of the application is written in JavaScript. It is responsible for all the dynamic and interactive features of the music player.

Bootstrap Icons: Used for all the icons throughout the application, such as the play, pause, search, and home icons.

Getting Started

To get a local copy up and running, follow these simple steps.

Prerequisites

You only need a modern web browser like Google Chrome, Firefox, or Microsoft Edge. No special software or installations are required.

Installation and Setup

Download the Project:
Download the project files to your local machine. This will include index.html, style.css, script.js, and the assets folder.

Add Your Assets:
Inside the assets folder, place your own image files (for album/artist art) and audio files (in .mp3 format).

Update JavaScript (Optional):
If you have added your own audio files, you will need to open the script.js file in a text editor and update the playlists object. Change the audioSrc, imageSrc, title, and artist fields to match your local files.

Example:

    const audio = new Audio();
    audio.src = 'assets/song1.mp3';

Run the Website:
Simply open the index.html file in your web browser. The website will load locally and be fully functional.

Features

This Spotify clone includes several key features to mimic the real user experience:

Responsive Layout: The interface adapts seamlessly to different screen sizes, from large desktop monitors to small mobile phones.

Interactive UI Components:

Hover Animations: Playlist cards lift up and reveal a play button when you hover over them.

Collapsible Sidebar: The navigation sidebar expands on hover to show text labels and collapses to show only icons.

Core Music Player Functionality:

Play/Pause Control: A central play/pause button in the footer controls the audio playback.

Dynamic Updates: Clicking the play button on any playlist card automatically updates the footer player with the new song's title, artist, and cover art, and begins playback.

Progress Bar: A visual slider that shows the current progress of the song. Users can click anywhere on the bar to seek to a different part of the track.

Volume Control: A slider to adjust the audio volume.

Time Display: Shows the current time and total duration of the track.

Local Asset Management: The project is set up to easily play music and display images stored locally in the assets folder.
