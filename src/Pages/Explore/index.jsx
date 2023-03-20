import React from 'react'
import Layout from '../../Layout'
import * as Comps from './Components'

function Explore() {
  return (
    <Layout>
      <Comps.Hero />
      <Comps.CampCardList />
    </Layout>
  )
}

export default Explore