/**
 * Created by edgar971 on 8/17/15.
 */
Template.CarsWrapper.helpers({
    "Cars": function(){
        return CarList.find();
    }
});

//when the page is rendered
Template.CarsWrapper.onRendered(function(e){
    console.log(this.$('.main-grid'));
    var $gridWrapper = this.$('.main-grid'),
        $gridItems = $gridWrapper[0].children;
    console.log($gridItems);
    //start masonry plugin
    var $grid = this.$('.main-grid').masonry({
        itemSelector: '.grid-item',
        columnWidth: '.grid-sizer',
        gutter: '.grid-gutter-sizer',
        percentPosition: true,
        isInitLayout: false,
    });
    $grid.masonry();
    $grid.masonry( 'appended', $gridItems);

    $grid.on( 'layoutComplete', function( event, items ) {
        console.log( items );
    });


})