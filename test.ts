


const first = () => {

    console.log("first(): factory evaluated");
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
      console.log("first(): called");
    };

};

test

class testme {
    @first()
    testMethod() {
        console.log("you called me");
    }
}