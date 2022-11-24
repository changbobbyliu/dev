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
pscale branch list <db-name> # list all branches & status
pscale shell <db-name>
pscale connect <db-name> <branch-name> # proxy DATABASE_URL for dev -> mysql://127.0.0.1:3306/<db-name>
```

## [integragte w/ prisma](https://www.youtube.com/watch?v=iaHt5_hg44c)

### Default VARCHAR not long enough

```prisma
content   String?         @db.Text
```

### Add index to Foreign Key manually

```
show create table UserSettings; # show table schema, like indexes
SELECT table_schema "testdb1",
        SUM(data_length + index_length) / 1024 / 1024 "DB Size in MB"
FROM information_schema.tables
GROUP BY table_schema;
```

Before

```sql
CREATE TABLE `Comment` ( `id` int NOT NULL AUTO_INCREMENT, `content` text COLLATE utf8mb4_unicode_ci NOT NULL, `postId` int NOT NULL, PRIMARY KEY (`id`) ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci
```

After

```sql
CREATE TABLE `Comment` ( `id` int NOT NULL AUTO_INCREMENT, `content` text COLLATE utf8mb4_unicode_ci NOT NULL, `postId` int NOT NULL, `userId` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL, PRIMARY KEY (`id`), KEY `Comment_postId_idx` (`postId`), KEY `Comment_userId_idx` (`userId`) ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci
```
