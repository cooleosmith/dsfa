const API_URL = "https://script.google.com/macros/s/AKfycbzoksSBIBVE5rY8x_tpjfC7L46L4xjPuJVsBvo3l3IGwFhCkQ0hg4fwvIjst1vnPjU/exec";


fetch(API_URL)
.then(response => response.json())
.then(data => {

    console.log("DSFA Live Data Loaded");
    console.log(data);


    const pyramid =
        document.getElementById("league-pyramid");


    if (pyramid) {

        pyramid.innerHTML = "";


        data.forEach(league => {

            pyramid.innerHTML += `

            <p>

            ${league.icon}
            <strong>${league.league_name}</strong>

            <br>

            ${league.teams} Teams

            </p>

            `;

        });

    }

})
.catch(error => {

    console.error(
        "Error loading DSFA data:",
        error
    );

});