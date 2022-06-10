//Listion for submit
document.getElementById('loan-form').addEventListener('submit', caculateResults);


//Calculate Results
function caculateResults(e){
    console.log('Calculating.....');

    //UL Vars
    const amount = document.getElementById('amount');
    const interest = document.getElementById('interest');
    const years = document.getElementById('years');
    const monthelyPayments = document.getElementById('monthly-payment');
    const totalPayments = document.getElementById('total-payment');
    const totalInterest = document.getElementById('total-interest');

    const principal = parseFloat(amount.value);
    const caculateInterest = parseFloat(interest.value) /100 /12;
    const caculatePayments = parseFloat(years.value)* 12;


    //compute monthly payment
    const x = Math.pow(1 + caculateInterest, caculatePayments);
    const monthly = (principal*x*caculateInterest)/(x-1);

    if(isFinite(monthely)){
        monthelyPayments.value = monthly.toFixed(2);
        totalPayments.value = (monthly * caculatePayments).toFixed(2);
        totalInterest.value = ((monthly * caculatePayments)- principal).toFixed(2);
    }else{
        showError('please checke your numbers ');
    }

    e.preventDefault();
}

//Show Error
function showError(error){
    //Create a div
    const errorDiv = document.createElement('div');

    //Get Elements
    const card = document.querySelector('.card');
    const heading = document.querySelector('.heading');
    
    //Add class
    errorDiv.className = 'alert alert-danger';

    //Create a text node and append to div
    errorDiv.appendChild(document.createTextNode(error));

    //Insert error above headng
    card.insertBefore(errorDiv, heading);

    //Clear error after 3 seconds
    setTimeout(clearError, 3000);

}

//Clear error
function clearError(){
    document.querySelector('.alert').remove();
}