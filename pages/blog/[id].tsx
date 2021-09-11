import Link from "next/link";

const Blog = () => {
  return <div>
    <h2>Blog</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi laboriosam nulla quam repellat velit?
      Consequatur dignissimos fugiat id, minus
      natus nisi non nulla placeat porro, quo quos saepe tempore ut.</p>
    <Link href={'/'}>
      <a>Home</a>
    </Link>
  </div>
}

export default Blog;
