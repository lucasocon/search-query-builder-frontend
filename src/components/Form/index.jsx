import React, { useState } from "react";
import SearchQueryBuilder from "search-query-builder";

import FetchService from "../../services/fetch.service";
import Table from "../Table";

export default function BuilderForm() {
  const [searchResults, setSearchResults] = useState([]);

  const theme = {
    primaryColor: "purple",
    secondaryColor: "black",
    accentColor: "orange",
    lightestColor: "white",
    darkestColor: "black",
  };

  const uiConfig = {
    addRuleButton: {
      text: "Rule",
      className: "add-rule-btn",
      icon: "plus",
    },
    addGroupButton: {
      text: "Group",
      className: "add-group-btn",
      icon: "plus-circle",
    },
    buildButton: {
      text: "Find",
      className: "build-btn",
    },
    resetButton: {
      text: "Reset",
      className: "reset-btn",
    },
  };

  const mainConfig = {
    Skill: {
      operators: {
        type: "operator",
        items: [{ name: "equal" }, { name: "not equal" }],
      },
      skills: {
        type: "name",
        items: [{ name: "NodeJS" }, { name: "ReactJS" }],
      },
      yoe: {
        type: "experience",
        items: [{ name: 1 }, { name: 3 }, { name: 5 }],
      },
      seniority: {
        type: "seniority",
        items: [{ name: "Junior" }, { name: "Mid" }, { name: "Senior" }],
      },
    },
    Position: {
      operators: {
        type: "operator",
        items: [{ name: "equal" }, { name: "not equal" }],
      },
      positions: {
        type: "positions",
        items: [{ name: "Frontend Developer" }, { name: "Backend Developer" }],
      },
    },
  };

  const conditions = ["AND", "OR"];
  const minimalMode = false;
  const outputType = "json";
  const handleSubmit = async (builtQuery) => {
    try {
      const data = await FetchService.getEmployees(builtQuery);
      setSearchResults(data);
    } catch (error) {
      console.error("Something went wrong");
    }
  };

  return (
    <div>
      <SearchQueryBuilder
        mainConfig={mainConfig}
        uiConfig={uiConfig}
        theme={theme}
        minimalMode={minimalMode}
        conditions={conditions}
        defaultSelectedConditionIndex={0}
        outputType={outputType}
        onSubmitted={handleSubmit}
      />
      <Table results={searchResults} />
    </div>
  );
}
