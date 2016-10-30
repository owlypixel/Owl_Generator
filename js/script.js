$("document").ready(function() {
    generateSomeOwls(10, 100);

    var renderBtn = document.getElementById("generate");
    var clearBtn = document.getElementById("clear");
    var cloneCount = 1;

    renderBtn.addEventListener("click", function() {
        generateSomeOwls(1, 200);
    });
    clearBtn.addEventListener("click", clearOwls);

    function generateRandomHexCode() {
        var hexCode = '#';
        var hexSym = ["A", "B", "C", "D", "E", "F", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
        for (var i = 0; i < 6; i++) {
            var randSym = hexSym[Math.floor(hexSym.length * Math.random())];
            hexCode += randSym;
        }
        return hexCode;
    }

    function generateSomeOwls(number, timeout) {
        var count = 0;
        var int = setInterval(function() {
            go();
            if (count > number) clearInterval(int);
            count++;
        }, timeout);
    }

    function go() {
        var svg = document.getElementById("owly");
        var clone = svg.cloneNode(true);
        clone.setAttribute('id', 'owl' + cloneCount++);
        var elements = clone.querySelectorAll('.st-body,.st-belly,.wing');
        for (var i = 0; i < elements.length; i++) {
            elements[i].setAttribute("fill", generateRandomHexCode());
        }
        var wrapper = document.getElementById('wrap');
        wrapper.appendChild(clone);
        toggleAdvice();
    }

    function clearOwls() {
        var allowls = document.querySelectorAll("svg:not(#owly)");
        Array.prototype.forEach.call(allowls, function(node) {
            node.parentNode.removeChild(node);
        });
        toggleAdvice();
    }

    function toggleAdvice() {
        var container = document.querySelector("#wrap");
        var adv = document.querySelector(".advice");
        var children = container.childElementCount;
        if (children > 1) {
            adv.style.opacity = 0;
        } else {
            adv.style.opacity = 1;
        }
    }
});
