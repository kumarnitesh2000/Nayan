import React from 'react'

export const Contact = () => {

    const headerStyle = {

        width: '100%',
        padding: '2%',
        backgroundColor: "red",
        color: 'white',
        textAlign: 'center'
    }
    
    return(
        <div >
           <div class="container">
			<div class="row">
				<div class="col-lg-12">
					<div class="title-box">
						<h2>Contact wth us</h2>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col-lg-12 col-sm-12 col-xs-12">
				  <div class="contact-block">
					<form id="contactForm" novalidate="true">
					  <div class="row">
						<div class="col-md-4">
							<div class="form-group">
								<input type="text" class="form-control" id="name" name="name" placeholder="Your Name" required="" data-error="Please enter your name" />
								<div class="help-block with-errors"></div>
							</div>                                 
						</div>
						<div class="col-md-4">
							<div class="form-group">
								<input type="text" placeholder="Your Email" id="email" class="form-control" name="name" required="" data-error="Please enter your email" />
								<div class="help-block with-errors"></div>
							</div> 
						</div>
						<div class="col-md-4">
							<div class="form-group">
								<input type="text" placeholder="Your Mobile Number" id="mobile_no" class="form-control" name="mobile_no" required="" data-error="Please enter your mobile number" />
								<div class="help-block with-errors"></div>
							</div> 
						</div>
						<div class="col-md-12">
							<div class="form-group"> 
								<textarea class="form-control" id="message" placeholder="Your Message" rows="8" data-error="Write your message" required=""></textarea>
								<div class="help-block with-errors"></div>
							</div>
							<div class="submit-button text-center">
								<button class="btn btn-common disabled" id="submit" type="submit" style="pointer-events: all; cursor: pointer;">Send Message</button>
								<div id="msgSubmit" class="h3 text-center hidden"></div> 
								<div class="clearfix"></div> 
							</div>
						</div>
					  </div>            
					</form>
				  </div>
				</div>
			</div>
		</div>
        </div>
    )
}