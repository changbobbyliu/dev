## Basic

- CPA (Content Preview API) token + `$preview: true` === CDA (Content Delivery API) token
- GraphiQL:

```sh
https://graphql.contentful.com/content/v1/spaces/{spaceID}/environments/master/explore?access_token={cpaToken}
```

- [Image API](https://www.contentful.com/developers/docs/references/images-api/#/reference/resizing-&-cropping/change-the-resizing-behavior/retrieve-an-image/console)

```sh
# image asset_id=40J9DqFo4v7EtP05hwMqma, unique_id=2e37f2618e9366ab7329c2c1f52e2949
# Media -> select one -> Copy Image Address
https://images.ctfassets.net/{spaceID}/40J9DqFo4v7EtP05hwMqma/2e37f2618e9366ab7329c2c1f52e2949/rubber_duck.jpg?w=100&h=120&fit=fill&f=top&fm=webp
```

- CMA (Content Management)

## References

- [Developer Intro](https://training.contentful.com/student/collection/979554/path/1374551/activity/1371481#/page/62472604f73ad20f6599ff9f)
