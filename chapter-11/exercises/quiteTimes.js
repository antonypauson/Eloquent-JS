async function activityTable(day) {
  let table = [];
  for (let i = 0; i < 24; i++) table[i] = 0;  //rep 24 hours

  let logFileList = await textFile("camera_logs.txt"); //read first file
  
  for (let filename of logFileList.split("\n")) { //loop through that 
    let log = await textFile(filename); //read each of that
    
    for (let timestamp of log.split("\n")) { //loop through that
      
      let date = new Date(Number(timestamp));//check if the day is matching our day
      if (date.getDay() == day) {
        table[date.getHours()]++;  //get hours and increment it
      }
    }
  }
  return table; 

}
activityTable(1)
  .then(table => console.log(activityGraph(table)));