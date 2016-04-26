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
    var theme = "journal";
    var source = "https://maxcdn.bootstrapcdn.com/bootswatch/3.3.6/" + theme + "/bootstrap.min.css";
    $('head').append('<link href="' + source + '" rel="stylesheet" type="text/css" />');
}

function applyPrismjsTheme() {
    var theme = "coy";
    var source = "https://cdnjs.cloudflare.com/ajax/libs/prism/1.4.1/themes/prism-" + theme + ".css";
    $('head').append('<link href="' + source + '" rel="stylesheet" type="text/css" />');    
}

document.addEventListener('DOMContentLoaded', function () {
    applyBootstrapTheme();
    applyPrismjsTheme();
    
    $("#loading-container").show();
    
    var bg = chrome.extension.getBackgroundPage();
    var articleUrl = bg.contentUrl;
    
    $( "#articledata" ).load( articleUrl + " div.article", function() {
        
        // prepend http://www.codeproject.com to any img tags that uses relative paths (src attribute starts with slash /). 
        $('img[src^="/"]').each(function(index, element) {
            var newSrc = "http://www.codeproject.com" + $(this).attr("src");
            $(this).attr("src", newSrc);
        });
        
        $("#article-title").html($("div.title").first().text());
        $("#article-summary").html($("div.summary").first().text());
        $("#article-author").html($("span.author").first().text());
        $("#article-date").html($("span.date").first().text());
        $("#article-rating").html($("span.rating").first().text());
        $("#article-count").html($("span.count").first().text());
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
    
    Prism.highlightAll();    
});