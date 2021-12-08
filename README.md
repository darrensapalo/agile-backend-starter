# Agile Backend Starter Repo

Starter repo for my talk: [Agile Backend](https://docs.google.com/presentation/d/1AN8CsadjqtQQhGBnaiHVsVqjB_3_mQ29l7LpON1NSwc/edit?usp=sharing) for DevConPH 2021 (December).

## Introduction to Hasura GraphQL Engine

Hasura has enables you to do the following:

* Focus on your business logic
* Avoid building CRUD
* Get authn, authz out of the box
* Be ready for microservice architecture, CQRS, eventing

# References

Some things that will make it easy to replicate the presentation.

## ERD

```
codes
  id: number
  code: string
  is_valid: boolean
```

## Hasura action definition

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