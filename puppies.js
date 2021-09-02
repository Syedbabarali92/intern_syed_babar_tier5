let filenames=[
    "pexels-caio-69371.jpg",
    "pexels-chevanon-photography-1108099.jpg",
    "pexels-helena-lopes-1938123.jpg",
    "pexels-pixabay-160846.jpg",
    "pexels-pixabay-220974.jpg",
    "pexels-rrinna-3028538.jpg"
];
let imgs=document.getElementsByTagName('img');

for(let imgElement of imgs)
{
    let r = Math.floor(Math.random() * filenames.length);
    let file = '/images/' + filenames[r];
    let url = chrome.runtime.getURL(file);
    imgElement.src = url;
    console.log(url);
}