let url = 'https://crossorigin.me/http://www.recipepuppy.com/api?q=search-term'

fetch(url).then(
  function(response) {
    if (response.status !== 200) {
          console.log(response.status);
          return;
    }
    response.json().then(function(data) {


    });
  }
)
.catch(function(err) {
  console.log("Fetch Error :-S", err);
});
