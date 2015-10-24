if (Meteor.isServer) {
  Meteor.publish('categories', function() {
    return Categories.find( {uId: this.userId} );
  });
}
