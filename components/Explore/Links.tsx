const Links = ({ children }) => (
  <div className="Links">
    {children}

    <style jsx>{`
      .Links {
        display: flex;
        flex-wrap: wrap;
        max-width: 1440px;
        margin-left: auto;
        margin-right: auto;
      }
    `}</style>
  </div>
);

export default Links;
