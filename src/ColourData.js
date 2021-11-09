import React from 'react';

const ColourData = () => {
    const rgbColours = createColours();
    // 32 x 32 x 32

    function createColours() {
        var red = rangeDivisibleByEight(8, 256);
        var green = rangeDivisibleByEight(8, 256);
        var blue = rangeDivisibleByEight(8, 256);
        var allColours = [];

        var i = 0;
        while (i < red.length) {
            const redRandomIndex = Math.floor(Math.random() * red.length);
            const redValue = red[redRandomIndex];
            red.splice(redRandomIndex, 0);
            i++;

            var j = 0;
            while (j < blue.length) {
                const blueRandomIndex = Math.floor(Math.random() * blue.length);
                const blueValue = blue[blueRandomIndex];
                blue.splice(blueRandomIndex, 0);
                j++;

                var k = 0;
                while (k < green.length) {
                    const greenRandomIndex = Math.floor(Math.random() * green.length);
                    const greenValue = green[greenRandomIndex];
                    green.splice(greenRandomIndex, 0);

                    const rgb = `rgb(${redValue},${greenValue},${blueValue})`;
                    allColours.push(rgb);

                    k++;
                }
            }
        }
        console.log("length equals " + allColours.length);

        return shuffleColours(allColours);
    };

    
    function rangeDivisibleByEight(start, end) {
        var ans = [];
        for (let i = start; i <= end; i++) {
            if (i !== 0 && i % 8 === 0) {
                ans.push(i);
            }
        }
        return ans;
    };

    function shuffleColours(array) {
        let currentIndex = array.length, randomIndex;

        // While there remain elements to shuffle...
        while (currentIndex !== 0) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            // And swap it with the current element.
            [array[currentIndex], array[randomIndex]] = [
                array[randomIndex], array[currentIndex]];
        }

        return array;
    }

    return (
        rgbColours.map((colour, index) => {
            return (
                <div style={{ width: '80%', position: 'relative', margin: "0% 10%" }}>
                    <div key={index} id={index} style={{ backgroundColor: colour }} className="square button-img"></div>
                </div>
            )
        })
    );
}

export default ColourData;