/**
 * Created by edgar971 on 8/17/15.
 */
Template.CarsWrapper.helpers({
    "Cars": function(){
        return CarList.find();
    }
});