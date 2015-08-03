$(document).ready(function(){
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
    $('.modal-trigger').leanModal();
    $('.datepicker').pickadate({
        selectMonths: false, // Creates a dropdown to control month
        selectYears: 60 // Creates a dropdown of 15 years to control year
    });
});