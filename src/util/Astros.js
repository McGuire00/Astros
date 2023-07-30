const Astros = {
  getPitches() {
    return fetch(
      "https://raw.githubusercontent.com/rd-astros/hiring-resources/master/pitches.json"
    )
      .then((response) => {
        return response.json();
      })
      .then((jsonResponse) => {
        return jsonResponse.queryResults.row;
      });
  },
};

export default Astros;
