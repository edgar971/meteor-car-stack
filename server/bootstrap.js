Meteor.startup(function(){
    //if we have an empty list
    if(CarList.find().count() === 0) {
        //create an example car
        var entry =  {
            title: "Subaru WRX Red",
            description: "Here is some more information about this product that is only revealed once clicked on.",
            specs: [
                {
                    icon_type: 'fire',
                    value: '350HP'
                },
                {
                    icon_type: 'fuel',
                    value: 'E85'
                },
                {
                    icon_type: 'clock',
                    value: '4.5s'
                },

            ],
            votes: {
                up: 40,
                down: 10
            }
            ,
            images: [
                {
                    title: "Side View",
                    sizes: {
                        small: 'http://lorempixel.com/g/300/300/',
                        medium: 'http://lorempixel.com/g/400/350/',
                        large: 'http://lorempixel.com/g/600/500/'
                    }
                }
            ]
        };
        var FakeEntry = [];
        for(var i = 0; i < 35; i ++) {
            FakeEntry.push(entry);
        }

        _.each(FakeEntry, function(entry){
            CarList.insert(entry);
        });

    }
})