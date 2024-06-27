import React, { useState , useEffect} from "react";
import SearchQueryBuilder from "search-query-builder";

import FetchService from "../../services/fetch.service";
import Table from "../Table";

export default function BuilderForm() {
  const [skillsOptions, setSkillsOptions] = useState([]);
  const [experienceOptions, setExperienceOptions] = useState([]);
  const [seniorityOptions, setSeniorityOptions] = useState([]);
  const [positionOptions, setPositionOptions] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  useEffect( () => {
    fetchSearchOptions();
  }, []);

  const fetchSearchOptions = async () => {
    const { skills, experience, seniorities, positions} = await FetchService.getOptions();
    
    setSkillsOptions(skills);
    setExperienceOptions(experience);
    setSeniorityOptions(seniorities);
    setPositionOptions(positions);
  }
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
        items: skillsOptions.map((skill) => ({ name: skill })),
      },
      yoe: {
        type: "experience",
        items: experienceOptions.map((exp) => ({ name: exp })),
      },
      seniority: {
        type: "seniority",
        items: seniorityOptions.map((seniority) => ({ name: seniority })),
      },
    },
    Position: {
      operators: {
        type: "operator",
        items: [{ name: "equal" }, { name: "not equal" }],
      },
      positions: {
        type: "name",
        items: positionOptions.map((position) => ({ name: position })),
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
