let f_name;
let f_number1='problemsheet_prob_find_correct_num_type1.json';
let f_number2='problemsheet_prob_find_correct_num_type2.json';
let f_number3='problemsheet_prob_find_correct_num_type3.json';
let f_number4='problemsheet_prob_find_correct_num_type4.json';
let f_number5='problemsheet_prob_find_correct_num_type5.json';
let f_combi1='problemsheet_combi1.json';
let f_combi2='problemsheet_combi2.json';
let f_combi3='problemsheet_combi3.json';
let f_combi4='problemsheet_combi4.json';

let f_geometry1='problemsheet_prob_cnt_type1.json';
let f_geometry2='problemsheet_prob_cnt_type2.json';
let f_geometry3='problemsheet_prob_len_type2.json';
let f_geometry4='problemsheet_prob_len_type4.json';
let f_geometry5='problemsheet_prob_len_type5.json';

let f_unknown1='problemsheet_uk1.json';
let f_unknown2='problemsheet_uk2.json';


let a_name;
let a_number1='answersheet_prob_find_correct_num_type1.json';
let a_number2='answersheet_prob_find_correct_num_type2.json';
let a_number3='answersheet_prob_find_correct_num_type3.json';
let a_number4='answersheet_prob_find_correct_num_type4.json';
let a_number5='answersheet_prob_find_correct_num_type5.json';
let a_combi1='answersheet_prob_combi1.json';
let a_combi2='answersheet_prob_combi2.json';
let a_combi3='answersheet_prob_combi3.json';
let a_combi4='answersheet_prob_combi4.json';

let a_geometry1='answersheet_prob_cnt_type1.json';
let a_geometry2='answersheet_prob_cnt_type2.json';
let a_geometry3='answersheet_prob_len_type2.json';
let a_geometry4='answersheet_prob_len_type4.json';
let a_geometry5='answersheet_prob_len_type5.json';

let a_unknown1='answersheet_prob_uk1.json';
let a_unknown2='answersheet_prob_uk2.json';


f_name = f_number1;
a_name = a_number1; 

let problem_pos=1;
let problem_Max=3;
let totalProblem = {"1": {"question": " "}};
let totalAnswer = {"1": {"answer": " ", "equation": " "} };


const problem_position = document.getElementById('myText');
problem_position.value = problem_pos;

const number1 = document.getElementById('number1');
//const combi1 = document.getElementById('combi1');
let btn_id = number1;

let llog3 = document.getElementById('log3');
let llog2 = document.getElementById('log2');


let chk1visible=0;
const chk1 = document.getElementById('chk1');
chk1.addEventListener('change', () => {
    if(chk1.checked) {
        chk1visible=1;

    } else {
        chk1visible=0;
    }
});


let chk2visible=0;
const chk2 = document.getElementById('chk2');
chk2.addEventListener('change', () => {
    if(chk2.checked) {
        chk2visible=1;

    } else {
        chk2visible=0;
    }
});



const rightArrow = document.getElementById('rigth-arrow');
const leftArrow = document.getElementById('left-arrow');

const req = new XMLHttpRequest();
req.addEventListener('load', (event) => {
    const text = event.target.responseText;

    const textParse = JSON.parse(text);
    totalProblem = textParse;
   
    let keys = Object.keys(textParse);
    problem_Max = keys.length;

    problem_pos=1
    document.querySelector('#log').innerHTML = textParse[problem_pos]["question"];
    problem_position.value = problem_pos;

});
  
    
req.open('GET', f_name, true);
req.send();
  
const req2 = new XMLHttpRequest(); 
req2.addEventListener('load', (event) => {
    const text = event.target.responseText;

    const textParse = JSON.parse(text);
    totalAnswer=textParse;
    
    let keys = Object.keys(textParse);
   
    
    if (chk1visible == 1) {
        llog3.style.visibility = 'visible';
    }
    else {
        llog3.style.visibility = 'hidden';
    }
    llog3.innerHTML =  textParse[keys[0]]["answer"];
    
    
    if (chk2visible == 1) {
        llog2.style.visibility = 'visible';
    }
    else {
        llog2.style.visibility = 'hidden';
    }
    llog2.innerHTML =  textParse[keys[0]]["equation"];

     
});
req2.open('GET', a_name, true);
req2.send();
  





function callProblem() {
    problem_pos = problem_position.value;
    
    if(problem_pos > problem_Max) {
      problem_pos = problem_Max;
      problem_position.value = problem_Max;
    }
    if(problem_pos < 1) {
      problem_pos = 1;
      problem_position.value = 1;
    }
    
    
    document.querySelector('#log').innerHTML = totalProblem[problem_pos]["question"];
    
    if (chk1visible == 1) {
        llog3.style.visibility = 'visible';
    }
    else {
        llog3.style.visibility = 'hidden';
    }
    llog3.innerHTML = totalAnswer[problem_pos]["answer"];
    
    
    if (chk2visible == 1) {
        llog2.style.visibility = 'visible';
    }
    else {
        llog2.style.visibility = 'hidden';
    }
    llog2.innerHTML = totalAnswer[problem_pos]["equation"];
    
}


function increaseNum() {
    problem_pos++;
    
    if (problem_pos>problem_Max) {
        problem_pos = problem_Max; 
    }
        
    problem_position.value = problem_pos;
    document.querySelector('#log').innerHTML = totalProblem[problem_pos]["question"];
    
    if (chk1visible == 1) {
        llog3.style.visibility = 'visible';
    }
    else {
        llog3.style.visibility = 'hidden';
    }
    llog3.innerHTML = totalAnswer[problem_pos]["answer"];
    
    
    if (chk2visible == 1) {
        llog2.style.visibility = 'visible';
    }
    else {
        llog2.style.visibility = 'hidden';
    }
    llog2.innerHTML = totalAnswer[problem_pos]["equation"]; 
}



