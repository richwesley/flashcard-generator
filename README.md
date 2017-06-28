# flashcard-generator
![Flash Card Generator](flashcards.png)
## Application to create two styles of flash cards
    *Basic flash cards with the question on the front and answer on back
    *Cloze cards with a parital sentence on the front and missing word on the back
### Technologies and Packages Used
'Node.js', 'Javascript', 'JSON', 'Inquirer.js', 'PrettyJSON.js'
### Application Notes
#### createCards.js is the main module.  To start app use node createCards
    The app will ask you which type of card you would like to make and gather input from user
#### BasicCard.js and ClozeCards.js
    The constructors utilizing module.export to create the card objects
#### basicCards.JSON and clozeCards.JSON
    For persistence, the cards are stored in JSON file for later gameplay
#### readjsonfile.js and writejsonfile.js
    Since JSON file cannot be appended, these modules are used to read the JSON file and then 're'write
    the file after the new card is created.
#### partial.js
    Since the full sentence is being stored in ClozeCard.js, this module creates the partial sentence
    (i.e. the sentence - the 'cloze') which is used during actual game play.

