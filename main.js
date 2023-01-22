function addToLog() {
    var exercise = document.getElementById("exercise").value;
    var duration = document.getElementById("duration").value;
    var date = document.getElementById("date").value;
    var log = document.getElementById("log");
    log.value += exercise + " - " + duration + " minutes - " + date + "\n";
  }

  function resetLog(){
    var log = document.getElementById("log");
    log.value = "";
  }
  