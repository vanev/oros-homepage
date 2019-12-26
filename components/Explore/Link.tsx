import classnames from "classnames";

interface EnabledProps {
  disabled: false;
  href: string;
  backgroundImage: string;
  label: string;
}

interface DisabledProps {
  disabled: true;
  href: null;
  backgroundImage: string;
  label: string;
}

type Props = EnabledProps | DisabledProps;

const Link = (props: Props) => (
  <a
    className={classnames({ Link: true, _disabled: props.disabled })}
    href={props.disabled ? "" : props.href}
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
      .Link:hover {
        filter: contrast(1) saturate(1) sepia(0);
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
