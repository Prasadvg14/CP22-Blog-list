// Write your JS code here
import './index.css'

const BlogItem = props => {
  const {each} = props
  return (
    <div className="item">
      <div>
        <h2>{each.title}</h2>
        <p className="p">{each.description}</p>
      </div>
      <p className="p">{each.publishedDate}</p>
    </div>
  )
}

export default BlogItem
