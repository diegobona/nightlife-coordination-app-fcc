import React, { Component } from 'react'
import { connect } from 'react-redux'
import { showLoginForm } from '../store/actions'
import $ from 'jquery'


class LoginForm extends Component {

    componentDidMount() {

        $('.login-form').find('input, textarea').on('keyup blur focus', function (e) {
  
            var $this = $(this),
                label = $this.prev('label');
          
                if (e.type === 'keyup') {
                      if ($this.val() === '') {
                    label.removeClass('active highlight');
                  } else {
                    label.addClass('active highlight');
                  }
              } else if (e.type === 'blur') {
                  if( $this.val() === '' ) {
                      label.removeClass('active highlight'); 
                      } else {
                      label.removeClass('highlight');   
                      }   
              } else if (e.type === 'focus') {
                
                if( $this.val() === '' ) {
                      label.removeClass('highlight'); 
                      } 
                else if( $this.val() !== '' ) {
                      label.addClass('highlight');
                      }
              }
          
        });
          
        $('.tab a').on('click', function (e) {
        
            e.preventDefault();
        
            $(this).parent().addClass('active');
            $(this).parent().siblings().removeClass('active');
            
            const target = $(this).attr('href');
        
            $('.tab-content > div').not(target).hide();
        
            $(target).fadeIn(600);
        
        });

    }


render() {
return (
    <div className='container-form' onClick={() => this.props.showForm(false)}>
        
    <div className="login-form" onClick={(e) => e.stopPropagation()}>
      
        <ul className="tab-group">
            <li className="tab active"><a href="#signup">Sign Up</a></li>
            <li className="tab"><a href="#login">Log In</a></li>
        </ul>
        
        <div className="tab-content">
            <div id="signup">   
                <h1>Sign Up for Free</h1>
                
                <form action="/" method="post">
                
                    <div className="field-wrap">
                        <label>
                            Email Address<span className="req">*</span>
                        </label>
                        <input type="email" required autoComplete="off"/>
                    </div>
                    
                    <div className="field-wrap">
                        <label>
                            Set A Password<span className="req">*</span>
                        </label>
                        <input type="password" required autoComplete="off"/>
                    </div>
                    
                    <button type="submit" className="button button-block" >Sign Up</button>
                
                </form>

                </div>
            
            <div id="login">   
            <h1>Welcome Back!</h1>
            
            <form action="/" method="post">
            
                <div className="field-wrap">
                    <label>
                        Email Address<span className="req">*</span>
                    </label>
                    <input type="email" required autoComplete="off"/>
                </div>
            
                <div className="field-wrap">
                    <label>
                        Password<span className="req">*</span>
                    </label>
                    <input type="password" required autoComplete="off"/>
                </div>
                
                {/* <p className="forgot"><a href="#">Forgot Password?</a></p> */}
                
                <button className="button button-block">Log In</button>
                
                </form>

            </div>
            
        </div>
      
    </div>

    </div>
)}

}

// const mapStateToProps = state => (
//     {
//         logged: state.auth.logged
//     }
// )

const mapDispatchToProps = dispatch => (
    { 
        showForm: bool => dispatch(showLoginForm(bool))
    }
)

LoginForm = connect(null, mapDispatchToProps)(LoginForm)

export default LoginForm