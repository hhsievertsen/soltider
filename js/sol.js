var create_site = function(duration_set, latitude, longitude, offset) {
        // Small function to adjust for timezone difference
        var adjust_time = function(hour, offset) {
            // Time zones
            const goaltz = moment().tz(offset),
                localtz = moment();
            // Difference betwene location and current time zone in hours
            var difference = (goaltz.utcOffset() / 60) - (localtz.utcOffset() / 60);
            // Return adjusted hour
            var adjusted = hour + difference;
            if (adjusted > 24) {
                return adjusted - 24
            } else if (adjusted < 0) {
                return 24 + adjusted
            } else {
                return adjusted
            }
        }

        // Month labels
        const monthNames = ["Jan", "Feb", "Mar", "Apr", "Maj", "Jun",
            "Jul", "Aug", "Sep", "Okt", "Nov", "Dec"
        ];
        // Month labels
        const monthNamesFull = ["Januar", "Februar", "Marts", "April", "Maj", "Juni",
            "Juli", "August", "September", "Oktober", "November", "December"
        ];

        // Function to create minutes
        var minf = function(min) {
            if (min < 10) {
                return "0" + String(min)
            } else {
                return String(min)
            }
        }

        // Create a function that returns a an array of sunhours for 'days' before and after today
        var getDurationArray = function(days) {
                var arr_duration = new Array(),
                    arr_date = new Array(),
                    dt = new Date();
                utc = new Date(dt.getTime());
                // starting point
                utc.setDate(utc.getDate() - days);
                // loop
                i = 0
                while (i <= days * 2) {
                    // get duration of the day
                    t = SunCalc.getTimes(utc, longitude, latitude);
                    var d = adjust_time(t.sunset.getHours(), offset) * 60 + t.sunset.getMinutes() - (adjust_time(t.sunrise.getHours(), offset) * 60 + t.sunrise.getMinutes());
                    // store duration in array
                    if (isNaN(adjust_time(t.sunset.getHours(), offset)) & utc.getMonth() > 3 & utc.getMonth() < 10) {
                        // Not available (sun not setting)
                        var duration_to_store = 24;
                    } else if (isNaN(adjust_time(t.sunset.getHours(), offset))) {
                        // Not available (sun not rising)
                        var duration_to_store = 0;
                    } else if (0 <= adjust_time(t.sunset.getHours(), offset) & adjust_time(t.sunset.getHours(), offset) < 3) {
                        // After midnight
                        var duration = 24 - (adjust_time(t.sunrise.getHours(), offset) * 60 + t.sunrise.getMinutes() -
                            (adjust_time(t.sunset.getHours(), offset) * 60 + t.sunset.getMinutes())) / 60;
                        var duration_to_store = duration;
                    } else {
                        // "Normal"
                        var duration_to_store = d / 60;

                    }
                    // This is an ad hoc solution that should be improved
                    // Looks like some countries change to vinter and summer timer in the middle of the day
                    if (i > 0 & Math.abs(lag - duration_to_store) > 0.75 & !isNaN(t.sunset.getHours()) & lag > 2 & lag < 20) {
                        duration_to_store = lag
                    }
                    // Store in array
                    arr_duration.push(duration_to_store);
                    // store x-axis labels in array
                    if (i == 15 | i == ((days * 2) - 30)) {
                        // First and last
                        arr_date.push(String(monthNames[utc.getMonth()]) + " " + String(utc.getFullYear()));
                    } else if (i == days) {
                        // Today
                        arr_date.push(String(utc.getDate()) + ". " + String(monthNames[utc.getMonth()]) + " " + String(utc.getFullYear()));
                    } else {
                        arr_date.push(" ");
                    }
                    // Lagged value
                    var lag = duration_to_store;
                    // add value to date
                    utc.setDate(utc.getDate() + 1);
                    i = i + 1
                }
                // max and min
                var min_dur = Math.min.apply(Math, arr_duration.map(x => x * 60)),
                    max_dur = Math.max.apply(Math, arr_duration.map(x => x * 60));
                return [arr_date, arr_duration, min_dur, max_dur];

            }
            // Today's date
        const today = moment().tz(offset);

        // Today as string for chart
        utc = new Date();
        today_as_string = (String(utc.getDate()) + ". " + String(monthNames[utc.getMonth()]) + " " + String(utc.getFullYear()));


        // Get data using function
        var dataarray = getDurationArray(duration_set);
        var yvals = dataarray[1]
        var xvals = dataarray[0]
            // Identify chart element in html document
        var mychartelement = document.getElementById("myChart");
        // Identify chart element in html document
        var myChart = new Chart(mychartelement, {
            type: 'line',
            data: {
                labels: xvals,
                datasets: [{
                    data: yvals,
                    borderColor: "#000000",
                    fill: false,
                    pointRadius: 0,
                }]
            },
            options: {
                tooltips: { enabled: false },
                hover: { mode: null },
                events: [],
                padding: {
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: 0
                },
                legend: { display: false },
                scales: {
                    xAxes: [{
                        gridLines: {
                            display: false,
                            drawBorder: false
                        },
                        ticks: {
                            autoSkip: false,
                            maxRotation: 0,
                            minRotation: 0
                        }

                    }],
                    yAxes: [{
                        gridLines: {
                            display: false,
                            drawBorder: false
                        },
                        ticks: {
                            max: 24,
                            min: 0
                        },
                        scaleLabel: {
                            display: true,
                            labelString: 'Dagens længde (timer)'
                        }
                    }]
                },
                annotation: {
                    annotations: [{
                        type: "line",
                        mode: "vertical",
                        scaleID: "x-axis-0",
                        value: today_as_string,
                        borderColor: "#606060",
                        label: {
                            backgroundColor: "#FFFFFF",
                            fontFamily: "Lucida Sans Unicode",
                            fontColor: "#000000",
                            fontSize: 14,
                            yAdjust: 0,
                            fontStyle: "normal",
                            content: "I dag",
                            enabled: true,
                            position: "top",
                            yPadding: 0,
                        }
                    }]
                }
            }


        });

        // Use SunCalc to get sunset etc, 
        times = SunCalc.getTimes(today, longitude, latitude);
        const goaltz = moment().tz(offset),
            localtz = moment(),
            dif = localtz.hour() - goaltz.hour();
        // Sunrise text message
        var sunriseStr = "Solen står op klokken " + adjust_time(times.sunrise.getHours(), offset) + ':' + minf(times.sunrise.getMinutes()) + ".";
        // Sunset text message
        a = times.sunset.getHours();
        var sunsetStr = "Solen går ned klokken " + adjust_time(times.sunset.getHours(), offset) + ':' + minf(times.sunset.getMinutes()) + ".";
        // Duration text message
        // Check wheter extremes
        if (isNaN(times.sunset.getHours()) & utc.getMonth() > 3 & utc.getMonth() < 10) {
            var laengde_timer = 24,
                laengde_minutter = 0;
        } else if (isNaN(times.sunset.getHours())) {
            var laengde_timer = 0,
                laengde_minutter = 0;
        } else {
            var laengde_timer = ~~((adjust_time(times.sunset.getHours(), offset) * 60 + times.sunset.getMinutes() - (adjust_time(times.sunrise.getHours(), offset) * 60 + times.sunrise.getMinutes())) / 60),
                laengde_minutter = (adjust_time(times.sunset.getHours(), offset) * 60 + times.sunset.getMinutes() - (adjust_time(times.sunrise.getHours(), offset) * 60 + times.sunrise.getMinutes())) % 60;
        }
        var laengde = "Dagens længde er " + laengde_timer + " timer og " + laengde_minutter + " minutter.";
        // Getting longer text message
        // Duration today in minutes
        dur_today = adjust_time(times.sunset.getHours(), offset) * 60 + times.sunset.getMinutes() - (adjust_time(times.sunrise.getHours(), offset) * 60 + times.sunrise.getMinutes());
        // Duration yesterday in minutes
        var text_update = function() {
            var dataarray_full = getDurationArray(185);
            const yesterday = new Date(today)
            yesterday.setDate(yesterday.getDate() - 1)
            var yesterdaysssun = SunCalc.getTimes(yesterday, longitude, latitude);
            dur_yesterday = adjust_time(yesterdaysssun.sunset.getHours(), offset) * 60 + yesterdaysssun.sunset.getMinutes() - (adjust_time(yesterdaysssun.sunrise.getHours(), offset) * 60 + yesterdaysssun.sunrise.getMinutes());
            // compare
            if (isNaN(times.sunset.getHours()) & utc.getMonth() > 3 & utc.getMonth() < 10) {
                var tiltag = "Dagen er tiltaget med 24 timer.";
            } else if (isNaN(times.sunset.getHours())) {
                var tiltag = "Dagen er aftaget  med 24 timer.";
            } else if (dur_today >= dur_yesterday) {
                var stigende = "Dagen er " + ~~(dur_today - dur_yesterday) + " minutter længere end i går."
                var dif = dur_today - dataarray_full[2],
                    dif_timer = ~~(dif / 60),
                    dif_minutter = ~~(dif % 60);
                if (dif_timer > 1) {
                    var tiltag = "Dagen er tiltaget med " + dif_timer + " timer og " + dif_minutter + " minutter."
                } else if (dif_timer == 1) {
                    var tiltag = "Dagen er tiltaget med " + dif_timer + " time og " + dif_minutter + " minutter."
                } else {
                    var tiltag = "Dagen er tiltaget med " + dif_minutter + " minutter.";
                }
            } else {
                var stigende = "Dagen er aftagende";
                var dif = dataarray_full[3] - dur_today,
                    dif_timer = ~~(dif / 60),
                    dif_minutter = ~~(dif % 60);
                if (dif_timer > 1) {
                    var tiltag = "Dagen er aftaget med " + dif_timer + " timer og " + dif_minutter + " minutter."
                } else if (dif_timer == 1) {
                    var tiltag = "Dagen er aftaget med " + dif_timer + " time og " + dif_minutter + " minutter."
                } else {
                    var tiltag = "Dagen er aftaget med " + dif_minutter + " minutter."
                }
            }
            return [stigende, tiltag]
        }

        // Insert text messages
        document.getElementById("text1").innerHTML = sunriseStr;
        document.getElementById("text2").innerHTML = sunsetStr;
        document.getElementById("text3").innerHTML = laengde;
        document.getElementById("text4").innerHTML = text_update()[1];
    }
    // Create site
var duration = 182,
    latitude = 9.592981,
    longitude = 54.944029;
offset = "Europe/Copenhagen";
window.onload = create_site(duration, latitude, longitude, offset);