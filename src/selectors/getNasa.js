
const url = 'https://api.nasa.gov/planetary/apod?api_key=dw6aTVUAuV3aqR6g5EdjiljiHfLdcf8480xpkGX7';

export const getNasa = (param) => {
    let dataNasa = [];
    fetch(url+param)
        .then( res => res.json())
        .then( data => data.forEach(element => dataNasa.push(element) ))
    
    return dataNasa;
}