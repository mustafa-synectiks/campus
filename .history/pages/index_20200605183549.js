import React from "react"
import Layout from "../components/layout"
import image from '../assets/images/campus.jpg'
import '../pages/index.css'

const IndexPage = props => {
  return <Layout>
  <div className="container">
  <h1>Website Under Construction</h1>
  <img src={image} alt="" width='100%'/>
  </div>
  </Layout>
}

export default IndexPage
