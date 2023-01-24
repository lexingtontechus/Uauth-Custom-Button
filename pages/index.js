import Link from "next/link";
import UAuth from "@uauth/js";
import { useEffect, useState } from "react";
import { Container, Row, Text, Button } from "@nextui-org/react";
//import { useWeb3React } from "@web3-react/core";

const uauth = new UAuth({
  clientID: "814a3502-e259-4972-9e2f-e0d5fe9482d8",
  redirectUri: "https://localhost:3000",
  scope: "openid wallet email profile:optional social:optional",
});

export default function IndexPage() {
  const login = async () => {
    try {
      const authorization = await uauth.loginWithPopup();
      console.log(authorization);
      window.alert(authorization.accessToken);
    } catch (error) {
      console.log("Error", error);
    }
  };
  const logout = async () => {
    try {
      const authorization = await uauth.Disconnect();
      console.log(authorization);
      window.alert(authorization.accessToken);
    } catch (error) {
      console.log("Error", error);
    }
  };
  return (
    <Container>
      <Row justify="center">
        <Text h1>Unstoppable Custom Login</Text>
      </Row>
      <Row justify="center">
        <Button.Group>
          <Button onClick={login}>Connect</Button>

          <Button onClick={logout}>Disconnect</Button>
        </Button.Group>
      </Row>
    </Container>
  );
}
