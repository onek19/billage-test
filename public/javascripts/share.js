import {results} from './data.js';
import {firebaseConfig, kakao_key} from './api-keys.js'

firebase.initializeApp(firebaseConfig);

const url = "https://billage-test.web.app/";
const curUrl = url+'result/'+resultId;

const copylink = document.querySelector('.copylink > a')
const f = document.querySelector('.f > a')
const t = document.querySelector('.tw > a')

/*facebook */
function shareFacebook() {
  window.open('https://www.facebook.com/sharer/sharer.php?u='+ curUrl);
}

f.addEventListener('click', () => {
  shareFacebook();
});

/*Kakao*/
const resultobj = results.filter(x => {
  return x.id === resultId;
});
const res = resultobj[0];
const k_hashtag = res.content.hashtag.replace('<br>', ' ');
const k_button = document.querySelector('#kakao-link-btn');

Kakao.init(kakao_key);

function sendLink() {
    Kakao.Link.sendCustom({
      templateId: 45503,
      templateArgs: {
        resultpath: 'result/'+resultId,
        thum: url+res.content.thumbnail,
        hashtag : k_hashtag,
      }
    });
}

k_button.addEventListener('click', () => {
  sendLink()
});


/* twitter */
function shareTwitter(tw_url, text) {
  window.open('https://twitter.com/intent/tweet?text=' + text + "&url=" + tw_url)
}

t.addEventListener('click', () => {
  const resultName = res.content.name.replace('<br>', ' ');
  const text = '나는 '+ resultName + "!  %23책읽는마을  %23Billage  %23나는_무슨_토끼일까";
  shareTwitter(curUrl, text);
});

/*copy link */
const copy = () => {
    const tmp = document.createElement('textarea');
    document.body.appendChild(tmp);
    tmp.value = url;
    tmp.select();
    document.execCommand('copy');
    alert("결과 링크가 복사되었어요!")
    document.body.removeChild(tmp);
}

copylink.addEventListener('click', () => {
  copy();
});