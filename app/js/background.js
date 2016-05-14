/**
 * define available bootswatch themes.
 */
var bootswatchThemes =
{
  "version": "3.3.6",
  "themes": [
    {
      "name": "Cerulean",
      "description": "A calm blue sky",
      "cssCdn": "https://maxcdn.bootstrapcdn.com/bootswatch/latest/cerulean/bootstrap.min.css"
    },
    {
      "name": "Cosmo",
      "description": "An ode to Metro",
      "cssCdn": "https://maxcdn.bootstrapcdn.com/bootswatch/latest/cosmo/bootstrap.min.css"
    },
    {
      "name": "Cyborg",
      "description": "Jet black and electric blue",
      "cssCdn": "https://maxcdn.bootstrapcdn.com/bootswatch/latest/cyborg/bootstrap.min.css"
    },
    {
      "name": "Darkly",
      "description": "Flatly in night mode",
      "cssCdn": "https://maxcdn.bootstrapcdn.com/bootswatch/latest/darkly/bootstrap.min.css"
    },
    {
      "name": "Flatly",
      "description": "Flat and modern",
      "cssCdn": "https://maxcdn.bootstrapcdn.com/bootswatch/latest/flatly/bootstrap.min.css"
    },
    {
      "name": "Journal",
      "description": "Crisp like a new sheet of paper",
      "cssCdn": "https://maxcdn.bootstrapcdn.com/bootswatch/latest/journal/bootstrap.min.css"
    },
    {
      "name": "Lumen",
      "description": "Light and shadow",
      "cssCdn": "https://maxcdn.bootstrapcdn.com/bootswatch/latest/lumen/bootstrap.min.css"
    },
    {
      "name": "Paper",
      "description": "Material is the metaphor",
      "cssCdn": "https://maxcdn.bootstrapcdn.com/bootswatch/latest/paper/bootstrap.min.css"
    },
    {
      "name": "Readable",
      "description": "Optimized for legibility",
      "cssCdn": "https://maxcdn.bootstrapcdn.com/bootswatch/latest/readable/bootstrap.min.css"
    },
    {
      "name": "Sandstone",
      "description": "A touch of warmth",
      "cssCdn": "https://maxcdn.bootstrapcdn.com/bootswatch/latest/sandstone/bootstrap.min.css"
    },
    {
      "name": "Simplex",
      "description": "Mini and minimalist",
      "cssCdn": "https://maxcdn.bootstrapcdn.com/bootswatch/latest/simplex/bootstrap.min.css"
    },
    {
      "name": "Slate",
      "description": "Shades of gunmetal gray",
      "cssCdn": "https://maxcdn.bootstrapcdn.com/bootswatch/latest/slate/bootstrap.min.css"
    },
    {
      "name": "Spacelab",
      "description": "Silvery and sleek",
      "cssCdn": "https://maxcdn.bootstrapcdn.com/bootswatch/latest/spacelab/bootstrap.min.css"
    },
    {
      "name": "Superhero",
      "description": "The brave and the blue",
      "cssCdn": "https://maxcdn.bootstrapcdn.com/bootswatch/latest/superhero/bootstrap.min.css"
    },
    {
      "name": "United",
      "description": "Ubuntu orange and unique font",
      "cssCdn": "https://maxcdn.bootstrapcdn.com/bootswatch/latest/united/bootstrap.min.css"
    },
    {
      "name": "Yeti",
      "description": "A friendly foundation",
      "cssCdn": "https://maxcdn.bootstrapcdn.com/bootswatch/latest/yeti/bootstrap.min.css"
    }
  ]
}

/**
 * define available prism themes
 */
