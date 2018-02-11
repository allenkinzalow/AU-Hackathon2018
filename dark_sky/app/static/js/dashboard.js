const KEY = 'e7a80ef23407023eacc675060733f2c4';

var Dashboard = {
    latitude: undefined,
    longitude: undefined,
    selectedDate: undefined,
    setup: function() {
        var params = location.href.split("/");
        this.latitude = params[params.length - 2];
        this.longitude = params[params.length - 1];
        this.selectedDate = (Date.now() / 1000).toFixed(0);
        this.DarkSky.retrieve(this.selectedDate, function() {
            Dashboard.UI.tabs.setup();
            Dashboard.UI.current.setup();
            Dashboard.UI.hourly.setup();
        }, true);
    },
    
    UI: {
            tabs: {
                setup: function() {
                    $('.tabs.dashboard-tabs').tabs({
                        onShow: function(tab) {
                            console.log(tab);
                        }
                    });
                },
            },
            current: {
                setup: function() {
                    Dashboard.Util.getCoordinateAddress(Dashboard.latitude, Dashboard.longitude, function(address) {
                        $("#current_city").html(address);
                        var data = Dashboard.DarkSky.date_map[Dashboard.selectedDate];
                        $('#current_temperature').html(data.currently.temperature.toFixed(0) + "°");
                        $('#current_wind').html(data.currently.windSpeed + " mph");
                        $('#current_precipitation').html((data.currently.precipProbability * 100).toFixed(0) + "%");
                        $('#current_humidity').html((data.currently.humidity * 100).toFixed(0) + "%");
                        $('.current-forecast').addClass(data.currently.icon);

                        var precipitationData = [];
                        data.minutely.data.forEach(function(minute) { precipitationData.push(minute.precipProbability * 100);});
                        var precipLabels = [];
                        for(var i = 0; i <= 59; i++)
                            precipLabels.push(i + "");
                        var myLineChart = new Chart($('#current_temperature_graph'), {
                            type: 'line',
                            data: {
                                labels: precipLabels,
                                datasets: [{
                                    label: "Precipitation",
                                    data: precipitationData,
                                    backgroundColor: "rgb(255, 99, 132)",
                                    borderColor: "rgb(255, 99, 132)",
                                    fill: false,
                                }],
                            },
                            options: {
                                responsive: true,
                                maintainAspectRatio: false,
                                scaleShowVerticalLines: false,
                                title: {
                                    display: true,
                                    text: "Minute by Minute Precipitation"
                                },
                                scales: {
                                    xAxes: [{
                                        display: true,
                                        ticks: {
                                            callback: function(dataLabel, index) {
                                                return index % 5 === 0 ? dataLabel : '';
                                            }
                                        },
                                        gridLines : {
                                            display : false
                                        }
                                    }],
                                    yAxes: [{
                                        display: true,
                                        ticks: {
                                            beginAtZero: true,
                                            steps: 11,
                                            stepValue: 10,
                                            max: 110,
                                            callback: function(dataLabel, index) {
                                                return index % 110 === 0 ? '' : dataLabel;
                                            }
                                        }
                                    }]
                                }
                            }
                        });
                    });
                }
            },
            hourly: {
                setup: function() {
<<<<<<< HEAD
                    
                }
            },
            flashback: {
                setup: function() {
                    var temperatureData = [];
                        data.hourly.data.forEach(function(hour) { temperatureData.push(hour.temperature);});
                        var tempLabels = [];
                        for(var i = 0; i <= 23; i++)
                        tempLabels.push(i + "");
                        var myLineChart = new Chart($('#flashback_temperature_graph'), {
                            type: 'line',
                            data: {
                                labels: tempLabels,
=======
                    Dashboard.Util.getCoordinateAddress(Dashboard.latitude, Dashboard.longitude, function(address) {
                        $("#hourly_city").html(address);
                        var data = Dashboard.DarkSky.date_map[Dashboard.selectedDate];
                        $('#hourly_temperature').html(data.currently.temperature.toFixed(0) + "°");
                        $('#hourly_wind').html(data.currently.windSpeed + " mph");
                        $('#hourly_precipitation').html(data.currently.precipProbability * 100 + "%");
                        $('#hourly_humidity').html(data.currently.humidity * 100 + "%");
                        $('.current-forecast').addClass(data.currently.icon);

                        var precipitationData = [];
                        data.hourly.data.forEach(function(hour) { precipitationData.push(hour.precipProbability * 100);});
                        var precipLabels = [];
                        for(var i = 0; i <= 48; i++)
                            precipLabels.push(i + "");
                        var myLineChart = new Chart($('#hourly_temp_chart'), {
                            type: 'line',
                            data: {
                                labels: precipLabels,
>>>>>>> 7d4380019d32c0d3a6a0eabf79ad7803cd9a3efa
                                datasets: [{
                                    label: "Precipitation",
                                    data: precipitationData,
                                    backgroundColor: "rgb(255, 99, 132)",
                                    borderColor: "rgb(255, 99, 132)",
                                    fill: false,
                                }],
                            },
                            options: {
                                responsive: true,
                                maintainAspectRatio: false,
                                scaleShowVerticalLines: false,
                                title: {
                                    display: true,
<<<<<<< HEAD
                                    text: "Temperature by Hour"
=======
                                    text: "Hour by Hour Precipitation"
>>>>>>> 7d4380019d32c0d3a6a0eabf79ad7803cd9a3efa
                                },
                                scales: {
                                    xAxes: [{
                                        display: true,
                                        ticks: {
<<<<<<< HEAD
                                            callback: function(dataLabel, index) {
                                                return index % 5 === 0 ? dataLabel : '';
=======
                                            beginAtZero: true,
                                            steps: 9,
                                            stepValue: 6,
                                            max: 48,
                                            callback: function(dataLabel, index) {
                                                return index % 6 === 0 ? dataLabel : '';
>>>>>>> 7d4380019d32c0d3a6a0eabf79ad7803cd9a3efa
                                            }
                                        },
                                        gridLines : {
                                            display : false
                                        }
                                    }],
                                    yAxes: [{
                                        display: true,
<<<<<<< HEAD
=======
                                        ticks: {
                                            beginAtZero: true,
                                            steps: 11,
                                            stepValue: 10,
                                            max: 110,
                                            callback: function(dataLabel, index) {
                                                return index % 110 === 0 ? '' : dataLabel;
                                            }
                                        }
>>>>>>> 7d4380019d32c0d3a6a0eabf79ad7803cd9a3efa
                                    }]
                                }
                            }
                        });
<<<<<<< HEAD
                }
            }
=======
                    });
                }
            },
>>>>>>> 7d4380019d32c0d3a6a0eabf79ad7803cd9a3efa
    },
    DarkSky: {
        date_map: {},
        retrieve: function(date, callback, hourly) {
            if(Dashboard.latitude == undefined || Dashboard.longitude == undefined)
                throw("Cannot retrieve from dark sky without location.");
            var self = this;
            if(self.date_map[date]) {
                callback(self.date_map[date]);
                return;
            }
            if(hourly) {
                console.log($.get("/forecast/" + Dashboard.latitude + "," + Dashboard.longitude + "?extend=hourly/", 
                    function(data) {
                    self.date_map[date] = JSON.parse(data);
                    callback(self.date_map[date]);
                }));
            }
            else {
                $.get("/forecast/" + Dashboard.latitude + "," + Dashboard.longitude + "," + date, function(data) {
                    self.date_map[date] = JSON.parse(data);
                    callback(self.date_map[date]);
                });
            }
        },
    },
    Util: {
        getCoordinateAddress: function(lat, lng, callback) {
            $.get("https://maps.googleapis.com/maps/api/geocode/json?latlng=" + lat + "," + lng + "&key=AIzaSyBuDdLpxnsEli8hXiaDTsaceYQ5DcaTaQM", function(data) {
                var address = data.results[0].address_components.reduce(function(str, component) {
                    if(!component.types.includes("administrative_area_level_2") 
                        && (component.types.includes('country') 
                        || component.types.includes('administrative_area_level_1') 
                        || component.types.includes('locality') 
                        || component.types.includes('postal_code')))
                        return str + component.long_name + (component.types.includes("locality") ? ", " : " ");
                    else
                        return str; 
                }, "");
                callback(address);
            });

        },
    },
};

$(document).ready(function() {
    Dashboard.setup();
});