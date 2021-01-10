import { gql } from '@apollo/client';
export interface User {
    verifyAccount: {
        user_id: string,
        first_name: string,
        last_name: string,
        creation_date: string,
        photo: string
    }
   
}

export interface VerifyAccountQuery {
    account: string,
    password: string
}

export const VERIFY_ACCOUNT_QUERY = gql `
    query GetVerifyAccount($account: String!, $password: String!) {
        verifyAccount(account: $account, password: $password) {
            user_id,
            first_name,
            last_name,
            creation_date,
            photo
        }
        
    }
`