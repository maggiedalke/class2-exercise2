function preheatOven() {
  console.log('Step 1: Preheat oven to 175 degrees C.');
  setTimeout(greaseAndFlourPan, 20);
}

function greaseAndFlourPan() {
  console.log('Step 2: Grease and flour a 9x9 inch pan.');
  setTimeout(creamSugarAndButter, 200);
}

function creamSugarAndButter() {
  console.log('Step 3: In a medium bowl, cream together the sugar and butter.');
  setTimeout(beatEggs, 300);
}

function beatEggs() {
  console.log('Step 4: Beat in the eggs, one at a time.');
  setTimeout(stirVanilla, 5000);
}

function stirVanilla() {
  console.log('Step 5: Stir in the vanilla.');
  setTimeout(combineFlourAndPowder, 2000);
}

function combineFlourAndPowder() {
  console.log('Step 6: Combine flour and baking powder');
  setTimeout(addDryIngredients, 2000);
}

function addDryIngredients() {
  console.log(
    'Step 7: Add dry ingredients to the creamed mixture and mix well.'
  );
  setTimeout(stirMilk, 300);
}

function stirMilk() {
  console.log('Step 8: Stir in the milk until batter is smooth.');
  setTimeout(batterInPan, 4000);
}

function batterInPan() {
  console.log('Step 9: Pour or spoon batter into the prepared pan.');
  setTimeout(bake, 6000);
}

function bake() {
  console.log('Step 10: Bake for 30 to 40 minutes.');
  setTimeout(cakeDone, 3000);
}

function cakeDone() {
  console.log('Step 11: Cake is done when it springs back to the touch.');
}

function startCake() {
  preheatOven();
}

startCake();
