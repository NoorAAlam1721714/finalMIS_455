function searchFunction() {
    var meal = document.getElementById("title").value;
    var number = document.getElementById("number").value;
   
    if (!meal) {
      alert("Please enter a title");
      return;
    }
    if (!number) {
      alert("Please enter a Number");
      return;
    }
   
    let api = "https://www.themealdb.com/api/json/v1/1/search.php?s=" + meal;
   
    fetch(api)
      .then((response) => response.json())
      .then((data) => {
        var result = data.meals;
   
        if (!result) {
          alert("no meal in that name");
          return;
        }
   
        for (var i = 0; i < number; i++) {
          let productContainer = document.getElementById("products");
   
          let gridItem = document.createElement("div");
          gridItem.className = "col-md-4";
          productContainer.append(gridItem);
   
          let createCard = document.createElement("div");
          createCard.className = "card";
          gridItem.append(createCard);
   
          let createImg = document.createElement("img");
          createImg.className = "card-img-top";
          createImg.src = result[i].strMealThumb;
          createCard.appendChild(createImg);
   
          let createName = document.createElement("h3");
          createName.className = "card-title";
          createName.innerText = result[i].strMeal;
          createCard.appendChild(createName);
        }
   
        console.log(result);
      });
  }
  