function decreaseNum() {
    problem_pos--;

    if (problem_pos<1) {
        problem_pos=1;
    }
        
    problem_position.value = problem_pos;
    document.querySelector('#log').innerHTML = totalProblem[problem_pos]["question"];
    
    if (chk1visible == 1) {
        llog3.style.visibility = 'visible';
    }
    else {
        llog3.style.visibility = 'hidden';
    }
    llog3.innerHTML = totalAnswer[problem_pos]["answer"];
    
    
    if (chk2visible == 1) {
        llog2.style.visibility = 'visible';
    }
    else {
        llog2.style.visibility = 'hidden';
    }
    llog2.innerHTML = totalAnswer[problem_pos]["equation"];
}



function number11() {
    btn_id.style.backgroundColor='#eeeeee';
    f_name = f_number1;
    a_name = a_number1;
    btn_id=number1;
    btn_id.style.backgroundColor='YELLOW';
}


function number12() {
    btn_id.style.backgroundColor='#eeeeee';
    f_name = f_number2;
    a_name = a_number2;
    btn_id=number2;
    btn_id.style.backgroundColor='YELLOW';
}


function number13() {
    btn_id.style.backgroundColor='#eeeeee';
    f_name = f_number3;
    a_name = a_number3;
    btn_id=number3;
    btn_id.style.backgroundColor='YELLOW';
}


function number14() {
    btn_id.style.backgroundColor='#eeeeee';
    f_name = f_number4;
    a_name = a_number4;
    btn_id=number4;
    btn_id.style.backgroundColor='YELLOW';
}


function number15() {
    btn_id.style.backgroundColor='#eeeeee';
    f_name = f_number5;
    a_name = a_number5;
    btn_id=number5;
    btn_id.style.backgroundColor='YELLOW';
}



function combi11() {
    btn_id.style.backgroundColor='#eeeeee';
    f_name = f_combi1;
    a_name = a_combi1;
    btn_id=combi1;
    btn_id.style.backgroundColor='YELLOW';
}

function combi12() {
    btn_id.style.backgroundColor='#eeeeee';
    f_name = f_combi2;
    a_name = a_combi2;
    btn_id=combi2;
    btn_id.style.backgroundColor='YELLOW';
}

function combi13() {
    btn_id.style.backgroundColor='#eeeeee';
    f_name = f_combi3;
    a_name = a_combi3;
    btn_id=combi3;
    btn_id.style.backgroundColor='YELLOW';
}

function combi14() {
    btn_id.style.backgroundColor='#eeeeee';
    f_name = f_combi4;
    a_name = a_combi4;
    btn_id=combi4;
    btn_id.style.backgroundColor='YELLOW';
}



function geometry11() {
    btn_id.style.backgroundColor='#eeeeee';
    f_name = f_geometry1;
    a_name = a_geometry1;
    btn_id=geometry1;
    btn_id.style.backgroundColor='YELLOW';
}

function geometry12() {
    btn_id.style.backgroundColor='#eeeeee';
    f_name = f_geometry2;
    a_name = a_geometry2;
    btn_id=geometry2;
    btn_id.style.backgroundColor='YELLOW';
}

function geometry13() {
    btn_id.style.backgroundColor='#eeeeee';
    f_name = f_geometry3;
    a_name = a_geometry3;
    btn_id=geometry3;
    btn_id.style.backgroundColor='YELLOW';
}

function geometry14() {
    btn_id.style.backgroundColor='#eeeeee';
    f_name = f_geometry4;
    a_name = a_geometry4;
    btn_id=geometry4;
    btn_id.style.backgroundColor='YELLOW';
}

function geometry15() {
    btn_id.style.backgroundColor='#eeeeee';
    f_name = f_geometry5;
    a_name = a_geometry5;
    btn_id=geometry5;
    btn_id.style.backgroundColor='YELLOW';
}


function unknown11() {
    btn_id.style.backgroundColor='#eeeeee';
    f_name = f_unknown1;
    a_name = a_unknown1;
    btn_id=unknown1;
    btn_id.style.backgroundColor='YELLOW';
}

function unknown12() {
    btn_id.style.backgroundColor='#eeeeee';
    f_name = f_unknown2;
    a_name = a_unknown2;
    btn_id=unknown2;
    btn_id.style.backgroundColor='YELLOW';
}





const btn = document.querySelector('#cols1'); 
btn.addEventListener('click', () => {

    const req = new XMLHttpRequest();
    req.addEventListener('load', (event) => {
        const text = event.target.responseText;
        const textParse = JSON.parse(text);
        totalProblem = textParse;
   
        let keys = Object.keys(textParse);
        problem_Max = keys.length;

        problem_pos=1
        document.querySelector('#log').innerHTML = textParse[problem_pos]["question"];
        problem_position.value = problem_pos;

    });
  
    
 
    req.open('GET', f_name, true);
    req.send();
  
    const req2 = new XMLHttpRequest();
    req2.addEventListener('load', (event) => {
        const text = event.target.responseText;

        const textParse = JSON.parse(text);
        totalAnswer=textParse;
    
        let keys = Object.keys(textParse);
   

        if (chk1visible == 1) {
            llog3.style.visibility = 'visible';
        }
        else {
            llog3.style.visibility = 'hidden';
        }
        llog3.innerHTML = textParse[keys[0]]["answer"];
     
        if (chk2visible == 1) {
            llog2.style.visibility = 'visible';
        }
        else {
            llog2.style.visibility = 'hidden';
        }
        llog2.innerHTML = textParse[keys[0]]["equation"];
     

    });
    req2.open('GET', a_name, true);
    req2.send();
  
});


