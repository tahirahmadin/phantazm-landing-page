import React, { useEffect, useState } from "react";
import Features from "./Features";
import SocialLinks from "./SocialLinks";
import Header from "./Header";
import { readCache, addDataIntoCache } from "./../../actions/cacheActions";
import { Dialog, Slide, Backdrop } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import RoadmapNew from "./RoadmapNew";
import PrimarySearchAppBar from "../../common/Appbar";
import Investors from "./Investors";
import UpcomingProducts from "./UpcomingProduct";

const useStyles = makeStyles((theme) => ({
  background: {
    overflowX: "hidden",
    background: `linear-gradient(
      rgba(0, 0, 0, 0.85),
      rgba(0, 0, 0, 0.81)
    ),
    url("https://img.freepik.com/premium-vector/network-connection-background_23-2148899874.jpg")
      no-repeat center center fixed`,
    backgroundSize: "cover",
    minHeight: "100vh",
  },
}));

export default function Home() {
  const classes = useStyles();

  return (
    <div>
      <PrimarySearchAppBar />
      <div className={classes.background}>
        <section id="header">
          <Header />
        </section>

        <section>
          <UpcomingProducts />
        </section>
        <section id="products">
          <Features />
        </section>

        <section id="roadmap">
          <RoadmapNew />
        </section>

        <section id="investors">
          <Investors />
        </section>

        <section>
          <SocialLinks />
        </section>
      </div>
    </div>
  );
}
