# Agile Backend Starter Repo

Starter repo for my talk: [Agile Backend](https://docs.google.com/presentation/d/1AN8CsadjqtQQhGBnaiHVsVqjB_3_mQ29l7LpON1NSwc/edit?usp=sharing) for DevConPH 2021 (December).

## Project requirements

1. [Typescript](https://www.typescriptlang.org/)

2. [Node](https://nodejs.org/en/) / NPM or Yarn

3. [Docker](https://www.docker.com/), [docker-compose](https://docs.docker.com/compose/)

# Introduction to Hasura GraphQL Engine

Hasura has enables you to do the following:

* Focus on your business logic
* Avoid building CRUD
* Get authn, authz out of the box
* Be ready for microservice architecture, CQRS, eventing

## Installation

1. Run this locally with `docker-compose up -d`. Access `http://localhost:1104` to view the Hasura web console.

2. Destroy your local containers (including volumes) by running `docker-compose down -v`.

# Design

Some things that will make it easy to replicate the presentation.

## ERD

```
codes
  id: number
  code: string
  is_valid: boolean
```

## Hasura action definition

You can manually copy this to the hasura web console, or you can do `hasura metadata apply` using the [Hasura CLI](https://hasura.io/docs/latest/graphql/core/hasura-cli/index.html).

```gql
type Mutation {
  service_check_qr(
    code: String!
  ): SampleOutput
}
```

Type definition
```gql
type SampleOutput {
  is_valid: Boolean!
  message: String
}
```

Handler URL
```
http://rapidpass-handler:8080/api/v1/check-qr
```