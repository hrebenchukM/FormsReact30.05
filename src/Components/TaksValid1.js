import React from "react";
export class UserForm extends React.Component {
    constructor(props) {
      super(props);
      var name = props.name;
      var nameIsValid = this.validateName(name);
      var age = props.age;
      var ageIsValid = this.validateAge(age);
      this.state = {name: name, age: age, nameValid: nameIsValid, ageValid: ageIsValid};
 
      this.onNameChange = this.onNameChange.bind(this);
      this.onAgeChange = this.onAgeChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
      validateAge(age){//вернется тру или фолс
          return age>=0;
      }
      validateName(name){//вернется тру или фолс
          return name.length>2;
      }
      onAgeChange(e) {
          var val = e.target.value;//получаем
          var valid = this.validateAge(val);//пропускаем через валидацию
          this.setState({age: val, ageValid: valid});
      }
      onNameChange(e) {
          var val = e.target.value;//получаем
          console.log(val);
          var valid = this.validateName(val);//пропускаем через валидацию
          this.setState({name: val, nameValid: valid});
      }
 
      handleSubmit(e) {
          e.preventDefault();//потому что идет отправка
          if(this.state.nameValid ===true && this.state.ageValid===true){
              alert(`Имя: ${this.state.name} Возраст: ${this.state.age}`);
          }
      }
 
      render() {
          // цвет границы для поля для ввода имени
          var namevalid = this.state.nameValid===true?"valid":"invalid";
          // цвет границы для поля для ввода возраста
          var agevalid = this.state.ageValid===true?"valid":"invalid";
          return (
              <form onSubmit={this.handleSubmit}>
                  <p>
                      <label>Имя:</label><br />
                      <input type="text" value={this.state.name} 
                          onChange={this.onNameChange} className={namevalid} />
                  </p>
                  <p>
                      <label>Возраст:</label><br />
                      <input type="number" value={this.state.age} 
                          onChange={this.onAgeChange}  className={agevalid} />
                  </p>
                  <input type="submit" value="Отправить" />
              </form>
          );
      }
  }
