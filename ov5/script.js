/* Part 2 */
console.log('PART 2')
for (i = 1; i < 21; i++) {
  console.log(i)
}
/* Part 3 */
console.log('PART 3')
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
for (const number of numbers){
  if (number%15==0) {console.log('eplekake')}
  else if(number%3==0){console.log('eple')}
  else if (number%5==0) {console.log('kake')}
  else{console.log(number)}
}
/* Part 4 */
function changeTitle(){
  document.getElementById('title').innerText = "Hello, JavaScript!"; /*Change title*/
}
/* Part 5 */
function changeDisplay () {
  document.getElementById("magic").style.display = "none";
}

function changeVisibility () {
  document.getElementById("magic").style.display = "block";
  document.getElementById("magic").style.visibility = "hidden";
}

function reset () {
  document.getElementById("magic").style.display = "block";
  document.getElementById("magic").style.visibility = "visible";
}

/* Part 6 */
function addElemementsToList(){
  const technologies = [
      'HTML5',
      'CSS3',
      'JavaScript',
      'Python',
      'Java',
      'AJAX',
      'JSON',
      'React',
      'Angular',
      'Bootstrap',
      'Node.js'
  ];
  var tech_list =document.getElementById('tech');
  for (var i = 0; i < technologies.length; i++) {
    var technology = technologies[i];
    var li = document.createElement('li'); /*create li element*/
      li.appendChild(document.createTextNode(technology)); /*add text to element li*/
      tech_list.appendChild(li); /*append li elemnt to ul list*/

  }
}
