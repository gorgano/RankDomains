


Ext.Loader.setConfig({
    enabled: true
});


Ext.application({
    models: [
        'DomainM'
    ],
    stores: [
    	'DomainS'
    ],
    views: [
        'MainView',
        'DomainGridV'
    ],
    //controllers: [
    //    'DomainC'
    //],
    name: 'Controller',

    launch: function() {
        Ext.create('Controller.view.MainView');
    }

});
