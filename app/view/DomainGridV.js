Ext.define('Controller.view.DomainGridV', {
    extend: 'Ext.grid.GridPanel',
    alias: 'widget.domaingridview',

    flex: 1,
    
    title: 'Rank Domains',
    store: 'DomainS',

    columns: [
        {
            xtype: 'gridcolumn',
            dataIndex: 'name',
            text: 'Domain Name',
            flex: 3
        },
        {
            xtype: 'gridcolumn',
            dataIndex: 'rank',
            text: 'Rank',
            flex: 2
        },
        {
            xtype: 'actioncolumn',
            text: 'Vote',
            flex: 1,
            items: [
                {
                    icon: './resources/images/check.jpg',
                    altText: 'Add',
                    tooltip: 'Up-vote!',
                    handler: function (grid, rowIndex, colIndex){
                        var oRecord = grid.getStore().getAt(rowIndex);
                        var intRank = parseInt(oRecord.get("rank"));
                        
                        intRank++;
                        
                        oRecord.set("rank", intRank);
                        oRecord.commit();

                        grid.getStore().sort({
                            property: 'rank',
                            direction: 'desc'
                        });
                    }
                },
                {
                    icon: './resources/images/delete.jpg',
                    altText: 'Minus',
                    tooltip: 'Down-Vote :(',
                    handler: function (grid, rowIndex, colIndex) {
                        var oRecord = grid.getStore().getAt(rowIndex);
                        var intRank = parseInt(oRecord.get("rank"));
                        
                        --intRank;
                        
                        oRecord.set("rank", intRank);
                        oRecord.commit();
                        
                        grid.getStore().sort({
                            property: 'rank',
                            direction: 'desc'
                        });
                    }
                }
            ]
        }
    ]
});