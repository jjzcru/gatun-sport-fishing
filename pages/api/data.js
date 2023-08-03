import path from "path";
import { promises as fs } from "fs";

export default async function handler(req, res) {
  //Find the absolute path of the json directory
  const lang = req.query.lang || "en";
  const filePath = path.join(process.cwd(), "data", "locale", `${lang}.json`);
  //Read the json data file data.json
  const fileContents = await fs.readFile(filePath, "utf8");
  //Return the content of the data file in json format
  res.status(200).json(JSON.parse(fileContents));
}
