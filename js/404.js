$(document).ready(function () {
    var createIssueLink = $('.create-issue');
    var href = createIssueLink.attr('href');

    var titleIndex = href.indexOf('&title=');
    if (titleIndex > 0) {
        href = href.substr(0, titleIndex) + "&title=" + window.location.pathname + "%20-%20can%20not%20be%20found";
    } else {
        href = href + "&title=" + window.location.pathname + "%20-%20can%20not%20be%20found";
    }
    createIssueLink.attr('href', href);
});
