let url = 'https://crossorigin.me/http://www.recipepuppy.com/api?q='

fetch(url).then(
  function(response) {
    if (response.status !== 200) {
          console.log(response.status);
          return;
    }
    response.json().then(function(data) {
      let searchForm = document.getElementById('search');

      document.querySelector('form.search').addEventListener('submit', function(e) {
        //prevent the normal submission of the form
        e.preventDefault();
        console.log(searchForm.value);
      });
    });
  }
)
.catch(function(err) {
  console.log("Fetch Error :-S", err);
});
