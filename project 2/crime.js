var data = [{ 
    type: "pie", 
    values: [8,1567,1273,165,2223,2237,188.10706,15559], 
    labels: ["Offense", "Arson","Burglary","Homicide","Moter Vehicle Theft","Robbery","Sex Abuse","Theft F/Auto", "Theft/ Other"], 
    textinfo: "label+percent", 
    textposition: "outside", 
    automargin: true 
    }] 
    
    var layout = { 
    height: 400, 
    width: 400, 
    margin: {"t": 0, "b": 0, "l": 0, "r": 0}, 
    showlegend: false 
    } 
    
    Plotly.newPlot('myDiv', data, layout)