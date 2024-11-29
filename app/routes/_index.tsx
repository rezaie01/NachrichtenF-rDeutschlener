import type { MetaFunction, LinksFunction } from "@remix-run/node";
import Header from "~/components/header/Header";
import Main from "~/components/Main";

import mainStyles from "~/components/Main.css";
import MainCard from "~/components/cards/MainCard";

export const links: LinksFunction = () => {
    return [{ rel: "stylesheet", href: mainStyles }];
  };

export const meta: MetaFunction = () => {
  return [
    { title: "Nachrichten für Deutschlerner" },
    { name: "description", content: "Hier können Sie KI-generiete Nachrichtenartikel, die für Ihr Deutsch Neveau geeignet sind, finden." },
  ];
};

export default function Index() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <Main>
        <MainCard />  
      </Main>

    </div>
  );
}




