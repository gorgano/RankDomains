
Ext.define('Controller.store.DomainS', {
    extend: 'Ext.data.Store',

    requires: [
        'Controller.model.DomainM'
    ],
    
    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
                model: 'Controller.model.DomainM',
                storeId: 'DomainS',
                data: [
                    { name: 'http://nihil-voluptate-popup-labore-sint-bag-delectus-sartorial-mixtape-bespoke.uk', rank: 0 },
                    { name: 'http://locavore-eiusmod-bespoke-denim-Pabst-Irure-out-messenger-labore-labore.net', rank: 0 },
                    { name: 'http://aliqua-truck-labore-Sed-chicharrones-sold-green-Veniam-juice-non.com', rank: 0 },
                    { name: 'http://non-lofi-fingerstache-mixtape-bespoke-sustainable-green-postironic-sustainable-fanny.com', rank: 0 },
                    { name: 'http://gastropub-truck-jean-voluptate-nihil-whatever-typewriter-voluptate-chambray-ullamco.com', rank: 0 },
                    { name: 'http://offal-rights-rights-them-id-juice-magna-sold-locavore-literally.edu', rank: 0 },
                    { name: 'http://polaroid-mixtape-lofi-locavore-narwhal-messenger-magna-before-non-eu.uk', rank: 0 },
                    { name: 'http://braid-literally-aliqua-health-sriracha-lofi-popup-literally-meggings-deserunt.com', rank: 0 },
                    { name: 'http://jean-swag-popup-tote-cillum-literally-Authentic-Bitters-messenger-gentrify.net', rank: 0 },
                    { name: 'http://delectus-magna-truck-esse-aute-chartreuse-eiusmod-tryhard-rights-tryhard.edu', rank: 0 }
                ]
        }, cfg)]);
    }
});