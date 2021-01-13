import React, { Component } from 'react'

//Rio Suga Catra Pratama
//41817110155

// const handlePersegi = async e => {
// 	e.preventDefault();
// 	console.log(angka1);
// 	console.log(angka2);
// };

// const handleChange = (e) => {
//        $(e)
//      }

// export default function formPersegi() {
// 	return (
    // <div className="App">
    //   <div className="login-container">
    //   <form className="form" onSubmit={handlePersegi}>
    //         <p>Form Persegi Panjang</p>
    //         <input
    //           type="text"
    //           placeholder="angka 1"
    //           value={angka1}
    //           autoFocus
    //           onChange={handleChange}
    //         />
    //         <input
    //           type="text"
    //           placeholder="angka2"
    //           value={angka2}
    //           onChange={handleChange}
    //         />
    //         <input
    //           type="text"
    //           placeholder="hasil"
    //           value={hasil}
    //           onchange={handleChange}
    //         />
    //         <button className="hitung" type="submit" disabled={isLoading}>
    //           {isLoading ? 'Menghitung' : 'hitung'}
    //         </button>
    //       </form>
    //   </div>
    // </div>
//     );
// }


export class Persegi extends React.Component {
  constructor(props) {
    super(props);
    this.state = {angka1: 0, angka2 : 0, hasil: 0};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({angka1: event.target.angka1, angka2: event.target.angka2, hasil: event.target.hasil});
  }

  handleSubmit(event) {
    var angka_1 = document.getElementById('angka1').value;
    var angka_2 = document.getElementById('angka2').value;
    var hasil = (parseInt(angka_1) + parseInt(angka_2))* 2;
    
    document.getElementById('hasil').value = hasil;
    event.preventDefault();
  }

  render() {
    return (
      <div className="App">
	      <div className="login-container">
	      	<form className="form" onSubmit={this.handleSubmit}>
	            <p>Form Persegi Panjang</p>
	            <label>
          		Angka 1
	            <input
	              type="number"
	              placeholder="angka 1"
	              autoFocus
	              id="angka1"
	              value ={this.state.angka1}
	              onChange={this.handleChange}
	            />
	            </label>
	            <label>
	            Angka 2
	            <input
	              type="number"
	              placeholder="angka2"
	              id="angka2"
	              value ={this.state.angka2}
	              onChange={this.handleChange}
	            />
	            </label>
	            <label>
	            Hasil 
	            <input
	              type="number"
	              placeholder="hasil"
	              id="hasil"
	              readOnly
	              value ={this.state.hasil}
	              onChange={this.handleChange}
	            />
	            </label>
	            <button className="hitung" type="submit">
	             Hitung
	            </button>
	        </form>
	        <h2><a href ="/">Kembali</a></h2>
      </div>
    </div>
    );
  }
}

export default Persegi;