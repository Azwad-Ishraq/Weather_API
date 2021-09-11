



const loadData = () => {
    const searchField = document.getElementById('input');
    const searchText = searchField.value; 
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchText}&appid=725bf9ee8f1d48521d9f8da8fc491a65`;
    console.log(url);
    
    fetch(url)
    .then(res => res.json())
    .then(data => displayData(data))
    
}


function kelToCel(kel){
    const cel = Math.round(kel - 273.15);
    return cel;
}

const displayData = data => {
    const name = document.getElementById('name');
    const temp = document.getElementById('temp');
    const des = document.getElementById('des');
    const country = document.getElementById('country');
    const iconImg = document.getElementById('icon');
    if(data.cod == 200){
        console.log(data);
    
    name.innerText = data.name;


    
    let kel = data.main.temp;

    let cel = kelToCel(kel);
    temp.innerText = `${cel}°C`;

    
    des.innerText = data.weather[0].description;

    
    country.innerText = data.sys.country;


    iconImg.style.display = 'inline-block';
    const icon = data.weather[0].icon;
    console.log(icon);
    const iconurl = `http://openweathermap.org/img/w/${icon}.png`;
    iconImg.src = `http://openweathermap.org/img/w/${icon}.png`;
    console.log(iconImg.scr);
    }else{
        name.innerText = 'No City Found'
    }
}