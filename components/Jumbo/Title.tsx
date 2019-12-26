const Title = ({ children }) => (
  <h1 className="Title">
    {children}

    <style jsx>{`
      .Title {
        display: block;
        margin: 0;
        font-family: "Shrikhand", cursive;
        font-size: 30vw;
        line-height: 1.5em;
        color: white;
        text-shadow: black 0.1em 0.1em 0;
        transform: translate(-100px, 0);
        opacity: 0;
        animation: textEntrance 3000ms ease 1500ms forwards;
      }
      @media (min-width: 426px) {
        .Title {
          font-size: 20vw;
          line-height: 1.25em;
        }
      }
      @media (min-width: 1025px) {
        .Title {
          font-size: 15vw;
          line-height: 1.3em;
        }
      }

      @keyframes textEntrance {
        0% {
          transform: translate(-100px, 0);
          opacity: 0;
        }
        100% {
          transform: translate(0, 0);
          opacity: 1;
        }
      }
    `}</style>
  </h1>
);

export default Title;
