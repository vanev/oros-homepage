import classnames from "classnames";

interface Props {
  href: string | null;
  backgroundImage: string;
  label: string;
}

const Link = (props: Props) => (
  <a
    className={classnames({ Link: true, _disabled: !props.href })}
    href={props.href}
  >
    <span className="Link--text">{props.label}</span>

    <style jsx>{`
      .Link {
        display: block;
        box-sizing: border-box;
        padding: 50px 20px 20px;
        width: 100%;
        background-image: url(${props.backgroundImage});
        background-position: center center;
        background-repeat: no-repeat;
        background-size: cover;
        filter: contrast(1.4) saturate(1.8) sepia(0.6);
        transition: filter 250ms ease;
      }
      @media (min-width: 426px) {
        .Link {
          padding: 100px 20px 40px;
        }
      }
      @media (min-width: 769px) {
        .Link {
          width: 50%;
        }
      }
      .Link:hover {
        filter: contrast(1) saturate(1) sepia(0);
      }
      .Link._disabled {
        position: relative;
        cursor: not-allowed;
        overflow: hidden;
      }
      .Link._disabled:after {
        content: "Coming Soon!";
        position: absolute;
        top: 0;
        left: 0;
        z-index: 3;
        display: block;
        width: 100%;
        padding: 1%;
        background-color: red;
        font-family: "Montserrat", sans-serif;
        font-size: 1em;
        line-height: 1.5em;
        color: white;
        transform: translateY(-100%);
        transition: transform 250ms ease;
      }
      .Link._disabled:hover:after {
        transform: translateY(0);
      }
      .Link._disabled:before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        z-index: 2;
        display: block;
        width: 100%;
        height: 100%;
        filter: saturate(0);
      }

      .Link--text {
        padding: 4px;
        background-color: black;
        font-family: "Montserrat", sans-serif;
        font-size: 1em;
        line-height: 1.5em;
        color: white;
        text-decoration: none;
      }
    `}</style>
  </a>
);

export default Link;
