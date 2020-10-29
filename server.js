//consts & other boilerplate server stuff
const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;


//middleware (to be filled once routes are done)



//get routes
//This little function that everything in this project hinges on is not working and I've combed through everything I could find in our class repo and online. I've even found a video doing this with the exact same file pathing and everything else that works fine, even on my machine, and this just doesn't. I have seriously searched around for hours and rewrote the actual function about 6 times now and still it keeps saying that _dirname is undefined. I even found a few slightly different ways of writing this function, none of those worked. At this point I have no clue what the problem is, even other get functions meant for displaying other things show up just fine. It's. Just. This. I'm honestly baffled because this is incredibly weird. Even other applications in our repo work fine but despite this being as up to snuff as anything else in there, it doesn't work. I've literally tried everything I can find and picked apart every little piece and I've got nothing. Even saved the text of this file, nuked the repo and started everything over fresh, twice. Nothing. What the literal hell? I give up? I got through page 10 of google search results and found nothing related to my issue so I'm just at a complete loss.
app.get('/', (req, res) => {
    res.sendFile(path.join(_dirname, 'public', 'index.html'));
});


//server listening



app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});