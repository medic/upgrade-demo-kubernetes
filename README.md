# UpgradeDemo

This angular application demonstrates how to use the kubernetes upgrade service to expose a UI to end users that they can use to upgrade pods without the need to use tools like `kubectl`.
## Prerequisites

To get this working, you also have to deploy the upgrade-service-kubernetes repo to a kubernetes cluster. It can be found here: https://github.com/medic/upgrade-service-kubernetes.

## Deploying to Kubernetes

The kubernetes configuration files are found in the `kubernetes` directory.
## Development

To get the development server running:

`ng serve --open`

This will open a webserver and will navigate to `http://localhost:4200/`

The current version that's running will show up and upgrades that are available will also be listed here. You can click on the possible upgrades to send upgrade request to the kubernetes upgrade service deployment.

