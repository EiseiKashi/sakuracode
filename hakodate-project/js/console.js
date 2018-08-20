FontViewer = function(element, fontURL, fontList){
    var _self = this;
    var _element = element;
    var _currentIndex = 0;
    var _intervalId;
    var _callback;

    this.loadFonts = function(fontURL, fontList){
        _fontURL  = null == fontURL  ? _fontURL  : fontURL;
        _fontList = null == fontList ? _fontList : fontList;
        _loadFonts();
    }

    this.setFontList = function(fontList){
        _self.stop();
        _fontList = fontList;
        _currentIndex = 0;
        _self.play();
    }

    this.play = function(callback){
        _callback = callback;
        _loadFonts();
    }

    this.stop = function(){
        clearInterval(_intervalId);
    }

    var _loadFonts = function(){
        var style = document.createElement('style');
        style.textContent = '@import "' + _fontURL + '"';
        var length = document.styleSheets.length;
        _intervalId = setInterval(function() {
            if(document.styleSheets.length > length){
                _self.next();
                if(null != _callback){
                    _callback();
                }
                clearInterval(_intervalId);
            }
        },10);  
        document.getElementsByTagName("head")[0].appendChild(style);
    }
    
    var _fontURL  = "https://fonts.googleapis.com/css?family=Roboto|family=Barlow|Chathura|Cute+Font|Dosis|Electrolize|Iceberg|Iceland|Jura|Khand|Miriam+Libre|Offside|Quantico|Rajdhani|Rationale|Saira|Saira+Condensed|Saira+Extra+Condensed|Saira+Semi+Condensed|Share+Tech|Share+Tech+Mono|Tulpen+One|Unica+One|Wire+One";
        _fontURL  = null == fontURL ? _fontURL : fontURL;
    
    var _fontList = [  "'Dosis', sans-serif"
                     ,"'Rajdhani', sans-serif"
                     ,"'Khand', sans-serif"
                     ,"'Jura', sans-serif"
                     ,"'Barlow', sans-serif"
                     ,"'Unica One', cursive"
                     ,"'Saira Extra Condensed', sans-serif"
                     ,"'Electrolize', sans-serif"
                     ,"'Quantico', sans-serif"
                     ,"'Saira Condensed', sans-serif"
                     ,"'Saira', sans-serif"
                     ,"'Cute Font', cursive"
                     ,"'Share Tech Mono', monospace"
                     ,"'Saira Semi Condensed', sans-serif"
                     ,"'Miriam Libre', sans-serif"
                     ,"'Wire One', sans-serif"
                     ,"'Iceland', cursive"
                     ,"'Tulpen One', cursive"
                     ,"'Share Tech', sans-serif"
                     ,"'Rationale', sans-serif"
                     ,"'Offside', cursive"
                     ,"'Iceberg', cursive"
                     ,"'Chathura', sans-serif"
                     ,"'Roboto', sans-serif"
                    ]
    _fontList = null == fontList ? _fontList : fontList;
    
    this.createClass = function(className, classRules){
        var style           = document.createElement('style');
            style.type      = 'text/css';
            var acumulator  = "." + className + "{";
            for(var property in classRules){
                acumulator += property + " : " + classRules[property] + ";";
            }
                acumulator += "}";

            style.innerHTML = acumulator;
            
            document.getElementsByTagName('head')[0].appendChild(style);
    }

    this.next = function(){
        _element.style.fontFamily = _fontList[_currentIndex];
        _currentIndex++;
        if(_currentIndex >= _fontList.length){
            _currentIndex = 0;
        }
        console.log(_element.style.fontFamily);
    }
}