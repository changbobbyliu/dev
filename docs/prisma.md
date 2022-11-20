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

## [Relations](https://www.prisma.io/docs/concepts/components/prisma-schema/relations)

### one to one

```prisma
model User {
  userSettingsId String       @unique
  userSettings   UserSettings @relation(
    fields: [userSettingsId], // one-to-one -> ForeignKey userSettingsId in this table
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

or

```prisma
model UserLikedPost {
  userId String
  postId Int
  user   User   @relation(fields: [userId], references: [id])
  post   Post   @relation(fields: [postId], references: [id])
  @@id([postId, userId]) // composed ID
}
model Post { likedBy UserLikedPost[] }
model User { likedPosts UserLikedPost[] }
```

## Referential actions / Cascade delete

```prisma
// del UserSettings when User is deleted
user User @relation(fields: [userId], references: [id], onDelete: Cascade)
```

## Annotation

### @@id / @id

```prisma
// Composite ID
// default name firstName_lastName, renamed to fullName
@@id([firstName, lastName], name: "fullName")
```

### @@unique

```
@@unique([A, B], map: "_LinkToUser_AB_unique)
```

### @@index

```
@@index([B], map: "_LinkeToUser_B_index")
```

### @@map / @map

```prisma
email String @map("commenter_email") // change default column name
@@map("_LinkToUser") // change default table name
```

## Indexes

### sort

```prisma
// @unique, @@unique, @@index, @id, @@id
xxx Int @unique(sort: Desc)
@@unique([unique_1(sort: Desc), unique_2])
```

### Hash

```prisma
// = and <> faster than default BTree
@@index([value], type: Hash)
```
