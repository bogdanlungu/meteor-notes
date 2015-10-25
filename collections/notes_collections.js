/*
 * Collections
 */
Categories = new Mongo.Collection('categories');
Notes = new Mongo.Collection('notes');

Categories.allow({
   update: function(userId, token) { return ownsDocument(userId, token); },
   remove: function(userId, token) { return ownsDocument(userId, token); }
});

Notes.allow({
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
     },

     addNote: function(collectionAttributes){
       var note = _.extend(collectionAttributes, {
          uId:Meteor.userId(),
          date: new Date()
       });
       return Notes.insert(note); // return the _id;
     },

     removeNote: function(id){
       Notes.remove({_id: id});
     },

     updateNote: function(id, collectionAttributes){
       var note = _.extend(collectionAttributes, {
          update: new Date()
       });
       Notes.update({uId:Meteor.userId(), _id: id}, {$set: note});
     },
   });
}
