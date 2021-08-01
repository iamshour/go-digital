import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage } from "gatsby-plugin-image"
import "../styles/projects.scss"
import { Carousel } from 'react-bootstrap'

const ProjCarousel3 = ( { alt, carouselClass, fadeSlide, controls, touch, indicators, interval } ) => {

    const data = useStaticQuery(graphql`
        query {
            gallery: allFile(
            filter: {relativeDirectory: {eq: "proj-3"}}
            sort: {fields: base, order: ASC}
            ) {
                edges {
                    node {
                        id
                        base
                        publicURL
                        childImageSharp {
                            gatsbyImageData(placeholder: BLURRED, webpOptions: {quality: 50})
                        }
                    }
                }
            }
        }
    `)

    return (
        <div className={ carouselClass }>
            <Carousel fade={fadeSlide} controls={controls} touch={touch} indicators={indicators}>
                {data.gallery.edges.map(({node}) => (
                    <Carousel.Item key={node.id} interval = {interval}>
                        <GatsbyImage 
                            image={node.childImageSharp.gatsbyImageData}
                            alt={alt}
                        />
                    </Carousel.Item>
                ))}
            </Carousel>
        </div>
    )
}

export default ProjCarousel3
