import React, { Fragment } from "react";
import { Jumbo, Explore } from "../components";

const Hero = () => (
  <Jumbo.Base>
    <Jumbo.Text>Welcome to</Jumbo.Text>
    <Jumbo.Title>Oros</Jumbo.Title>
  </Jumbo.Base>
);

const Links = () => (
  <Explore.Base>
    <Explore.Title>Explore the World</Explore.Title>
    <Explore.Links>
      <Explore.Link
        disabled={true}
        href={null}
        backgroundImage="visit-legate.jpg"
        label="Legate Department of Tourism"
      />

      <Explore.Link
        disabled={true}
        href={null}
        backgroundImage="library-of-moralon.jpg"
        label="The Library of Moralon"
      />

      <Explore.Link
        disabled={true}
        href={null}
        backgroundImage="the-irongate-times.jpg"
        label="The Irongate Times"
      />

      <Explore.Link
        disabled={true}
        href={null}
        backgroundImage="the-hammer-and-tongs.png"
        label="The Hammer & Tongs"
      />
    </Explore.Links>
  </Explore.Base>
);

const Home = () => (
  <Fragment>
    <Hero />
    <Links />

    <style jsx global>{`
      body {
        padding: 0;
        width: 100%;
        height: 100%;
        margin: 0;
      }
      a {
        text-decoration: none;
      }
    `}</style>
  </Fragment>
);

export default Home;
