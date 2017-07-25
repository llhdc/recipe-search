// Declaring variables - url for data fetch; searchForm and searchInput to
let url = 'https://crossorigin.me/http://www.recipepuppy.com/api?q=';
let searchForm = document.getElementById('search');
let searchInput = searchForm.value;
let main = document.querySelector('main')

document.querySelector('form.search').addEventListener('submit', function(e) {
//prevent the normal submission of the form
  e.preventDefault();
    let newUrl = `${url}${searchForm.value}`;
    console.log(newUrl);

  fetch(newUrl)
    .then(function(response) {
      if (response.status !== 200) {
            console.log(response.status);
            return;
          }
          response.json().then(function(data) {
    // Declare variable for recipe template container
            let recipeContainer = ''
    // Iterate over data set and manipulate each data result
            data.results.forEach(function(result) {
    // Check if result.thumbnail contains an img url and enter placeholder if not
              if (result.thumbnail === '') {
                result.thumbnail = 'http://via.placeholder.com/165x80'
              };
    // Define template to use with data and enter into discrete container
              let template =
              `<section>
                <a href='${result.href}'><p>${result.title}</p></a>
                <img src='${result.thumbnail}'>
               </section>
              `
              ;
    // For each data template, insert via concatenation to recipeContainer
              recipeContainer += template;
            });
    // After each for each method executes insert template container into HTML.
            main.innerHTML = recipeContainer;

      });
    })
    .catch(function(err) {
      console.log("Fetch Error :-S", err);
    });
});
