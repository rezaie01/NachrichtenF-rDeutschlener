import GetArticlesForm from "../forms/GetArticlesForm";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "./Card";

export default function MainCard() {
    return <div className="">

    <Card className="shadow-md mx-1" style={{borderRadius: "1.5rem"}}>
      <CardHeader className="space-y-1">
        <CardTitle>News in Germany</CardTitle>
        <CardDescription className="text-gray-600 text-xs">Get the latest news Articles in Germany written on your level of German language proficiency</CardDescription>
      </CardHeader>
      <CardContent className="text-sm">
        <select>
          <option>Hi</option>
        </select>
        <GetArticlesForm/>
      </CardContent>
      <CardFooter>
        <button type="button" className="btn">Zur Nachrichten</button>
      </CardFooter>
    </Card>
    </div>
  }