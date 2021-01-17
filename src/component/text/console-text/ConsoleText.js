import React, {useEffect} from 'react';

import './console-text.scss'
import {themeColours, useTheme} from "../../theme/ThemeContext";


function ConsoleText({name}) {

    const {theme} = useTheme()

    useEffect(() => {

        // function([string1, string2],target id,[color1,color2])
        let interval = consoleText([name], 'text',[themeColours[theme].inverseColor,'#FC766AFF','#97BC62FF']);

        function consoleText(words, id , colors ) {
            if (colors === undefined) colors = ['#fff'];
            var visible = true;
            var con = document.getElementById('console');
            var letterCount = 1;
            var x = 1;
            var waiting = false;
            var target = document.getElementById(id)
            target.setAttribute('style', 'color:' + colors[0])

            let interval = []

            interval.push(window.setInterval(function() {

                if (letterCount === 0 && waiting === false) {
                    waiting = true;
                    target.innerHTML = words[0].substring(0, letterCount)
                    window.setTimeout(function() {
                        var usedColor = colors.shift();
                        colors.push(usedColor);
                        var usedWord = words.shift();
                        words.push(usedWord);
                        x = 1;
                        target.setAttribute('style', 'color:' + colors[0])
                        letterCount += x;
                        waiting = false;
                    }, 1000)
                } else if (letterCount === words[0].length + 1 && waiting === false) {
                    waiting = true;
                    window.setTimeout(function() {
                        x = -1;
                        letterCount += x;
                        waiting = false;
                    }, 1000)
                } else if (waiting === false) {
                    target.innerHTML = words[0].substring(0, letterCount)
                    letterCount += x;
                }
            }, 120))
            interval.push(window.setInterval(function() {
                if (visible === true) {
                    con.className = 'console-underscore hidden'
                    visible = false;

                } else {
                    con.className = 'console-underscore'

                    visible = true;
                }
            }, 400))

            return interval
        }

        return () => {
            interval.forEach(int => clearInterval(int))
        }

    }, [name,theme]);


    return (
        <div className='console-container'><span id='text'></span>
            <div className='console-underscore' id='console'>&#95;</div>
        </div>
    );
}

export default ConsoleText;