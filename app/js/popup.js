document.addEventListener('DOMContentLoaded', function () {
    createBootswatchSelect();
    createPrismSelect();
    createLayoutSelect();
    
    document.getElementById("read-button").addEventListener("click", function(){
        chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
            chrome.extension.getBackgroundPage().articleUrl = tabs[0].url;
            
            var bootswatchSelectList = document.getElementById("bootswatch-theme-select");
            var bootswatchThemeName = bootswatchSelectList.options[bootswatchSelectList.selectedIndex].value;
            var prismSelectList = document.getElementById("prism-theme-select");
            var prismThemeName = prismSelectList.options[prismSelectList.selectedIndex].value;
            var layoutSelectList = document.getElementById("layout-select");
            var layoutName = layoutSelectList.options[layoutSelectList.selectedIndex].value;
            chrome.extension.getBackgroundPage().saveUserPreference(
                bootswatchThemeName, prismThemeName, layoutName
            );
            
            // show the article page in a new tab
            chrome.tabs.create({ url: "render.html" });
        });        
    });
});

function createBootswatchSelect() {
    var themes = chrome.extension.getBackgroundPage().bootswatchThemes.themes;
    console.log(themes);
    var userThemeName = chrome.extension.getBackgroundPage().getUserBootswatchThemeName();
    var container = document.getElementById("bootswatch-theme-container");

    //Create and append select list
    var selectList = document.createElement("select");
    selectList.id = "bootswatch-theme-select";
    selectList.className = "form-control";
    container.appendChild(selectList);

    //Create and append the options
    for (var i = 0; i < themes.length; i++) {
        var theme = themes[i];
        var option = document.createElement("option");
        option.value = theme.name;
        option.text = theme.name + " | " + theme.description;        
        if (theme.name == userThemeName) {
            option.selected = true;
        }
        selectList.appendChild(option);        
    }
}

function createLayoutSelect() {
    var layouts = chrome.extension.getBackgroundPage().layouts;
    var userLayoutName = chrome.extension.getBackgroundPage().getUserLayoutName();
    var container = document.getElementById("layout-container");
    
    //Create and append select list
    var selectList = document.createElement("select");
    selectList.id = "layout-select";
    selectList.className = "form-control";
    container.appendChild(selectList);
    
     //Create and append the options
    for (var i = 0; i < layouts.length; i++) {
        var layout = layouts[i];
        var option = document.createElement("option");
        option.value = layout.name;
        option.text = layout.description;
        if (layout.name == userLayoutName) {
            option.selected = true;
        }        
        selectList.appendChild(option);
    }
}

function createPrismSelect() {
    var themes = chrome.extension.getBackgroundPage().prismThemes.themes;
    var userThemeName = chrome.extension.getBackgroundPage().getUserPrismThemeName();
    var container = document.getElementById("prism-theme-container");

    //Create and append select list
    var selectList = document.createElement("select");
    selectList.id = "prism-theme-select";
    selectList.className = "form-control";
    container.appendChild(selectList);

    //Create and append the options
    for (var i = 0; i < themes.length; i++) {
        var theme = themes[i];
        var option = document.createElement("option");
        option.value = theme.name;
        option.text = theme.name;
        if (theme.name == userThemeName) {
            option.selected = true;
        }        
        selectList.appendChild(option);
    }    
}
