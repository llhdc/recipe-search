let url = 'https://crossorigin.me/http://www.recipepuppy.com/api?q=search-term'

fetch(url).then(
  function(response) {
    if (response.status !== 200) {
          console.log(response.status);
          return;
    }
    response.json().then(function(data) {
      let searchInput = document.getElementById('search').value;

      document.querySelector('form.search').addEventListener('submit', function(dontSubmit) {
        //prevent the normal submission of the form
        dontSubmit.preventDefault();
        console.log(searchInput);
      });
    });
  }
)
.catch(function(err) {
  console.log("Fetch Error :-S", err);
});
