
Ext.define('Controller.controller.Cars', {
    extend: 'Ext.app.Controller',

    refs: [
        {
            ref: 'detailPanel',
            selector: '#detailPanel'
        },
        {
            ref: 'subscriberList',
            selector: '#subscriberList'
        },
        {
            ref: 'detailPie',
            selector: '#detailPie'
        }
    ],

    onGridpanelSelect: function(rowmodel, record, index, eOpts) {

        // Get view references
        var detailPanel = this.getDetailPanel(),
            oSubscribers = this.getSubscriberList(),
            oDetailPie = this.getDetailPie();

        // Update details panel with data
        detailPanel.update(record.data);

        var intDeploymentId = record.data.deploymentId;

        oSubscribers.store.load({ params: { deploymentId: intDeploymentId } });

        oDetailPie.store.load({ params: { deploymentId: intDeploymentId } });

        // Get the quality field from record
        //var qualityData = record.get('quality');
        // Update chart with data
        //chart.store.loadData(qualityData);



    },

    init: function(application) {
        this.control({
            "#carGrid": {
                select: this.onGridpanelSelect
            }
        });
    }

});
