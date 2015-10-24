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
     addCategory: function(collectionAttributes){
       var category = _.extend(collectionAttributes, {
          uId:Meteor.userId(),
          date: new Date()
       });
       Categories.insert(category);
     },

     removeCategory: function(id){
       Categories.remove({_id: id});
     },

     editCategory: function(id, collectionAttributes){
       Categories.update({uId:Meteor.userId(), _id: id}, {$set: collectionAttributes});
     }
   });
}
