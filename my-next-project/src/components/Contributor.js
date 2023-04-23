export default props => {

  const {
    name,
    githubProfileUrl
  } = props;
  
  return (
    <>
    <span className="text-lg">
      {!githubProfileUrl && name}
      {!!githubProfileUrl && <a href={githubProfileUrl}>
        {name}
      </a>}
    </span>
    </>
  )
}
