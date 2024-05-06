import { IExecuteFunctions } from 'n8n-core';
import { INodeExecutionData, INodeType, INodeTypeDescription } from 'n8n-workflow';

export class WaveApps implements INodeType {
    description: INodeTypeDescription = {
        displayName: 'WaveApps',
        name: 'waveApps',
        icon: 'file:waveapps.svg',
        group: ['transform'],
        version: 1,
        description: 'Node to interact with WaveApps API',
        defaults: {
            name: 'WaveApps',
            color: '#772244',
        },
        inputs: ['main'],
        outputs: ['main'],
        credentials: [
            {
                name: 'waveAppsApi',
                required: true,
            },
        ],
        properties: [
            // Define your node properties here
        ],
    };

    async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
        const items = this.getInputData();
        const returnData: INodeExecutionData[] = [];

        // API interaction logic
        for (let i = 0; i < items.length; i++) {
            try {
                const result = await axios.get('https://api.waveapps.com', {
                    headers: {
                        'Authorization': `Bearer ${this.getCredentials('waveAppsApi').apiKey}`,
                    },
                });
                returnData.push({ json: result.data });
            } catch (error) {
                throw new Error(`Failed to fetch data from WaveApps: ${error.message}`);
            }
        }

        return [returnData];
    }
}
