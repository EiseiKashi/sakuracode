/*
Author: Eisei Kashi - 07/2018
*/

function Yasashiku (){
    var _formulaList = {
        inQuad : function (t, b, c, d) {
            t /= d;
            return c*t*t + b;
        }
        ,outQuad : function (t, b, c, d) {
            t /= d;
            return -c * t*(t-2) + b;
        }
        ,inOutQuad : function (t, b, c, d) {
            t /= d/2;
            if (t < 1) return c/2*t*t + b;
            t--;
            return -c/2 * (t*(t-2) - 1) + b;
        }
        ,inCirc : function (t, b, c, d) {
            t /= d;
            return -c * (Math.sqrt(1 - t*t) - 1) + b;
        }
        ,outCirc : function (t, b, c, d) {
            t /= d;
            t--;
            return c * Math.sqrt(1 - t*t) + b;
        }
        ,inOutCirc : function (t, b, c, d) {
            t /= d/2;
            if (t < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
            t -= 2;
            return c/2 * (Math.sqrt(1 - t*t) + 1) + b;
        }
        ,InElastic: function (x, t, b, c, d) {
            var s=1.70158;var p=0;var a=c;
            if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
            if (a < Math.abs(c)) { a=c; var s=p/4; }
            else var s = p/(2*Math.PI) * Math.asin (c/a);
            return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
        }
        ,outElastic: function (x, t, b, c, d) {
            var s=1.70158;var p=0;var a=c;
            if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
            if (a < Math.abs(c)) { a=c; var s=p/4; }
            else var s = p/(2*Math.PI) * Math.asin (c/a);
            return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
        }
        ,inOutElastic: function (x, t, b, c, d) {
            var s=1.70158;var p=0;var a=c;
            if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
            if (a < Math.abs(c)) { a=c; var s=p/4; }
            else var s = p/(2*Math.PI) * Math.asin (c/a);
            if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
            return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
        }
        ,inBack: function (x, t, b, c, d, s) {
            if (s == undefined) s = 1.70158;
            return c*(t/=d)*t*((s+1)*t - s) + b;
        }
        ,outBack: function (x, t, b, c, d, s) {
            if (s == undefined) s = 1.70158;
            return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
        }
        ,inOutBack: function (x, t, b, c, d, s) {
            if (s == undefined) s = 1.70158; 
            if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
            return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
        }
        ,inBounce: function (x, t, b, c, d) {
            return c - jQuery.easing.easeOutBounce (x, d-t, 0, c, d) + b;
        }
        ,outBounce: function (x, t, b, c, d) {
            if ((t/=d) < (1/2.75)) {
                return c*(7.5625*t*t) + b;
            } else if (t < (2/2.75)) {
                return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
            } else if (t < (2.5/2.75)) {
                return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
            } else {
                return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
            }
        }
        ,inOutBounce: function (x, t, b, c, d) {
            if (t < d/2) return jQuery.easing.easeInBounce (x, t*2, 0, c, d) * .5 + b;
            return jQuery.easing.easeOutBounce (x, t*2-d, 0, c, d) * .5 + c*.5 + b;
        }
    }
    
    function Yasashiku(){
        'use strict'
        var _self           = this;
        var _emitter        = new Emitter(this);
        var _stateList      = [];
        var _formula        = _formulaList[_formulaName];
        var _lastTime       = 0;
        var _lapsed         = 0;
        var _duration       = 1000;
        var _ratio          = 0;
        var _formulaName    = "inOutQuad";
        var _active         = false;
        
        var _idTime;
        
        this.seconds;
        this.formula;

        var StatesFromTo = function(target, to){
            var from    = {};
            
            this.from   = from;
            this.to     = to;
            this.target = target;

            this.update = function(){
                for(var property in to){
                    from[property] = target[property];
                }
            }
        }

        var stateCounter = 0;
        this.add = function(stateFrom, stateTo){
            _stateList.push(new StatesFromTo(stateFrom, stateTo));
            return stateCounter++;
        }

        this.removeByIndex = function(index){
            if(isNumber(index) && index > 0){
                _stateList.splice(Math.round(index), 1);
            }
        }
        var playDelay = function(){
            _active         = true;
            _formula        = _formulaList[_formulaName];
            _lastTime       = Date.now();
            _lapsed         = 0;

            var length = _stateList.length;
            for(var index = 0; index <length; index++){
                _stateList[index].update();
            }
            update();
            emit("start");
        }

        this.play = function(seconds, delay){
            this.seconds    = seconds;
            cancelAnimationFrame(_idTime);
            if(!isNumber(delay)){
                delay = 0;
            }
            setTimeout(playDelay, delay);
        }

        this.stop = function(){
            cancelAnimationFrame(_idTime);
            _active     = false;
            _duration   = 0;
            emit("stop");
        }

        this.pause = function(){
            _active = false;
            emit("pause");
        }

        this.addEventListener = function(type, listener, context){
            _emitter.addEventListener(type, listener, context);
        }

        this.removeEventListener = function(type, listener, context){
            _emitter.removeEventListener(type, listener, context);
        }

        var emit = function(type){
            _emitter.emit(type, {ratio:_ratio, milliseconds:_duration});
        }

        var laps;
        var update = function(){
            if(!_active){
                return;
            }

            if(isNumber(_self.seconds)){
                _duration       = _self.seconds * 1000;
            }else{
                _self.seconds   = _duration/1000;
            }

            if(_duration == 0){
                // Early return
                return;
            }

            if(_self.formula in _formulaList){
                _formulaName = _self.formula;
            }else{
                _self.formula = _formulaName;
            }

            var now     = Date.now();
            laps        = now - _lastTime;
            _lapsed     += laps;
            _lastTime   = now;

            if(_duration <= _lapsed){
                _ratio  = 1;
                _active = false;
            }else{
                _ratio = _formula(_lapsed, 0, 1, _duration);
            }

            var length = _stateList.length;
            var from;
            var to;
            var target;
            var states;
            for(var index=0; index < length; index++){
                states = _stateList[index];
                to     = states.to;
                from   = states.from;
                target = states.target;
                for(var property in to){
                    target[property] = from[property] + (to[property] - from[property])*_ratio;
                }
            }

            var type = "tick";

            if(!_active){
                _self.stop();
                type = "complete";    
            }else{
                _idTime = requestAnimationFrame(update);
            }
            
            emit(type);
        }
    }

    return new Yasashiku();
}