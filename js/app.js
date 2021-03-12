
// addd work experience field dynamically
function addNewWorkExperience() {
  let newnode = document.createElement('textarea');
  newnode.classList.add('form-control');
  newnode.classList.add('my-1');
  newnode.classList.add('wkeprfield');
  newnode.setAttribute('placeholder', 'Your work experiance')

  let workdiv = document.querySelector(".workdiv");
  let addExpBtn = document.querySelector('#addExpBtn');


  workdiv.insertBefore(newnode, addExpBtn)

}

// addd acadamy qualification field dynamically
function addAcadamicQualificationField() {
  let newnode = document.createElement('textarea');
  newnode.classList.add('form-control');
  newnode.classList.add('my-1');
  newnode.classList.add('acafield');
  newnode.setAttribute('placeholder', 'Acadamic qualification');

  let acadamicdiv = document.querySelector(".acadamicdiv");
  let addAcaBtn = document.querySelector('#addAcaBtn');
  acadamicdiv.insertBefore(newnode, addAcaBtn)

}







//cancel 
function cancel() {
  //hide the cv-form and display cv-form template
  document.getElementById("cv-form").style.display = "block"
  document.getElementById("cv-form-template").style.display = 'none';
  document.forms[0].reset();

}






// generate cv btn;
function generateCVbtn() {

console.log('generating cv');
  //hide the cv-form and display cv-form template
  document.getElementById("cv-form").style.display = "none";
  document.getElementById("cv-form-template").style.display = 'block';



  //get name 
  let name = document.getElementById("name").value;
  document.getElementById("T-name").innerText = name;
  document.getElementById("T-dname").innerText = name;

  //get EMail 
  let email = document.getElementById("email").value;
  document.getElementById("T-email").innerText = email;


  //get phone 
  let phone = document.getElementById("phone").value;
  document.getElementById("T-phone").innerText = phone;
  //get gender 
  let gender = document.getElementById("gender").value;
  document.getElementById("T-gender").innerText = gender;




  /*get social linked;*/

  //get address 
  let address = document.getElementById("address").value;
  document.getElementById("T-address").innerText = address;

  //get fb 
  let fb = document.getElementById("fb").value;
  document.getElementById("T-fb").innerText = fb;

  //get instagram 
  let ins = document.getElementById("ins").value;
  document.getElementById("T-ins").innerText = ins;
  //get instagram 
  let twt = document.getElementById("twt").value;
  document.getElementById("T-twt").innerText = twt;
  //get lin 
  let lin = document.getElementById("lin").value;
  document.getElementById("T-lin").innerText = lin;


  /*get acadamic education;*/

  //get objecjtive
  let obj = document.getElementById("obj").value;
  document.getElementById("T-obj").innerText = obj;


  //gett wkeprfield;
  let wkeprfield = document.getElementsByClassName("wkeprfield");
  let str = '';
  for (const field of wkeprfield) {
    str += `
  <li class="list-group-item">${field.value}</li>
  `;
  }
  document.getElementById('T-wrkexp').innerHTML = str;





  //gett acafield ;
  let acafield = document.getElementsByClassName("acafield ");
  let str1 = '';
  for (const field of acafield) {
    str1 += `
  <li class="list-group-item">${field.value}</li>
  `;
  }
  document.getElementById('T-acaqli').innerHTML = str1;




  //reset all field;
  document.forms[0].reset();

}

// print cv
function printcv() {
window.print();
}