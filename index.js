 function EmployeeView() {
  var self = this; 
     self.details = ko.observableArray([
    {name:"Smith" ,age:"20"},
    {name:"Allan", age:"10"},
    {name:"Martin", age:30} 
]);
   self.addPerson = function() {
       self.details.splice(1,0,{name: "Bhusan",age :40});
   }
   self.removePerson = function() {
       self.details.remove(this);
   }
 }

ko.applyBindings(new EmployeeView());