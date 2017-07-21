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
            console.log(data);
            let recipeContainer = ''
            data.results.forEach(function(result) {
              if (result.thumbnail === '') {
                result.img = ''
              };
              let template =
              `<section>
                <a href='${result.href}'><p>${result.title}</p></a>
                <img src='${result.thumbnail}'>
               </section>
              `
              ;
              recipeContainer += template;
              console.log(recipeContainer);
            });
            main.innerHTML = recipeContainer;

      });
    })
    .catch(function(err) {
      console.log("Fetch Error :-S", err);
    });
});
