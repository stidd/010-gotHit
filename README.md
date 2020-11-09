You know how in a video game when you're being attacked you might see your health bar going down by different amounts for each time a bad guy hits you? That's what we'll be doing here. Read the code and then hit run over there and watch (in the console) how an attack by a wolf is different from an attack by an dragon. Each have their own strength level represented in the variables on line 2 & 3.

**attackAmount()** is a pure function in that it takes input and returns a value. It's also a handy abstraction that simplifies the complex concept of making an attack's severity be realistically and randomly varying.

Now also see that we have a variable on line 1 named health that is set to 100. It's the part of this game that keeps track of health. In the game it would be being displayed in a health bar.  

Write a function called gotHit that takes one of these randomized attack amounts as a parameter. The function shouldn't return anything. It's not a pure function. But it has a side-effect... it should decrease the health variable by attackAmount().  

Be able to run it more than once with different values. Try it once for a wolf and once for a dragon. You could use console.log(health) to see what it does to your health.

This is an example of a pure function being used as an argument in a function with a side-effect.