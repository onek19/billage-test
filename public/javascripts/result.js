import {results} from './data.js';

const hashtag = document.querySelector('.hashtag')
const name = document.querySelector('.result')
const imgbox = document.querySelector('.imgbox')
const description = document.querySelector('.description')
const again = document.querySelector('.again');
const alltype = document.querySelector('.alltype');
const pname = document.querySelector('.pname');
const pimgbox = document.querySelector('.pimgbox');
const sname = document.querySelector('.sname');
const slocation = document.querySelector('.slocation');
const simgbox = document.querySelector('.simgbox');
const sinfo = document.querySelector('.sinfo');
const formore = document.querySelector('.formore');


const setResult = () => {
    const resultobj = results.filter(x => {
        return x.id === resultId;
    });
    const res = resultobj[0];
    
    const partnerobj = results.filter(y => {
        return y.id === res.partner;
    })
    const ptn = partnerobj[0];
    
    hashtag.innerHTML=res.content.hashtag;
    name.innerHTML = res.content.name;
    imgbox.innerHTML = "<img class=\"resultimg\" src="+ res.content.imgsrc +">";
    description.innerHTML = res.content.description;
    
    pname.innerHTML=ptn.content.name;
    pimgbox.innerHTML = "<img class=\"pimg\" src="+ ptn.content.imgsrc +">";

    sname.innerHTML=res.store.name;
    sinfo.innerHTML=res.store.description;
    slocation.innerHTML=res.store.location;
    simgbox.innerHTML="<img class=\"simg\" src="+ res.store.imgsrc +">";

    formore.onclick = () => {
        window.open(res.store.instalink);
    }
}

again.onclick = () => {
    location.href = '/';
}

alltype.onclick = () => {
    location.href = '/all';
}

document.addEventListener("DOMContentLoaded", function() {
    setResult();
});