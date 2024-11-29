import { Form } from "@remix-run/react";
import React, { FC, ReactNode } from "react";
import { FormError } from "@/lib/types";
import LangLevelListBox from "./listbox/LangLevelListbox";

const GetArticlesForm: FC<{}> = function ({}) {
  return (
    <Form className="form" method="GET" action="getArticles">
      <LangLevelSelect />
    </Form>
  );
};

// TODO: get the error from action data
const LangLevelSelect: FC<{ error?: FormError }> = function ({ error }) {
  const id = React.useId();
  const messageId = id + "-message-level-select";

  return <LangLevelListBox />;
};

export default GetArticlesForm;
