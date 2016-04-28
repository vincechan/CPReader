/**
 * Define a map that maps 
 *   the languages supported in codeproject http://www.codeproject.com/info/Submit.aspx
 * to 
 *   the languages supported in prismjs http://prismjs.com/#languages-list 
 */
var languages = {
    "asm"      : "clike",
    "aspnet"   : "aspnet",
    "bat"      : "bash",
    "cs"       : "csharp",
    "c++"      : "cpp",
    "css"      : "css",
    "dolphi"   : "clike",
    "F#"       : "fsharp",
    "html"     : "markup",
    "java"     : "java",
    "jscript"  : "javascript",
    "mc++"     : "cpp",
    "midl"     : "clike",
    "msil"     : "clike",
    "php"      : "php",
    "sql"      : "sql",
    "vbnet"    : "basic",
    "vb.net"   : "basic",
    "vbscript" : "basic",
    "xml"      : "markup",
};

/**
 * Given the language name used in codeproject, find the language name used in prismjs
*/
function getPrismLanguageName(name) {
    if (languages[name] != undefined) {
        return languages[name];
    }
    
    // use clike as the default language
    return "clike";
}

function applyBootstrapTheme() {
    var source = chrome.extension.getBackgroundPage().getUserBootswatchTheme().cssCdn;
    $('head').append('<link href="' + source + '" rel="stylesheet" type="text/css" />');
}

function applyPrismjsTheme() {
    var source = chrome.extension.getBackgroundPage().getUserPrismTheme().cssCdn;    
    $('head').append('<link href="' + source + '" rel="stylesheet" type="text/css" />');    
}

document.addEventListener('DOMContentLoaded', function () {
    applyBootstrapTheme();
    applyPrismjsTheme();
    
    $("#loading-container").show();
    
    var articleUrl = chrome.extension.getBackgroundPage().articleUrl;
    
    $("#loading-container").hide();
    $("#article-container").show();

    $( "#articledata" ).load( articleUrl + " div.article", function() {     
        // prepend http://www.codeproject.com to any img tags that uses relative paths (src attribute starts with slash /). 
        $('img[src^="/"]').each(function(index, element) {
            var newSrc = "http://www.codeproject.com" + $(this).attr("src");
            $(this).attr("src", newSrc);
        });

        // prepend http://www.codeproject.com to any a tags that uses relative paths (href attribute starts with slash /). 
        $('a[href^="/"]').each(function(index, element) {
            var newHref = "http://www.codeproject.com" + $(this).attr("href");
            $(this).attr("href", newHref);
        });        
        
        $("#article-title").html($("div.title").first().text());
        $("#article-summary").html($("div.summary").first().text());
        $("#article-author").html($("span.author").first().text());
        $("#article-date").html($("span.date").first().text());
        $("#article-rating").html($("span.rating").first().text() == "" ? "0.00" : $("span.rating").first().text());
        $("#article-count").html($("span.count").first().text() == "" ? "0" : $("span.count").first().text());
        $("#article-body").html($("#contentdiv").html());
        
        $("pre").each(function(index, element){
            var cpLanguageName = $(this).attr("lang");
            var prismLanguageName = getPrismLanguageName(cpLanguageName);
            $(this).wrapInner("<code class='language-" + prismLanguageName + "'></code>");
        });
        Prism.highlightAll();
        
        $("#loading-container").hide();
        $("#article-container").show();
    });   
});
