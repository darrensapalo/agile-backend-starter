import axios, { AxiosResponse } from "axios";

/*
This is an example snippet - you should consider tailoring it
to your service.

Note: we only handle the first operation here
*/

export async function fetchGraphQL<Request, Response>(
  operationsDoc: string,
  operationName: string,
  variables: Record<string, any>
) {
  const path =
    process.env.HASURA_URL || "http://agile-backend-starter-hasura:8080";

  const url = `${path}/v1/graphql`;

  const data = JSON.stringify({
    query: operationsDoc,
    variables,
    operationName,
  });

  // Use admin secret to authenticate requests
  // https://hasura.io/blog/hasura-authentication-explained/
  const headers = {
    "x-hasura-admin-secret": "admin",
  };

  const response = await axios.post<Request, AxiosResponse<Response>>(url, data, {
    headers,
  });

  return response.data;
}

/**
 * Simply retrieves all codes.
 *
 * @returns a promise that returns an axios response.
 */
export function fetchGetCodes() {
  const operation = `
  query GetAllCodes {
    codes {
      id
      code
      is_valid
    }
  }
  `;

  type GetCodeResponse = {
    data: {
      codes: DBCode[]
    }
  }

  return fetchGraphQL<any, GetCodeResponse>(operation, "GetAllCodes", {});
}

export type CheckQRCodeRequest = {
  code: string;
};

export type CheckQRCodeResponsePayload = {
  is_valid: boolean
  message: string
}

// Code Resource
export type DBCode = {
  id: number;
  code: string;
  is_valid: boolean;
}