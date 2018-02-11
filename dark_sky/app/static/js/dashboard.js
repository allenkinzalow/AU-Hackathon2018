var Dashboard = {
    latitude: undefined,
    longitude: undefined,
    setup: function() {
        var params = location.href.substring(location.href.lastIndexOf('/')).split("/");
        var longitude = params[0];
        var latitude = params[1];
        console.log(longitude + " " + latitude);
    },
    
    UI: {

    },
    DarkSky: {
        date_map: {},
        retrieve: function(date, callback) {
            if(Dashboard.latitude == undefined || Dashboard.longitude == undefined)
                throw("Cannot retrieve from dark sky without location.");
            var self = this;
            if(self.date_map[date])
                return;
            $.get("/forecast/" + Dashboard.latitude + "," + Dashboard.longitude + "," + date, function(data) {
                self.date_map[date] = data;
                callback();
            });
        },
    },
    Util: {
    },
};

$(document).ready(function() {
    Dashboard.setup();
});