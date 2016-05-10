
Ext.define('Controller.model.DomainM', {
    extend: 'Ext.data.Model',

    requires: [
        'Ext.data.Field'
    ],

    fields: [
        {
            name: 'name'
        },
        {
            name: 'rank'
        }
    ]
});