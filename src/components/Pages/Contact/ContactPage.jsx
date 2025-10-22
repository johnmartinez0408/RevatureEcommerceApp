import Navbar from "../../Common/Navbar";
const ContactPage = ()=>{
    return (
        <>
            <Navbar/>
            <div className='container wrapper bg-light shadow'>
                <div className="jumbotron text-center " style={{background:"none"}}>
                    <h1 className="display-4">Contact</h1>
                    <p className="lead">Get in touch with our team for any questions or concerns</p>
                    <div className="container">
                        <section>
                        <form className="text-left">
                                <div class="form-group">
                                    <label for="exampleInputEmail1">Email address</label>
                                    <input type="email" class="form-control" id="email" aria-describedby="emailHelp"/>
                                    <small id="email" class="form-text text-muted">We'll never share your email with anyone else.</small>
                                </div>
                                <div class="form-group">
                                    <label for="name">Name</label>
                                    <input type="text" class="form-control" id="name"/>
                                </div>
                                <div class="form-group">
                                    <label for="exampleFormControlTextarea1">Message</label>
                                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                </div>
                                <div className="col-md-12 text-center">
                                    <button type="submit" class="btn btn-primary">Submit</button>
                                </div>
                                </form>
                        </section>
                    </div>
                    
                </div>
            </div>
        </>
    )
}

export default ContactPage;