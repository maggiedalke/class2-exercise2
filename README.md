## Part 1 - Callback Cake

```const makeCake = function() {
  setTimeout(() => {console.log('Step 1: Preheat oven to 175 degrees C.');}, 20);
  setTimeout(() => {console.log('Step 2: Grease and flour a 9x9 inch pan.');}, 200);
  setTimeout(() => {console.log('Step 3: In a medium bowl, cream together the sugar and butter.');}, 3000);
  setTimeout(() => {console.log('Step 4: Beat in the eggs, one at a time.');}, 5000);
  setTimeout(() => {console.log('Step 5: Stir in the vanilla.');}, 1000);
  setTimeout(() => {console.log('Step 6: Combine flour and baking powder');}, 2000);
  setTimeout(() => {console.log('Step 7: Add dry ingredients to the creamed mixture and mix well.');}, 300);
  setTimeout(() => {console.log('Step 8: Stir in the milk until batter is smooth.');}, 4000);
  setTimeout(() => {console.log('Step 9: Pour or spoon batter into the prepared pan.');}, 6000);
  setTimeout(() => {console.log('Step 10: Bake for 30 to 40 minutes.');}, 3000);
  setTimeout(() => {console.log('Step 11: Cake is done when it springs back to the touch.');}, 1);
}
```

If you run the makeCake() function above, your cake will not turn out. Why?

Using nested callbacks, fix the problem.

## Part 2 - Pyramid of Doom

```
setTimeout(function() {
  let counter = 0;
  console.log(counter++);
  setTimeout(function() {
    console.log(counter++);
    setTimeout(function() {
      console.log(counter++);
      setTimeout(function() {
        console.log(counter++);
        setTimeout(function() {
          console.log(counter++);
          setTimeout(function() {
            console.log(counter++);
            setTimeout(function() {
              console.log(counter++);
              setTimeout(function() {
                console.log(counter++);
                setTimeout(function() {
                  console.log(counter++);
                  setTimeout(function() {
                    console.log(counter++);
                  }, 500);
                }, 500);
              }, 500);
            }, 500);
          }, 500);
        }, 500);
      }, 500);
    }, 500);
  }, 500);
}, 500);
```

## Part 3 - Modify the pyramid

Using the previously provided _pyramid of doom_, insert some code that will print out "odd" in addition the number, but only when the counter is odd.

## Part 4 - Fix the pyramid

Using the previously provided _pyramid of doom_, convert each nested callback into a stand-alone function. I already got you started.

```
setTimeout(step1, 500);

function step1() {
  // do some stuff here
  setTimeout(step2, 500);
}
```

## Part 5 - Break it up

1. Using your code from a previous assignment, your Budget Calculator from SD120 is a good choice, break up your code into at least 2 seperate JavaScript files.
2. Use the examples of loading a script using JS provided to load your script dynamically from JS using callbacks in a _pyramid of doom_ fashion.
3. Improve your solution using stand alone functions.

Here is the code to load a file:

```
function loadScript(src, cb) {
  // creates a <script> tag and append it to the page
  // this causes the script with given src to start loading and run when complete
  let script = document.createElement('script');
  script.src = src;
  document.head.append(script);
  script.addEventListener('load', cb);
}
```

**TIP**
Remember, as long as the files are loaded in the correct order, everything should continue to work.
