const makeCake2 = function () {
  setTimeout(function preheatOven() {
    console.log('Step 1: Preheat oven to 175 degrees C.');
    setTimeout(function greaseAndFlourPan() {
      console.log('Step 2: Grease and flour a 9x9 inch pan.');
      setTimeout(function creamSugarAndButter() {
        console.log(
          'Step 3: In a medium bowl, cream together the sugar and butter.'
        );
        setTimeout(function beatEggs() {
          console.log('Step 4: Beat in the eggs, one at a time.');
          setTimeout(function stirVanilla() {
            console.log('Step 5: Stir in the vanilla.');
            setTimeout(function combineFlourAndPowder() {
              console.log('Step 6: Combine flour and baking powder');
              setTimeout(function addDryIngredients() {
                console.log(
                  'Step 7: Add dry ingredients to the creamed mixture and mix well.'
                );
                setTimeout(function stirMilk() {
                  console.log(
                    'Step 8: Stir in the milk until batter is smooth.'
                  );
                  setTimeout(function batterInPan() {
                    console.log(
                      'Step 9: Pour or spoon batter into the prepared pan.'
                    );
                    setTimeout(function bake() {
                      console.log('Step 10: Bake for 30 to 40 minutes.');
                      setTimeout(function cakeDone() {
                        console.log(
                          'Step 11: Cake is done when it springs back to the touch.'
                        );
                      }, 1);
                    }, 3000);
                  }, 6000);
                }, 4000);
              }, 300);
            }, 2000);
          }, 1000);
        }, 5000);
      }, 3000);
    }, 200);
  }, 20);
};

makeCake2();

/* 
ORIGINAL FUNCTION
*****************
const makeCake = function () {
  setTimeout(() => {
    console.log('Step 1: Preheat oven to 175 degrees C.');
  }, 20);
  setTimeout(() => {
    console.log('Step 2: Grease and flour a 9x9 inch pan.');
  }, 200);
  setTimeout(() => {
    console.log(
      'Step 3: In a medium bowl, cream together the sugar and butter.'
    );
  }, 3000);

  setTimeout(() => {
    console.log('Step 4: Beat in the eggs, one at a time.');
  }, 5000);
  setTimeout(() => {
    console.log('Step 5: Stir in the vanilla.');
  }, 1000);
  setTimeout(() => {
    console.log('Step 6: Combine flour and baking powder');
  }, 2000);
  setTimeout(() => {
    console.log(
      'Step 7: Add dry ingredients to the creamed mixture and mix well.'
    );
  }, 300);
  setTimeout(() => {
    console.log('Step 8: Stir in the milk until batter is smooth.');
  }, 4000);
  setTimeout(() => {
    console.log('Step 9: Pour or spoon batter into the prepared pan.');
  }, 6000);
  setTimeout(() => {
    console.log('Step 10: Bake for 30 to 40 minutes.');
  }, 3000);
  setTimeout(() => {
    console.log('Step 11: Cake is done when it springs back to the touch.');
  }, 1);
};
 */
