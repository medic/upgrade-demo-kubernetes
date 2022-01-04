# Kubernetes Upgrade Demo - Self Upgrading Deployment

This angular application demonstrates how to create a self upgrading deployment using the kubernetes upgrade service (Found [here](https://github.com/medic/upgrade-service-kubernetes)) to expose a UI to end users that they can use to upgrade pods without the need for tools like `kubectl`.

![image](https://user-images.githubusercontent.com/3198821/148093274-6ab5e249-a11e-45b2-8ac3-054a62fe02aa.png)


## Prerequisites

To get this working, you also have to deploy the upgrade-service-kubernetes repo to a kubernetes cluster. It can be found here: https://github.com/medic/upgrade-service-kubernetes.

## Deploying to Kubernetes

The kubernetes configuration files are found in the `kubernetes` directory.
## Development

To get the development server running:

`ng serve --open`

This will open a webserver and will navigate to `http://localhost:4200/`

The current version that's running will show up and upgrades that are available will also be listed here. You can click on the possible upgrades to send upgrade request to the kubernetes upgrade service deployment.

