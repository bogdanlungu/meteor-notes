if (Meteor.isServer) {
  Meteor.publish('categories', function () {
    return Categories.find({ uId: this.userId });
  });

  Meteor.publish('notes', function () {
    return Notes.find({ uId: this.userId });
  });
}
