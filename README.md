# O11y's Handbook

this repo contains a skeleton React project that leverages Nx

below you find details on ...
- how to set up your local environment (on macOS) to run this application
- how to build and run the application
- how the application is structured

---

## Setup

on macOS
### Install nvm
```shell
  brew install nvm
```
- see https://formulae.brew.sh/formula/nvm#default
- check successful installation with `nvm current`

```console
foo@bar:~$ nvm current
v22.14.0
```   


### Install and setup NodeJS
```shell
  nvm install 22
```
- installs NodeJS v22.14.0 (LTS)
- the output should look like the following:

```console
foo@bar:~$ nvm install 22
Downloading and installing node v22.14.0...
Downloading https://nodejs.org/dist/v22.14.0/node-v22.14.0-darwin-arm64.tar.xz...
############################################################################# 100.0%
Computing checksum with sha256sum
Checksums matched!
Now using node v22.14.0 (npm v10.9.2)
```

#### Set default NodeJS version

```shell
  nvm alias default 22
```

```console
foo@bar:~$ nvm alias default 22
default -> 22 (-> v22.14.0)
```

### Install the project dependencies

```shell
  npm install
```
---

## Project structure

### Components

Components are located in [/components](./apps/o11y-self-service-frontend/app/components)

To keep a clean file structure, we follow the following guidelines for components:
1. for each component create a dedicated folder
2. put each of the following in a separate file
   - the component, (*.tsx)
   - its corresponding styles, (*.styles.tsx)
   - and tests (*.test.tsx)
3. child components should reside under the folder of their parent component

NOTE: Some components might not need custom styles or tests. In this case you can omit the respective file.

```text
e.g.

/components
  ├── Card/
  │    ├── Card.tsx
  │    ├── Card.styles.tsx
  │    ├── Card.test.tsx
  │    ├── CardHeader/
  │    │    ├── CardHeader.tsx
  │    │    ├── CardHeader.styles.tsx
  │    │    ├── CardHeader.test.tsx
  ├── Footer/
  │    ├── Footer.tsx
  │    ├── Footer.styles.tsx
  │    ├── Footer.test.tsx
  │    ├── Links/
  │    │    ├── Links.tsx
  │    │    ├── Links.styles.tsx
  │    │    ├── Links.test.tsx
```

### Custom hooks

Custom hooks are located in [/hooks](./apps/o11y-self-service-frontend/app/hooks)

To keep a clean file structure, we follow the following guidelines for custom hooks:
1. put each custom hook in a separate file
2. group custom hooks in folders, if they are related by domain

```text
e,g,
/hooks
  ├── user/
  │    ├── useUserData.ts
  │    ├── useUserPermissions.ts
  ├── useFetchData.ts
  ├── useThemeToggle.ts
```




---

<a alt="Nx logo" href="https://nx.dev" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="45"></a>

✨ Your new, shiny [Nx workspace](https://nx.dev) is almost ready ✨.

[Learn more about this workspace setup and its capabilities](https://nx.dev/getting-started/tutorials/react-monorepo-tutorial?utm_source=nx_project&amp;utm_medium=readme&amp;utm_campaign=nx_projects) or run `npx nx graph` to visually explore what was created. Now, let's get you up to speed!

## Build & run

[Click here to finish setting up your workspace!](https://cloud.nx.app/connect/SEtQLIjZw5)


### Run tasks

To run the dev server for your app, use:

```sh
npx nx serve o11y-self-service-frontend
```

To create a production bundle:

```sh
npx nx build o11y-self-service-frontend
```

To see all available targets to run for a project, run:

```sh
npx nx show project o11y-self-service-frontend
```

These targets are either [inferred automatically](https://nx.dev/concepts/inferred-tasks?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) or defined in the `project.json` or `package.json` files.

[More about running tasks in the docs &raquo;](https://nx.dev/features/run-tasks?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

### Add new projects

While you could add new projects to your workspace manually, you might want to leverage [Nx plugins](https://nx.dev/concepts/nx-plugins?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) and their [code generation](https://nx.dev/features/generate-code?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) feature.

Use the plugin's generator to create new projects.

To generate a new application, use:

```sh
npx nx g @nx/react:app demo
```

To generate a new library, use:

```sh
npx nx g @nx/react:lib mylib
```

You can use `npx nx list` to get a list of installed plugins. Then, run `npx nx list <plugin-name>` to learn about more specific capabilities of a particular plugin. Alternatively, [install Nx Console](https://nx.dev/getting-started/editor-setup?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) to browse plugins and generators in your IDE.

[Learn more about Nx plugins &raquo;](https://nx.dev/concepts/nx-plugins?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) | [Browse the plugin registry &raquo;](https://nx.dev/plugin-registry?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)


[Learn more about Nx on CI](https://nx.dev/ci/intro/ci-with-nx#ready-get-started-with-your-provider?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

### Install Nx Console

Nx Console is an editor extension that enriches your developer experience. It lets you run tasks, generate code, and improves code autocompletion in your IDE. It is available for VSCode and IntelliJ.

[Install Nx Console &raquo;](https://nx.dev/getting-started/editor-setup?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

### Useful links

Learn more:

- [Learn more about this workspace setup](https://nx.dev/getting-started/tutorials/react-monorepo-tutorial?utm_source=nx_project&amp;utm_medium=readme&amp;utm_campaign=nx_projects)
- [Learn about Nx on CI](https://nx.dev/ci/intro/ci-with-nx?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)
- [Releasing Packages with Nx release](https://nx.dev/features/manage-releases?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)
- [What are Nx plugins?](https://nx.dev/concepts/nx-plugins?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

And join the Nx community:
- [Discord](https://go.nx.dev/community)
- [Follow us on X](https://twitter.com/nxdevtools) or [LinkedIn](https://www.linkedin.com/company/nrwl)
- [Our Youtube channel](https://www.youtube.com/@nxdevtools)
- [Our blog](https://nx.dev/blog?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)
