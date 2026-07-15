fetch("data/leagues.json")
  .then(response => response.json())
  .then(data => {
    console.log("DSFA Data Loaded");
    console.log(data);
  })
  .catch(error => {
    console.error("Error loading league data:", error);
  });
