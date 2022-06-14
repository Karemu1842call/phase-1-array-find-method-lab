const record = [
    { year: "2016", result: "W"},
    { year: "2017", result: "L"},
    { year: "2019", result: "L"},
    { year: "2020", result: "W"},
  ]
superbowlWin = (record) => {
    const result = record.find( record => record.result === "W" );
    return !!result ? result.year : undefined;
  }
