
var obj =[];
fetch("data.json")
.then(response => response.json())
// use (display) the JSON data
.then(data => { 
obj.push(data)
return obj;
})
.then( obj => {
console.log(obj);
var score1 = document.getElementById('score');
var score2 = document.getElementById('score2');
var score3 = document.getElementById('score3');
var score4 = document.getElementById('score4');
var category4 = document.getElementById('category4');
score1.textContent = obj[0][0].score;
score2.innerHTML = obj[0][1].score;
score3.innerHTML = obj[0][2].score;
score4.innerHTML = obj[0][3].score;

var category1 = document.getElementById('category1');
var category2 = document.getElementById('category2');
var category3 = document.getElementById('category3');
var category4 = document.getElementById('category4');

category1.innerHTML = obj[0][0].category;
category2.innerHTML = obj[0][1].category;
category3.innerHTML = obj[0][2].category;
category4.innerHTML = obj[0][3].category;

}
);