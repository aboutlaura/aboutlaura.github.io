//doughnut
var ctxD = document.getElementById("doughnutChart").getContext('2d');
var myLineChart = new Chart(ctxD, {
    type: 'doughnut',
    data: {
        labels: ["Researcher", "Designer and Creative Writer", "Digital Marketer", "Problem solver - coder"],
        datasets: [
            {
                data: [30, 30, 20, 20],
                backgroundColor: ["#F7464A", "#46BFBD", "#FDB45C", "#949FB1", "#4D5360"],
                hoverBackgroundColor: ["#FF5A5E", "#5AD3D1", "#FFC870", "#A8B3C5", "#616774"]
            }
        ]
    },
    options: {
        responsive: true,
        title: {
            display: true,
//              fontsize: 14,
//              text: 'Me'
        },        
        legend: {
                display: true,
                position: 'top',
            labels:{
                fontSize:20,
                fontFamily:"Lato",
                fontColor: 'white',
                generateLabels: function(chart) {
                                var data = chart.data;
                                if (data.labels.length && data.datasets.length) {
                                    return data.labels.map(function(label, i) {
                                        var meta = chart.getDatasetMeta(0);
                                        var ds = data.datasets[0];
                                        var arc = meta.data[i];
                                        var custom = arc && arc.custom || {};
                                        var getValueAtIndexOrDefault = Chart.helpers.getValueAtIndexOrDefault;
                                        var arcOpts = chart.options.elements.arc;
                                        var fill = custom.backgroundColor ? custom.backgroundColor : getValueAtIndexOrDefault(ds.backgroundColor, i, arcOpts.backgroundColor);
                                        var stroke = custom.borderColor ? custom.borderColor : getValueAtIndexOrDefault(ds.borderColor, i, arcOpts.borderColor);
                                        var bw = custom.borderWidth ? custom.borderWidth : getValueAtIndexOrDefault(ds.borderWidth, i, arcOpts.borderWidth);
            
                                        // We get the value of the current label
                                        var value = chart.config.data.datasets[arc._datasetIndex].data[arc._index];
                            
                                        return {
                                                // Instead of `text: label,`
                                                // We add the value to the string
                                                text: label + " : " + value,
                                                fillStyle: fill,
                                                strokeStyle: stroke,
                                                lineWidth: bw,
                                                hidden: isNaN(ds.data[i]) || meta.data[i].hidden,
                                                index: i
                                            };
                                        });
                                    } else {
                                        return [];
                                    }
                                }
                             }
                }
            }
});
