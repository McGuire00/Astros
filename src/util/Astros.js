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
  getUniquePitchers(pitchData) {
    let pitchers = [];

    for (let i = 0; i < pitchData.length; i++) {
      let pitcher = pitchData[i];

      if (!pitchers.map((player) => player.id).includes(pitcher.pitcher_id)) {
        pitchers.push({
          id: pitcher.pitcher_id,
          name: pitcher.pitcher_name,
          throws: pitcher.pitcher_throws,
          team: pitcher.fielding_team_name,
          team_code: pitcher.fielding_team_code,
        });
      }
    }
    return pitchers;
  },
};

export default Astros;
