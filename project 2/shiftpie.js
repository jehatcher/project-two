var data = [{ 
    type: "pie", 
    values: [11460, 14927, 7539], 
    labels: ["Day", "Evening", "Midnight"], 
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
    MYDIV = document.getElementById("myDiv")
    Plotly.newPlot(MYDIV, data, layout) 