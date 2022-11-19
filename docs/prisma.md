## Commands

```sh
yarn prisma studio # start GUI

yarn prisma init --datasource-provider mysql # create prisma/schema.prisma
yarn prisma db pull # pull schema
yarn prisma db push # push schema
# run prisma.seed in package.json, use --transpile-only to skip typecheck and save RAM
yarn prisma db seed
yarn prisma generate # gen ts w/ generator, ex prisma-client-js provider

# migrate dev/reset will trigger seed unless `--skip-seed`
yarn prisma migrate dev --name init # a commit nammed "init"
```

### Enable Foreign Key

```prisma
generator client {
  previewFeatures = ["referentialIntegrity"]
}
datasource db {
  referentialIntegrity = "prisma"
}
```

## Tips

### Naming convention

modal name -> singular PascalCase -> User

### Formatter

```json
"[prisma]": {
  "editor.defaultFormatter": "Prisma.prisma"
}
```

### Field type modifier

1. Post[] -> many
2. String? -> optional

### CRUD

```
findUnique, findFirst, findMany
where, distinct, take 2, skip 1, orderBy,
```

## Foreign Keys

### one to one

```prisma
model User {
  id             String       @id
  userSettingsId String       @unique
  userSettings   UserSettings @relation(
    fields: [userSettingsId], // one-to-one -> ForeignKey userSettingsId created in this table
    references: [id],         // UserSettings id field
  )
}
model UserSettings {
  id String @id
  userId       String  @unique
  User         User?
}
```

### one to many

```prisma
model User {
  posts        Post[]
}
model Post {
  authorId  String
  author    User     @relation(fields: [authorId], references: [id]) // one-to-many -> ForeignKey authorId created in this table
}
```

### many to many

```prisma
model User {
  likedPosts   Post[]        @relation("LikedPosts")
}
model Post {
  likedBy   User[]   @relation("LikedPosts") // many-to-many -> create join table & 2 Foreign Keys for each table
}
```
