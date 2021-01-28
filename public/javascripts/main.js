import {questions, scores} from './data.js';

const pLabel = document.querySelector('.p-label')
const progress = document.querySelector('.progress-bar')
const questionBox = document.querySelector('.question')
const imageq = document.querySelector('.imageq')
const mainquestion = document.querySelector('.mainq')
const selections = new Object();
const resop = ['e','i','f','t','p','j'];
const resarr = ['efp', 'ifp', 'itp', 'etj', 'ifj', 'etp', 'itj', 'efj'];
let qIdx = 0;

/*progress*/
const getProgress = () => {
    const prog = 100*((qIdx+1)/questions.length);
    return prog;
}

const setProgress = () => {
    pLabel.innerHTML = qIdx+1 +"/"+ questions.length;
    progress.style.width = getProgress()+'%';
}

/*calculation + get result*/
const doCalc = ({selections, scores}) => {
    const totalScore = Object.entries(selections)
        .map(([key, value]) => scores[key][value])
        .reduce((acc, cur) => {
            const newCalculator = {};
            Object.keys(acc).forEach((key) => {
                newCalculator[key] = acc[key] + cur[key];
            });
            return newCalculator;
        });
    return totalScore;
}

const findResultId = (scores) => {
    const restype=[]; 
    let gettype='';

    for(let i=0; i<3; i++) {
        restype[i] = (scores[(i+1)*2-1]>scores[(i+1)*2]) ? resop[i*2] : resop[i*2+1];
        gettype +=restype[i];
    }

    const getId = resarr.indexOf(gettype)+1;
    return getId;
}

/*question*/
const LastQue = () => {
    const totalScore = doCalc({selections, scores});
    const Id = findResultId(totalScore);

    const qCon = document.querySelector('#qCon');
    const loading = document.querySelector('.loading');
    const qConchild = qCon.children;

    for(var i=0; i<qConchild.length-1; i++) {
        qConchild[i].style.display="none";
    }
    loading.style.display="block";
    
    setTimeout(() => {
        loading.style.display="none";
        location.href = '/result/'+Id;
    }, 3700);
    
}

const setAnswer = (opId) => {
    const opAll = document.querySelector('.options');
    const answer = document.createElement('button');
    answer.style.animation = 'fade-in 0.3s forwards'
    answer.className = 'a';
    answer.innerHTML = opId.title;

    answer.addEventListener('click', () => {
        selections[qIdx+1] = opId.id;
        answer.className = 'a checked';
        
        const parent = answer.parentNode;
        const children = parent.childNodes;
        children.forEach((child) => {
            child.disabled = true;
        });
        parent.classList.add('fade-out-5-4');
        questionBox.classList.add('fade-out-5-4');

        setTimeout(() => {
            if(qIdx < questions.length -1) {
                opAll.innerHTML = '';
                parent.classList.remove('fade-out-5-4');
                questionBox.classList.remove('fade-out-5-4');
                qIdx++;
                setTest();
            }
            else {
                LastQue();
                return;
            }
        }, 800);
    });

    opAll.appendChild(answer);
}

const setTest = () => {
    setProgress();
    const qNum = questions[qIdx];

    questionBox.classList.add('fade-in-4');
    imageq.innerHTML = "<img src=\'" + qNum.content.imgsrc + "\'>";
    mainquestion.innerHTML = qNum.content.question;

    setTimeout(() => {
        for (let i in qNum.content.options) {
            questionBox.classList.remove('fade-in-4');
            setAnswer(qNum.content.options[i]);
        }
    }, 500);
}

let images = new Array();

const preload = (imgarr) => {
    for (var i = 0; i < imgarr.length; i++) {
        images[i] = new Image();
        images[i].src = imgarr[i].content.imgsrc;
    }
}

document.addEventListener("DOMContentLoaded", function() {
    preload(questions);
    setTest();
});