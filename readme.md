# WaveApps Node for n8n

This package provides a custom n8n node to interact with the WaveApps API, allowing users to integrate WaveApps functionalities into their n8n workflows easily.

## Features

- Fetch data from WaveApps.
- Interact with various WaveApps endpoints.
- Authenticate via API key.

## Installation

Follow these steps to install the WaveApps node in your n8n instance.

### Using npm

Run the following command in your n8n root directory:


```
npm install <your-package-name>
```

### From source
Clone the source code directly from the repository and link it to your n8n setup:
git clone <your-repo-url>
cd <your-repo-directory>
npm install
npm link
cd /path/to/n8n
npm link <your-package-name>

## Configuration
To use the WaveApps node, you need to configure the credentials as follows:

- Go to your n8n Credentials
- Click on 'Create New'
- Enter name for your credentials (e.g., 'WaveApps API')
- Enter your API key in the provided field
- Ensure that you have valid API credentials from WaveApps.

### Usage
Once installed and configured, the WaveApps node can be used within your workflows:

1. Drag and drop the WaveApps node into the n8n canvas.
2. Select an operation from the list of available options.
3. Fill in the required input fields based on the operation selected.
4. Execute the node to see the output.

### Operations
- Get Data: Fetches data from your WaveApps account using specific parameters.

### Troubleshooting
If you encounter issues with the WaveApps node, please:

- Check the API key and permissions associated with it.
- Verify that the WaveApps API is reachable and operational.
- Check the n8n console for errors during execution.
- For more help, submit an issue in the repository or contact support.