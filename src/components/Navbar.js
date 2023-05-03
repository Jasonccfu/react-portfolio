function Nav() {
  const path = window.location.pathname;
  return (
    <nav>
      <h1>Jason Chen</h1>
      <ul>
        <CustomLink to='/'>About me</CustomLink>
        <CustomLink to='/portfolio'>Portfolio</CustomLink>
        <CustomLink to='/contact'>Contact</CustomLink>
        <CustomLink to='/resume'>Resume</CustomLink>
      </ul>
    </nav>
  );
}

export default Nav;
