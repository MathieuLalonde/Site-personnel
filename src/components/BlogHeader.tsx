interface Props {
  children?: JSX.Element | JSX.Element[];
  photo?: String;
};

const BlogHeader = ({ photo = "../test.jpg", children }: Props) => {
  return (
    <div className='blog-header'
      style={{
        backgroundImage: `
            linear-gradient(
              rgba(0, 0, 0, 0.5),
              rgba(0, 0, 0, 0.6) 25%,
              rgba(0, 0, 0) ),
            url(/${photo})`,
        backgroundPosition: '50% 45%'
      }}>
      <div className='blog-header__container'>
        {children}
      </div>
    </div>
  );
};

export default BlogHeader