import { MetricsPanelCtrl } from 'app/plugins/sdk';
import _ from 'lodash';

export class SampleCtrl extends MetricsPanelCtrl {
    constructor($scope, $injector, $rootScope) {
        super($scope, $injector);
        this.$rootScope = $rootScope;

        var panelDefaults = {
            data: {
                dataValue: 0,
                dataLabel: '',
            },
            FontSize: '70%',
        };

        _.defaults(this.panel, panelDefaults);
        this.fontCalc = [
            {
                text: '60%',
                value: '0.6vw'
            },
            {
                text: '70%',
                value: '0.8vw'
            },
            {
                text: '80%',
                value: '1vw'
            },
            {
                text: '100%',
                value: '1.4vw'
            },
            {
                text: '110%',
                value: '1.6vw'
            },
            {
                text: '120%',
                value: '1.8vw'
            },
            {
                text: '130%',
                value: '2vw'
            },
            {
                text: '140%',
                value: '2.2vw'
            },
            {
                text: '150%',
                value: '2.4vw'
            },
            {
                text: '160%',
                value: '2.6vw'
            },
            {
                text: '180%',
                value: '3vw'
            },
            {
                text: '200%',
                value: '3.4vw'
            },
            {
                text: '220%',
                value: '3.8vw'
            },
            {
                text: '230%',
                value: '4vw'
            },
        ];

        if (this.scope.$$listeners.isWisePaas) {
            this.events.on('render', this.onRender.bind(this));
            this.events.on('data-received', this.onDataReceived.bind(this));
            this.events.on('data-error', this.onDataError.bind(this));
            this.events.on('data-snapshot-load', this.onDataReceived.bind(this));
            this.events.on('init-edit-mode', this.onInitEditMode.bind(this));
        }
    }

    onRender() {
        console.log('Render', this);
    }

    onDataReceived(dataList) {
        console.log('DataList:', dataList, this);
        if (dataList.length > 0) {
            if (dataList.length > 1) {
                const error = new Error();
                error.message = 'Multiple Series Error';
                error.data = 'Metrics query returns' + dataList.length + 'series. This panel excepts a single series.\n\nResponse:\n' + JSON.stringify(dataList);
                throw error;
            } else {
                var dataLength = dataList[0].datapoints.length;
                if (dataLength) {
                    this.panel.data.dataValue = dataList[0].datapoints[dataLength - 1][0];
                    this.panel.data.dataLabel = Date(dataList[0].datapoints[dataLength - 1][1]);
                }
            }
        } else {
            this.panel.data.dataValue = 0;
            this.panel.data.dataLabel = 'null';
        }
        this.render();
    }

    onDataError() {
        this.panel.data.dataLabel = 'Data Error';
        this.render();
    }

    onInitEditMode() {
        this.addEditorTab('Options','public/plugins/sample-panel/editor.html',2);
    }
}

SampleCtrl.templateUrl = 'module.html';
