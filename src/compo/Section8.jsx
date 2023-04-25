import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Section8 = () => {
    const submiteddd = () =>{
        toast("Sccessfully submit");
    }
 
  return (
    <>
         

<section className="section section-contact">
    <div className="container">
        <h2 className="common-heading">Contact US</h2>
    </div>

    <div className="section-contact-main contact-container">
        <form onSubmit={submiteddd}>
            <div className="grid grid-two-column" >
                <div>
                    <label for="username"></label>
                    <input type="text" name="username" placeholder="username" id="username" required autoComplete="off"/>
                </div>
                <div>
                    <label for="email"></label>
                    <input type="email" name="email" placeholder="demo@gmail.com" id="email" required  autoComplete="off"/>
                </div>
            </div>  

            <div>
                <label for="subject"></label>
                <input type="text" name="subject" placeholder="subject" id="subject" required autoComplete="off"  />
            </div>
            <div><label for="textarea"></label>
                <textarea name="textarea" id="textarea" cols="30" rows="10"></textarea>
            </div>

            <div>
                <input value="submit" type="submit" name="submit" className="btn"  />
                <ToastContainer />
            </div>

        </form>
    </div>
</section>

    </>
  )
}

export default Section8;