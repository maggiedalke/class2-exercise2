setTimeout(function () {
  let counter = 0;
  console.log(counter++);
  setTimeout(function () {
    console.log(counter++);
    setTimeout(function () {
      console.log(counter++);
      setTimeout(function () {
        console.log(counter++);
        setTimeout(function () {
          console.log(counter++);
          setTimeout(function () {
            console.log(counter++);
            setTimeout(function () {
              console.log(counter++);
              setTimeout(function () {
                console.log(counter++);
                setTimeout(function () {
                  console.log(counter++);
                  setTimeout(function () {
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
