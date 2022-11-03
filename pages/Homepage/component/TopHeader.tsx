import React, { useState } from "react";
import {  createStyles } from "@mantine/core";
import SwitchToggle from "./SwitchToggle";
import SearchAuto from "./SearchAuto";
import { IconShoppingCart } from '@tabler/icons';

const useStyles = createStyles((theme, _params, getRef) => ({
  toogle: {
    margin: "0",
  },
}));
export default function () {
  const { classes } = useStyles();
  return (
    <div className="top-header">
      <div className="content-top-header">
        <div className="Logo-top-header">
          <h4>
            <img className="img-logo" src="https://chuanperfume.com/wp-content/uploads/logo-chuan-perfume-light.png" alt="asd" />
          </h4>
        </div>
        <div className="Search-Top-side">

        <SearchAuto/>
        </div>
        <div className="cart-header">
          <div className="cart-header-btn">
            <span className="cart-header-btn-txt">
              Giỏ hàng <IconShoppingCart/>
            </span>
          </div>
        </div>
        <div className="dark-theme-btn">
          <SwitchToggle />
        </div>
      </div>
    </div>
  );
}
