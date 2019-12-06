(function initWidget() {
        var options = {
            layout: {
                theme: "momondo"
                , width: "930"
                , height: "180"
            },
            airports: {
                origin: "",
                destination: "TLS"
            },
            settings: {
                openNewWindow: true,
                domain: "www.momondo.com",
                source: ""
            }
        };
        var settings = options.settings;
        var airports = options.airports;
        var layout = options.layout;
        var encoding = null;
        onWidgetLoad = function (f)
        {
            f("mmd-flight-widget", {
                searchForms: [{
                    type: 1,
                    searchURL: "http://[DOMAIN][PATH][QUERY]" + (!!settings.source ? "&source=" + settings.source : ""),
                    openNewWindow: settings.openNewWindow,
                    currency: settings.currency,
                    segments: [
                        {
                            airports: [
                                { code: airports.origin || "" },
                                { code: airports.destination || "" }
                            ]
                        },
                        {
                            airports: [
                                { code: airports.destination || "" },
                                { code: airports.origin || "" }]
                        },
                    ]
                }]
            });
        };
        var scr = document.createElement("script");
        scr["src"] = "http://" + settings.domain + "/widget/searchform/v1.0/?dimensions=" + (layout.width && layout.height ? (layout.width + "x" + layout.height) : "generic") + "&types=1&callback=onWidgetLoad&theme=" + layout.theme;
        var tag = document.getElementsByTagName("head");
        if (tag && tag.length)
        {
            tag = tag[0];
            tag.appendChild(scr);
        }
    })();
