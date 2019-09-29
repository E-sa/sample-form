import React from 'react';
import ReactDOM from 'react-dom';
import "../style/style.scss"


// componentDidMount(){
           
      //  fetch('http://localhost:3000/api/v1/questions')
      //  .then(res => {
      //      console.log(res);
      //      return res.json()
      //  })
      //  .then(users => {
      //      console.log(users);
      //      this.setState({ users })
      //  });

//     fetch('http://localhost:3000/api/v1/questions', {
//         method: 'post',
//         headers: {'Content-Type':'application/json'},
//         body: JSON.stringify({
//          "title": 'f this s'
//         })
//        });

//    }

class Test extends React.Component {

    constructor(props){
    super(props);
    this.questionSubmit = this.questionSubmit.bind(this);

    
    this.state = {
      title : '', //what he typed
      isInit : true,   //init page
      isFirstQuestion : false,   //question page
      isQuestionEmpty:false,
      isFirstOptionEmpty:false,
      isSecondOptionEmpty:false,
      isThirdOptionEmpty:false,
      isButtonShine:false,


      //will save to database 
      questionTitle:'',   
      name: '', //saved after submit
      option_a:'',
      option_b:'',
      option_c:''

    }
    
    }

    componentDidMount(){
      // fetch('http://localhost:3000/api/v1/questions', {
      //   method: 'post',
      //   headers: {'Content-Type':'application/json'},
      //   body: JSON.stringify({
      //   //  "title": this.state.name,
      //   //  "question1":this.state.questionTitle,
      //   //  "answer_b":this.state.option_b,
      //   //  "answer_c":this.state.option_c,
      //    "title":'this.state.option_a'
      //   })
      //  });
    }
    
    
    updateInput(event){
    this.setState({title : event.target.value})
    }
    
    
    handleSubmit(event){
    this.state.name =  this.state.title ;
    console.log('name is: ' + this.state.name);


    this.setState({
      title : '',
      isInit: false,
      isFirstQuestion: true
    });


    }


    checkEmpty  (e) {


      //question title input
      if(e.target.name==='question title' && e.target.value !== ''){
        this.setState({ isQuestionEmpty: true, questionTitle: e.target.value });

        this.a = true;
        console.log(this.state.questionTitle)

        }
      if(e.target.name==='question title' && e.target.value === ''){
        this.setState({ isQuestionEmpty: false, a : false});
        this.a=false;
       

        }

      //option a input
      if(e.target.name==='option a' && e.target.value !== ''){
        this.setState({ isFirstOptionEmpty: true, option_a : e.target.value});
        this.b = true;

        }
      if(e.target.name==='option a' && e.target.value === ''){
        this.setState({ isFirstOptionEmpty: false});
        this.b = false;

        }  

        //option b input
      if(e.target.name==='option b' && e.target.value !== ''){
        this.setState({ isSecondOptionEmpty: true, option_b: e.target.value});
        this.c = true;

        }
      if(e.target.name==='option b' && e.target.value === ''){
         this.setState({ isSecondOptionEmpty: false});
         this.c = false;

        }    

        //option c input
      if(e.target.name==='option c' && e.target.value !== ''){
        this.setState({ isThirdOptionEmpty: true, option_c: e.target.value});
        this.d = true;

        }
      if(e.target.name==='option c' && e.target.value === ''){
         this.setState({ isThirdOptionEmpty: false});
         this.d = false;

        }  


       //shiny buttom
        if(this.a && this.b && this.c && this.d){
          this.setState({ isButtonShine: true});

        }
      if(!this.a || !this.b || !this.c || !this.d){
        this.setState({ isButtonShine: false});
      }

        
    }

    questionSubmit (){

      const isButtonShine2 = this.state.isButtonShine;
      console.log(this.state.questionTitle , this.state.option_a, this.state.option_c, this.state.option_b)


      if(isButtonShine2){
        console.log('ready to go');
        fetch('http://localhost:3000/api/v1/questions', {
          method: 'post',
          headers: {'Content-Type':'application/json'},
          body: JSON.stringify({
           "title": this.state.name,
           "question1":this.state.questionTitle,
           "answer1_a":this.state.option_a,
           "answer1_b":this.state.option_b,
           "answer1_c":this.state.option_c,
           "correctAnswer1":"one of those"
          })
         });
         this.setState({isFirstQuestion:false})
         alert('movafagh amiz')
                    






         
      }




      if(!isButtonShine2){
        console.log('conmplete first')
      }

    }
    
    
    
    
    render(){
    return (

      
        <div className={'app-container'}>

          {/* initiator */}
          { this.state.isInit &&  
          <div className={'app-background'}>
          <input className={'input-style'} type="text" onChange={this.updateInput.bind(this)} placeholder={'what is your name ... '} value={this.state.title}></input>
          {/* <input className={'buttoms'} type="" onClick={this.handleSubmit.bind(this)} ></input> */}
          <button className={'buttoms'} type="" onClick={this.handleSubmit.bind(this)}>
                      <div className={'triangle-down'}>
                        <div className={'triangle-down-top'}></div>
                        <div className={'triangle-down-bot'}></div>
                      </div>
          </button>
          </div>
          }


          {/* first Question */}
          { this.state.isFirstQuestion &&  
          <div className={'question-background'}>


            <h2>ask your question '{this.state.name}', </h2>

          <form className={'question-form'}>
            <ul>
              <li>
                <input 
                    type="text" 
                    name="question title"  
                    placeholder={'your question ... '} 
                    className={ (this.state.isQuestionEmpty ? 'question-input-style' : 'question-input-style-empty') } 
                    onChange={this.checkEmpty.bind(this)}
                     >
                </input>
              </li>
            </ul>
            <ul>
              <li>
                <label htmlFor="option_a" className={'question-label'} > option_a </label>
                <input 
                  type="text"  
                  name="option a"
                  placeholder={' ... '} 
                  className={(this.state.isFirstOptionEmpty ? 'question-option-input-style' : 'question-option-input-style-empty')}
                  onChange={this.checkEmpty.bind(this)}>
                </input>
              </li>
            </ul>
            <ul>
              <li>
                <label htmlFor="option_b"  className={'question-label'} > option_b </label>
                <input 
                  type="text"
                  name="option b"  
                  placeholder={' ... '} 
                  className={(this.state.isSecondOptionEmpty ? 'question-option-input-style' : 'question-option-input-style-empty')}
                  onChange={this.checkEmpty.bind(this)}>                    
                </input>
              </li>
            </ul>
            <ul>
              <li>
                <label htmlFor="option_c" className={'question-label'} > option_c </label>
                <input 
                  type="text"
                  name="option c"  
                  placeholder={' ... '} 
                  className={(this.state.isThirdOptionEmpty ? 'question-option-input-style' : 'question-option-input-style-empty')}
                  onChange={this.checkEmpty.bind(this)}> 
                  
                </input>
              </li>
            </ul>

 
          </form>

          <div className={'question-select-box'}>

            <h6 style={{margin:'auto'}}>select the correct answer: </h6>

            <select name="options" className={'select-box'}>
              <option value="a">a</option>
              <option value="b">b</option>
              <option value="c">c</option> 
            </select>

            <button className={(this.state.isButtonShine ? 'question-button-shine' : 'question-button')} onClick={this.questionSubmit}>Go!</button>
          </div>
          




          </div>
          }

        </div>
      );
    }
    } 
export default Test;

