const Base = ({ children }) => (
  <div className="Base">
    <div className="Base--wrapper">{children}</div>

    <style jsx>{`
      .Base {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 75vh;
        background-image: url(background.jpg);
        background-color: black;
        background-position: center center;
        background-repeat: no-repeat;
        background-size: cover;
        animation: backgroundEntrance 1000ms ease 3500ms both;
      }
      @media (min-width: 426px) {
        .Base {
          height: 95vh;
        }
      }
      @keyframes backgroundEntrance {
        0% {
          filter: contrast(1.4) saturate(1.8) sepia(0.6);
        }
        100% {
          filter: contrast(1) saturate(1) sepia(0);
        }
      }

      .Base--wrapper {
        position: relative;
        display: block;
      }
    `}</style>
  </div>
);

export default Base;
