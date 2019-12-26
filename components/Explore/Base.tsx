const Base = ({ children }) => (
  <div className="Explore">
    {children}

    <style jsx>{`
      .Explore {
        padding: 30px 5%;
        background-color: black;
      }
    `}</style>

    <style jsx global>{`
      .Explore .Title + .Links {
        margin-top: 30px;
      }
    `}</style>
  </div>
);

export default Base;
