
// -------top button start---------

const backToTopButton = document.querySelector("#back-to-top-btn");
window.addEventListener("scroll", scrollFunction);
function scrollFunction(){
    if (window.pageYOffset >400){
        backToTopButton.style.display="block";
    }
    else{
        backToTopButton.style.display="none";
    }
}

backToTopButton.addEventListener("click", backToTop);
function backToTop(){
    window.scrollTo(0,0);
}


// -------top button end---------


function checkFirstName(){
	var firstName= $('#firstName').val();
	var reg= /^[A-Z a-z.-]{2,11}$/;
		//if(firstName.length>2 && firstName.length<11)
		if(reg.test(firstName))
			{
				$('#firstNameError').text('');
				return true;
			}
		else
			{
				$('#firstNameError').text('*First Name must be valid and should be 3 to 10 Charecters');
				return false;
			}
};


function checkLastName(){
	var lastName= $('#lastName').val();
	var reg= /^[A-Z a-z.-]{2,11}$/;
		if(reg.test(lastName))
			{
				$('#lastNameError').text('');
				return true;
			}
		else
			{
				$('#lastNameError').text('*Last Name should be 3 to 10 Charecters');
				return false;
			}
}


function checkEmail(){
	var emailAddress= $('#emailAddress').val();
	var reg=/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
		if(reg.test(emailAddress))
			{
				$('#emailAddressError').text('');
				return true;
			}
		else
			{
				$('#emailAddressError').text('* Enter Valid Email');
				return false;
			}
}





$('#firstName').keyup(function(){
	checkFirstName();
});



$('#lastName').keyup(function(){
	checkLastName();
});

$('#emailAddress').keyup(function(){
	checkEmail();
});



$('#form').submit(function(){
	if (checkFirstName()==true || checkLastName()==true || checkEmail()==true  )
		{
			return true;
		}
	else
		{	
			return false;
		}
});