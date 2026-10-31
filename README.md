# Gatsblog

A Next.js frontend (`src/services/frontend`) that runs in a Docker container. You operate the stack with `jaz`
targets: run them from this directory. `jaz --list-all` lists them.

## Requirements

- `jaz` (jazzoo), with `expandvars` installed next to it (`pip install expandvars`)
- `docker` with compose, and `tmux`

## First time: initialise the stack

```
$ (cd src/services/frontend && jaz create-opt-paths)   # the fish history of the override file
$ jaz compose.build
$ jaz compose.init
```

`compose.init` installs the node modules, starts the dev server and waits until it is healthy. Then it checks the
homepage (http://localhost:3001/) and offers to open it in the browser.

## Day to day: start the server by hand

```
$ jaz compose.up       # start the container (the server doesn't run yet)
$ jaz tmux             # in another terminal: pick `jaz fe.run-server` in the menu
```

`jaz fe.shell` opens a shell in the container, and `jaz fe.exec "yarn lint"` runs a command in it.
`jaz compose.down` stops the stack.

## Configuration

The config is in `env/local/config/base.yaml`. Put your own settings in `env/local/config/local.yaml`, which
overrides it and is not checked in. Your own volumes (e.g. the jazzoo checkout) go in
`env/local/docker/docker-compose.override.yml`, which is not checked in either.
`jaz config.print` prints the merged config, and `jaz config.edit` opens the config files.
