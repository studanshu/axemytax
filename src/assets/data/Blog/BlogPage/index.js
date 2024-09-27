import fs from "fs";
import path from "path";
import { BlogSections } from "../blogSections.jsx";
import { DefaultSubscribeJson } from "./DefaultSubscribeJson.js";

const BlogSectionsJson = BlogSections.map((section) => {
  const folderPath = path.join("./", section);
  const subFolders = fs.readdirSync(folderPath);
  const subSections = subFolders.map((subFolder) => {
    const subFolderPath = path.join(folderPath, subFolder);
    const files = fs.readdirSync(subFolderPath);
    const subSection = files.map((file) => {
      const filePath = path.join(subFolderPath, file);
      const fileContent = fs.readFileSync(filePath, "utf8");
      return JSON.parse(fileContent);
    });
    return subSection;
  });
  return subSections;
});

const JsonData = {
  Subscribe: DefaultSubscribeJson,
  Taxation: BlogSectionsJson[0],
  Audit: BlogSectionsJson[1],
  CompanyLaw: BlogSectionsJson[2],
  FEMA: BlogSectionsJson[3],
  Accounting: BlogSectionsJson[4],
  LatestNews: BlogSectionsJson[5],
};

export default JsonData;
