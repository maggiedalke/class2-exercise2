setTimeout(function () {
  let counter = 0;
  counter % 2 === 1 ? console.log(counter++ + ' odd') : console.log(counter++);
  setTimeout(function () {
    counter % 2 === 1
      ? console.log(counter++ + ' odd')
      : console.log(counter++);
    setTimeout(function () {
      counter % 2 === 1
        ? console.log(counter++ + ' odd')
        : console.log(counter++);
      setTimeout(function () {
        counter % 2 === 1
          ? console.log(counter++ + ' odd')
          : console.log(counter++);
        setTimeout(function () {
          counter % 2 === 1
            ? console.log(counter++ + ' odd')
            : console.log(counter++);
          setTimeout(function () {
            counter % 2 === 1
              ? console.log(counter++ + ' odd')
              : console.log(counter++);
            setTimeout(function () {
              counter % 2 === 1
                ? console.log(counter++ + ' odd')
                : console.log(counter++);
              setTimeout(function () {
                counter % 2 === 1
                  ? console.log(counter++ + ' odd')
                  : console.log(counter++);
                setTimeout(function () {
                  counter % 2 === 1
                    ? console.log(counter++ + ' odd')
                    : console.log(counter++);
                  setTimeout(function () {
                    counter % 2 === 1
                      ? console.log(counter++ + ' odd')
                      : console.log(counter++);
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
