Number.prototype.toPercent = function(){
    return (Math.round(this * 10000)/100).toFixed(2) + '%';
    }
    var A=0.35897, B=0.25554;
     alert([A, A.toPercent(), B, B.toPercent()].join('\n'));