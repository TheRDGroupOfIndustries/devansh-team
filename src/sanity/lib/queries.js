import { groq } from 'next-sanity'

export const portfolioQuery = groq`
  *[_type == "portfolioItem"] | order(orderRank asc, _createdAt desc) {
    _id,
    title,
    slug,
    description,
    category,
    mainImage,
    gallery,
    tags,
    featured
  }
`

export const portfolioByIdQuery = groq`
  *[_type == "portfolioItem" && _id == $id][0] {
    _id,
    title,
    slug,
    description,
    category,
    mainImage,
    gallery,
    tags,
    featured
  }
`

export const portfolioByCategoryQuery = groq`
  *[_type == "portfolioItem" && category == $category] | order(orderRank asc, _createdAt desc) {
    _id,
    title,
    slug,
    description,
    category,
    mainImage,
    gallery,
    tags,
    featured
  }
`

export const featuredPortfolioQuery = groq`
  *[_type == "portfolioItem" && featured == true] | order(orderRank asc, _createdAt desc) {
    _id,
    title,
    slug,
    description,
    category,
    mainImage,
    gallery,
    tags,
    featured
  }
`

export const servicesQuery = groq`
  *[_type == "service"] | order(orderRank asc, _createdAt desc) {
    _id,
    title,
    slug,
    description,
    features,
    image,
    icon,
    startingPrice,
    priceRange,
    duration,
    category,
    featured
  }
`

export const featuredServicesQuery = groq`
  *[_type == "service" && featured == true] | order(orderRank asc, _createdAt desc) {
    _id,
    title,
    slug,
    description,
    features,
    image,
    icon,
    startingPrice,
    priceRange,
    duration,
    category,
    featured
  }
`

export const testimonialsQuery = groq`
  *[_type == "testimonial"] | order(orderRank asc, _createdAt desc) {
    _id,
    clientName,
    clientTitle,
    clientImage,
    testimonial,
    rating,
    serviceType,
    featured
  }
`

export const featuredTestimonialsQuery = groq`
  *[_type == "testimonial" && featured == true] | order(orderRank asc, _createdAt desc) {
    _id,
    clientName,
    clientTitle,
    clientImage,
    testimonial,
    rating,
    serviceType,
    featured
  }
`