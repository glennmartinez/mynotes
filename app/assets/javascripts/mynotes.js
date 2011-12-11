$(function() {
    
    window.Mynote = Backbone.Model.extend({
    
    });
    //
    window.Mynotes = Backbone.Collection.extend({
       model: Mynote,
       url: "/mynotes"
        
    });
    
    window.library = new Mynotes();
        
    
    window.MynoteView = Backbone.View.extend({
            tag: 'li',
            className: 'mynote',
            
            initialize: function() {
             _.bindAll(this, 'render');
             this.model.bind('change', this.render);
             this.template = _.template($('#mynote-template').html());
            },
            
            initializeTemplate: function() {
                 this.template = _.template($(this.template).html());
            },
            
            render: function() {
                 $(this.el).html(this.template(this.model.toJSON()));
                 this.setData();
                 return this;
            },
            
            setData: function() {
                 var title = this.model.get('title');
                 this.$('.mynote-title').text(title);
                 var content = this.model.get('content');
                 this.$('.mynote-content').text(content);
                       
            }
         
              
    });
    
    window.LibraryMynoteview = MynoteView.extend({
        
    });
    
    window.LibraryView = Backbone.View.extend({
                tagName: 'section',
                className: 'mynotes',
           
                     
               initialize: function() {
                      _.bindAll(this, 'render');
                      this.template = _.template($('#library-template').html());
                      this.collection.bind('reset', this.render);
               },
               
               render: function() {
                        var $mynotes,
                              collection = this.collection;
                             
                        $(this.el).html(this.template({}));
                        $mynotes = this.$(".mynotes");
                        collection.each(function(mynote) {
                                var view = new LibraryMynoteview({
                                      model: mynote,
                                      collection: collection
                                });
                                $mynotes.append(view.render().el);
                            
                        });
                        return this;
               }
        
    });
    
    window.MyApp = Backbone.Router.extend({
            routes: {
                '': 'home',
            'blank': 'blank'
            },
            
            initialize: function() {
                this.libraryView = new LibraryView({
                     collection: window.library
                });
                
            },
            
            home: function() {
                var $container = $('#container');
                $container.empty();
                $container.append(this.libraryView.render().el);
            },
            
            blank: function() {
                $('#container').empty();
                $('#container').text('blank dude cheers.');
            }
    });
    
    $(function() {
            window.App = new MyApp();
            Backbone.history.start();
        
    })
});

