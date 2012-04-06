(function() {
    "use strict";

    $(document).ready(function() {
        /**
         * Create a jQuery plugin which converts the regular old list of
         * concerts to an HTML formatted list.
         */
        (function($) {
            $.fn.render_concerts = function() {
                /** Matches "2010-01-03 Band at Venue in Place <br />". */
                var CONCERT_REGEX = /(\d{4}-\d{2}-\d{2})\s+(.*?)\s+at\s+(.*)\s+in\s+(.*)\s*<br\s*\/?>/g;
                var i, current_text, list_item, list_items, new_html;
                var replacement, ul;

                /** Register a Jaml template for a single concert listing. */
                Jaml.register("concert",  function(concert) {
                    li(p({cls: "hanging-indent"},
                         span({cls: "date"}, concert.date),
                         "I saw",
                         span({cls: "artist"}, concert.artist),
                         "at",
                         span({cls: "venue"}, concert.venue),
                         "in",
                         span({cls: "location"}, concert.location)
                        ));
                });

                /** The replacement function for the regular expression. */
                replacement = function(str, date, artist, venue, location) {
                    var fuzzy_date, concert, allstrings, key;
                    fuzzy_date = moment(date, "YYYY-MM-DD").fromNow();
                    concert = {date: fuzzy_date, artist: artist, venue: venue,
                               location: location}
                    /** Replace spaces with non-breaking spaces. */
                    for (key in concert) {
                        concert[key] = concert[key].replace(/\s/g, "&nbsp;");
                    }
                    return Jaml.render('concert', concert);
                };

                /** Replace each concert listing with a <li></li> element. */
                current_text = this.html();
                new_html = current_text.replace(CONCERT_REGEX, replacement);
                this.html(new_html);

                /** Create a new <ul></ul> element to contain all the items. */
                ul = $('<ul id="concerts-list"></ul>');
                this.append(ul);

                /** Move the list items to the list element. */
                list_items = this.children("li");
                list_items.detach();
                this.children("ul").append(list_items.get().reverse());
            };
        })(jQuery);

        $("#concerts-container").render_concerts();
    });
}());
