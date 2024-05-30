
import React from 'react';
import  { useState } from 'react';





export function MyForm(props) {
    
  const [name, setName] = useState(props.name );
  const [age, setAge] = useState(props.age );
  const [id, setId] = useState(props.id );
  const [password, setPassword] = useState(props.password);
  const [adress, setAdress] = useState(props.adress);
  const [country,setCountry]=useState(props.country);
  const [zip,setZip]=useState(props.zip);
  const [email,setEmail]=useState(props.email);
  const [gender,setGender]=useState(props.gender);
  const [language,setLanguage]=useState(props.language);
  const [about,setAbout]=useState(props.about);
 

  const [nameValid, setNameValid] = useState(validateName(props.name));
  const [ageValid, setAgeValid] = useState(validateAge(props.age));
  const [idValid, setIdValid] = useState(validateId(props.id));
  const [passwordValid, setPasswordValid] = useState(validatePassword(props.password));
  const [adressValid, setAdressValid] = useState(validateAdress(props.adress));
  const [zipValid,setZipValid]=useState(validateZip(props.zip));
  const [emailValid,setEmailValid]=useState(validateEmail(props.email));

  
 function validateId(id) {
    return id.length >= 5 && id.length <= 7;
}

function validatePassword(password) {
    return password.length >= 7 && password.length <= 12;
}

  function validateAge(age) {//вернется тру или фолс
    return age >= 18;
  }

 function validateName(name){//вернется тру или фолс
    var regex = /^[A-Za-z]+$/;
    return regex.test(name);
  }

 function validateAdress(adress){//вернется тру или фолс
    var regex =  /^[A-Za-z0-9]+$/
      return regex.test(adress);
  }
 
  function validateZip(zip){//вернется тру или фолс
    var regex =  /^[A-Za-z0-9]+$/
      return regex.test(zip);
  }
 
  function validateEmail(email){//вернется тру или фолс
    var regex =  /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
      return regex.test(email);
  }
 










  function onAgeChange(e) {
    var val = e.target.value;
    var valid = validateAge(val);
    setAge(val);
    setAgeValid(valid);
  }

  function onNameChange(e) {
    var val = e.target.value;//получаем
    var valid = validateName(val);//пропускаем через валидацию
    setName(val);
    setNameValid(valid);
}


function onIdChange(e) {
    var val = e.target.value;//получаем
    var valid = validateId(val);//пропускаем через валидацию
    setId(val);
    setIdValid(valid);
}

function onPasswordChange(e) {
    var val = e.target.value;//получаем
    var valid = validatePassword(val)//пропускаем через валидацию
    setPassword(val);
    setPasswordValid(valid);
}

function onAdressChange(e) {
    var val = e.target.value;//получаем
    var valid = validateAdress(val)//пропускаем через валидацию
    setAdress(val);
    setAdressValid(valid);
}

function onCountryChange(e) {
    var val = e.target.value;//получаем
    setCountry(val);
  }

  function onZipChange(e) {
    var val = e.target.value;//получаем
    var valid = validateZip(val)//пропускаем через валидацию
    setZip(val);
    setZipValid(valid);
}
function onEmailChange(e) {
    var val = e.target.value;//получаем
    var valid = validateEmail(val)//пропускаем через валидацию
    setEmail(val);
    setEmailValid(valid);
}

function onGenderChange(e) {
    var val = e.target.value;//получаем
    setGender(val);
  }

  function onLanguageChange(e) {
    var val = e.target.value;//получаем
    setLanguage(val);
  }

  function onAboutChange(e) {
    var val = e.target.value;//получаем
    setAbout(val);
  }




  function handleSubmit(e) {
    e.preventDefault();//потому что идет отправка
    if (idValid===true && passwordValid===true && nameValid ===true && adressValid===true && ageValid===true  && country !== '' && zipValid ===true  && emailValid===true && gender !== '' ) {
      alert(`Id: ${id} Password: ${password}  Name: ${name}  Adress: ${adress} Age: ${age} Country: ${country}  Zip:${zip} Email:${email} Sex:${gender}  Language:${language} About:${about} `);
    }
  }


    // цвет границы для поля для ввода имени
  
 
    var idvalid = idValid===true?"valid":"invalid";
    var passwordvalid = passwordValid===true?"valid":"invalid";
    var namevalid = nameValid===true?"valid":"invalid";
    var adressvalid = adressValid===true?"valid":"invalid";
    var agevalid = ageValid===true?"valid":"invalid";
    var zipvalid = zipValid===true?"valid":"invalid";
    var emailvalid = emailValid===true?"valid":"invalid";




  return (
    <form onSubmit={handleSubmit}>
          <p>
                <label>User ID [5 to 7 characters]:</label>
                <input type="text" value={id}  onChange={onIdChange} className={idvalid} />
                { idValid ? <span className="valid-icon">&#x2714;</span> : <span className="invalid-icon">&#x2718;</span> }
            </p>
            <p>
                <label>Password [7 to 12 characters]:</label>
                <input type="text" value={password}  onChange={onPasswordChange} className={passwordvalid} />
                { passwordValid ? <span className="valid-icon">&#x2714;</span> : <span className="invalid-icon">&#x2718;</span> }

            </p>
      <p>
        <label>Name[Alphabates characters]:</label>
        <input type="text" value={name} onChange={onNameChange} className={namevalid}/>
        { nameValid ? <span className="valid-icon">&#x2714;</span> : <span className="invalid-icon">&#x2718;</span> }

      </p>
      <p>
                <label>Adress[Alphanumeric characters]:</label>
                <input type="text" value={adress} onChange={onAdressChange}  className={adressvalid} />
                { adressValid ? <span className="valid-icon">&#x2714;</span> : <span className="invalid-icon">&#x2718;</span> }

            </p>
          
      <p>
        <label>Age:</label>
        <input  type="number"  value={age}  onChange={onAgeChange} className={agevalid} />
        { ageValid ? <span className="valid-icon">&#x2714;</span> : <span className="invalid-icon">&#x2718;</span> }

      </p>


          
      <p>
        <label>Country[Must select a country]:</label>
        <select value={country} onChange={onCountryChange}>
             <option value="">Please select a country</option>
             <option value="UA">Ukraine</option>
            </select>
      </p>


            <p>
                <label>ZIP Code[Alphanumeric characters]:</label>
                <input type="text" value={zip} onChange={onZipChange}  className={zipvalid} />
                { zipValid ? <span className="valid-icon" >&#x2714;</span> : <span  className="invalid-icon">&#x2718;</span> }

            </p>

            <p>
                <label>Email[Valid email]:</label>
                <input type="text" value={email} onChange={onEmailChange}  className={emailvalid} />
                { emailValid ? <span className="valid-icon">&#x2714;</span> : <span className="invalid-icon">&#x2718;</span> }
            </p>

           
    <p>
        <label>Sex[Select Male or Female]:</label>
        <label><input type="radio" value="male" checked={gender === 'male'} onChange={onGenderChange} /> Male</label>
        <label><input type="radio" value="female" checked={gender === 'female'} onChange={onGenderChange} /> Female</label>
    </p>
          

<p>
  <label>Language[Optional]:</label>
  <label><input type="checkbox" value="English" checked={language === 'English'} onChange={onLanguageChange} /> English</label>
  <label><input type="checkbox" value="Ukrainian" checked={language === 'Ukrainian'} onChange={onLanguageChange} /> Ukrainian</label>
  <label><input type="checkbox" value="Russian" checked={language === 'Russian'} onChange={onLanguageChange} />Russian </label>
</p>
<p>
   <label>About[Optional]:</label>
   <textarea value={about} onChange={onAboutChange} />
</p>

      <input type="submit" value="Отправить" />
    </form>
  );
}











// export function UserData2() {
//     const [user, setUser] = React.useState({name:"Tom", age: 36});
     
//     function handleNameChange(event) { 
//       setUser({...user, name: event.target.value});   
//    }
     
//     function handleAgeChange(event) {   
//       setUser({...user, age: event.target.value});   
//    }
//     return (
//       <div>
//         <h3>Имя: {user.name}</h3>
//         <h3>Возраст: {user.age}</h3>
         
//         <div>
//           <p>Имя: <input type="text" value={user.name} onChange={handleNameChange} /></p>
//           <p>Возраст: <input type="number" min="0" max="110" value={user.age} onChange={handleAgeChange} /></p>
//         </div>
//       </div>
//     );
// }