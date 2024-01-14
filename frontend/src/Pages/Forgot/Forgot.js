import "./Forgot.css";
import { Link} from "react-router-dom";

const Forgot = () => {
  return (
   <section class="login-main-wrapper">
         <div class="container-fluid pl-0 pr-0">
            <div class="row no-gutters">
               <div class="col-md-12 p-5  full-height">
                  <div class="login-main-left">
                     <div class="text-center mb-5 login-main-left-header pt-4">
                        <h1>RESET PASSWORD</h1>
                        <h6 class="mt-3 mb-3">Welcome to Vidoe</h6>
                        
                     </div>
                     <form action="https://askbootstrap.com/preview/vidoe-v1-1/index.html">
                        <div class="form-group">
                           <label>Enter Email / Mobile number</label>
                           <input type="text" class="form-control" placeholder="Enter Email / Mobile number"/>
                        </div>
                        <div class="mt-4">
                           <button type="submit" class="btn buttonlog btn-block btn-lg">Reset Password</button>
                        </div>
                     </form>
                     <div class="text-center mt-5">
                        <p class="light-gray">Don’t have an account? <Link to="/register">Sign Up</Link></p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
  );
};

export default Forgot;
