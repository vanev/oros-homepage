const Text = ({ children }) => (
  <span className="Text">
    {children}

    <style jsx>{`
      .Text {
        position: absolute;
        top: 0;
        left: 0;
        display: block;
        margin: 0;
        font-family: "Shrikhand", cursive;
        font-size: 6vw;
        color: white;
        text-shadow: black 0.1em 0.1em 0;
        animation: textEntrance 1500ms ease 1000ms both;
      }
      @media (min-width: 426px) {
        .Text {
          font-size: 3vw;
        }
      }
      @media (min-width: 1025px) {
        .Text {
          font-size: 2.5vw;
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
  </span>
);

export default Text;
