// Write your JS code here
import BlogItem from '../BlogItem'
import './index.css'

const BlogList = props => {
  const {blogsList} = props
  return (
    <div>
      {blogsList.map(each => (
        <BlogItem key={each.id} each={each} />
      ))}
    </div>
  )
}

export default BlogList
