document.querySelector('.glider-next').addEventListener('click', function() {
    var glider = Glider(document.querySelector('.glider'));
    if (glider.slide == 0) {
        var text = "Fiskbæk",
            latitude = 9.592981,
            longitude = 54.944029;
        offset = "Europe/Copenhagen";
        create_site(duration, latitude, longitude, offset);
    } else if (glider.slide == 1) {
        var text = "Guatemala City",
            latitude = -90.511920,
            longitude = 14.639605;
        offset = "America/Guatemala";
        create_site(duration, latitude, longitude, offset);
    } else if (glider.slide == 2) {
        var text = "Hong Kong",
            latitude = 114.167239,
            longitude = 22.307430;
        offset = "Asia/Hong_Kong";
        create_site(duration, latitude, longitude, offset);
    } else if (glider.slide == 3) {
        var text = "Husavik",
            latitude = -17.339001,
            longitude = 66.044201;
        offset = "Atlantic/Reykjavik";
        create_site(duration, latitude, longitude, offset);
    } else if (glider.slide == 4) {
        var text = "København",
            latitude = 12.569100,
            longitude = 55.689770;
        offset = "Europe/Copenhagen";
        create_site(duration, latitude, longitude, offset);
    } else if (glider.slide == 5) {
        var text = "London",
            latitude = -0.122487,
            longitude = 51.502383;
        offset = "Europe/London";
        create_site(duration, latitude, longitude, offset);
    } else if (glider.slide == 6) {
        var text = "Nairobi",
            latitude = 36.281700,
            longitude = -1.282433;
        offset = "Africa/Nairobi";
        create_site(duration, latitude, longitude, offset);
    } else if (glider.slide == 7) {
        var text = "New York",
            latitude = -74.018162,
            longitude = 40.774153;
        offset = "America/New_York";
        create_site(duration, latitude, longitude, offset);
    } else if (glider.slide == 8) {
        var text = "Odense",
            latitude = 10.397800,
            longitude = 55.417459;
        offset = "Europe/Copenhagen";
        create_site(duration, latitude, longitude, offset);
    } else if (glider.slide == 9) {
        var text = "San Francisco",
            latitude = -122.466446,
            longitude = 37.752188;
        offset = "America/Los_Angeles";
        create_site(duration, latitude, longitude, offset);
    } else if (glider.slide == 10) {
        var text = "Sydney",
            latitude = 151.104017,
            longitude = -33.88012,
            offset = "Australia/Sydney";
        create_site(duration, latitude, longitude, offset);
    } else if (glider.slide == 11) {
        var text = "Svanneke",
            latitude = 15.144171,
            longitude = 55.135885;
        offset = "Europe/Copenhagen";
        create_site(duration, latitude, longitude, offset);
    } else if (glider.slide == 12) {
        var text = "Tromsø",
            latitude = 18.960148,
            longitude = 69.657525;
        offset = "Europe/Oslo";
        create_site(duration, latitude, longitude, offset);
    } else {
        var text = "Tromsø",
            latitude = 18.960148,
            longitude = 69.657525;
        offset = "Europe/Oslo";
        create_site(duration, latitude, longitude, offset);
    }
    console.log(text)
});
document.querySelector('.glider-prev').addEventListener('click', function() {
    var glider = Glider(document.querySelector('.glider'));
    if (glider.slide == 1) {
        var text = "Aarhus",
            latitude = 10.213216,
            longitude = 56.158205;
        offset = "Europe/Copenhagen";
        create_site(duration, latitude, longitude, offset);
    } else if (glider.slide == 2) {
        var text = "Fiskbæk",
            latitude = 9.592981,
            longitude = 54.944029;
        offset = "Europe/Copenhagen";
        create_site(duration, latitude, longitude, offset);
    } else if (glider.slide == 3) {
        var text = "Guatemala City",
            latitude = -90.511920,
            longitude = 14.639605;
        offset = "America/Guatemala";
        create_site(duration, latitude, longitude, offset);
    } else if (glider.slide == 4) {
        var text = "Hong Kong",
            latitude = 114.167239,
            longitude = 22.307430;
        offset = "Asia/Hong_Kong";
        create_site(duration, latitude, longitude, offset);
    } else if (glider.slide == 5) {
        var text = "Husavik",
            latitude = -17.339001,
            longitude = 66.044201;
        offset = "Atlantic/Reykjavik";
        create_site(duration, latitude, longitude, offset);
    } else if (glider.slide == 6) {
        var text = "København",
            latitude = 12.569100,
            longitude = 55.689770;
        offset = "Europe/Copenhagen";
        create_site(duration, latitude, longitude, offset);
    } else if (glider.slide == 7) {
        var text = "London",
            latitude = -0.122487,
            longitude = 51.502383;
        offset = "Europe/London";
        create_site(duration, latitude, longitude, offset);
    } else if (glider.slide == 8) {
        var text = "Nairobi",
            latitude = 36.281700,
            longitude = -1.282433;
        offset = "Africa/Nairobi";
        create_site(duration, latitude, longitude, offset);
    } else if (glider.slide == 9) {
        var text = "New York",
            latitude = -74.018162,
            longitude = 40.774153;
        offset = "America/New_York";
        create_site(duration, latitude, longitude, offset);
    } else if (glider.slide == 10) {
        var text = "Odense",
            latitude = 10.397800,
            longitude = 55.417459;
        offset = "Europe/Copenhagen";
        create_site(duration, latitude, longitude, offset);
    } else if (glider.slide == 11) {
        var text = "San Francisco",
            latitude = -122.466446,
            longitude = 37.752188;
        offset = "America/Los_Angeles";
        create_site(duration, latitude, longitude, offset);
    } else if (glider.slide == 12) {
        var text = "Sydney",
            latitude = 151.104017,
            longitude = -33.88012,
            offset = "Australia/Sydney";
        create_site(duration, latitude, longitude, offset);
    } else if (glider.slide == 13) {
        var text = "Svanneke",
            latitude = 15.144171,
            longitude = 55.135885;
        offset = "Europe/Copenhagen";
        create_site(duration, latitude, longitude, offset);
    } else {
        var text = "Aarhus",
            latitude = 10.213216,
            longitude = 56.158205;
        offset = "Europe/Copenhagen";
        create_site(duration, latitude, longitude, offset);
    }
    console.log(text)
});