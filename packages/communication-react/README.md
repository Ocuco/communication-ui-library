# @Azure/communication-react

`@Azure/communication-react` is a react library that makes it easy for you to build modern communications user experiences using [Azure Communication Services](https://azure.microsoft.com/services/communication-services/). It gives you a library of react components built on top of [FluentUI](https://developer.microsoft.com/fluentui#/) that you can drop into your applications.

Read more about Azure Communication Services - UI Library [here](https://aka.ms/acsstorybook).

## Prerequisites

- An Azure account with an active subscription. [Create an account for free](https://azure.microsoft.com/free/?WT.mc_id=A261C142F).
- An active Communication Services resource. [Create a Communication Services resource](https://docs.microsoft.com/azure/communication-services/quickstarts/create-communication-resource?tabs=windows&pivots=platform-azp).
- [Node.js (16.19.0 and above)](https://nodejs.org/)

## Installing

`@azure/communication-react` is a React library. It requires a reasonable React environment and support up to React 18.
We recommend using Vite [Create a react app from scratch](https://react.dev/learn/build-a-react-app-from-scratch) and [Create your first project with Vite](https://vite.dev/guide/#scaffolding-your-first-vite-project) or a similar tool to initialize your application.

```bash
npm i @azure/communication-react
```

`@azure/communication-react` specifies core Azure Communication Services as `peerDependencies` so that
you can most consistently use the API from the core libraries in your application. You need to install those libraries as well:

```bash
npm i @azure/communication-calling
npm i @azure/communication-chat
```

## Storybook

For complete documentation, quickstarts, and interactive components, check out our [Storybook](https://aka.ms/acsstorybook).
