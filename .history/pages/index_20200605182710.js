import React from "react"
import Layout from "../components/layout"
import image from '../assets/images/campus.jpg'

const IndexPage = props => {
  return <Layout>
  <div>
  <img src={image} alt="" width='100%'/>
  </div>
  </Layout>
}

export default IndexPage
