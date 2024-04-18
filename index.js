
document.addEventListener('DOMContentLoaded', function() {
   
    var form = document.forms.registration;
  
    
    form.addEventListener('submit', function(event) {
      event.preventDefault(); 
  
      
      if (validateForm()) {
        
    
        
        window.location.href = 'final.html'
      }
    });
    var Back = document.getElementById('back');
    Back.addEventListener('click', function(event) {
      event.preventDefault(); 
      window.location.href = 'index.html'; 

    });
    
    function validateForm() {
      
      var userId = form.userid.value.trim();
      var password = form.passid.value.trim();
      var name = form.username.value.trim();
      var address = form.address.value.trim();
      var country = form.country.value;
      var zipCode = form.zip.value.trim();
      var email = form.email.value.trim();
      var gender = form.querySelector('input[name="msex"]:checked, input[name="fsex"]:checked');
  
      
      if (userId === '' || password === '' || name === '' || address === '' || country === 'Default' || zipCode === '' || email === '' || !gender) {
        alert('Please fill in all required fields.');
        return false; 
      }
  
     
      var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        return false; 
      }
  
      
      return true;
    }
  });
  