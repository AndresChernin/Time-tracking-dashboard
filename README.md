Time Tracking Dashboard
Overview

This project is a responsive time tracking dashboard based on a challenge from Frontend Mentor.

The dashboard displays different types of activities, such as Work, Play, Study, Exercise, Social and Self Care. Users can switch between daily, weekly and monthly views to see the corresponding time values.

The main goal of the project was to practise building a responsive React interface and working with reusable components and dynamic data.

Screenshot




Built with
HTML5
CSS3
JavaScript
React
Babel
Responsive Web Design
Semantic HTML and accessibility features
Features
Responsive layout for desktop and mobile screens
Reusable React components
Dynamic activity data
Daily, weekly and monthly time ranges
Interactive activity options
Accessible buttons and interactive controls
Screen reader announcements for changing activity values
Implementation

The application is structured into reusable components.

The ProfileCard component contains the user information and the controls for switching between daily, weekly and monthly views.

The ActivityCard component displays the individual activities and their corresponding time values.

The activity data is stored separately in src/data/activities.js. This allows the activity cards to be generated dynamically instead of creating each card individually.

The CSS is separated into different files for the dashboard, profile section and activity cards.

Images used by the application are stored in the images directory, while the reference designs are kept in the design directory.

Accessibility

During development, I paid particular attention to accessibility.

Interactive elements such as the time-range controls and activity options are implemented as buttons instead of clickable headings or other non-interactive elements.

The currently selected time range is communicated using aria-pressed. The activity options button uses aria-expanded to communicate whether the options are currently visible.

The values that change when switching between daily, weekly and monthly views are placed in a polite live region so that screen readers can announce the updated information.

What I learned

Through this project, I learned how to structure a React application into reusable components and how to use state to control dynamic content.

I also learned that accessibility is not only about visual design. Choosing the correct HTML element for an interaction is important for keyboard navigation and screen reader users.

Another important lesson was separating data from the UI. Instead of hard-coding every activity card, the activity data can be stored separately and rendered dynamically.

What I would improve

If I continued working on this project, I would further improve the project structure and simplify some of the existing code.

I would also continue testing the application with different screen sizes and accessibility tools to identify additional improvements.

Links
Frontend Mentor Challenge: https://www.frontendmentor.io/challenges/time-tracking-dashboard-UIQ7167Jw
Frontend Mentor: https://www.frontendmentor.io/