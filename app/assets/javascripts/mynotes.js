(function($) {
    
    window.Mynote = Backbone.Model.extend({
        url : function() {
            var base = 'mynotes';
            if (this.isNew()) return base;
            return base + (base.charAt(base.length - 1) == '/' ? '' : '/') + this.id;
        }
    });
    
    window.Mynotes = Backbone.Collection.extend({
       model: Mynote,
       url: "/mynotes"
        
    });
    
    window.MynoteView = Backbone.View.extend({
       template: "#mynote-template",
       tag: 'li',
       className: 'mynote',
       
       initialize: function() {
        _.bindAll(this, 'render');
        this.initializeTemplate();
       },
       
       initializeTemplate: function() {
            this.template = _.template($(this.template).html());
       },
       
       render: function() {
            $(this.el).html(this.template(this.model.toJSON()));
            return this;
       }
    });
    
    Mynote.Controllers = Backbone.Controller.extend({
        routes: {
            "":                 "index",
            "/mynotes/id":      "edit",
            "new":              "newMynote"
        }
    })
    
})(jQuery);

