Made to generate JSON text which can be pasted into bingosync for the game beastieball.

This uses the `srl_generator_v5.js` code from the bingosync repository and is purely for testing purposes. Once a list of tasks and difficulties, tags, etc. have been decided upon, this repo will be obsolete and the list will migrate to being a JSON file in the bingosync repo. 

HOW TO USE
1. Clone this repository
2. Open main.html in a browser
3. Right click on the page that comes up, go to "Inspect" or "Inspect Source"
4. Navigate to the "Console" tab
5. There should be a large chunk of text in the output. Highlight and copy that text
6. Open bingosync.com
7. Make a new room, name it whatever you want. For the game dropdown, select "Custom (Advanced)"
8. Paste what you have copied into the new text box that appears
9. In the "Variant" dropdown, select "Fixed" (we are already doing the random generation for the board, we just need bingosync to host and visualize the board)
10. Create the new room, and have fun!

