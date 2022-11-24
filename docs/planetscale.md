## cli

### install

```sh
brew install planetscale/tap/pscale # first time install -> tap + install
# same as
brew tap planetscale/tap && brew install pscale
brew upgrade pscale # update to latest
```

### commands

```sh
pscale login
pscale database create <db-name>
pscale database list
pscale branch list <db-name> # list all branches
pscale shell <db-name>
```
