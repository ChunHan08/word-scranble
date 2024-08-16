const words = [
  {
    word: "imagine",
    hint: "Step up the two of us, nonbody knows us"
  },
  {
    word: "needy",
    hint: "I know it feels so good to be needed"
  },
  {
    word: "nasa",
    hint: "Give you the whole world, Ima need space"
  },
  {
    word: "bloodline",
    hint: "Love me, thank you love "
  },
  {
    word: "fakesmile",
    hint: " And i wont say im fine"
  },
  {
    word: "badidea",
    hint: "How 'bout we take a little bit of time away"
  },
  {
    word: "makeup",
    hint: "You know that Im bout to wake up with you"
  },
  {
    word: "ghostin",
    hint: "Heavy tears, a rain parade from hell"
  },
  {
    word: "inmyhead",
    hint: "Gugci tennis shows running from your issues"
  },
  {
    word: "blazed",
    hint: "That something cant be found",
  },
  {
    word: "rem",
    hint: "If you can belive"
  },
  {
    word: "sweetener",
    hint: "Mix it and mix it and mix it and mix it"
  },
  {
    word: "successful",
    hint: "I got some real good news from work"
  },
  {
    word: "everytime",
    hint: "Its like something out of Shakespeare"
  },
  {
    word: "breathin",
    hint: "Time goes by and I can control my mind"
  },
  {
    word: "borderline",
    hint: "You know I'm the wifey tybe, babe (rrah, woo)"
  },
  {
    word: "betteroff",
    hint: "Steerin' clear of any headaches to start"
  },
  {
    word: "moonlight",
    hint: "Makes me wanna give you my heart"
  },
  {
    word: "bealright",
    hint: "When finding love is a battle"
  },
  {
    word: "intoyou",
    hint: "Oh, baby. look what you started"
  },
  {
    word: "greedy",
    hint: "Been in this state of mind"
  },
  {
    word: "everyday",
    hint: "He gave me that good sh!t"
  },
  {
    word: "sometimes",
    hint: "Ooh, and im not tempted, baby"
  },
  {
    word: "idontcare",
    hint: "Now I laugh about the things"
  },
  {
    word: "touchit",
    hint: "And i remember all the places you wanna go"
  },
  {
    word: "problem",
    hint: "And even though I cant forgive you"
  },
  {
    word: "whytry",
    hint: "Now were screaming just to see whos louder"
  },
  {
    word: "breakfree",
    hint: "This is the part when i say i dont want ya"
  },
  {
    word: "bemybaby",
    hint: "Baby, then youll get the chnave the chance to love me"
  },
  {
    word: "lovemeharder",
    hint: "Something bigger than us and beyond bliss"
  },
  {
    word: "babyi",
    hint: "But the words cant even touch what's in my heart"
  },
  {
    word: "rightthere",
    hint: "Youre so diffrent, no one comapres"
  },
  {
    word: "lovinit",
    hint: "You got all my love, all my love?"
  },
  {
    word: "piano",
    hint: "I could sing about how love is a lsoing battle"
  },
  {
    word: "daydreamin",
    hint: "The way to make me feel inside"
  },
  {
    word: "theway",
    hint: "Say, Im thinking bout her every secound, every hour"
  },
  {
    word: "focus",
    hint: "Im over here doing what i like"
  },
  {
    word: "monopoly",
    hint: "Ive been on a roll where you been?"
  },
  {
    word: "quit",
    hint: "And you say that I'm the devil you know"
  },
  {
    word: "bed",
    hint: "Thousand dolloar sheets"
  },
  {
    word: "adore",
    hint: "Boy, so what been on your mind?"
  },
  {
    word: "december",
    hint: "Wrap me all up nad take me home with you"
  },
  {
    word: "boyfriend",
    hint: "But I do just what I have to do"
  },
  {
    word: "shutup",
    hint: "All the demons helped me see sh!t diffrently"
  },
  {
    word: "motive",
    hint: "That you really wanna make me yours"
  },
  {
    word: "sixthirty",
    hint: "So come here and give me some kisses"
  },
  {
    word: "myhair",
    hint: "Like the way you do my mind"
  },
  {
    word: "nasty",
    hint: "No more playin safe, lets just take it all the way"
  },
  {
    word: "westside",
    hint: "Ill bring the life right back"
  },
  {
    hint: "obvoius",
    hint: "Other that ive had had to impress me before"
  },
  {
    word: "pov",
    hint: "Made the glass the way you see through me"
  },
  {
    word: "testdrive",
    hint: "No second guessing, checking the rearview"
  },
  {
    word: "intro",
    hint: "Deel it in your bones and own that sh!t"
  },
  {
    word: "bye",
    hint: "I cant belive that im fainnly moving through my fears"
  },
  {
    word: "supernatural",
    hint: "This is a true story about all the games"
  },
  {
    word: "santababy",
    hint: "Think of all the fun I've missed"
  },
  {
    word: "truelove",
    hint: "After six days in your arms"
  },
  {
    word: "7rings",
    hint: "My wrist, stop whatchin my neck is flossy"
  },
  
  {
    word: "keyboard",
    hint: "An input device"
  },
  {
    word: "stupid",
    hint: "A dumb person"
  },
  {
    word: "smart",
    hint: "A clever person"
  },
  {
    word: "qwerty",
    hint: "A keyboard layout"
  },
  {
    word: "google",
    hint: "A search engine"
  },
  {
    word: "youtube",
    hint: "A video-sharing platform"
  },
  {
    word: "pet",
    hint: "A domesticated animal"
  },
  {
    word: "supercalaifragilisticexpialidocious",
    hint: "A long word"
  },
  {
    word: "plate",
    hint: "A flat surface used to eat food"
  },
  {
    word: "chair",
    hint: "A piece of furniture for sitting"
  },
  {
    word: "bottle",
    hint: "A container for holding liquids"
  },
  {
    word: "battery",
    hint: "A device used to store energy"
  },
  {
    word: "delete",
    hint: "A command to remove something"
  },
  {
    word: "police",
    hint: "A group of people who investigate crimes"
  },
  {
    word: "fire",
    hint: "A dangerous smell"
  },
  {
    word: "water",
    hint: "A liquid that flows"
  },
  {
    word: "earth",
    hint: "The third planet from the sun"
  },
  {
    word: "air",
    hint: "The invisible gaseous substance"
  },
  {
    word: "lift",
    hint: "A command to move something up or down"
  },
  {
    word: "claw",
    hint: "A tool used to cut something"
  },
  {
    word: "cake",
    hint: "A sweet dessert"
  },
  {
    word: "bread",
    hint: "A flat baked food"
  },
  {
    word: "candy",
    hint: "A sweet treat"
  },
  {
    word: "juice",
    hint: "A drink made from fruit"
  },
  {
    word: "sugar",
    hint: "A sweet substance"
  },
  {
    word: "salt",
    hint: "A mineral substance"
  },
  {
    word: "pepper",
    hint: "A spicy food"
  },
  {
    word: "butter",
    hint: "A sweet substance"
  },
  {
    word: "tab",
    hint: "A device used to switch between tabs"
  },
  {
    word: "book",
    hint: "A written work"
  },
  {
    word: "pen",
    hint: "A writing tool"
  },
  {
    word: "house",
    hint: "A building where people live"
  },
  {
    word: "car",
    hint: "A vehicle used for transportation"
  },
  {
    word: "train",
    hint: "A vehicle used for transportation"
  },
  {
    word: "plane",
    hint: "A flying vehicle"
  },
]