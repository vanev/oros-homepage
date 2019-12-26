const Title = ({ children }) => (
  <h2 className="Title">
    {children}

    <style jsx>{`
      .Title {
        margin: 0;
        font-family: "Shrikhand", cursive;
        color: white;
        text-align: center;
      }
    `}</style>
  </h2>
);

export default Title;
