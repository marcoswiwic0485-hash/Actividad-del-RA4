const tortas = document.getElementById("tortas");
const cupcakes = document.getElementById("cupcakes");
const galletas = document.getElementById("galletas");
const brownies = document.getElementById("brownies");

fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=Dessert")
.then(res => res.json())
.then(data => {

    data.meals.slice(0,4).forEach(postre => {

        tortas.innerHTML += `
        <article class="producto">
            <img src="${postre.strMealThumb}">
            <h3>${postre.strMeal}</h3>
            <p class="precio">$25</p>
        </article>
        `;

    });

    data.meals.slice(4,8).forEach(postre => {

        cupcakes.innerHTML += `
        <article class="producto">
            <img src="${postre.strMealThumb}">
            <h3>${postre.strMeal}</h3>
            <p class="precio">$15</p>
        </article>
        `;

    });

    data.meals.slice(8,12).forEach(postre => {

        galletas.innerHTML += `
        <article class="producto">
            <img src="${postre.strMealThumb}">
            <h3>${postre.strMeal}</h3>
            <p class="precio">$10</p>
        </article>
        `;

    });

    data.meals.slice(12,16).forEach(postre => {

        brownies.innerHTML += `
        <article class="producto">
            <img src="${postre.strMealThumb}">
            <h3>${postre.strMeal}</h3>
            <p class="precio">$18</p>
        </article>
        `;

    });

});