const getcolor = () => {
    // Hex Code
    const randomNumber = Math.floor(Math.random()*16777215);
    const randomcode = "#"+randomNumber.toString(16);
    // console.log(randomNumber, randomcode);

    document.body.style.backgroundColor = randomcode;
    document.getElementById("color-code").innerText = randomcode;

}
//event call
document.getElementById("btn").addEventListener(
    "click", getcolor)


//initial call
getcolor();