# light-sound-memory-game

# Pre-work - _Memory Game_

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program.

Submitted by: Roland Lee

Time spent: **#** hours spent in total

Link to project: https://glitch.com/edit/#!/illustrious-satisfying-salesman?path=index.html%3A33%3A20

## Required Functionality

The following **required** functionality is complete:

- [C ] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
- [C ] "Start" button toggles between "Start" and "Stop" when clicked.
- [C ] Game buttons each light up and play a sound when clicked.
- [C ] Computer plays back sequence of clues including sound and visual cue for each button
- [C ] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess.
- [C ] User wins the game after guessing a complete pattern
- [C ] User loses the game after an incorrect guess

The following **optional** features are implemented:

- [C ] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
- [C ] Buttons use a pitch (frequency) other than the ones in the tutorial
- [C ] More than 4 functional game buttons
- [C ] Playback speeds up on each turn
- [C ] Computer picks a different pattern each time the game is played
- [C ] Player only loses after 3 mistakes (instead of on the first mistake)
- [C ] Game button appearance change goes beyond color (e.g. add an image)
- [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
- [ ] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [ ] List anything else that you can get done to improve the app!

## Video Walkthrough (GIF)

If you recorded multiple GIFs for all the implemented features, you can add them here:
![](https://giphy.com/gifs/u5VKQl3iqSN8LwocN4)
![](https://giphy.com/gifs/tDEexq1425SOPATPYj)
![](gif3-link-here)
![](gif4-link-here)

## Reflection Questions

1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here.
   Stack Overflow, w3schools, and css-tricks used for styling.

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words)
   A challenge I had when creating the submission was after being given a page of code, I wasn't sure where to start when implementing a function that utilizes the premade code.
   This was because I had an idea of what the code did but some uses were a bit unknown to me so I was not sure where I should starting when implementing the guess. My original thought was to take in the entire user input into a separate array and simply to compare them, however I realized that this fell short due to the parameter that was given "btn." This meant that I was only meant to check one input at a time and allowed me to see that I merely had to use the user's current guessing position as an index as to where the pattern is. Once I had the beginning part down, I was able to use the given flowchart to implement the algorithm for determining the user's status in the game.

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words)
   I have previously used React to build a webpage, and was wondering if there was a benefit towards using HTML, CSS, and JavaScript altogether rather than using just React (or even just JS) to design an entire webpage. Is there a niche language/library that web developers use to make the modern-day website?

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words)
   I would try to make the game more user-engaged. For example, allowing users to choose the difficulty which can correspond to the number of buttons in play, the speed of the game, length of the game, etc. If we were to make it more comprehensive, the user should be allowed to set all of the mentioned settings manually.
   I would like to make the game more aesthetically pleasing to look at as well. As of now, the game seems too bland and could be designed much nicer.
   I believe that the functionality of the game is fine as it is, and there is not much more to improve on.

## Interview Recording URL Link

[My 5-minute Interview Recording](https://www.youtube.com/watch?v=RYXJ9SEQ92s)

## License

    Copyright ROLAND LEE

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