var prismThemes = 
{
    "themes" : [
        {
            "name" : "Default",
            "cssCdn" : "https://cdnjs.cloudflare.com/ajax/libs/prism/1.4.1/themes/prism.min.css"
        },
        {
            "name" : "Coy",
            "cssCdn" : "https://cdnjs.cloudflare.com/ajax/libs/prism/1.4.1/themes/prism-coy.min.css"
        },
        {
            "name" : "Dark",
            "cssCdn" : "https://cdnjs.cloudflare.com/ajax/libs/prism/1.4.1/themes/prism-dark.min.css"
        },
        {           
            "name" : "Funky",
            "cssCdn" : "https://cdnjs.cloudflare.com/ajax/libs/prism/1.4.1/themes/prism-funky.min.css"
        },
        {           
            "name" : "Okaidia",
            "cssCdn" : "https://cdnjs.cloudflare.com/ajax/libs/prism/1.4.1/themes/prism-okaidia.min.css"
        },
        {           
            "name" : "Solarizedlight",
            "cssCdn" : "https://cdnjs.cloudflare.com/ajax/libs/prism/1.4.1/themes/prism-solarizedlight.min.css"
        },
        {           
            "name" : "Tomorrow",
            "cssCdn" : "https://cdnjs.cloudflare.com/ajax/libs/prism/1.4.1/themes/prism-tomorrow.min.css"
        },
        {           
            "name" : "Twilight",
            "cssCdn" : "https://cdnjs.cloudflare.com/ajax/libs/prism/1.4.1/themes/prism-twilight.min.css"
        }                                
    ]
};

layouts = 
[
  {
    "name" : "sm",
    "description" : "Fixed - Small"
  },
  {
    "name" : "md",
    "description" : "Fixed - Medium"
  },
  {
    "name" : "lg",
    "description" : "Fixed - Large"
  },
  {
    "name" : "fluid",
    "description" : "Fluid"
  }
];

/**
 * shared variables
 */
var articleUrl = undefined

/**
 * get user's preferred bootswatch theme.
 */
function getUserBootswatchTheme() {
  var themeName = getUserBootswatchThemeName();
  for (var i = 0; i < bootswatchThemes.themes.length; i++) {
      if (bootswatchThemes.themes[i].name == themeName) {
        return bootswatchThemes.themes[i];
      }
  }
  console.log("no user bootswatch theme is found");
}

/**
 * get the name of user's preferred bootswatch theme.
 */
function getUserBootswatchThemeName() {
  var name = localStorage["UserBootstrapThemeName"];
  if (name == undefined) {
    name = "Readable";
  }
  return name;  
}

/**
 * get user's preferred layout
 */
function getUserLayout() {
  var layoutName = getUserLayoutName();
  for (var i=0; i < layouts.length; i++){
    if (layout[i].name == layoutName) {
      return layouts[i];
    }
  }
  console.log("no user layout is found");
}

/**
 * get the name of user's preferred layout
 */
function getUserLayoutName() {
  var name = localStorage["UserLayoutName"];
  if (name == undefined) {
    name = "md";
  }
  return name;
}

/**
 * get user's preferred prism theme
 */
function getUserPrismThemeName() {
  var name = localStorage["UserPrismThemeName"];
  if (name == undefined) {
    name = "Okaidia";
  }
  return name;  
}

/**
 * get the name of user's preferred prism theme.
 */
function getUserPrismTheme() {
  var themeName = getUserPrismThemeName();
  for (var i = 0; i < prismThemes.themes.length; i++) {
      if (prismThemes.themes[i].name == themeName) {
        return prismThemes.themes[i];
      }
  }
  console.log("no user prism theme is found");
}

/**
 * save user's preferred themes to local storage.
 */
function saveUserPreference(bootswatchThemeName, prismThemeName, layoutName) {
  localStorage["UserBootstrapThemeName"] = bootswatchThemeName;
  localStorage["UserPrismThemeName"] = prismThemeName;
  localStorage["UserLayoutName"] = layoutName;  
}

// When the extension is installed or upgraded ...
chrome.runtime.onInstalled.addListener(function () {
  // Replace all rules ...
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function () {
    // With a new rule ...
    chrome.declarativeContent.onPageChanged.addRules([
      {
        // That fires when a page's URL matches a codeproject article or tips url
        conditions: [
          new chrome.declarativeContent.PageStateMatcher({
             pageUrl: { urlMatches: 'codeproject.com/(Articles|Tips)' },
          })
        ],
        // And shows the extension's page action.
        actions: [new chrome.declarativeContent.ShowPageAction()]
      }
    ]);
  });
});


