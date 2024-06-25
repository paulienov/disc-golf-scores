const Layout = ({ children }) => {
    return (
      <div>
        <header>
          <h1>Disc Golf Score Tracker</h1>
        </header>
        <main>{children}</main>
        <footer>
          <p>Footer Content</p>
        </footer>
      </div>
    );
  };
  
  export default Layout;