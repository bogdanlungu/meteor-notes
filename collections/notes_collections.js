/*
 * Collections
 */
Categories = new Mongo.Collection('categories');

Categories.allow({
   update: function(userId, token) { return ownsDocument(userId, token); },
   remove: function(userId, token) { return ownsDocument(userId, token); }
});

if(Meteor.isServer){
   Meteor.methods({
     addCollection: function(collectionAttributes){
       var category = _.extend(accountAttributes, {
          uId:Meteor.userId(),
          date: new Date()
       });
       Categories.insert(category);
     }
   });
}
