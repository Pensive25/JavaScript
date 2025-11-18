const body = document.getElementsByTagName('body')[0];


let setColor = (name)  => {

    body.style.backgroundColor = name;  
} 


let randomColor = () => {

    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256); 
    let color = `rgb(${red}, ${green}, ${blue})`;

    body.style.backgroundColor = color;
}