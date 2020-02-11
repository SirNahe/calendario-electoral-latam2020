import React from 'react'
import { Flags } from './Flags'
import { Query } from 'react-apollo'
import { gql } from 'apollo-boost'

const GET_FLAGS = gql`
  query getFlags {
    flags {
      id
      title
      month
      type
      src
      path
    }
  }
`

const renderProp = ({ loading, error, data }) => {
  if (loading) return <p>Loading...</p>
  if (error) return <p>Network error: Failed to fetch</p>

  return <Flags {...data} />
}

export const FlagsContainer = () => (
  <Query query={GET_FLAGS}>{renderProp}</Query>
)
