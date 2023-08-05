# Overview

Component-level design and Server or Client Type

Routes:
Pullscreen: /
Question Page with question number at end: /question/:questionNumber
Calculating page: /question/calculating
Final result page: /result/:dinosaur
/result/:dinosaur/time
/result/:dinosaur/fun-fact1
/result/:dinosaur/location
/result/:dinosaur/size
/result/:dinosaur/fun-fact2

Try making the results details just a webp export to save having to build different layouts for each page

Screen wrapper and background is a layout for all the child pages that are not part of the main screen?

Game Provider is server side component that loads the possible question choices
Results page

If I was doing this fully client side there would be a top-level Provider state

I think maybe this is just a react app because who cares about the bundle size and we don't have any real API calls, just a shared in memory state

Layouts (Either a NextJS Layout or a ReactRouter route wrap):
Outer shell with dinosaur background
Inner circle is contained within the /question route layout
Start over button is on every page but the first so maybe part of the parent layout but conditional?
Results has it's own layout with the Result Type switcher rendering on the left, the right pane switches based on the route

Server component
Main for question returns
Footstep path component based on which questionNumber you're on
ResultsPage for specific dinosaur and type. The svg line connecting the layout and details is absolutely positioned on the page
It looks up from a JSON object keyed by dinosaur name from the route

Client Component:
Intro div Client Side Component because fully clickable div with animated gif/webp background
Start Over button
3 option Text question
3 Option Image question
timeout
Calculating page because it has to interact with native browser setTimeout delay
Results page "switcher"
Interactive Category widget (5 options)

### Algorithm/Data Structure

Logic for finding best dinosaur match question responses create array of 6 responses

Each dinosaur has array of 15 characteristics. Iterate through dinosaurs and find one with best count of matching responses

Question:
Answer->Characteristic
Answer2->Characteristic2
Answer3->Characteristic3

dinosaur -> characteristics array
-> fun fact1
-> fun fact2
-> time
-> location
-> size
