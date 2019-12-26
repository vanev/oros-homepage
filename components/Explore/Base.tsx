const Base = ({ children }) => (
  <div className="Base">
    {children}

    <style jsx>{`
      .Base {
        padding: 30px 5%;
        background-color: black;
      }

      .Title + .Links {
        margin-top: 30px;
      }
    `}</style>
  </div>
);

export default Base;
